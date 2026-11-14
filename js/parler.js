/* Mi Colombia — module Parler : conversations longues du quotidien */
(function () {
  'use strict';
  var MC = window.MC, esc = MC.esc, I = MC.icon;

  var LEVELS = [
    { id: 'deb', label: 'Débutant', info: 'Réponses proposées et traductions affichées, voix plus lente.' },
    { id: 'inter', label: 'Intermédiaire', info: 'Tu réponds avec tes mots ; l’aide et la traduction sont sur demande.' },
    { id: 'av', label: 'Avancé', info: 'Sans traduction ni aide (sauf si tu bloques), voix normale, réponse libre.' }
  ];
  var LENS = [{ id: 'court', label: 'Courte', sub: '~10 échanges' }, { id: 'long', label: 'Longue', sub: 'toute la scène' }];
  function lvl() { return MC.state.settings.convLevel || 'deb'; }
  function len() { return MC.state.settings.convLen || 'long'; }
  function turnsOf(c) { return len() === 'court' ? c.turns.slice(0, c.short) : c.turns; }

  /* ---------- Liste ---------- */
  MC.screens.parler = function () {
    var st = MC.state, best = st.convBest || {};
    var lv = LEVELS.filter(function (l) { return l.id === lvl(); })[0];
    var html = '<div class="screen"><div class="between"><h1 class="h1">Conversations</h1><span class="emoji" style="font-size:30px">🗣️</span></div>' +
      '<p class="intro" style="margin-top:-6px">Des scènes du quotidien à Bogotá et à Cartagena. Le personnage te parle, tu réponds à voix haute.</p>' +
      '<div class="card col" style="gap:12px">' +
      '<span class="label">Mon niveau</span><div class="seg3">' + LEVELS.map(function (l) {
        return '<button class="' + (l.id === lvl() ? 'on' : '') + '" data-act="conv-level" data-v="' + l.id + '">' + l.label + '</button>';
      }).join('') + '</div><span class="sub" style="font-size:13px">' + lv.info + '</span>' +
      '<span class="label">Durée</span><div class="seg3 two">' + LENS.map(function (l) {
        return '<button class="' + (l.id === len() ? 'on' : '') + '" data-act="conv-len" data-v="' + l.id + '">' + l.label + '<small>' + l.sub + '</small></button>';
      }).join('') + '</div></div>';
    html += '<div class="col" style="gap:12px">' + MC.CONVS.map(function (c) {
      var n = turnsOf(c).length, b = best[c.id];
      return '<a class="conv-card" href="#conv/' + c.id + '"><span class="thumb emoji" style="background:' + (c.reg === 'c' ? '#FFE9D9' : '#EFE7FB') + '">' + c.emoji + '</span>' +
        '<div class="grow col" style="gap:2px"><b style="font-size:16px">' + esc(c.t) + '</b>' +
        '<span class="sub" style="font-size:13px">' + esc(c.place) + '</span>' +
        '<span class="row" style="gap:6px;flex-wrap:wrap">' + MC.regPill(c.reg, true) + '<span class="pill sm sun">' + n + ' échanges · ~' + Math.max(2, Math.round(n * 0.45)) + ' min</span>' +
        (b ? '<span class="pill sm" style="background:#FFF2C2;color:#7A5200">✓ ' + b + ' %</span>' : '') + '</span></div>' + I('chev', 's') + '</a>';
    }).join('') + '</div>';
    return html + '</div>' + MC.nav('parler');
  };

  /* ---------- Lecteur ---------- */
  MC.startConv = function (id) {
    var c = MC.CONVS.filter(function (x) { return x.id === id; })[0];
    if (!c) return false;
    var level = lvl();
    MC.conv = { c: c, turns: turnsOf(c), level: level, len: len(), turn: 0, msgs: [], phase: 'answer', fails: 0, oral: 0, helps: 0, typed: 0,
      showHelp: level === 'deb', listening: false, heard: '', shownTr: {}, start: Date.now() };
    var t = MC.conv.turns[0];
    MC.conv.msgs.push({ who: 'npc', es: t[0], fr: t[1] });
    setTimeout(function () { say(t[0]); }, 400);
    return true;
  };
  function rate() { var l = MC.conv ? MC.conv.level : 'deb'; return l === 'deb' ? 0.8 : l === 'inter' ? 0.92 : 1.02; }
  function say(txt) { MC.speak(txt, { rate: rate() }); }

  MC.screens.conv = function (id) {
    if (!MC.conv || MC.conv.c.id !== id) { if (!MC.startConv(id)) { return MC.screens.parler(); } }
    var V = MC.conv, c = V.c;
    if (V.phase === 'end') return endView();
    var pct = Math.round(100 * V.turn / V.turns.length);
    var html = '<div class="screen full"><div class="topbar"><button class="icon-btn plain" data-act="conv-quit" aria-label="Quitter">' + I('x') + '</button>' +
      '<div class="bar grow"><div style="width:' + Math.max(3, pct) + '%"></div></div><span class="timer">' + V.turn + '/' + V.turns.length + '</span></div>' +
      '<div class="npc-head"><div class="avatar emoji" style="font-size:24px">' + c.emoji + '</div><div class="grow col" style="gap:2px"><b style="font-size:16px">' + esc(c.who) + '</b>' +
      '<span class="sub" style="font-size:13px">' + esc(c.place) + ' · ' + LEVELS.filter(function (l) { return l.id === V.level; })[0].label.toLowerCase() + '</span></div>' + MC.regPill(c.reg) + '</div>';
    html += '<div class="chat">' + V.msgs.map(function (m, k) {
      var showTr = m.who === 'me' || V.level === 'deb' || V.shownTr[k];
      return '<div class="bubble ' + m.who + '"><span>' + esc(MC.withName(m.es)) + '</span>' +
        (m.who === 'npc' ? (showTr ? '<span class="tr">' + esc(MC.withName(m.fr)) + '</span>' : (V.level === 'inter' ? '<button class="tr-btn" data-act="conv-tr" data-k="' + k + '">Traduire</button>' : '')) +
          '<button class="tr-btn" data-act="conv-say" data-k="' + k + '">Réécouter</button>' : '') +
        (m.info ? '<span class="tr">' + esc(m.info) + '</span>' : '') + '</div>';
    }).join('') + '</div>';
    if (V.phase === 'done') {
      return html + '<div class="foot"><button class="btn primary" style="width:100%" data-act="conv-finish">Voir mon bilan</button></div></div>';
    }
    var t = V.turns[V.turn];
    var showSugg = V.showHelp || V.fails >= 2 || !MC.canListen;
    html += '<div class="foot"><div class="answer-panel">';
    if (!MC.canListen) html += '<span class="sub" style="font-size:13px">Le micro n’est pas disponible sur ce navigateur : choisis ta réponse.</span>';
    if (showSugg) {
      html += '<span class="label" style="text-align:center">' + (V.level === 'deb' ? 'Dis une de ces réponses :' : 'Idées de réponse :') + '</span>' + t[2].map(function (o, i) {
        return '<div class="sugg"><button class="txt" data-act="conv-pick" data-i="' + i + '">' + esc(MC.withName(o[0])) + '</button>' +
          '<button class="icon-btn sm" data-act="conv-say-opt" data-i="' + i + '" aria-label="Écouter cette réponse" style="background:#fff">' + I('speaker', 's') + '</button></div>';
      }).join('');
    } else {
      html += '<span class="label" style="text-align:center">' + (V.level === 'av' ? 'À toi, réponds librement' : 'À toi, réponds avec tes mots') + '</span>';
    }
    if (V.heard) html += '<div class="heard">' + esc(V.heard) + '</div>';
    if (MC.canListen) {
      html += '<div class="between">' +
        (showSugg || V.level === 'av' ? '<span style="width:78px"></span>' : '<button class="btn ghost sm" data-act="conv-help" style="width:78px">Aide</button>') +
        '<div class="mic-wrap"><span class="waves" aria-hidden="true"><i></i><i></i><i></i></span>' +
        '<button class="mic ' + (V.listening ? 'listening' : '') + '" data-act="conv-mic" aria-label="' + (V.listening ? 'J’écoute' : 'Appuie pour parler') + '">' + I('mic') + '</button>' +
        '<span class="waves" aria-hidden="true"><i></i><i></i><i></i></span></div>' +
        '<button class="btn ghost sm" data-act="conv-say-last" style="width:78px">Réécouter</button></div>' +
        '<span class="sub" style="text-align:center;font-size:12px">' + (V.listening ? 'J’écoute… parle maintenant' : 'Appuie sur le micro puis parle') + '</span>';
    }
    return html + '</div></div></div>';
  };
  MC.after.conv = function () { var chat = document.querySelector('.chat'); if (chat && MC.conv && MC.conv.turn > 0) window.scrollTo(0, document.body.scrollHeight); };

  /* Réponse libre : on compare surtout les mots importants */
  var STOP = ' el la los las un una unos unas de del al a en y o que por para con es me te se le lo mi tu su yo usted ustedes muy pues si no ya '.split(' ');
  function content(txt) {
    return MC.norm(MC.withName(txt)).split(' ').filter(function (w) { return w && STOP.indexOf(w) < 0; });
  }
  function freeScore(heard, expected) {
    var e = content(expected), h = content(heard);
    if (!e.length) return MC.similarity(heard, expected);
    var hit = 0;
    e.forEach(function (w) {
      if (h.some(function (x) { return x === w || (x.length >= 4 && w.length >= 4 && (x.indexOf(w.slice(0, 4)) === 0)); })) hit++;
    });
    return Math.max(hit / e.length, MC.similarity(heard, expected));
  }
  function threshold(level) { return level === 'deb' ? 0.6 : level === 'inter' ? 0.5 : 0.45; }

  MC.convPick = function (i, score) {
    var V = MC.conv, t = V.turns[V.turn], o = t[2][i];
    var oral = score != null;
    V.msgs.push({ who: 'me', es: o[0], fr: o[1], info: oral ? 'Compris · ' + Math.round(score * 100) + ' %' : 'Choisie sans l’oral' });
    if (oral) V.oral++; else V.typed++;
    var toSay = [];
    if (o[2]) { V.msgs.push({ who: 'npc', es: o[2], fr: o[3] }); toSay.push(o[2]); }
    V.turn++; V.fails = 0; V.heard = ''; V.showHelp = V.level === 'deb';
    if (V.turn < V.turns.length) {
      var n = V.turns[V.turn]; V.msgs.push({ who: 'npc', es: n[0], fr: n[1] }); toSay.push(n[0]);
    } else {
      var end = V.len === 'court' && V.c.endShort ? V.c.endShort : V.c.end;
      V.msgs.push({ who: 'npc', es: end[0], fr: end[1] }); toSay.push(end[0]);
      V.phase = 'done';
    }
    MC.route();
    setTimeout(function () { say(toSay.join(' ')); }, 300);
  };
  MC.convMic = function () {
    var V = MC.conv;
    if (V.listening) { if (MC.recog) try { MC.recog.stop(); } catch (e) {} return; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    V.listening = true; V.heard = ''; MC.route();
    MC.recog = MC.listen('es-CO', function (alts, err) {
      V.listening = false;
      if (err) {
        if (err === 'not-allowed' || err === 'service-not-allowed') V.heard = 'Autorise le micro pour cette appli, puis réessaie.';
        else if (err === 'network') { V.heard = 'La reconnaissance vocale a besoin d’internet. Choisis ta réponse pour cette fois.'; V.fails = 2; }
        else V.heard = 'Je n’ai rien entendu. Réessaie en parlant près du téléphone.';
        MC.route(); return;
      }
      var t = V.turns[V.turn], best = -1, bestScore = 0;
      alts.forEach(function (a) {
        t[2].forEach(function (o, i) {
          var sc = V.level === 'deb' ? MC.similarity(a, o[0]) : freeScore(a, o[0]);
          if (sc > bestScore) { bestScore = sc; best = i; }
        });
      });
      if (best >= 0 && bestScore >= threshold(V.level)) MC.convPick(best, bestScore);
      else {
        V.fails++;
        V.heard = 'J’ai compris : « ' + alts[0] + ' ». ' + (V.fails >= 2 ? 'Voici des idées de réponse.' : 'Réessaie !');
        if (V.fails >= 2) V.helps++;
        MC.route();
      }
    });
  };

  /* ---------- Bilan ---------- */
  function endView() {
    var V = MC.conv, total = V.turns.length;
    var pct = Math.round(100 * V.oral / total);
    var min = Math.max(1, Math.round((Date.now() - V.start) / 60000));
    var title = pct >= 80 ? '¡Qué berraquera!' : pct >= 50 ? '¡Muy bien, parce!' : '¡Poco a poco!';
    return '<div class="screen full"><div class="col" style="align-items:center;text-align:center;gap:10px;padding-top:24px">' +
      '<div class="avatar emoji" style="width:90px;height:90px;font-size:44px">' + V.c.emoji + '</div><h1 class="h1">' + title + '</h1>' +
      '<span class="sub">' + esc(V.c.t) + ' · ' + min + ' min</span></div>' +
      '<div class="stats"><div><b>' + V.oral + '/' + total + '</b><span>à l’oral</span></div><div><b>' + V.helps + '</b><span>aides</span></div><div><b>' + pct + ' %</b><span>score</span></div></div>' +
      '<div class="card" style="font-size:14px;line-height:1.45">' + (pct >= 80 ? 'Excellent ! Essaie le niveau au-dessus ou la version longue.' : pct >= 50 ? 'Bien joué. Refais la scène pour parler encore plus à l’oral.' : 'Recommence en débutant : les réponses proposées t’aident à prendre le rythme.') + '</div>' +
      '<div class="col" style="margin-top:8px"><button class="btn primary" data-act="conv-again">Recommencer</button><a class="btn line" href="#parler">Autres conversations</a></div></div>';
  }
  MC.convFinish = function () {
    var V = MC.conv, pct = Math.round(100 * V.oral / V.turns.length);
    var st = MC.state; st.convBest = st.convBest || {};
    st.convBest[V.c.id] = Math.max(st.convBest[V.c.id] || 0, pct);
    var today = MC.today();
    if (st.streak.last !== today) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      st.streak.count = (st.streak.last === MC.today(y)) ? st.streak.count + 1 : 1;
      st.streak.last = today;
    }
    MC.save();
    V.phase = 'end'; window.scrollTo(0, 0); MC.route();
  };
})();
