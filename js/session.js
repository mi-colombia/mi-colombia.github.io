/* Mi Colombia — séance (leçon, mots, quiz, dialogue, bilan) et révisions */
(function () {
  'use strict';
  var MC = window.MC, esc = MC.esc, I = MC.icon;

  /* ---------- Démarrage ---------- */
  MC.startSeance = function (pi, si) {
    var s = MC.seanceAt(pi, si);
    if (!s || !MC.isUnlocked(s)) { MC.go('parcours'); return false; }
    MC.sess = {
      s: s, steps: s.test ? ['quiz', 'dialogue', 'end'] : ['lesson', 'words', 'quiz', 'dialogue', 'end'],
      stepI: 0, start: Date.now(), quiz: null, dlg: null, result: null
    };
    MC.sess.quiz = { qs: s.test ? buildTest(s) : buildQuiz(s), i: 0, answered: null, good: 0, order: [] };
    MC.sess.dlg = newDialogue(s);
    return true;
  };
  function step() { return MC.sess.steps[MC.sess.stepI]; }
  MC.nextStep = function () {
    var S = MC.sess;
    S.stepI = Math.min(S.steps.length - 1, S.stepI + 1);
    if (step() === 'dialogue') startDialogue();
    if (step() === 'end' && !S.result) finish();
    window.scrollTo(0, 0);
    MC.route();
  };

  function topbar() {
    var S = MC.sess, st = step();
    var seg = S.s.test ? { quiz: 1, dialogue: 2, end: 3 }[st] : { lesson: 0, words: 0, quiz: 1, dialogue: 2, end: 3 }[st];
    var fill = [0, 0, 0].map(function (_, i) {
      if (i < seg) return 100;
      if (i > seg) return 0;
      if (st === 'lesson') return 30; if (st === 'words') return 70;
      if (st === 'quiz') return Math.round(100 * S.quiz.i / S.quiz.qs.length);
      if (st === 'dialogue') return Math.round(100 * S.dlg.turn / S.dlg.d.turns.length);
      return 100;
    });
    return '<div class="topbar"><button class="icon-btn plain" data-act="quit-seance" aria-label="Quitter la séance">' + I('x') + '</button>' +
      '<div class="segs">' + fill.map(function (f) { return '<div><div style="width:' + f + '%"></div></div>'; }).join('') + '</div>' +
      '<span class="timer" id="timer">0:00</span></div>';
  }
  MC.tickTimer = function () {
    var el = document.getElementById('timer');
    if (!el || !MC.sess) return;
    var sec = Math.floor((Date.now() - MC.sess.start) / 1000);
    el.textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  };

  MC.screens.seance = function () {
    var S = MC.sess;
    if (!S) return '';
    var st = step();
    var body = st === 'lesson' ? lessonView() : st === 'words' ? wordsView() : st === 'quiz' ? quizView() : st === 'dialogue' ? dialogueView() : endView();
    return '<div class="screen full">' + (st !== 'end' ? topbar() : '') + body + '</div>';
  };

  /* ---------- Leçon ---------- */
  function noteHtml(n) {
    var tag = n[0] === 'b' ? '<span class="pill b sm">Rolo</span>' : n[0] === 'c' ? '<span class="pill c sm">Costeño</span>' : '<span class="pill sm" style="background:#fff;color:var(--ink2)">Info</span>';
    return '<div class="note ' + n[0] + '">' + tag + '<span>' + esc(n[1]) + '</span></div>';
  }
  function lessonView() {
    var s = MC.sess.s, l = s.l, pal = MC.PALIERS[s.pi];
    var html = '<span class="kicker">Leçon · Palier ' + (s.pi + 1) + ' ' + esc(pal.name) + ' · séance ' + (s.si + 1) + '</span>' +
      '<h1 class="lesson-title">' + esc(s.t) + '</h1><p class="intro">' + esc(l.intro) + '</p>' +
      '<div class="card col" style="gap:4px">' + l.ex.map(function (e) {
        return '<div class="ex"><button class="icon-btn" data-say="' + esc(e[0]) + '" aria-label="Écouter">' + I('speaker', 's') + '</button>' +
          '<div class="col" style="gap:2px"><span class="es">' + esc(e[0]) + '</span><span class="fr">' + esc(e[1]) + '</span></div></div>';
      }).join('') + '</div>';
    if (l.conj) {
      var verb = MC.findVerb(l.conj[0]), forms = MC.conjugate(verb, l.conj[1]);
      var t = MC.TENSES.filter(function (x) { return x.id === l.conj[1]; })[0];
      html += '<div class="col"><div class="between"><span class="label">' + esc(verb.inf) + ' · ' + t.fr + '</span>' +
        '<button class="icon-btn sm" data-say="' + esc(forms.map(function (f, i) { return MC.PERSONS_SHORT[i] + ' ' + f.full; }).join(', ')) + '" aria-label="Écouter la conjugaison">' + I('speaker', 's') + '</button></div>' +
        '<div class="conj-mini">' + forms.map(function (f, i) {
          return '<div><b>' + esc(f.full) + '</b><span>' + MC.PERSONS[i] + '</span></div>';
        }).join('') + '</div></div>';
    }
    if (l.notes && l.notes.length) html += '<div class="col">' + l.notes.map(noteHtml).join('') + '</div>';
    return html + '<div class="foot"><button class="btn primary" style="width:100%" data-act="next-step">Continuer</button></div>';
  }

  /* ---------- Nouveaux mots ---------- */
  function wordsView() {
    var s = MC.sess.s, e = MC.LEXBYID[s.exprId];
    var ws = s.words.map(function (id) { return MC.LEXBYID[id]; }).filter(Boolean);
    return '<span class="kicker">Nouveaux mots · ' + ws.length + '</span><h1 class="lesson-title">À retenir aujourd’hui</h1>' +
      '<p class="intro">Écoute chaque mot et répète-le à voix haute. Ils arrivent ensuite dans le quiz et dans tes révisions.</p>' +
      '<div class="list">' + ws.map(function (w) {
        return '<div class="word-row"><button class="icon-btn sm" data-say="' + esc(w.es) + '" aria-label="Écouter">' + I('speaker', 's') + '</button>' +
          '<div class="grow col" style="gap:2px"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="es">' + esc(w.es) + '</span>' + MC.regPill(w.reg, true) + '</div><span class="fr">' + esc(w.fr) + '</span></div></div>';
      }).join('') + '</div>' +
      '<div class="card col" style="background:var(--sun-l);border-color:#F5E08A"><span class="label" style="color:var(--sun-t)">Expression du jour</span>' +
      '<div class="between"><span class="expr-title">' + esc(e.es) + '</span><button class="icon-btn" data-say="' + esc(e.es) + '" style="background:#fff" aria-label="Écouter">' + I('speaker') + '</button></div>' +
      '<b style="font-size:15px">' + esc(e.fr) + '</b><span style="font-size:14px;color:var(--ink2)">' + esc(e.ctx) + '</span>' +
      '<button class="row" data-say="' + esc(e.ex) + '" style="background:none;border:none;padding:0;text-align:left;gap:8px">' + I('speaker', 's') +
      '<span style="font-size:14px;font-style:italic">« ' + esc(e.ex) + ' »<br><span style="font-style:normal;color:var(--ink2)">' + esc(e.exFr) + '</span></span></button></div>' +
      '<div class="foot"><button class="btn primary" style="width:100%" data-act="next-step">Passer au quiz</button></div>';
  }

  /* ---------- Fabrication du quiz ---------- */
  function W(id) { return MC.LEXBYID[id]; }
  function distractors(w, field, n) {
    var same = MC.LEX.filter(function (x) { return x.cat === w.cat && x.id !== w.id && MC.norm(x[field]) !== MC.norm(w[field]); });
    var sameType = same.filter(function (x) { return x.type === w.type; });
    var pool = sameType.length >= n ? sameType : same;
    if (pool.length < n) pool = pool.concat(MC.LEX.filter(function (x) { return x.cat !== w.cat && x.cat !== 'expr' && x.type === w.type; }));
    var out = [], seen = {}; seen[MC.norm(w[field])] = 1;
    MC.shuffle(pool).forEach(function (x) { var k = MC.norm(x[field]); if (out.length < n && !seen[k]) { seen[k] = 1; out.push(x[field]); } });
    return out;
  }
  function mc(correct, wrong) {
    return MC.shuffle([{ label: correct, ok: true }].concat(wrong.map(function (x) { return { label: x, ok: false }; })));
  }
  function vocabQ(id, type) {
    var w = W(id); if (!w) return null;
    if (w.cat === 'expr') return exprQ(id);
    if (type === 'fr2es') return { type: 'fr2es', kicker: 'Vocabulaire', prompt: 'Comment dit-on « ' + w.fr + ' » ?', options: mc(w.es, distractors(w, 'es', 3)), wordId: id, explain: w.es + ' = ' + w.fr, sayAfter: w.es };
    if (type === 'listen') return { type: 'listen', kicker: 'Écoute', prompt: 'Écoute et choisis la traduction', audio: w.es, options: mc(w.fr, distractors(w, 'fr', 3)), wordId: id, explain: w.es + ' = ' + w.fr };
    return { type: 'es2fr', kicker: 'Vocabulaire', prompt: 'Que veut dire « ' + w.es + ' » ?', audio: w.es, reg: w.reg, options: mc(w.fr, distractors(w, 'fr', 3)), wordId: id, explain: w.es + ' = ' + w.fr };
  }
  function exprQ(id) {
    var e = W(id); if (!e) return null;
    var others = MC.shuffle(MC.LEX.filter(function (x) { return x.cat === 'expr' && x.id !== id; })).slice(0, 3).map(function (x) { return x.fr; });
    return { type: 'expr', kicker: 'Expression', prompt: 'Que veut dire « ' + e.es + ' » ?', audio: e.es, reg: e.reg, options: mc(e.fr, others), wordId: id, explain: e.es + ' = ' + e.fr + '. ' + e.ctx };
  }
  var TENSES_BY_PALIER = [['pres'], ['pres'], ['pres', 'pret'], ['pres', 'pret', 'fut'], ['pres', 'pret', 'imp', 'fut']];
  var VERBS_BY_PALIER = [
    ['ser', 'estar', 'tener', 'hablar', 'trabajar', 'viajar', 'necesitar', 'esperar'],
    ['ir', 'comer', 'vivir', 'poder', 'querer', 'pensar', 'volver', 'pedir', 'salir', 'hacer', 'tomar', 'caminar', 'entender'],
    ['hablar', 'comer', 'beber', 'pedir', 'ir', 'ser', 'tener', 'estar', 'hacer', 'comprar', 'vender', 'preferir'],
    ['bailar', 'decir', 'venir', 'poder', 'querer', 'saber', 'salir', 'tomar', 'dormir', 'volver', 'ir', 'hacer'],
    ['vivir', 'trabajar', 'ser', 'ir', 'ver', 'tener', 'contar', 'recibir', 'decidir', 'jugar', 'viajar', 'hablar']
  ];
  function conjQ(inf, tense) {
    var verb = MC.findVerb(inf);
    if (!verb) return null;
    var forms = MC.conjugate(verb, tense);
    var pi = Math.floor(Math.random() * 5);
    var correct = forms[pi].full;
    var wrong = [], seen = {}; seen[correct] = 1;
    MC.shuffle([0, 1, 2, 3, 4]).forEach(function (i) { if (wrong.length < 3 && !seen[forms[i].full]) { seen[forms[i].full] = 1; wrong.push(forms[i].full); } });
    if (wrong.length < 3) MC.TENSES.forEach(function (t) {
      var f = MC.conjugate(verb, t.id)[pi].full; if (wrong.length < 3 && !seen[f]) { seen[f] = 1; wrong.push(f); }
    });
    var t = MC.TENSES.filter(function (x) { return x.id === tense; })[0];
    return { type: 'conj', kicker: 'Conjugaison · ' + t.fr, prompt: MC.PERSONS[pi] + ' … (' + verb.inf + ')', sub: verb.fr.replace(/ ·.*/, '') + ' · ' + t.fr.toLowerCase(), options: mc(correct, wrong), explain: MC.PERSONS_SHORT[pi] + ' ' + correct, sayAfter: correct };
  }
  function randomConj(pi) {
    var verbs = VERBS_BY_PALIER[pi].filter(function (v) { return MC.findVerb(v); });
    var tenses = TENSES_BY_PALIER[pi];
    return conjQ(verbs[Math.floor(Math.random() * verbs.length)], tenses[Math.floor(Math.random() * tenses.length)]);
  }
  function orderQ(pi, si) {
    var exs = [];
    MC.PALIERS[pi].seances.forEach(function (s, i) {
      if (s.l && (si == null || i <= si)) s.l.ex.forEach(function (e) {
        var toks = e[0].replace(/—/g, '').split(/\s+/).filter(Boolean);
        if (toks.length >= 3 && toks.length <= 7 && e[0].indexOf('—') < 0) exs.push([e[0], e[1], i === si]);
      });
    });
    if (!exs.length) return null;
    var cur = exs.filter(function (e) { return e[2]; });
    var pool = cur.length && Math.random() < 0.7 ? cur : exs;
    var e = pool[Math.floor(Math.random() * pool.length)];
    var toks = e[0].split(/\s+/);
    var tiles = MC.shuffle(toks.map(function (t, i) { return { t: t, i: i }; }));
    if (tiles.map(function (x) { return x.t; }).join(' ') === e[0]) tiles.reverse();
    return { type: 'order', kicker: 'Remets dans l’ordre', prompt: e[1], answer: e[0], tiles: tiles, explain: e[0], sayAfter: e[0] };
  }
  function buildQuiz(s) {
    var qs = [];
    var news = MC.shuffle(s.words.filter(W));
    var types = ['es2fr', 'fr2es', 'listen', 'fr2es'];
    news.slice(0, 4).forEach(function (id, i) { qs.push(vocabQ(id, types[i])); });
    if (s.l.conj) { qs.push(conjQ(s.l.conj[0], s.l.conj[1])); qs.push(conjQ(s.l.conj[0], s.l.conj[1])); }
    else { qs.push(randomConj(s.pi)); qs.push(randomConj(s.pi)); }
    qs.push(exprQ(s.exprId));
    qs.push(orderQ(s.pi, s.si));
    // révisions : mots déjà appris (en priorité ceux à revoir), sinon les autres nouveaux mots
    var learned = MC.learnedWords().filter(function (id) { return s.words.indexOf(id) < 0 && MC.LEXBYID[id].cat !== 'mine'; });
    learned.sort(function (a, b) { return MC.state.cards[a].box - MC.state.cards[b].box; });
    var rev = learned.slice(0, 6);
    rev = MC.shuffle(rev).slice(0, 2);
    if (rev.length < 2) rev = rev.concat(news.slice(4, 4 + 2 - rev.length));
    rev.forEach(function (id) { qs.push(vocabQ(id, Math.random() < 0.5 ? 'es2fr' : 'fr2es')); });
    qs = qs.filter(Boolean);
    var order = qs.filter(function (q) { return q.type === 'order'; });
    return MC.shuffle(qs.filter(function (q) { return q.type !== 'order'; })).concat(order);
  }
  function buildTest(s) {
    var pal = MC.PALIERS[s.pi], qs = [];
    var ids = MC.shuffle(MC.wordsOfPalier(s.pi));
    var types = ['es2fr', 'fr2es', 'listen'];
    ids.slice(0, 10).forEach(function (id, i) { qs.push(vocabQ(id, types[i % 3])); });
    var conjs = pal.seances.filter(function (x) { return x.l && x.l.conj; }).map(function (x) { return x.l.conj; });
    for (var i = 0; i < 5; i++) {
      if (conjs.length && i < 3) { var c = conjs[Math.floor(Math.random() * conjs.length)]; qs.push(conjQ(c[0], c[1])); }
      else qs.push(randomConj(s.pi));
    }
    MC.shuffle(pal.seances.slice(0, 13)).slice(0, 3).forEach(function (x) { qs.push(exprQ(x.exprId)); });
    qs.push(orderQ(s.pi)); qs.push(orderQ(s.pi));
    qs = qs.filter(Boolean);
    return MC.shuffle(qs.filter(function (q) { return q.type !== 'order'; })).concat(qs.filter(function (q) { return q.type === 'order'; }));
  }

  /* ---------- Quiz : affichage ---------- */
  function quizView() {
    var Q = MC.sess.quiz, q = Q.qs[Q.i];
    if (!q) return '';
    var html = '<div class="row" style="gap:8px;flex-wrap:wrap"><span class="pill sun">' + esc(q.kicker) + '</span>' + (q.reg ? MC.regPill(q.reg) : '') +
      '<span class="sub" style="margin-left:auto;font-size:13px;font-weight:700">' + (Q.i + 1) + ' / ' + Q.qs.length + '</span></div>';
    html += '<h1 class="q-prompt">' + esc(q.prompt) + '</h1>';
    if (q.sub) html += '<span class="sub">' + esc(q.sub) + '</span>';
    if (q.type === 'listen') html += '<button class="btn line" data-say="' + esc(q.audio) + '" style="align-self:center;width:120px;height:120px;border-radius:999px">' + I('speaker') + '</button>';
    else if (q.audio) html += '<button class="btn ghost sm" data-say="' + esc(q.audio) + '" style="align-self:flex-start">' + I('speaker', 's') + 'Écouter</button>';
    if (q.type === 'order') {
      html += '<div class="answer-zone">' + Q.order.map(function (ti, k) {
        return '<button class="tile" data-act="untile" data-k="' + k + '">' + esc(q.tiles[ti].t) + '</button>';
      }).join('') + '</div><div class="tiles">' + q.tiles.map(function (t, ti) {
        return '<button class="tile ' + (Q.order.indexOf(ti) >= 0 ? 'used' : '') + '" data-act="tile" data-t="' + ti + '"' + (Q.answered ? ' disabled' : '') + '>' + esc(t.t) + '</button>';
      }).join('') + '</div>';
    } else {
      html += '<div class="opts">' + q.options.map(function (o, i) {
        var cls = '';
        if (Q.answered) { if (o.ok) cls = 'good'; else if (Q.answered.pick === i) cls = 'bad'; }
        return '<button class="opt ' + cls + '" data-act="answer" data-i="' + i + '"' + (Q.answered ? ' disabled' : '') + '><span>' + esc(o.label) + '</span>' +
          (cls === 'good' ? I('check') : cls === 'bad' ? I('x') : '') + '</button>';
      }).join('') + '</div>';
    }
    var foot;
    if (Q.answered) {
      var ok = Q.answered.ok;
      foot = '<div class="feedback ' + (ok ? 'good' : 'bad') + '"><b>' + (ok ? MC.pick(['¡Eso!', '¡Muy bien!', '¡Bacano!', '¡Perfecto!', '¡Qué nota!'], 1)[0] : 'Casi…') + '</b>' +
        '<span style="font-size:14px">' + esc(q.explain) + '</span></div>' +
        '<button class="btn primary" style="width:100%;margin-top:10px" data-act="next-q">Continuer</button>';
    } else if (q.type === 'order') {
      foot = '<button class="btn ' + (Q.order.length === q.tiles.length ? 'primary' : 'disabled') + '" style="width:100%" data-act="check-order"' + (Q.order.length === q.tiles.length ? '' : ' disabled') + '>Vérifier</button>';
    } else foot = '';
    return html + '<div class="foot">' + foot + '</div>';
  }
  MC.answerQ = function (i) {
    var Q = MC.sess.quiz, q = Q.qs[Q.i];
    if (Q.answered) return;
    var ok = q.options[i].ok;
    Q.answered = { ok: ok, pick: i };
    afterAnswer(q, ok);
  };
  MC.checkOrder = function () {
    var Q = MC.sess.quiz, q = Q.qs[Q.i];
    var built = Q.order.map(function (ti) { return q.tiles[ti].t; }).join(' ');
    var ok = MC.norm(built) === MC.norm(q.answer);
    Q.answered = { ok: ok };
    afterAnswer(q, ok);
  };
  function afterAnswer(q, ok) {
    var Q = MC.sess.quiz;
    if (ok) Q.good++;
    else if (q.wordId) MC.markWrong(q.wordId);
    if (q.sayAfter && ok) MC.speak(q.sayAfter);
    if (navigator.vibrate && !ok) navigator.vibrate(80);
    MC.route();
  }
  MC.nextQ = function () {
    var Q = MC.sess.quiz;
    Q.i++; Q.answered = null; Q.order = [];
    if (Q.i >= Q.qs.length) MC.nextStep();
    else { window.scrollTo(0, 0); MC.route(); }
  };

  /* ---------- Dialogue ---------- */
  function newDialogue(s) {
    return { d: s.dialogue, help: s.help, turn: 0, msgs: [], phase: 'idle', fails: 0, oral: 0, typed: 0, showHelp: s.help, listening: false, heard: '', shownTr: {} };
  }
  function startDialogue() {
    var D = MC.sess.dlg;
    if (D.phase !== 'idle') return;
    var t = D.d.turns[0];
    D.msgs.push({ who: 'npc', es: t[0], fr: t[1] });
    D.phase = 'answer';
    setTimeout(function () { MC.speak(t[0]); }, 400);
  }
  function initials(who) {
    var name = who.split(',')[0].replace(/^(Don|Doña|Agente)\s+/, '');
    return name.split(/\s+/).map(function (x) { return x[0]; }).join('').slice(0, 2).toUpperCase();
  }
  function dialogueView() {
    var D = MC.sess.dlg, d = D.d;
    var html = '<div class="npc-head"><div class="avatar">' + esc(initials(d.who)) + '</div><div class="grow col" style="gap:2px"><b style="font-size:16px">' + esc(d.who) + '</b>' +
      '<span class="sub" style="font-size:13px">' + esc(d.t) + ' · ' + (D.help ? 'avec aide' : 'sans aide') + '</span></div>' + MC.regPill(d.reg) + '</div>';
    html += '<div class="chat" id="chat">' + D.msgs.map(function (m, k) {
      var showTr = m.who === 'me' || D.help || D.shownTr[k];
      return '<div class="bubble ' + m.who + '"><span>' + esc(MC.withName(m.es)) + '</span>' +
        (m.who === 'npc' ? (showTr ? '<span class="tr">' + esc(MC.withName(m.fr)) + '</span>' : '<button class="tr-btn" data-act="show-tr" data-k="' + k + '">Traduire</button>') +
          '<button class="tr-btn" data-say="' + esc(m.es) + '">' + 'Réécouter</button>' : '') +
        (m.info ? '<span class="tr">' + esc(m.info) + '</span>' : '') + '</div>';
    }).join('') + '</div>';
    if (D.phase === 'done') {
      return html + '<div class="foot"><button class="btn primary" style="width:100%" data-act="next-step">Terminer la séance</button></div>';
    }
    var t = d.turns[D.turn];
    var showSugg = D.showHelp || D.fails >= 2 || !MC.canListen;
    html += '<div class="foot"><div class="answer-panel">';
    if (!MC.canListen) html += '<span class="sub" style="font-size:13px">Le micro n’est pas disponible sur ce navigateur : choisis ta réponse (Chrome sur Android pour parler).</span>';
    if (showSugg) {
      html += '<span class="label">À toi · dis une de ces réponses</span>' + t[2].map(function (o, i) {
        return '<div class="sugg"><button class="txt" data-act="pick-opt" data-i="' + i + '">' + esc(MC.withName(o[0])) + '</button>' +
          '<button class="icon-btn sm" data-say="' + esc(o[0]) + '" aria-label="Écouter cette réponse" style="background:#fff">' + I('speaker', 's') + '</button></div>';
      }).join('') + (D.help ? '' : '<span class="sub" style="font-size:12px">Toucher une réponse la choisit sans passer par l’oral.</span>');
    } else {
      html += '<span class="label">À toi · réponds à voix haute</span>';
    }
    if (D.heard) html += '<div class="heard">' + esc(D.heard) + '</div>';
    if (MC.canListen) {
      html += '<div class="between">' +
        (showSugg ? '<span style="width:96px"></span>' : '<button class="btn ghost sm" data-act="show-help" style="width:96px">Aide</button>') +
        '<button class="mic ' + (D.listening ? 'listening' : '') + '" data-act="mic" aria-label="' + (D.listening ? 'J’écoute…' : 'Appuie pour parler') + '">' + I('mic') + '</button>' +
        '<button class="btn ghost sm" data-say="' + esc(D.msgs[D.msgs.length - 1].es) + '" style="width:96px">Réécouter</button></div>' +
        '<span class="sub" style="text-align:center;font-size:12px">' + (D.listening ? 'J’écoute… parle maintenant' : 'Appuie sur le micro puis parle') + '</span>';
    }
    return html + '</div></div>';
  }
  MC.dlgPick = function (i, score) {
    var D = MC.sess.dlg, t = D.d.turns[D.turn], o = t[2][i];
    var oral = score != null;
    D.msgs.push({ who: 'me', es: o[0], fr: o[1], info: oral ? 'Compris · ' + Math.round(score * 100) + ' %' : 'Choisie sans l’oral' });
    if (oral) D.oral++; else D.typed++;
    var toSay = [];
    if (o[2]) { D.msgs.push({ who: 'npc', es: o[2], fr: o[3] }); toSay.push(o[2]); }
    D.turn++; D.fails = 0; D.heard = ''; D.showHelp = D.help;
    if (D.turn < D.d.turns.length) {
      var n = D.d.turns[D.turn]; D.msgs.push({ who: 'npc', es: n[0], fr: n[1] }); toSay.push(n[0]);
    } else {
      D.msgs.push({ who: 'npc', es: D.d.end[0], fr: D.d.end[1] }); toSay.push(D.d.end[0]);
      D.phase = 'done';
    }
    MC.route();
    setTimeout(function () { MC.speak(toSay.join(' ')); }, 300);
    var chat = document.getElementById('chat');
    if (chat) setTimeout(function () { window.scrollTo(0, document.body.scrollHeight); }, 50);
  };
  MC.dlgMic = function () {
    var D = MC.sess.dlg;
    if (D.listening) { if (MC.recog) try { MC.recog.stop(); } catch (e) {} return; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    D.listening = true; D.heard = ''; MC.route();
    MC.recog = MC.listen('es-CO', function (alts, err) {
      D.listening = false;
      if (err) {
        if (err === 'not-allowed' || err === 'service-not-allowed') D.heard = 'Autorise le micro pour cette appli (icône du cadenas dans Chrome), puis réessaie.';
        else if (err === 'network') { D.heard = 'La reconnaissance vocale a besoin d’internet. Choisis ta réponse pour cette fois.'; D.fails = 2; }
        else if (err === 'no-speech' || err === 'aborted') D.heard = 'Je n’ai rien entendu. Réessaie en parlant près du téléphone.';
        else D.heard = 'Le micro a eu un souci. Réessaie.';
        MC.route(); return;
      }
      var t = D.d.turns[D.turn], best = -1, bestScore = 0;
      alts.forEach(function (a) {
        t[2].forEach(function (o, i) { var sc = MC.similarity(a, o[0]); if (sc > bestScore) { bestScore = sc; best = i; } });
      });
      if (best >= 0 && bestScore >= 0.6) MC.dlgPick(best, bestScore);
      else {
        D.fails++;
        D.heard = 'J’ai compris : « ' + alts[0] + ' ». ' + (D.fails >= 2 ? 'Voici les réponses possibles.' : 'Réessaie !');
        MC.route();
      }
    });
  };

  /* ---------- Bilan ---------- */
  function finish() {
    var S = MC.sess, Q = S.quiz, D = S.dlg;
    var pct = Q.qs.length ? Math.round(100 * Q.good / Q.qs.length) : 100;
    var passed = MC.completeSeance(S.s, { quizPct: pct, oral: D.oral });
    S.result = { pct: pct, good: Q.good, total: Q.qs.length, oral: D.oral, turns: D.d.turns.length, passed: passed, minutes: Math.max(1, Math.round((Date.now() - S.start) / 60000)) };
  }
  function endView() {
    var S = MC.sess, r = S.result, s = S.s;
    var st = MC.state;
    var title = s.test ? (r.passed ? '¡Palier validado!' : 'Casi… pas encore') : MC.pick(['¡Eso, parce!', '¡Qué berraquera!', '¡Muy bien!', '¡Bacano!'], 1)[0];
    var next = MC.currentSeance();
    return '<div class="col" style="align-items:center;text-align:center;gap:10px;padding-top:24px">' +
      '<div class="avatar" style="width:84px;height:84px;font-size:32px;background:' + (r.passed ? 'var(--sun)' : 'var(--line)') + '">' + I(r.passed ? 'star' : 'cards') + '</div>' +
      '<h1 class="h1">' + title + '</h1><span class="sub">' + esc(s.t) + ' · ' + r.minutes + ' min</span></div>' +
      '<div class="stats"><div><b>' + r.good + '/' + r.total + '</b><span>quiz</span></div>' +
      '<div><b>' + r.oral + '/' + r.turns + '</b><span>à l\u2019oral</span></div>' +
      '<div><b>' + st.streak.count + ' j</b><span>de suite</span></div></div>' +
      (s.test ? '<div class="card" style="font-size:14px;line-height:1.45">' + (r.passed ? 'Bravo, tu as ' + r.pct + ' % : le palier suivant est débloqué.' : 'Tu as ' + r.pct + ' %. Il faut 70 % pour valider le palier. Fais tes révisions et réessaie le test.') + '</div>'
        : '<div class="card" style="font-size:14px;line-height:1.45">' + s.words.length + ' nouveaux mots et l’expression « ' + esc(MC.LEXBYID[s.exprId].es) + ' » rejoignent tes révisions.</div>') +
      '<div class="col" style="margin-top:8px"><a class="btn primary" href="#home">Retour à l’accueil</a>' +
      (MC.dueCards().length ? '<a class="btn line" href="#revision">Réviser mes cartes</a>' : '') +
      (s.test && !r.passed ? '<a class="btn line" href="#seance/' + s.pi + '/' + s.si + '">Refaire le test</a>' : '') +
      (next && !s.test && r.passed ? '' : '') + '</div>';
  }

  /* ---------- Révisions ---------- */
  MC.startRevision = function (free) {
    var q = MC.dueCards();
    if (!q.length && free) q = MC.shuffle(MC.learnedWords()).slice(0, 15);
    MC.rev = { queue: q.slice(0, 40), total: Math.min(q.length, 40), flipped: false, done: 0 };
  };
  MC.screens.revision = function () {
    if (!MC.rev) MC.startRevision(false);
    var R = MC.rev, st = MC.state;
    var dirFr = st.settings.revDir === 'fr';
    var head = '<div class="topbar"><a class="icon-btn plain" href="#home" aria-label="Retour">' + I('back') + '</a>' +
      '<span class="grow" style="font-family:var(--display);font-size:20px;font-weight:700">Révisions</span>' +
      '<button class="chip" data-act="rev-dir">' + (dirFr ? 'FR → ES' : 'ES → FR') + '</button></div>';
    if (!R.queue.length) {
      var learned = MC.learnedWords().length;
      return '<div class="screen full">' + head + '<div class="col" style="align-items:center;text-align:center;gap:12px;padding-top:40px">' +
        '<div class="avatar" style="width:84px;height:84px;font-size:32px">' + I('check') + '</div>' +
        '<h1 class="h1">' + (R.done ? '¡Listo!' : 'Rien à réviser') + '</h1>' +
        '<span class="sub">' + (R.done ? R.done + ' cartes revues. Reviens demain pour les suivantes.' : 'Tes cartes reviendront au bon moment.') + '</span></div>' +
        '<div class="col" style="margin-top:12px">' + (learned ? '<button class="btn line" data-act="rev-free">Réviser quand même 15 cartes</button>' : '') +
        '<a class="btn primary" href="#home">Retour à l’accueil</a></div></div>';
    }
    var id = R.queue[0], w = MC.LEXBYID[id];
    var front = dirFr ? w.fr : w.es, back = dirFr ? w.es : w.fr;
    var prev = MC.gradePreview(id);
    var pct = R.total ? Math.round(100 * R.done / (R.done + R.queue.length)) : 0;
    return '<div class="screen full">' + head + '<div class="between" style="font-size:13px"><div class="bar grow" style="height:6px"><div style="width:' + pct + '%"></div></div>' +
      '<b class="sub" style="font-size:13px">' + R.queue.length + ' restante' + (R.queue.length > 1 ? 's' : '') + '</b></div>' +
      '<button class="flash" data-act="flip">' +
      '<span class="row" style="gap:6px">' + (w.cat === 'expr' ? '<span class="pill sun">Expression</span>' : '<span class="pill teal">' + esc((MC.CATS.filter(function (c) { return c.id === w.cat; })[0] || { name: 'Mes mots' }).name) + '</span>') + MC.regPill(w.reg) + '</span>' +
      '<span class="big">' + esc(front) + '</span>' +
      (R.flipped ? '<span style="width:60px;height:2px;background:var(--line)"></span><span style="font-size:22px;font-weight:700;color:var(--teal)">' + esc(back) + '</span>' +
        (w.ex ? '<span class="sub" style="font-style:italic">« ' + esc(w.ex) + ' »<br>' + esc(w.exFr) + '</span>' : '')
        : '<span class="sub">Touche la carte pour la retourner</span>') + '</button>' +
      '<button class="btn ghost sm" data-say="' + esc(w.es) + '" style="align-self:center">' + I('speaker', 's') + 'Écouter</button>' +
      (R.flipped ? '<div class="col" style="gap:8px"><span class="label" style="text-align:center">Tu le connaissais ?</span><div class="grades">' +
        '<button data-act="grade" data-g="0" style="background:var(--bad-l);color:#8A1C12">Raté<span>' + prev[0] + '</span></button>' +
        '<button data-act="grade" data-g="1" style="background:var(--sun-l);color:var(--sun-t)">Dur<span>' + prev[1] + '</span></button>' +
        '<button data-act="grade" data-g="2" style="background:var(--teal-l);color:var(--teal-d)">Bien<span>' + prev[2] + '</span></button>' +
        '<button data-act="grade" data-g="3" style="background:var(--teal);color:#fff">Facile<span>' + prev[3] + '</span></button></div></div>'
        : '<button class="btn primary" data-act="flip">Voir la réponse</button>') + '</div>';
  };
  MC.gradeRev = function (g) {
    var R = MC.rev, id = R.queue.shift();
    MC.grade(id, g);
    if (g === 0) R.queue.splice(Math.min(R.queue.length, 3), 0, id); else R.done++;
    R.flipped = false;
    MC.route();
  };
})();
