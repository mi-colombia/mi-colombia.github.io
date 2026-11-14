/* Mi Colombia — écrans : accueil, parcours, lexique, verbes, traducteur, réglages */
(function () {
  'use strict';
  var MC = window.MC, esc = MC.esc, I = MC.icon;

  /* ---------- Navigation ---------- */
  var TABS = [['home', 'Accueil', 'home'], ['parcours', 'Parcours', 'flag'], ['lexique', 'Lexique', 'book'], ['verbes', 'Verbes', 'verbs'], ['trad', 'Traducteur', 'trad']];
  MC.nav = function (active) {
    return '<nav class="tabs"><div class="in">' + TABS.map(function (t) {
      return '<a href="#' + t[0] + '" class="' + (t[0] === active ? 'on' : '') + '"><span class="ico">' + I(t[2]) + '</span>' + t[1] + '</a>';
    }).join('') + '</div></nav>';
  };
  MC.go = function (hash) { if (location.hash === '#' + hash) MC.route(); else location.hash = hash; };

  MC.view = {}; // état éphémère des écrans

  /* Vignettes des catégories */
  MC.CAT_LOOK = {
    politesse: ['👋', '#FFF0C2'], presenter: ['🙋', '#E6F0FF'], famille: ['👨‍👩‍👧', '#FFE6DA'], nombres: ['💰', '#E7F7DF'],
    temps: ['⏰', '#EFE7FB'], aeroport: ['✈️', '#E0F3FB'], taxi: ['🚕', '#FFF0C2'], ville: ['🗺️', '#E7F7DF'],
    resto: ['🍽️', '#FFE6DA'], marche: ['🥭', '#FFF0C2'], plage: ['🏖️', '#E0F3FB'], soiree: ['💃', '#FDE3EF'],
    argot: ['🤙', '#EFE7FB'], vie: ['💬', '#E6F0FF'], sante: ['🚑', '#FFE4E4'], expr: ['☀️', '#FFF0C2'], mine: ['⭐', '#FFF0C2']
  };
  MC.thumb = function (cat, size) {
    var l = MC.CAT_LOOK[cat] || ['💬', '#FFF0C2'];
    return '<span class="thumb emoji" style="background:' + l[1] + (size ? ';width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.55) + 'px' : '') + '" aria-hidden="true">' + l[0] + '</span>';
  };

  /* Badges */
  MC.badges = function () {
    var st = MC.state, done = Object.keys(st.done).length, words = MC.learnedWords().length;
    var palierDone = function (i) { return MC.PALIERS[i].seances.every(MC.isDone); };
    return [
      ['🎒', 'Bienvenido', done >= 1], ['🔥', '7 jours de suite', st.streak.count >= 7],
      ['📚', '100 mots', words >= 100], ['✈️', 'Llegar', palierDone(0)], ['🚕', 'Moverse', palierDone(1)],
      ['🥭', 'Comer', palierDone(2)], ['💃', 'Rumbear', palierDone(3)], ['🇨🇴', 'Conversar', palierDone(4)]
    ];
  };

  /* ---------- Accueil ---------- */
  MC.screens.home = function () {
    var st = MC.state, s = MC.currentSeance();
    var doneToday = st.lastDone === MC.today();
    var due = MC.dueCards().length;
    var streakOk = st.streak.last === MC.today() || (function () { var y = new Date(); y.setDate(y.getDate() - 1); return st.streak.last === MC.today(y); })();
    var streak = streakOk ? st.streak.count : 0;
    var doneAll = Object.keys(st.done).length;
    var pct = Math.round(100 * doneAll / MC.SEANCES.length);
    var name = st.name || 'parce';
    var html = '<div class="screen">' +
      '<div class="between"><a class="icon-btn plain" href="#reglages" aria-label="Réglages" style="margin-left:-8px">' + I('gear') + '</a>' +
      '<a class="avatar-me" href="#reglages" aria-label="Mon profil">' + esc((st.name || 'P').charAt(0).toUpperCase()) + '</a></div>' +
      '<div class="col" style="gap:4px"><h1 class="hello">¡Hola ' + esc(name) + '! <span class="squiggle" aria-hidden="true"></span></h1>' +
      '<span class="hello-sub">¿Listo para aprender hoy?</span></div>' +
      '<div class="card col prog-card" style="gap:10px"><div class="between"><span class="row" style="gap:8px;font-weight:900;font-size:16px"><span class="emoji" style="font-size:22px">🔥</span>Ma progression</span>' +
      '<a href="#parcours">Voir tout ›</a></div>' +
      '<div class="between" style="align-items:flex-end"><span class="big">' + pct + ' %</span><span class="streak">' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de suite</span></div>' +
      '<div class="bar"><div style="width:' + Math.max(pct, 3) + '%"></div></div>' +
      '<span class="sub" style="text-align:center;font-weight:700">Tu objectif : parler avec confiance à Bogotá et Cartagena <span class="emoji">💪</span></span></div>';
    if (!s) {
      html += '<a class="banner" href="#parcours"><img src="images/banner.webp" alt="Paysage colombien"><div class="cap"><span class="label">Parcours terminé</span>' +
        '<h2>¡Felicitaciones! Tu as fini les 5 paliers.</h2><span class="btn sun">Revoir le parcours</span></div></a>';
    } else {
      html += '<a class="banner" href="#seance/' + s.pi + '/' + s.si + '"><img src="images/banner.webp" alt="Paysage colombien">' +
        '<div class="cap"><div class="between"><span class="label">' + (doneToday ? 'Séance du jour faite <span class="emoji">✅</span>' : 'Séance du jour · 15 min') + '</span>' +
        '<span class="pill sun">Palier ' + (s.pi + 1) + ' · ' + esc(MC.PALIERS[s.pi].name) + '</span></div>' +
        '<h2>' + esc(s.t) + '</h2><span class="btn sun">' + (doneToday ? 'Faire la séance suivante' : 'Commencer la séance') + ' →</span></div></a>';
    }
    var exprSeance = s || MC.SEANCES[MC.SEANCES.length - 1];
    var e = MC.LEXBYID[exprSeance.exprId];
    html += '<h2 class="section-title">Expression du jour</h2>' +
      '<div class="expr-hero"><img src="images/girl.webp" alt="">' +
      '<button class="bub" data-say="' + esc(e.es) + '" style="border:none;text-align:left;cursor:pointer"><span class="es">' + esc(e.es) + '</span>' +
      '<b style="font-size:15px">' + esc(e.fr) + '</b><span class="sub" style="font-size:13px">' + esc(e.ctx) + '</span>' +
      '<span class="row" style="gap:6px;font-size:13px;font-weight:800;color:#B07A00">' + I('speaker', 's') + 'Écouter ' + (MC.regPill(e.reg, true) || '') + '</span></button></div>';
    html += '<h2 class="section-title">Mes modules</h2><div class="modules">' +
      '<a class="module" href="#revision"><span class="emoji">🃏</span>Révisions<small>' + (due ? due + ' carte' + (due > 1 ? 's' : '') + ' à revoir' : 'À jour') + '</small></a>' +
      '<a class="module" href="#lexique"><span class="emoji">💬</span>Vocabulaire<small>' + MC.learnedWords().length + ' appris</small></a>' +
      '<a class="module" href="#verbes"><span class="emoji">✍️</span>Conjugaison<small>-AR, -ER, -IR…</small></a>' +
      '<a class="module" href="#trad"><span class="emoji">🌎</span>Traducteur<small>Parler colombien</small></a>' +
      '<a class="module" href="#parcours"><span class="emoji">🏆</span>Parcours<small>' + doneAll + ' / ' + MC.SEANCES.length + ' séances</small></a>' +
      '<a class="module" href="#lexique/expr"><span class="emoji">🗣️</span>Expressions<small>Argot et dichos</small></a></div>';
    html += '<div class="between"><h2 class="section-title">Mes badges</h2></div><div class="badges">' + MC.badges().map(function (b) {
      return '<div class="badge ' + (b[2] ? '' : 'locked') + '"><span class="medal emoji">' + b[0] + '</span>' + esc(b[1]) + '</div>';
    }).join('') + '</div>';
    html += '<img class="fleurs" src="images/fleurs.webp" alt="">';
    return html + '</div>' + MC.nav('home');
  };

  /* ---------- Parcours ---------- */
  MC.screens.parcours = function () {
    var pos = MC.state.pos;
    if (MC.view.openPalier == null) MC.view.openPalier = Math.min(pos.p, 4);
    var html = '<div class="screen"><h1 class="h1">Mon parcours</h1>' +
      '<div class="parcours-hero"><img src="images/fort.webp" alt="Cartagena"><div class="txt"><b>Poco a poco… ¡Tú puedes!</b><br><span style="font-size:13px">5 paliers · 14 séances chacun · environ 2 semaines par palier</span></div></div>';
    var EMO = ['✈️', '🚕', '🥭', '💃', '🗣️'];
    MC.PALIERS.forEach(function (pal, pi) {
      var doneCount = pal.seances.filter(MC.isDone).length;
      var status = pi < pos.p || doneCount === pal.seances.length ? 'done' : (pi === pos.p ? 'cur' : 'lock');
      var open = MC.view.openPalier === pi;
      html += '<div class="palier ' + (status === 'cur' ? 'cur' : status === 'lock' ? 'locked' : '') + '">' +
        '<button class="palier-head" data-act="toggle-palier" data-p="' + pi + '">' +
        '<div class="dot ' + status + ' emoji" style="font-size:24px">' + (status === 'lock' ? I('lock', 's') : EMO[pi]) + '</div>' +
        '<div class="grow col" style="gap:3px"><div class="between"><b style="font-size:17px">' + (pi + 1) + ' · ' + esc(pal.name) + '</b>' +
        '<span style="font-size:12px;font-weight:900;color:' + (status === 'done' ? '#B07A00' : status === 'cur' ? 'var(--ink)' : 'var(--muted)') + '">' +
        (status === 'done' ? 'Validé ✓' : status === 'cur' ? doneCount + ' / 14' : 'Verrouillé') + '</span></div>' +
        '<span style="font-size:13px;color:var(--ink2);font-weight:600">' + esc(pal.fr) + ' : ' + esc(pal.desc) + '</span>' +
        '<span style="font-size:12px;color:var(--muted)">' + esc(pal.grammar) + '</span></div>' + I(open ? 'down' : 'chev', 's') + '</button>';
      if (status === 'cur') html += '<div style="padding:0 16px 14px"><div class="bar"><div style="width:' + Math.max(3, Math.round(100 * doneCount / 14)) + '%"></div></div></div>';
      if (open) {
        html += '<div class="seance-list">';
        pal.seances.forEach(function (s, si) {
          var done = MC.isDone(s), unlocked = MC.isUnlocked(s);
          var cls = done ? 'done' : unlocked ? 'cur' : 'lock';
          html += '<button class="seance-row ' + cls + '" ' + (unlocked ? 'data-href="#seance/' + pi + '/' + si + '"' : 'disabled') + '>' +
            '<span class="n">' + (done ? I('check', 's') : si + 1) + '</span><span class="grow" style="font-size:15px;font-weight:' + (cls === 'cur' ? 900 : 700) + '">' + esc(s.t) + '</span>' +
            (s.test ? '<span class="pill sun sm">Test</span>' : '') + (unlocked ? I('chev', 's') : I('lock', 's')) + '</button>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    return html + '</div>' + MC.nav('parcours');
  };

  /* ---------- Lexique ---------- */
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-9.2-8.6C1.3 8.5 3 5 6.4 5c2 0 3.3 1.1 4 2.3h3.2C14.3 6.1 15.6 5 17.6 5 21 5 22.7 8.5 21.2 11.4 19 15.6 12 20 12 20z" transform="translate(0 -.5)"/></svg>';
  function wordRow(w) {
    var m = MC.isMastered(w.id), fav = !!(MC.state.fav && MC.state.fav[w.id]);
    return '<div class="word-row">' + MC.thumb(w.cat) +
      '<div class="grow col" style="gap:2px"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="es">' + esc(w.es) + '</span>' + MC.regPill(w.reg, true) +
      (w.type === 'v' ? '<span class="pill sm" style="background:var(--sand);color:var(--ink2)">verbe</span>' : '') + '</div>' +
      '<span class="fr">(' + esc(w.fr) + ')</span>' +
      (w.ctx ? '<span class="fr" style="color:var(--ink2)">' + esc(w.ctx) + '</span><span class="fr" style="font-style:italic">« ' + esc(w.ex) + ' » ' + esc(w.exFr) + '</span>' : '') +
      (m ? '<span class="mastered">★ Maîtrisé</span>' : '') + '</div>' +
      '<button class="icon-btn sm" data-say="' + esc(w.es) + '" aria-label="Écouter">' + I('speaker', 's') + '</button>' +
      (w.cat === 'mine' ? '<button class="icon-btn sm plain" data-act="del-word" data-id="' + esc(w.id) + '" aria-label="Supprimer">' + I('trash', 's') + '</button>' : '') +
      '<button class="heart ' + (fav ? 'on' : '') + '" data-act="toggle-fav" data-id="' + esc(w.id) + '" aria-label="' + (fav ? 'Retirer des favoris' : 'Ajouter aux favoris') + '">' + HEART + '</button></div>';
  }
  MC.wordRow = wordRow;
  function allCats() {
    return MC.CATS.concat([{ id: 'expr', name: 'Expressions' }, { id: 'mine', name: 'Mes mots' }]);
  }
  function wordsOf(cat) {
    if (cat === 'mine') return MC.state.custom || [];
    if (cat === 'fav') return Object.keys(MC.state.fav || {}).map(function (id) { return MC.LEXBYID[id]; }).filter(Boolean);
    return MC.LEX.filter(function (w) { return w.cat === cat; });
  }
  MC.screens.lexique = function (arg) {
    var v = MC.view;
    if (arg) {
      var cat = arg === 'fav' ? { id: 'fav', name: 'Mes favoris' } : allCats().filter(function (c) { return c.id === arg; })[0];
      if (!cat) return MC.screens.lexique();
      var ws = wordsOf(arg);
      var f = v.lexFilter || 'all';
      var shown = ws.filter(function (w) { return f === 'all' || (f === 'todo' ? !MC.isMastered(w.id) : MC.isMastered(w.id)); });
      var mastered = ws.filter(function (w) { return MC.isMastered(w.id); }).length;
      return '<div class="screen"><div class="row" style="gap:8px"><a class="icon-btn plain" href="#lexique" aria-label="Retour" style="margin-left:-10px">' + I('back') + '</a>' +
        '<div class="grow col" style="gap:0"><h1 style="font-size:26px;font-weight:900">' + esc(cat.name) + '</h1><span class="sub" style="font-size:13px">' + ws.length + ' entrées · ' + mastered + ' maîtrisées</span></div>' +
        (arg === 'mine' ? '<button class="icon-btn" data-act="add-word" aria-label="Ajouter un mot">' + I('plus') + '</button>' : '<span class="emoji" style="font-size:28px">' + (arg === 'fav' ? '⭐' : (MC.CAT_LOOK[arg] || ['💬'])[0]) + '</span>') + '</div>' +
        '<div class="chips">' + [['all', 'Tous'], ['todo', 'À apprendre'], ['ok', 'Maîtrisés']].map(function (c) {
          return '<button class="chip ' + (f === c[0] ? 'on' : '') + '" data-act="lex-filter" data-f="' + c[0] + '">' + c[1] + '</button>';
        }).join('') + '</div>' +
        (shown.length ? '<div class="list">' + shown.map(wordRow).join('') + '</div>' :
          '<div class="empty">' + (arg === 'mine' ? 'Ajoute ici tes propres mots, ou depuis le traducteur.' : arg === 'fav' ? 'Touche le cœur d’un mot pour le retrouver ici.' : 'Rien ici pour le moment.') + '</div>') +
        '</div>' + MC.nav('lexique');
    }
    var q = v.lexQuery || '';
    var favCount = wordsOf('fav').length;
    var html = '<div class="screen"><div class="between"><h1 class="h1">Mon vocabulaire</h1><span class="emoji" style="font-size:30px">⭐</span></div>' +
      '<div class="chips"><a class="chip on" href="#lexique" style="display:inline-flex;align-items:center;text-decoration:none">Thèmes</a>' +
      '<a class="chip" href="#lexique/fav" style="display:inline-flex;align-items:center;text-decoration:none">Favoris (' + favCount + ')</a>' +
      '<button class="chip" data-act="add-word">+ Ajouter un mot</button></div>' +
      '<label class="search">' + I('search') + '<input type="search" id="lex-q" value="' + esc(q) + '" placeholder="Chercher en français ou en espagnol" aria-label="Chercher dans le lexique" autocomplete="off"></label>' +
      '<div id="lex-results"></div>' +
      '<div class="cat-grid" id="lex-cats">' + allCats().map(function (c) {
        var ws = wordsOf(c.id); var m = ws.filter(function (w) { return MC.isMastered(w.id); }).length;
        var pct = ws.length ? Math.round(100 * m / ws.length) : 0;
        return '<a class="cat" href="#lexique/' + c.id + '">' + MC.thumb(c.id) + '<b>' + esc(c.name) + '</b><span>' + ws.length + ' entrées · ' + m + ' maîtrisées</span>' +
          '<div class="bar" style="height:6px"><div style="width:' + pct + '%"></div></div></a>';
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
    return '<div class="welcome"><div class="art" role="img" aria-label="Mi Colombia : Aprende, Habla, Disfruta"></div><div class="panel">' +
      '<p class="intro" style="text-align:center;font-weight:700">L\u2019espagnol de Colombie, celui de Bogotá et de Cartagena, en 15 minutes par jour.</p>' +
      '<div class="field"><label for="w-name">Comment tu t\u2019appelles ?</label><input id="w-name" placeholder="Ton prénom" value="' + esc(MC.state.name) + '" autocomplete="given-name"></div>' +
      '<button class="btn primary" data-act="welcome-go">Commencer →</button>' +
      '<button class="btn line sm" data-say="¡Hola! Bienvenido a Mi Colombia. ¿Qué más, parce?">' + I('speaker', 's') + 'Tester le son</button>' +
      '<p class="sub" style="font-size:12px;margin:0;text-align:center">Astuce : dans Chrome, menu ⋮ › « Ajouter à l\u2019écran d\u2019accueil » pour l\u2019installer.</p></div></div>';
  };
})();
