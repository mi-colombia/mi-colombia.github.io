/* Mi Colombia — écrans : accueil, parcours, lexique, verbes, traducteur, réglages */
(function () {
  'use strict';
  var MC = window.MC, esc = MC.esc, I = MC.icon;

  /* ---------- Navigation ---------- */
  var TABS = [['home', 'Accueil', 'home'], ['parcours', 'Parcours', 'flag'], ['lexique', 'Lexique', 'book'], ['verbes', 'Verbes', 'verbs'], ['trad', 'Traducteur', 'trad']];
  MC.nav = function (active) {
    return '<nav class="tabs"><div class="in">' + TABS.map(function (t) {
      return '<a href="#' + t[0] + '" class="' + (t[0] === active ? 'on' : '') + '">' + I(t[2]) + t[1] + '</a>';
    }).join('') + '</div></nav>';
  };
  MC.go = function (hash) { if (location.hash === '#' + hash) MC.route(); else location.hash = hash; };

  MC.view = {}; // état éphémère des écrans

  /* ---------- Accueil ---------- */
  MC.screens.home = function () {
    var st = MC.state, s = MC.currentSeance();
    var doneToday = st.lastDone === MC.today();
    var due = MC.dueCards().length;
    var streakOk = st.streak.last === MC.today() || (function () { var y = new Date(); y.setDate(y.getDate() - 1); return st.streak.last === MC.today(y); })();
    var streak = streakOk ? st.streak.count : 0;
    var hero;
    if (!s) {
      hero = '<div class="hero"><span class="label">Parcours terminé</span><h2>¡Felicitaciones! Tu as fini les 5 paliers.</h2>' +
        '<p style="margin:0;font-size:14px;color:var(--teal-t)">Continue avec les révisions et rejoue les séances depuis le parcours.</p>' +
        '<a class="btn sun" href="#parcours">Voir le parcours</a></div>';
    } else {
      var pal = MC.PALIERS[s.pi];
      hero = '<div class="hero"><div class="between"><span class="label">' + (doneToday ? 'Séance du jour faite' : 'Séance du jour · 15 min') + '</span>' +
        '<span class="tag">Palier ' + (s.pi + 1) + ' · ' + esc(pal.name) + '</span></div>' +
        '<h2>' + esc(s.t) + '</h2>' +
        (s.test ? '<div class="parts"><div>Quiz<span>20 questions</span></div><div>Dialogue<span>sans aide</span></div><div>Objectif<span>70 %</span></div></div>'
          : '<div class="parts"><div>Leçon<span>5 min</span></div><div>Quiz<span>5 min</span></div><div>Dialogue<span>5 min</span></div></div>') +
        '<a class="btn sun" href="#seance/' + s.pi + '/' + s.si + '">' + (doneToday ? 'Faire la séance suivante' : 'Commencer la séance') + '</a></div>';
    }
    var exprSeance = s || MC.SEANCES[MC.SEANCES.length - 1];
    var e = MC.LEXBYID[exprSeance.exprId];
    var palPct = s ? Math.round(100 * s.si / MC.PALIERS[s.pi].seances.length) : 100;
    return '<div class="screen">' +
      '<div class="between" style="align-items:flex-start"><div class="col" style="gap:4px"><span class="sub" style="font-size:13px;font-weight:500">' + MC.dateES() + '</span>' +
      '<h1 class="h1">¡Qué más, ' + esc(st.name || 'parce') + '!</h1></div>' +
      '<div class="row" style="gap:8px"><div class="streak">' + I('flame', 's') + streak + ' j</div>' +
      '<a class="icon-btn plain" href="#reglages" aria-label="Réglages">' + I('gear') + '</a></div></div>' +
      hero +
      '<div class="card col"><div class="between"><span class="label">Expression du jour</span>' + (MC.regPill(e.reg) || '<span class="pill teal">Toute la Colombie</span>') + '</div>' +
      '<div class="between"><span class="expr-title">' + esc(e.es) + '</span><button class="icon-btn" data-say="' + esc(e.es) + '" aria-label="Écouter">' + I('speaker') + '</button></div>' +
      '<span style="font-size:15px;font-weight:600">' + esc(e.fr) + '</span>' +
      '<span style="font-size:14px;color:var(--ink2)">' + esc(e.ctx) + '</span>' +
      '<button class="row" data-say="' + esc(e.ex) + '" style="background:none;border:none;padding:0;text-align:left;gap:8px">' + I('speaker', 's') +
      '<span style="font-size:14px;color:var(--muted);font-style:italic">« ' + esc(e.ex) + ' »<br><span style="font-style:normal">' + esc(e.exFr) + '</span></span></button></div>' +
      '<a class="card link-card" href="#revision"><div class="tile-ico" style="background:var(--sun-l);color:var(--sun-t)">' + I('cards') + '</div>' +
      '<div class="grow col" style="gap:2px"><b style="font-size:15px">' + (due ? due + ' carte' + (due > 1 ? 's' : '') + ' à réviser' : 'Aucune révision en attente') + '</b>' +
      '<span class="sub" style="font-size:13px">' + MC.learnedWords().length + ' mots et expressions appris</span></div>' + I('chev') + '</a>' +
      (s ? '<div class="col"><div class="between" style="font-size:13px"><b>Palier ' + (s.pi + 1) + ' · ' + esc(MC.PALIERS[s.pi].name) + '</b><span class="sub" style="font-size:13px">' + palPct + ' %</span></div>' +
        '<div class="bar"><div style="width:' + palPct + '%"></div></div></div>' : '') +
      '</div>' + MC.nav('home');
  };

  /* ---------- Parcours ---------- */
  MC.screens.parcours = function () {
    var pos = MC.state.pos;
    if (MC.view.openPalier == null) MC.view.openPalier = Math.min(pos.p, 4);
    var html = '<div class="screen"><div class="col" style="gap:4px"><h1 class="h1">Mon parcours</h1><span class="sub">5 paliers · 14 séances chacun · environ 2 semaines par palier</span></div>';
    MC.PALIERS.forEach(function (pal, pi) {
      var doneCount = pal.seances.filter(MC.isDone).length;
      var status = pi < pos.p || doneCount === pal.seances.length ? 'done' : (pi === pos.p ? 'cur' : 'lock');
      var open = MC.view.openPalier === pi;
      html += '<div class="palier ' + (status === 'cur' ? 'cur' : status === 'lock' ? 'locked' : '') + '">' +
        '<button class="palier-head" data-act="toggle-palier" data-p="' + pi + '">' +
        '<div class="dot ' + status + '">' + (status === 'done' ? I('check') : status === 'lock' ? I('lock', 's') : (pi + 1)) + '</div>' +
        '<div class="grow col" style="gap:3px"><div class="between"><b style="font-size:16px">' + (pi + 1) + ' · ' + esc(pal.name) + '</b>' +
        '<span style="font-size:12px;font-weight:700;color:' + (status === 'done' ? 'var(--teal)' : status === 'cur' ? 'var(--sun-t)' : 'var(--muted)') + '">' +
        (status === 'done' ? 'Validé' : status === 'cur' ? doneCount + ' / 14' : 'Verrouillé') + '</span></div>' +
        '<span style="font-size:13px;color:var(--ink2)">' + esc(pal.fr) + ' : ' + esc(pal.desc) + '</span>' +
        '<span style="font-size:12px;color:var(--muted)">' + esc(pal.grammar) + '</span></div>' + I(open ? 'down' : 'chev', 's') + '</button>';
      if (status === 'cur') html += '<div style="padding:0 16px 12px"><div class="bar"><div style="width:' + Math.round(100 * doneCount / 14) + '%"></div></div></div>';
      if (open) {
        html += '<div class="seance-list">';
        pal.seances.forEach(function (s, si) {
          var done = MC.isDone(s), unlocked = MC.isUnlocked(s);
          var cls = done ? 'done' : unlocked ? 'cur' : 'lock';
          html += '<button class="seance-row ' + cls + '" ' + (unlocked ? 'data-href="#seance/' + pi + '/' + si + '"' : 'disabled') + '>' +
            '<span class="n">' + (done ? I('check', 's') : si + 1) + '</span><span class="grow" style="font-size:14px;font-weight:' + (cls === 'cur' ? 700 : 500) + '">' + esc(s.t) + '</span>' +
            (s.test ? '<span class="pill sun sm">Test</span>' : '') + (unlocked ? I('chev', 's') : I('lock', 's')) + '</button>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    return html + '</div>' + MC.nav('parcours');
  };

  /* ---------- Lexique ---------- */
  function wordRow(w) {
    var m = MC.isMastered(w.id);
    return '<div class="word-row"><button class="icon-btn sm" data-say="' + esc(w.es) + '" aria-label="Écouter">' + I('speaker', 's') + '</button>' +
      '<div class="grow col" style="gap:2px"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="es">' + esc(w.es) + '</span>' + MC.regPill(w.reg, true) +
      (w.type === 'v' ? '<span class="pill sm" style="background:var(--sand);color:var(--ink2)">verbe</span>' : '') + '</div>' +
      '<span class="fr">' + esc(w.fr) + '</span>' +
      (w.ctx ? '<span class="fr" style="color:var(--ink2)">' + esc(w.ctx) + '</span><span class="fr" style="font-style:italic">« ' + esc(w.ex) + ' » ' + esc(w.exFr) + '</span>' : '') + '</div>' +
      (w.cat === 'mine' ? '<button class="icon-btn sm plain" data-act="del-word" data-id="' + esc(w.id) + '" aria-label="Supprimer">' + I('trash', 's') + '</button>' : '') +
      '<button class="check ' + (m ? 'on' : '') + '" data-act="toggle-master" data-id="' + esc(w.id) + '" aria-label="' + (m ? 'Maîtrisé' : 'Marquer comme maîtrisé') + '">' + I('check', 's') + '</button></div>';
  }
  function allCats() {
    return MC.CATS.concat([{ id: 'expr', name: 'Expressions', color: '#7A4B00' }, { id: 'mine', name: 'Mes mots', color: '#1A2230' }]);
  }
  function wordsOf(cat) {
    if (cat === 'mine') return MC.state.custom || [];
    return MC.LEX.filter(function (w) { return w.cat === cat; });
  }
  MC.screens.lexique = function (arg) {
    var v = MC.view;
    if (arg) {
      var cat = allCats().filter(function (c) { return c.id === arg; })[0];
      if (!cat) return MC.screens.lexique();
      var ws = wordsOf(arg);
      var f = v.lexFilter || 'all';
      var shown = ws.filter(function (w) { return f === 'all' || (f === 'todo' ? !MC.isMastered(w.id) : MC.isMastered(w.id)); });
      var mastered = ws.filter(function (w) { return MC.isMastered(w.id); }).length;
      return '<div class="screen"><div class="row" style="gap:8px"><a class="icon-btn plain" href="#lexique" aria-label="Retour" style="margin-left:-10px;color:var(--ink)">' + I('back') + '</a>' +
        '<div class="grow col" style="gap:0"><h1 style="font-size:26px;font-weight:800">' + esc(cat.name) + '</h1><span class="sub" style="font-size:13px">' + ws.length + ' entrées · ' + mastered + ' maîtrisées</span></div>' +
        (arg === 'mine' ? '<button class="icon-btn" data-act="add-word" aria-label="Ajouter un mot" style="background:var(--teal);color:#fff">' + I('plus') + '</button>' : '') + '</div>' +
        '<div class="chips">' + [['all', 'Tout'], ['todo', 'À apprendre'], ['ok', 'Maîtrisés']].map(function (c) {
          return '<button class="chip ' + (f === c[0] ? 'on' : '') + '" data-act="lex-filter" data-f="' + c[0] + '">' + c[1] + '</button>';
        }).join('') + '</div>' +
        (shown.length ? '<div class="list">' + shown.map(wordRow).join('') + '</div>' :
          '<div class="empty">' + (arg === 'mine' ? 'Ajoute ici tes propres mots, ou depuis le traducteur.' : 'Rien ici pour le moment.') + '</div>') +
        '</div>' + MC.nav('lexique');
    }
    var q = v.lexQuery || '';
    var html = '<div class="screen"><div class="between"><h1 class="h1">Lexique</h1>' +
      '<button class="icon-btn" data-act="add-word" aria-label="Ajouter un mot" style="background:var(--teal);color:#fff">' + I('plus') + '</button></div>' +
      '<label class="search">' + I('search') + '<input type="search" id="lex-q" value="' + esc(q) + '" placeholder="Chercher en français ou en espagnol" aria-label="Chercher dans le lexique" autocomplete="off"></label>' +
      '<div id="lex-results"></div>' +
      '<div class="cat-grid" id="lex-cats">' + allCats().map(function (c) {
        var ws = wordsOf(c.id); var m = ws.filter(function (w) { return MC.isMastered(w.id); }).length;
        var pct = ws.length ? Math.round(100 * m / ws.length) : 0;
        return '<a class="cat" href="#lexique/' + c.id + '" style="border-top-color:' + c.color + '"><b>' + esc(c.name) + '</b><span>' + ws.length + ' entrées · ' + m + ' maîtrisées</span>' +
          '<div class="bar" style="height:5px"><div style="width:' + pct + '%"></div></div></a>';
      }).join('') + '</div></div>' + MC.nav('lexique');
    return html;
  };
  MC.searchLex = function (q, limit) {
    var n = MC.norm(q);
    if (!n) return [];
    var all = MC.LEX.concat(MC.state.custom || []);
    var scored = [];
    all.forEach(function (w) {
      var es = MC.norm(w.es), fr = MC.norm(w.fr);
      var s = 0;
      if (es === n || fr === n) s = 3;
      else if (es.indexOf(n) === 0 || fr.indexOf(n) === 0) s = 2;
      else if ((' ' + es + ' ').indexOf(' ' + n) >= 0 || (' ' + fr + ' ').indexOf(' ' + n) >= 0) s = 1.5;
      else if (n.length >= 3 && (es.indexOf(n) >= 0 || fr.indexOf(n) >= 0)) s = 1;
      if (s) scored.push([s, w]);
    });
    scored.sort(function (a, b) { return b[0] - a[0] || a[1].es.length - b[1].es.length; });
    return scored.slice(0, limit || 30).map(function (x) { return x[1]; });
  };
  MC.after.lexique = function () {
    var input = document.getElementById('lex-q');
    if (!input) return;
    function run() {
      MC.view.lexQuery = input.value;
      var res = MC.searchLex(input.value);
      var box = document.getElementById('lex-results'), cats = document.getElementById('lex-cats');
      if (!input.value.trim()) { box.innerHTML = ''; cats.style.display = ''; return; }
      cats.style.display = 'none';
      box.innerHTML = res.length ? '<div class="list">' + res.map(wordRow).join('') + '</div>' :
        '<div class="empty">Pas trouvé dans le lexique. Essaie le <a href="#trad">traducteur</a>.</div>';
    }
    input.addEventListener('input', run);
    if (input.value) run();
  };
  MC.addWordModal = function (es, fr) {
    MC.modal('<h2 style="font-size:22px">Ajouter un mot</h2>' +
      '<div class="field"><label for="nw-es">En espagnol colombien</label><input id="nw-es" value="' + esc(es || '') + '" autocomplete="off"></div>' +
      '<div class="field"><label for="nw-fr">En français</label><input id="nw-fr" value="' + esc(fr || '') + '" autocomplete="off"></div>' +
      '<button class="btn primary" data-act="save-word">Ajouter à « Mes mots »</button><button class="btn ghost" data-act="close-modal">Annuler</button>');
  };

  /* ---------- Verbes ---------- */
  MC.screens.verbes = function () {
    var v = MC.view;
    v.vg = v.vg || 'ar'; v.vi = v.vi || 0; v.vt = v.vt || 'pres';
    var group = MC.VERB_GROUPS.filter(function (g) { return g.id === v.vg; })[0];
    var verb = group.verbs[v.vi] || group.verbs[0];
    var tense = MC.TENSES.filter(function (t) { return t.id === v.vt; })[0];
    var forms = MC.conjugate(verb, v.vt);
    return '<div class="screen"><div class="between"><h1 class="h1">Conjugaison</h1><span class="pill teal">Sans vosotros</span></div>' +
      '<div class="chips">' + MC.VERB_GROUPS.map(function (g) {
        return '<button class="chip ' + (g.id === v.vg ? 'on' : '') + '" data-act="vg" data-v="' + g.id + '">' + g.label + '</button>';
      }).join('') + '</div>' +
      '<div class="chips">' + group.verbs.map(function (x, i) {
        return '<button class="chip verb ' + (x.inf === verb.inf ? 'on' : '') + '" data-act="vi" data-v="' + i + '">' + esc(x.inf) + '</button>';
      }).join('') + '</div>' +
      '<div class="tense-tabs">' + MC.TENSES.map(function (t) {
        return '<button class="' + (t.id === v.vt ? 'on' : '') + '" data-act="vt" data-v="' + t.id + '">' + t.fr + '<small>' + t.es + '</small></button>';
      }).join('') + '</div>' +
      '<div class="list"><div class="between" style="padding:12px 14px;border-bottom:1px solid var(--line2)"><div class="col" style="gap:0">' +
      '<span style="font-family:var(--display);font-size:20px;font-weight:700">' + esc(verb.inf) + '</span><span class="sub" style="font-size:13px">' + esc(verb.fr) + '</span></div>' +
      '<button class="icon-btn" data-act="say-conj" aria-label="Écouter la conjugaison">' + I('speaker') + '</button></div>' +
      forms.map(function (f, i) {
        return '<div class="conj-row"><span class="p">' + MC.PERSONS[i] + '</span><span class="f">' +
          (f.irregular ? '<span class="irr">' + esc(f.end) + '</span>' :
            '<span class="' + (f.changed ? 'chg' : '') + '">' + esc(f.stem) + '</span><span class="end">' + esc(f.end) + '</span>') + '</span></div>';
      }).join('') + '</div>' +
      '<div class="col" style="gap:6px;font-size:13px;color:var(--ink2);line-height:1.45">' +
      '<span><b>Quand l’utiliser :</b> ' + tense.info + '</span><span><b>Le groupe :</b> ' + group.info + '</span>' +
      (v.vg === 'irr' ? '<span>Les formes irrégulières sont en vert ; les temps réguliers d’un verbe irrégulier sont découpés normalement.</span>' : '') + '</div>' +
      '</div>' + MC.nav('verbes');
  };

  /* ---------- Traducteur ---------- */
  var COLOMBIA = [
    ['móvil', 'celular'], ['móviles', 'celulares'], ['ordenador', 'computador'], ['ordenadores', 'computadores'],
    ['coche', 'carro'], ['coches', 'carros'], ['zumo', 'jugo'], ['zumos', 'jugos'], ['conducir', 'manejar'], ['conduce', 'maneja'], ['conduzco', 'manejo'],
    ['aparcar', 'parquear'], ['aparcamiento', 'parqueadero'], ['patata', 'papa'], ['patatas', 'papas'], ['melocotón', 'durazno'],
    ['judías', 'fríjoles'], ['autobús', 'bus'], ['autobuses', 'buses'], ['camarero', 'mesero'], ['camarera', 'mesera'], ['camareros', 'meseros'],
    ['gamba', 'camarón'], ['gambas', 'camarones'], ['dinero', 'plata'], ['guay', 'chévere'], ['enfadado', 'bravo'], ['enfadada', 'brava'],
    ['vale', 'listo'], ['vosotros', 'ustedes'], ['vosotras', 'ustedes'], ['sois', 'son'], ['estáis', 'están'], ['tenéis', 'tienen'], ['vais', 'van'],
    ['queréis', 'quieren'], ['podéis', 'pueden'], ['habéis', 'han'], ['sabéis', 'saben'], ['hacéis', 'hacen'], ['habláis', 'hablan'], ['vuestro', 'su'], ['vuestra', 'su'],
    ['billete de avión', 'tiquete'], ['piso', 'apartamento'], ['chaval', 'pelado'], ['chavales', 'pelados'], ['gafas de sol', 'gafas de sol'],
    ['plátano', 'banano'], ['plátanos', 'bananos'], ['nevera', 'nevera'], ['cerillas', 'fósforos'], ['bolígrafo', 'esfero'], ['falda', 'falda'],
    ['chaqueta', 'chaqueta'], ['jersey', 'saco'], ['grifo', 'llave'], ['café solo', 'tinto'], ['acera', 'andén'], ['farmacia', 'droguería']
  ];
  MC.colombianize = function (text) {
    var changes = [];
    var out = text;
    COLOMBIA.forEach(function (pair) {
      if (pair[0] === pair[1]) return;
      var re = new RegExp('(^|[^\\wáéíóúñü])(' + pair[0].replace(/ /g, '\\s+') + ')(?=$|[^\\wáéíóúñü])', 'gi');
      out = out.replace(re, function (m, pre, word) {
        var rep = pair[1];
        if (word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()) rep = rep[0].toUpperCase() + rep.slice(1);
        if (changes.indexOf(pair[0]) < 0) changes.push(pair[0] + ' → ' + pair[1]);
        return pre + rep;
      });
    });
    return { text: out, changes: changes };
  };
  MC.screens.trad = function () {
    var v = MC.view, st = MC.state;
    var dir = st.settings.dir === 'co' ? 'co' : 'fr'; // fr = français → colombien
    var r = v.tradResult;
    var html = '<div class="screen"><h1 class="h1">Comment on dit ?</h1>' +
      '<div class="dir"><span>' + (dir === 'fr' ? 'Français' : 'Colombien') + '</span>' +
      '<button class="icon-btn sm" data-act="swap-dir" aria-label="Inverser les langues" style="background:var(--sand);color:var(--ink)">' + I('swap', 's') + '</button>' +
      '<span style="color:var(--teal)">' + (dir === 'fr' ? 'Colombien' : 'Français') + '</span></div>' +
      '<div class="card col" style="gap:10px"><label for="trad-in" class="label">Ta phrase</label>' +
      '<textarea id="trad-in" rows="3" style="border:none;outline:none;resize:none;font-size:18px;background:transparent" placeholder="' + (dir === 'fr' ? 'Ex. : Tu peux me prêter ton chargeur ?' : 'Ej. : ¿Me presta el cargador?') + '">' + esc(v.tradText || '') + '</textarea>' +
      '<div class="row" style="justify-content:flex-end;gap:8px">' +
      '<button class="icon-btn" data-act="trad-mic" aria-label="Dicter" style="background:#fff;border:1px solid var(--line);color:var(--ink)">' + I('mic') + '</button>' +
      '<button class="btn primary sm" data-act="translate">Traduire</button></div></div>';
    if (v.tradLoading) html += '<div class="empty">Traduction en cours…</div>';
    if (r) {
      if (r.lex && r.lex.length) {
        html += '<div class="col"><span class="label">Dans ton lexique</span><div class="list">' + r.lex.map(wordRow).join('') + '</div></div>';
      }
      if (r.text) {
        html += '<div class="result"><div class="row small" style="gap:6px">' + I('trad', 's') + (r.fromLex ? 'Trouvé dans ton lexique' : r.dir === 'fr' ? 'Traduction automatique, adaptée au colombien' : 'Traduction automatique') + '</div>' +
          '<span class="big">' + esc(r.text) + '</span>' +
          (r.changes && r.changes.length ? '<span class="small">Adapté : ' + esc(r.changes.join(', ')) + '</span>' : '') +
          (r.dir === 'fr' ? '<span class="small">À Bogotá, pense au « usted » ; à Cartagena, le « tú » passe partout.</span>' : '') +
          '<div class="row" style="gap:8px">' + (r.dir === 'fr' ? '<button class="btn ghost sm grow" data-say="' + esc(r.text) + '">' + I('speaker', 's') + 'Écouter</button>' : '') +
          (r.fromLex ? '' : '<button class="btn sun sm grow" data-act="trad-save">Ajouter au lexique</button>') + '</div></div>';
      }
      if (r.error) html += '<div class="card" style="font-size:14px;color:var(--ink2)">' + esc(r.error) + '</div>';
    }
    if (st.history && st.history.length) {
      html += '<div class="col" style="gap:0"><span class="label" style="margin-bottom:4px">Récents</span>' + st.history.slice(0, 8).map(function (h, i) {
        return '<button class="hist-row" data-act="hist" data-i="' + i + '"><span class="sub">' + esc(h.src) + '</span><b style="text-align:right">' + esc(h.out) + '</b></button>';
      }).join('') + '</div>';
    }
    return html + '</div>' + MC.nav('trad');
  };
  MC.translate = function () {
    var v = MC.view, st = MC.state;
    var input = document.getElementById('trad-in');
    var text = (input ? input.value : v.tradText || '').trim();
    v.tradText = text;
    if (!text) return;
    var dir = st.settings.dir === 'co' ? 'co' : 'fr';
    var lex = MC.searchLex(text, 5).filter(function (w) {
      var n = MC.norm(text);
      return MC.norm(w.es).indexOf(n) >= 0 || MC.norm(w.fr).indexOf(n) >= 0 || n.indexOf(MC.norm(dir === 'fr' ? w.fr : w.es)) >= 0;
    });
    var exact = lex.filter(function (w) { return MC.norm(dir === 'fr' ? w.fr : w.es) === MC.norm(text); })[0];
    v.tradResult = { dir: dir, lex: lex };
    if (exact) {
      v.tradResult.text = dir === 'fr' ? exact.es : exact.fr;
      v.tradResult.fromLex = true;
      pushHist(text, v.tradResult.text);
      MC.route(); return;
    }
    if (!navigator.onLine) {
      v.tradResult.error = 'Pas de réseau : seuls les résultats du lexique sont disponibles.';
      MC.route(); return;
    }
    v.tradLoading = true; MC.route();
    var pair = dir === 'fr' ? 'fr|es' : 'es|fr';
    fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + pair)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        v.tradLoading = false;
        var out = data && data.responseData && data.responseData.translatedText;
        if (!out || data.responseStatus !== 200) throw new Error('vide');
        out = out.replace(/&#39;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
        if (dir === 'fr') {
          var c = MC.colombianize(out);
          v.tradResult.text = c.text; v.tradResult.changes = c.changes;
        } else v.tradResult.text = out;
        pushHist(text, v.tradResult.text);
        MC.route();
      })
      .catch(function () {
        v.tradLoading = false;
        v.tradResult.error = 'La traduction en ligne n’a pas répondu. Réessaie dans un moment (seul le lexique marche hors ligne).';
        MC.route();
      });
  };
  function pushHist(src, out) {
    var h = MC.state.history || [];
    h = h.filter(function (x) { return x.src !== src; });
    h.unshift({ src: src, out: out, dir: MC.state.settings.dir });
    MC.state.history = h.slice(0, 20); MC.save();
  }

  /* ---------- Réglages ---------- */
  MC.screens.reglages = function () {
    var st = MC.state;
    var voices = MC.voices;
    var best = MC.bestVoice();
    return '<div class="screen full"><div class="row" style="gap:8px"><a class="icon-btn plain" href="#home" aria-label="Retour" style="margin-left:-10px;color:var(--ink)">' + I('back') + '</a><h1 class="h1">Réglages</h1></div>' +
      '<div class="card col" style="gap:12px"><div class="field"><label for="set-name">Ton prénom (utilisé dans les dialogues)</label><input id="set-name" value="' + esc(st.name) + '" autocomplete="given-name"></div></div>' +
      '<div class="card col" style="gap:12px"><b>Voix espagnole</b>' +
      (voices.length ? '<div class="field"><label for="set-voice">Voix</label><select id="set-voice"><option value="">Automatique (colombienne ou latino si possible)</option>' +
        voices.map(function (x) { return '<option value="' + esc(x.name) + '"' + (st.settings.voice === x.name ? ' selected' : '') + '>' + esc(x.name) + ' (' + esc(x.lang) + ')</option>'; }).join('') + '</select></div>' +
        '<span class="sub" style="font-size:13px">Voix utilisée : ' + esc(best ? best.name + ' (' + best.lang + ')' : 'aucune') + '</span>'
        : '<span class="sub">Aucune voix espagnole trouvée. Sur Android : Paramètres › Langues › Synthèse vocale › moteur Google › installer « Español (Estados Unidos) ».</span>') +
      '<div class="field"><label for="set-rate">Vitesse : <span id="rate-v">' + st.settings.rate.toFixed(2) + '</span></label><input id="set-rate" type="range" min="0.6" max="1.2" step="0.05" value="' + st.settings.rate + '"></div>' +
      '<button class="btn line sm" data-say="¡Hola, parce! ¿Qué más? Bienvenido a Colombia.">' + I('speaker', 's') + 'Tester la voix</button></div>' +
      '<div class="card col" style="gap:10px"><b>Micro</b><span class="sub" style="font-size:13px">' +
      (MC.canListen ? 'La reconnaissance vocale est disponible. Elle a besoin d’une connexion internet sur la plupart des téléphones.' : 'La reconnaissance vocale n’est pas disponible sur ce navigateur. Utilise Chrome sur Android pour les dialogues à l’oral.') + '</span>' +
      (MC.canListen ? '<button class="btn line sm" data-act="test-mic">' + I('mic', 's') + 'Tester le micro</button><span id="mic-out" class="sub" style="font-size:13px"></span>' : '') + '</div>' +
      '<div class="card col" style="gap:10px"><b>Ma progression</b><span class="sub" style="font-size:13px">Elle est enregistrée sur ce téléphone. Exporte-la pour la garder ou la transférer.</span>' +
      '<button class="btn line sm" data-act="export">Copier ma progression</button><button class="btn line sm" data-act="import">Importer une progression</button>' +
      '<button class="btn sm" data-act="reset" style="background:var(--bad-l);color:var(--bad)">Tout recommencer à zéro</button></div>' +
      '<p class="sub" style="text-align:center;font-size:12px">Mi Colombia · version ' + MC.VERSION + '</p></div>';
  };
  MC.after.reglages = function () {
    var n = document.getElementById('set-name');
    if (n) n.addEventListener('change', function () { MC.state.name = n.value.trim(); MC.save(); MC.toast('Prénom enregistré'); });
    var vs = document.getElementById('set-voice');
    if (vs) vs.addEventListener('change', function () { MC.state.settings.voice = vs.value; MC.save(); MC.route(); });
    var r = document.getElementById('set-rate');
    if (r) r.addEventListener('input', function () { MC.state.settings.rate = parseFloat(r.value); document.getElementById('rate-v').textContent = MC.state.settings.rate.toFixed(2); MC.save(); });
  };

  /* ---------- Bienvenue ---------- */
  MC.screens.welcome = function () {
    return '<div class="welcome"><img class="logo" src="icons/icon-192.png" alt="">' +
      '<div class="col" style="gap:8px"><div class="big-title">Mi <span class="y">Co</span><span class="b">lom</span><span class="r">bia</span></div><p class="intro">L’espagnol de Colombie, celui de Bogotá et de Cartagena, en 15 minutes par jour : une leçon, un quiz, puis un vrai petit dialogue à voix haute.</p></div>' +
      '<div class="field"><label for="w-name">Comment tu t’appelles ?</label><input id="w-name" placeholder="Ton prénom" value="' + esc(MC.state.name) + '" autocomplete="given-name"></div>' +
      '<button class="btn line" data-say="¡Hola! Bienvenido a Mi Colombia. ¿Qué más, parce?">' + I('speaker', 's') + 'Tester le son</button>' +
      '<button class="btn primary" data-act="welcome-go">¡Vamos!</button>' +
      '<p class="sub" style="font-size:12px;margin:0">Astuce : dans Chrome, menu ⋮ › « Ajouter à l’écran d’accueil » pour l’installer comme une appli.</p></div>';
  };
})();
