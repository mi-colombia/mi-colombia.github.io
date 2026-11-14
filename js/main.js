/* Mi Colombia — routeur, événements, démarrage */
(function () {
  'use strict';
  var MC = window.MC;
  MC.VERSION = '2.4.0';
  var app = document.getElementById('app');

  MC.modal = function (html) {
    MC.closeModal();
    var bg = document.createElement('div');
    bg.className = 'modal-bg'; bg.id = 'modal';
    bg.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + html + '</div>';
    bg.addEventListener('click', function (e) { if (e.target === bg) MC.closeModal(); });
    document.body.appendChild(bg);
    var f = bg.querySelector('input,textarea'); if (f) setTimeout(function () { f.focus(); }, 50);
  };
  MC.closeModal = function () { var m = document.getElementById('modal'); if (m) m.remove(); };

  var timer = null;
  MC.route = function () {
    var h = (location.hash || '#home').slice(1).split('/');
    var name = h[0] || 'home', arg = h[1];
    if (!MC.state.welcomed) name = 'welcome';
    if (name === 'seance') {
      var pi = +h[1], si = +h[2];
      if (!MC.sess || MC.sess.s.pi !== pi || MC.sess.s.si !== si) {
        if (!MC.startSeance(pi, si)) return;
      }
    } else if (MC.sess && MC.sess.steps[MC.sess.stepI] === 'end') MC.sess = null;
    var fn = MC.screens[name] || MC.screens.home;
    if (!MC.screens[name]) name = 'home';
    var active = document.activeElement && document.activeElement.id;
    app.innerHTML = fn(arg);
    if (MC.after[name]) MC.after[name](arg);
    if (active === 'lex-q') { var q = document.getElementById('lex-q'); if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); } }
    clearInterval(timer);
    if (name === 'seance') { MC.tickTimer(); timer = setInterval(MC.tickTimer, 1000); }
  };

  var lastHash = location.hash;
  window.addEventListener('hashchange', function () {
    var leavingConv = lastHash.indexOf('#conv/') === 0 && location.hash.indexOf('#conv/') !== 0;
    if (leavingConv && MC.conv && MC.conv.phase !== 'end' && MC.conv.turn > 0) {
      if (!confirm('Quitter la conversation ?')) { history.replaceState(null, '', lastHash); return; }
    }
    if (leavingConv) MC.conv = null;
    var leavingSession = lastHash.indexOf('#seance') === 0 && location.hash.indexOf('#seance') !== 0;
    if (leavingSession && MC.sess && MC.sess.steps[MC.sess.stepI] !== 'end') {
      if (!confirm('Quitter la séance ? Ce que tu as fait dans cette séance ne sera pas enregistré.')) {
        history.replaceState(null, '', lastHash); return;
      }
      MC.sess = null;
    }
    if (location.hash.indexOf('#revision') !== 0) MC.rev = null;
    if (location.hash.indexOf('#lexique') !== 0) { MC.view.lexQuery = ''; }
    if (location.hash !== lastHash) window.scrollTo(0, 0);
    lastHash = location.hash;
    MC.closeModal();
    MC.route();
  });

  /* Clics */
  document.addEventListener('click', function (e) {
    var say = e.target.closest('[data-say]');
    if (say) { e.preventDefault(); MC.speak(say.getAttribute('data-say')); return; }
    var href = e.target.closest('[data-href]');
    if (href) { location.hash = href.getAttribute('data-href'); return; }
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act'), v = MC.view;
    switch (act) {
      case 'welcome-go':
        MC.state.name = (document.getElementById('w-name').value || '').trim();
        MC.state.welcomed = true; MC.save(); location.hash = 'home'; MC.route(); break;
      case 'toggle-palier':
        var p = +el.getAttribute('data-p'); v.openPalier = v.openPalier === p ? -1 : p; MC.route(); break;
      case 'quit-seance':
        location.hash = 'home'; break;
      case 'next-step': MC.nextStep(); break;
      case 'answer': MC.answerQ(+el.getAttribute('data-i')); break;
      case 'next-q': MC.nextQ(); break;
      case 'tile':
        var Q = MC.sess.quiz, t = +el.getAttribute('data-t');
        if (!Q.answered && Q.order.indexOf(t) < 0) { Q.order.push(t); MC.route(); } break;
      case 'untile':
        var Q2 = MC.sess.quiz; if (!Q2.answered) { Q2.order.splice(+el.getAttribute('data-k'), 1); MC.route(); } break;
      case 'check-order': MC.checkOrder(); break;
      case 'mic': MC.dlgMic(); break;
      case 'pick-opt': MC.dlgPick(+el.getAttribute('data-i'), null); break;
      case 'show-help': MC.sess.dlg.showHelp = true; MC.route(); break;
      case 'show-tr': MC.sess.dlg.shownTr[+el.getAttribute('data-k')] = true; MC.route(); break;
      case 'flip': if (MC.rev) { MC.rev.flipped = !MC.rev.flipped; if (MC.rev.flipped && MC.state.settings.revDir === 'fr') MC.speak(MC.LEXBYID[MC.rev.queue[0]].es); MC.route(); } break;
      case 'grade': MC.gradeRev(+el.getAttribute('data-g')); break;
      case 'rev-dir': MC.state.settings.revDir = MC.state.settings.revDir === 'fr' ? 'es' : 'fr'; MC.save(); if (MC.rev) MC.rev.flipped = false; MC.route(); break;
      case 'rev-free': MC.startRevision(true); MC.route(); break;
      case 'lex-filter': v.lexFilter = el.getAttribute('data-f'); MC.route(); break;
      case 'toggle-master':
        var id = el.getAttribute('data-id');
        if (MC.isMastered(id)) { delete MC.state.mastered[id]; if (MC.state.cards[id] && MC.state.cards[id].box >= 4) MC.state.cards[id].box = 3; }
        else MC.state.mastered[id] = true;
        MC.save();
        el.classList.toggle('on', MC.isMastered(id)); break;
      case 'toggle-fav':
        var fid = el.getAttribute('data-id'); MC.state.fav = MC.state.fav || {};
        if (MC.state.fav[fid]) delete MC.state.fav[fid]; else MC.state.fav[fid] = true;
        MC.save(); el.classList.toggle('on', !!MC.state.fav[fid]); break;
      case 'conv-level': MC.state.settings.convLevel = el.getAttribute('data-v'); MC.save(); MC.route(); break;
      case 'conv-len': MC.state.settings.convLen = el.getAttribute('data-v'); MC.save(); MC.route(); break;
      case 'conv-quit': location.hash = 'parler'; break;
      case 'conv-tr': MC.conv.shownTr[+el.getAttribute('data-k')] = true; MC.conv.helps++; MC.route(); break;
      case 'conv-say': MC.speak(MC.conv.msgs[+el.getAttribute('data-k')].es); break;
      case 'conv-say-opt': MC.speak(MC.conv.turns[MC.conv.turn][2][+el.getAttribute('data-i')][0]); break;
      case 'conv-say-last': var lm = MC.conv.msgs.filter(function (m) { return m.who === 'npc'; }).pop(); if (lm) MC.speak(lm.es); break;
      case 'conv-help': MC.conv.showHelp = true; MC.conv.helps++; MC.route(); break;
      case 'conv-pick': MC.convPick(+el.getAttribute('data-i'), null); break;
      case 'conv-mic': MC.convMic(); break;
      case 'conv-finish': MC.convFinish(); break;
      case 'conv-again': var cid = MC.conv.c.id; MC.conv = null; MC.startConv(cid); MC.route(); break;
      case 'add-word': MC.addWordModal(); break;
      case 'save-word':
        var es = document.getElementById('nw-es').value.trim(), fr = document.getElementById('nw-fr').value.trim();
        if (!es || !fr) { MC.toast('Remplis les deux champs'); break; }
        var w = { id: 'mine:' + Date.now(), cat: 'mine', es: es, fr: fr, reg: '', type: 'm' };
        MC.state.custom.push(w); MC.LEXBYID[w.id] = w;
        MC.state.cards[w.id] = { box: 0, due: Date.now() + 3600 * 1000 };
        MC.save(); MC.closeModal(); MC.toast('Ajouté à « Mes mots »'); MC.route(); break;
      case 'del-word':
        var did = el.getAttribute('data-id');
        if (confirm('Supprimer ce mot ?')) {
          MC.state.custom = MC.state.custom.filter(function (x) { return x.id !== did; });
          delete MC.state.cards[did]; delete MC.LEXBYID[did]; MC.save(); MC.route();
        } break;
      case 'close-modal': MC.closeModal(); break;
      case 'vg': v.vg = el.getAttribute('data-v'); v.vi = 0; MC.route(); break;
      case 'vi': v.vi = +el.getAttribute('data-v'); MC.route(); break;
      case 'vt': v.vt = el.getAttribute('data-v'); MC.route(); break;
      case 'say-conj':
        var g = MC.VERB_GROUPS.filter(function (x) { return x.id === (v.vg || 'ar'); })[0];
        var vb = g.verbs[v.vi || 0];
        MC.speak(MC.conjugate(vb, v.vt || 'pres').map(function (f, i) { return MC.PERSONS_SHORT[i] + ' ' + f.full; }).join(', ')); break;
      case 'swap-dir':
        var inp = document.getElementById('trad-in'); if (inp) v.tradText = inp.value;
        MC.state.settings.dir = MC.state.settings.dir === 'co' ? 'fr' : 'co'; MC.save(); v.tradResult = null; MC.route(); break;
      case 'translate': MC.translate(); break;
      case 'trad-mic':
        var dir = MC.state.settings.dir === 'co' ? 'es-CO' : 'fr-FR';
        el.style.background = 'var(--bad)'; el.style.color = '#fff';
        MC.listen(dir, function (alts, err) {
          el.style.background = ''; el.style.color = '';
          if (err) { MC.toast(err === 'unsupported' ? 'Micro non disponible sur ce navigateur' : 'Je n’ai rien entendu'); return; }
          var ti = document.getElementById('trad-in'); if (ti) { ti.value = alts[0]; MC.translate(); }
        }); break;
      case 'trad-save':
        var r = v.tradResult; if (!r || !r.text) break;
        var src = v.tradText;
        MC.addWordModal(r.dir === 'fr' ? r.text : src, r.dir === 'fr' ? src : r.text); break;
      case 'hist':
        var h = MC.state.history[+el.getAttribute('data-i')];
        v.tradText = h.src; v.tradResult = { dir: h.dir === 'co' ? 'co' : 'fr', lex: [], text: h.out }; MC.route(); break;
      case 'test-mic':
        var out = document.getElementById('mic-out'); out.textContent = 'J’écoute… dis une phrase en espagnol.';
        MC.listen('es-CO', function (alts, err) { out.textContent = err ? 'Erreur : ' + err : 'Entendu : « ' + alts[0] + ' »'; }); break;
      case 'export':
        var data = MC.exportState();
        if (navigator.clipboard) navigator.clipboard.writeText(data).then(function () { MC.toast('Progression copiée : colle-la dans une note'); }, function () { prompt('Copie ce texte :', data); });
        else prompt('Copie ce texte :', data);
        break;
      case 'import':
        MC.modal('<h2 style="font-size:22px">Importer une progression</h2><div class="field"><label for="imp">Colle ici le texte copié</label><textarea id="imp" rows="5"></textarea></div>' +
          '<button class="btn primary" data-act="do-import">Importer</button><button class="btn ghost" data-act="close-modal">Annuler</button>'); break;
      case 'do-import':
        try { MC.importState(document.getElementById('imp').value); MC.buildData(); MC.closeModal(); MC.toast('Progression importée'); location.hash = 'home'; MC.route(); }
        catch (err2) { MC.toast('Ce texte n’est pas une progression valide'); } break;
      case 'reset':
        if (confirm('Effacer toute ta progression ? C’est définitif.')) { localStorage.removeItem('micolombia_v1'); MC.load(); MC.buildData(); location.hash = 'home'; MC.route(); }
        break;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.id === 'trad-in' && !e.shiftKey) { e.preventDefault(); MC.translate(); }
  });

  /* Démarrage */
  MC.load();
  MC.buildData();
  MC.route();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
