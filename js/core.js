/* Mi Colombia — noyau : utilitaires, données, stockage, voix, révisions */
(function () {
  'use strict';
  var MC = window.MC;
  MC.screens = {}; MC.after = {};

  /* ---------- Utilitaires ---------- */
  MC.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  MC.norm = function (s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[¿?¡!.,;:«»"“”()…—–\-\/]/g, ' ').replace(/\s+/g, ' ').trim();
  };
  MC.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  MC.pick = function (a, n) { return MC.shuffle(a).slice(0, n); };
  MC.today = function (d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  MC.toast = function (msg) {
    var old = document.querySelector('.toast'); if (old) old.remove();
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  };
  MC.withName = function (s) {
    var n = (MC.state && MC.state.name) || 'Corentin';
    return String(s).replace(/\{NOM\}/g, n);
  };
  MC.dateES = function () {
    var d = new Date();
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return days[d.getDay()] + ' ' + d.getDate() + ' de ' + months[d.getMonth()];
  };

  /* ---------- Icônes ---------- */
  var P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
    book: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    verbs: '<path d="M4 6h16M4 12h10M4 18h7"/><path d="M17 15l3 3-3 3"/>',
    trad: '<path d="M4 5h8M8 3v2M5 9c2 3.5 4.5 5.5 7.5 6.5M11 5c-1 4-3 7-6.5 9"/><path d="M13 21l4-9 4 9M14.4 18h5.2"/>',
    speaker: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 3 4 0-3 0-5 0-7z"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    down: '<path d="M5 9l7 7 7-7"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    swap: '<path d="M7 7h13l-4-4M17 17H4l4 4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-13M9 7V4h6v3"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/><path d="M8.5 10.5h7M8.5 14h4.5"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>'
  };
  MC.icon = function (name, cls) {
    return '<svg class="i ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || '') + '</svg>';
  };
  MC.regPill = function (reg, sm) {
    if (reg === 'b') return '<span class="pill b ' + (sm ? 'sm' : '') + '">Rolo</span>';
    if (reg === 'c') return '<span class="pill c ' + (sm ? 'sm' : '') + '">Costeño</span>';
    return '';
  };

  /* ---------- Stockage ---------- */
  var KEY = 'micolombia_v1';
  var DEFAULT = {
    name: '', welcomed: false,
    pos: { p: 0, s: 0 },
    done: {}, lastDone: '', streak: { last: '', count: 0 },
    cards: {}, mastered: {}, fav: {}, custom: [], history: [],
    settings: { rate: 0.9, voice: '', dir: 'es' }
  };
  MC.load = function () {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      MC.state = Object.assign(JSON.parse(JSON.stringify(DEFAULT)), s || {});
      MC.state.settings = Object.assign({}, DEFAULT.settings, (s && s.settings) || {});
    } catch (e) { MC.state = JSON.parse(JSON.stringify(DEFAULT)); }
  };
  MC.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(MC.state)); } catch (e) { MC.toast('Impossible d’enregistrer la progression'); }
  };
  MC.exportState = function () { return JSON.stringify(MC.state); };
  MC.importState = function (txt) {
    var s = JSON.parse(txt);
    if (!s || typeof s !== 'object' || !s.pos) throw new Error('format');
    localStorage.setItem(KEY, JSON.stringify(s)); MC.load();
  };

  /* ---------- Données ---------- */
  MC.buildData = function () {
    MC.LEX = MC.parseLex();
    MC.LEXBYID = {};
    MC.LEX.forEach(function (w) { MC.LEXBYID[w.id] = w; });
    // Mots personnels
    (MC.state.custom || []).forEach(function (w) { MC.LEXBYID[w.id] = w; });
    // Répartition des mots par séance (environ 7 par séance, thème de la séance d'abord)
    var pools = {};
    MC.LEX.forEach(function (w) { if (w.cat !== 'expr') (pools[w.cat] = pools[w.cat] || []).push(w.id); });
    var remaining = MC.LEX.filter(function (w) { return w.cat !== 'expr'; }).length;
    var slots = 0;
    MC.PALIERS.forEach(function (pal) { pal.seances.forEach(function (s) { if (!s.test) slots++; }); });
    var g = 0, seenCats = [];
    MC.SEANCES = [];
    MC.PALIERS.forEach(function (pal, pi) {
      var cats = [];
      pal.seances.forEach(function (s) { if (s.cat && cats.indexOf(s.cat) < 0) cats.push(s.cat); });
      cats.forEach(function (c) { if (seenCats.indexOf(c) < 0) seenCats.push(c); });
      pal.seances.forEach(function (s, si) {
        s.pi = pi; s.si = si; s.g = g; s.key = pal.id + '-' + si;
        s.expr = MC.EXPR[g % MC.EXPR.length][0];
        s.exprId = 'expr:' + s.expr;
        s.words = [];
        if (!s.test) {
          var n = Math.min(9, Math.ceil(remaining / slots));
          var order = [s.cat].concat(cats.filter(function (c) { return c !== s.cat; }), seenCats, MC.CATS.map(function (c) { return c.id; }));
          for (var k = 0; k < order.length && s.words.length < n; k++) {
            var pool = pools[order[k]] || [];
            while (pool.length && s.words.length < n) s.words.push(pool.shift());
          }
          remaining -= s.words.length; slots--;
        }
        // Dialogue : 2 séances par scène, la 2e sans aide ; le test reprend la dernière scène sans aide
        var di = s.test ? 6 : Math.floor(si / 2);
        s.dialogue = MC.DIALOGUES[pal.id][di];
        s.help = s.test ? false : (si % 2 === 0);
        MC.SEANCES.push(s);
        g++;
      });
    });
  };
  MC.seanceAt = function (p, s) { return MC.PALIERS[p] && MC.PALIERS[p].seances[s]; };
  MC.wordsOfPalier = function (pi, upto) {
    var ids = [];
    MC.PALIERS[pi].seances.forEach(function (s, si) { if (upto == null || si <= upto) ids = ids.concat(s.words); });
    return ids;
  };
  MC.learnedWords = function () {
    return Object.keys(MC.state.cards).filter(function (id) { return MC.LEXBYID[id]; });
  };
  MC.isDone = function (s) { return !!MC.state.done[s.key]; };
  MC.isUnlocked = function (s) {
    var pos = MC.state.pos;
    return s.pi < pos.p || (s.pi === pos.p && s.si <= pos.s) || MC.isDone(s);
  };
  MC.currentSeance = function () {
    var pos = MC.state.pos;
    return MC.seanceAt(pos.p, pos.s) || null;
  };

  /* Fin de séance : progression, série, cartes */
  MC.completeSeance = function (s, result) {
    var st = MC.state;
    var today = MC.today();
    var prev = st.done[s.key];
    var passed = !s.test || result.quizPct >= 70;
    if (passed) st.done[s.key] = { date: today, quiz: result.quizPct, oral: result.oral };
    // série de jours
    if (st.streak.last !== today) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      st.streak.count = (st.streak.last === MC.today(y)) ? st.streak.count + 1 : 1;
      st.streak.last = today;
    }
    st.lastDone = today;
    // cartes pour les nouveaux mots et l'expression
    s.words.concat([s.exprId]).forEach(function (id) {
      if (!st.cards[id]) st.cards[id] = { box: 1, due: Date.now() + 20 * 3600 * 1000 };
    });
    // avancer
    if (passed && !prev) {
      var pos = st.pos;
      if (s.pi === pos.p && s.si === pos.s) {
        if (pos.s + 1 < MC.PALIERS[pos.p].seances.length) pos.s++;
        else if (pos.p + 1 < MC.PALIERS.length) { pos.p++; pos.s = 0; }
        else pos.s = MC.PALIERS[pos.p].seances.length; // tout est fini
      }
    }
    MC.save();
    return passed;
  };

  /* ---------- Révisions (répétition espacée) ---------- */
  var DAY = 24 * 3600 * 1000;
  MC.INTERVALS = [0, 1, 2, 4, 7, 15, 30, 60, 120];
  MC.dueCards = function () {
    var now = Date.now();
    return Object.keys(MC.state.cards).filter(function (id) {
      return MC.LEXBYID[id] && MC.state.cards[id].due <= now;
    }).sort(function (a, b) { return MC.state.cards[a].due - MC.state.cards[b].due; });
  };
  MC.gradePreview = function (id) {
    var c = MC.state.cards[id] || { box: 0 };
    function fmt(ms) {
      if (ms < 3600 * 1000) return Math.max(1, Math.round(ms / 60000)) + ' min';
      var d = Math.round(ms / DAY); return d + (d > 1 ? ' jours' : ' jour');
    }
    return [fmt(60000), fmt(c.box === 0 ? 600000 : Math.max(1, MC.INTERVALS[c.box] / 2) * DAY),
      fmt(MC.INTERVALS[Math.min(8, c.box + 1)] * DAY), fmt(MC.INTERVALS[Math.min(8, c.box + 2)] * DAY)];
  };
  MC.grade = function (id, g) {
    var c = MC.state.cards[id] || { box: 0, due: 0 };
    var now = Date.now();
    if (g === 0) { c.box = 0; c.due = now + 60000; }
    else if (g === 1) { c.due = now + (c.box === 0 ? 600000 : Math.max(1, MC.INTERVALS[c.box] / 2) * DAY); }
    else if (g === 2) { c.box = Math.min(8, c.box + 1); c.due = now + MC.INTERVALS[c.box] * DAY; }
    else { c.box = Math.min(8, c.box + 2); c.due = now + MC.INTERVALS[c.box] * DAY; }
    MC.state.cards[id] = c; MC.save();
  };
  MC.markWrong = function (id) {
    if (!MC.LEXBYID[id]) return;
    MC.state.cards[id] = { box: 0, due: Date.now() };
  };
  MC.isMastered = function (id) {
    return !!MC.state.mastered[id] || (MC.state.cards[id] && MC.state.cards[id].box >= 4);
  };

  /* ---------- Voix : synthèse ---------- */
  MC.voices = [];
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    MC.voices = speechSynthesis.getVoices().filter(function (v) { return /^es/i.test(v.lang); });
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  MC.bestVoice = function () {
    if (!MC.voices.length) loadVoices();
    var want = MC.state.settings.voice;
    if (want) { var v = MC.voices.filter(function (x) { return x.name === want; })[0]; if (v) return v; }
    var order = ['es-CO', 'es_CO', 'es-US', 'es_US', 'es-419', 'es-MX', 'es_MX'];
    for (var i = 0; i < order.length; i++) {
      var m = MC.voices.filter(function (x) { return x.lang.replace('_', '-').toLowerCase() === order[i].replace('_', '-').toLowerCase(); });
      if (m.length) return m[0];
    }
    var nonSpain = MC.voices.filter(function (x) { return !/es[-_]ES/i.test(x.lang); });
    return nonSpain[0] || MC.voices[0] || null;
  };
  MC.speak = function (text, opts) {
    opts = opts || {};
    if (!('speechSynthesis' in window)) { MC.toast('La voix n’est pas disponible sur ce navigateur'); return; }
    speechSynthesis.cancel();
    var clean = MC.withName(text).replace(/—/g, ', ').replace(/…/g, '');
    var u = new SpeechSynthesisUtterance(clean);
    var v = MC.bestVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'es-CO';
    u.rate = opts.rate || MC.state.settings.rate || 0.9;
    if (opts.onend) { u.onend = opts.onend; u.onerror = opts.onend; }
    speechSynthesis.speak(u);
  };
  MC.speakFr = function (text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text); u.lang = 'fr-FR'; u.rate = 1;
    speechSynthesis.speak(u);
  };

  /* ---------- Voix : reconnaissance ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  MC.canListen = !!SR;
  MC.listen = function (lang, cb, onEnd) {
    if (!SR) { cb(null, 'unsupported'); return null; }
    var r = new SR();
    r.lang = lang || 'es-CO';
    r.maxAlternatives = 5;
    r.interimResults = false;
    var got = false;
    r.onresult = function (e) {
      got = true;
      var alts = [];
      for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      cb(alts, null);
    };
    r.onerror = function (e) { got = true; cb(null, e.error || 'error'); };
    r.onend = function () { if (!got) cb(null, 'no-speech'); if (onEnd) onEnd(); };
    try { r.start(); } catch (e) { cb(null, 'error'); }
    return r;
  };

  /* Similarité entre ce qui a été entendu et une réponse attendue (0 à 1) */
  function lev(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function tokEq(a, b) {
    if (a === b) return true;
    if (a.length >= 4 && b.length >= 4) return lev(a, b) <= (Math.max(a.length, b.length) >= 7 ? 2 : 1);
    // s finales avalées (costeño) ou mal reconnues
    return a.replace(/s$/, '') === b.replace(/s$/, '');
  }
  /* Réponse libre acceptée : la phrase entendue reprend au moins un mot important
     de la question ou des réponses possibles (même racine). */
  var STOPW = ' el la los las un una unos unas de del al a en y o que por para con es me te se le lo mi tu su yo usted ustedes muy pues si no ya hay como mas pero '.split(' ');
  function contentWords(t) { return MC.norm(MC.withName(t)).split(' ').filter(function (w) { return w && w.length >= 3 && STOPW.indexOf(w) < 0; }); }
  MC.freeAccept = function (heard, npcText, opts) {
    var h = contentWords(heard);
    if (MC.norm(heard).split(' ').length < 2 || !h.length) return false;
    var pool = contentWords(npcText);
    opts.forEach(function (o) { pool = pool.concat(contentWords(o[0])); });
    return h.some(function (w) { return pool.some(function (p) { return p.slice(0, 4) === w.slice(0, 4); }); });
  };
  MC.ACKS = [['Listo.', 'D\u2019accord.'], ['Ah, bueno.', 'Ah, bon.'], ['Perfecto.', 'Parfait.'], ['Ya veo.', 'Je vois.'], ['Muy bien.', 'Très bien.'], ['Claro.', 'Bien sûr.']];
  MC.cap = function (t) { t = String(t || '').trim(); return t.charAt(0).toUpperCase() + t.slice(1); };
  MC.similarity = function (heard, expected) {
    var name = MC.norm((MC.state && MC.state.name) || 'Corentin');
    var h = MC.norm(heard).split(' ').filter(Boolean);
    var e = MC.norm(MC.withName(expected)).split(' ').filter(function (t) { return t && t !== name; });
    if (!e.length || !h.length) return 0;
    var used = [], match = 0;
    e.forEach(function (t) {
      for (var i = 0; i < h.length; i++) if (!used[i] && tokEq(t, h[i])) { used[i] = true; match++; break; }
    });
    var recall = match / e.length, prec = match / h.length;
    return recall * 0.75 + prec * 0.25;
  };
})();
