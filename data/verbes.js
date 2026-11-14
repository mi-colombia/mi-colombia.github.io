/* Verbes et conjugaison — personnes utilisées en Colombie (pas de vosotros) */
window.MC = window.MC || {};
MC.PERSONS = ['yo', 'tú', 'usted · él · ella', 'nosotros', 'ustedes · ellos'];
MC.PERSONS_SHORT = ['yo', 'tú', 'usted', 'nosotros', 'ustedes'];
MC.TENSES = [
  { id: 'pres', fr: 'Présent', es: 'presente', info: 'ce que tu fais en général ou en ce moment.' },
  { id: 'pret', fr: 'Passé', es: 'pretérito', info: 'action terminée à un moment précis. C’est LE passé de l’oral en Colombie : le passé composé y est très peu utilisé.' },
  { id: 'imp', fr: 'Imparfait', es: 'imperfecto', info: 'habitudes et descriptions au passé : « Cuando era niño, vivía en Lyon ».' },
  { id: 'fut', fr: 'Futur', es: 'futuro', info: 'il existe, mais à l’oral on dit plutôt « voy a + infinitif ».' }
];
MC.END = {
  ar: { pres: ['o', 'as', 'a', 'amos', 'an'], pret: ['é', 'aste', 'ó', 'amos', 'aron'], imp: ['aba', 'abas', 'aba', 'ábamos', 'aban'] },
  er: { pres: ['o', 'es', 'e', 'emos', 'en'], pret: ['í', 'iste', 'ió', 'imos', 'ieron'], imp: ['ía', 'ías', 'ía', 'íamos', 'ían'] },
  ir: { pres: ['o', 'es', 'e', 'imos', 'en'], pret: ['í', 'iste', 'ió', 'imos', 'ieron'], imp: ['ía', 'ías', 'ía', 'íamos', 'ían'] }
};
MC.FUT = ['é', 'ás', 'á', 'emos', 'án'];

MC.VERB_GROUPS = [
  { id: 'ar', label: '-AR', info: 'le groupe le plus courant. Modèle : hablar.', verbs: [
    { inf: 'hablar', fr: 'parler' }, { inf: 'tomar', fr: 'prendre, boire' }, { inf: 'trabajar', fr: 'travailler' },
    { inf: 'caminar', fr: 'marcher' }, { inf: 'comprar', fr: 'acheter' }, { inf: 'bailar', fr: 'danser' },
    { inf: 'necesitar', fr: 'avoir besoin de' }, { inf: 'esperar', fr: 'attendre, espérer' }, { inf: 'viajar', fr: 'voyager' },
    { inf: 'cocinar', fr: 'cuisiner' }, { inf: 'escuchar', fr: 'écouter' }, { inf: 'ayudar', fr: 'aider' }] },
  { id: 'er', label: '-ER', info: 'modèle : comer. Au passé, mêmes terminaisons que les verbes en -IR.', verbs: [
    { inf: 'comer', fr: 'manger' }, { inf: 'aprender', fr: 'apprendre' }, { inf: 'beber', fr: 'boire' },
    { inf: 'vender', fr: 'vendre' }, { inf: 'correr', fr: 'courir' }, { inf: 'comprender', fr: 'comprendre' },
    { inf: 'deber', fr: 'devoir' }, { inf: 'responder', fr: 'répondre' }] },
  { id: 'ir', label: '-IR', info: 'modèle : vivir. Seul « nosotros » au présent diffère des verbes en -ER (vivimos).', verbs: [
    { inf: 'vivir', fr: 'vivre, habiter' }, { inf: 'escribir', fr: 'écrire' }, { inf: 'subir', fr: 'monter' },
    { inf: 'abrir', fr: 'ouvrir' }, { inf: 'compartir', fr: 'partager' }, { inf: 'recibir', fr: 'recevoir' },
    { inf: 'decidir', fr: 'décider' }, { inf: 'discutir', fr: 'discuter' }] },
  { id: 'dip', label: 'Diphtongue', info: 'quand la voyelle du radical porte l’accent, elle change : e → ie, o → ue, e → i. Jamais avec nosotros. Le radical modifié est surligné.', verbs: [
    { inf: 'pensar', fr: 'penser · e → ie', stems: { pres: ['piens', 'piens', 'piens', 'pens', 'piens'] } },
    { inf: 'cerrar', fr: 'fermer · e → ie', stems: { pres: ['cierr', 'cierr', 'cierr', 'cerr', 'cierr'] } },
    { inf: 'entender', fr: 'comprendre · e → ie', stems: { pres: ['entiend', 'entiend', 'entiend', 'entend', 'entiend'] } },
    { inf: 'preferir', fr: 'préférer · e → ie', stems: { pres: ['prefier', 'prefier', 'prefier', 'prefer', 'prefier'], pret: ['prefer', 'prefer', 'prefir', 'prefer', 'prefir'] } },
    { inf: 'volver', fr: 'revenir · o → ue', stems: { pres: ['vuelv', 'vuelv', 'vuelv', 'volv', 'vuelv'] } },
    { inf: 'contar', fr: 'compter, raconter · o → ue', stems: { pres: ['cuent', 'cuent', 'cuent', 'cont', 'cuent'] } },
    { inf: 'encontrar', fr: 'trouver · o → ue', stems: { pres: ['encuentr', 'encuentr', 'encuentr', 'encontr', 'encuentr'] } },
    { inf: 'dormir', fr: 'dormir · o → ue', stems: { pres: ['duerm', 'duerm', 'duerm', 'dorm', 'duerm'], pret: ['dorm', 'dorm', 'durm', 'dorm', 'durm'] } },
    { inf: 'pedir', fr: 'demander, commander · e → i', stems: { pres: ['pid', 'pid', 'pid', 'ped', 'pid'], pret: ['ped', 'ped', 'pid', 'ped', 'pid'] } },
    { inf: 'repetir', fr: 'répéter · e → i', stems: { pres: ['repit', 'repit', 'repit', 'repet', 'repit'], pret: ['repet', 'repet', 'repit', 'repet', 'repit'] } },
    { inf: 'servir', fr: 'servir · e → i', stems: { pres: ['sirv', 'sirv', 'sirv', 'serv', 'sirv'], pret: ['serv', 'serv', 'sirv', 'serv', 'sirv'] } }] },
  { id: 'irr', label: 'Irréguliers', info: 'à connaître par cœur : ce sont les verbes les plus utilisés au quotidien.', verbs: [
    { inf: 'ser', fr: 'être (identité)', forms: { pres: ['soy', 'eres', 'es', 'somos', 'son'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], imp: ['era', 'eras', 'era', 'éramos', 'eran'] } },
    { inf: 'estar', fr: 'être (état, lieu)', forms: { pres: ['estoy', 'estás', 'está', 'estamos', 'están'], pret: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron'] } },
    { inf: 'ir', fr: 'aller', forms: { pres: ['voy', 'vas', 'va', 'vamos', 'van'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], imp: ['iba', 'ibas', 'iba', 'íbamos', 'iban'] } },
    { inf: 'tener', fr: 'avoir', forms: { pres: ['tengo', 'tienes', 'tiene', 'tenemos', 'tienen'], pret: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron'], fut: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendrán'] } },
    { inf: 'hacer', fr: 'faire', forms: { pres: ['hago', 'haces', 'hace', 'hacemos', 'hacen'], pret: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicieron'], fut: ['haré', 'harás', 'hará', 'haremos', 'harán'] } },
    { inf: 'poder', fr: 'pouvoir', forms: { pres: ['puedo', 'puedes', 'puede', 'podemos', 'pueden'], pret: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudieron'], fut: ['podré', 'podrás', 'podrá', 'podremos', 'podrán'] } },
    { inf: 'querer', fr: 'vouloir, aimer', forms: { pres: ['quiero', 'quieres', 'quiere', 'queremos', 'quieren'], pret: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisieron'], fut: ['querré', 'querrás', 'querrá', 'querremos', 'querrán'] } },
    { inf: 'decir', fr: 'dire', forms: { pres: ['digo', 'dices', 'dice', 'decimos', 'dicen'], pret: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijeron'], fut: ['diré', 'dirás', 'dirá', 'diremos', 'dirán'] } },
    { inf: 'venir', fr: 'venir', forms: { pres: ['vengo', 'vienes', 'viene', 'venimos', 'vienen'], pret: ['vine', 'viniste', 'vino', 'vinimos', 'vinieron'], fut: ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendrán'] } },
    { inf: 'saber', fr: 'savoir', forms: { pres: ['sé', 'sabes', 'sabe', 'sabemos', 'saben'], pret: ['supe', 'supiste', 'supo', 'supimos', 'supieron'], fut: ['sabré', 'sabrás', 'sabrá', 'sabremos', 'sabrán'] } },
    { inf: 'dar', fr: 'donner', forms: { pres: ['doy', 'das', 'da', 'damos', 'dan'], pret: ['di', 'diste', 'dio', 'dimos', 'dieron'] } },
    { inf: 'ver', fr: 'voir', forms: { pres: ['veo', 'ves', 've', 'vemos', 'ven'], pret: ['vi', 'viste', 'vio', 'vimos', 'vieron'], imp: ['veía', 'veías', 'veía', 'veíamos', 'veían'] } },
    { inf: 'poner', fr: 'mettre', forms: { pres: ['pongo', 'pones', 'pone', 'ponemos', 'ponen'], pret: ['puse', 'pusiste', 'puso', 'pusimos', 'pusieron'], fut: ['pondré', 'pondrás', 'pondrá', 'pondremos', 'pondrán'] } },
    { inf: 'salir', fr: 'sortir', forms: { pres: ['salgo', 'sales', 'sale', 'salimos', 'salen'], fut: ['saldré', 'saldrás', 'saldrá', 'saldremos', 'saldrán'] } },
    { inf: 'conocer', fr: 'connaître', forms: { pres: ['conozco', 'conoces', 'conoce', 'conocemos', 'conocen'] } },
    { inf: 'traer', fr: 'apporter', forms: { pres: ['traigo', 'traes', 'trae', 'traemos', 'traen'], pret: ['traje', 'trajiste', 'trajo', 'trajimos', 'trajeron'] } }] }
];

/* Renvoie 5 objets {stem, end, changed, full} pour un verbe et un temps */
MC.conjugate = function (verb, tense) {
  var inf = verb.inf;
  var cls = inf.slice(-2);
  var base = inf.slice(0, -2);
  var out = [];
  for (var i = 0; i < 5; i++) {
    if (verb.forms && verb.forms[tense]) {
      var f = verb.forms[tense][i];
      out.push({ stem: '', end: f, changed: false, irregular: true, full: f });
      continue;
    }
    if (tense === 'fut') { out.push({ stem: inf, end: MC.FUT[i], changed: false, full: inf + MC.FUT[i] }); continue; }
    var st = (verb.stems && verb.stems[tense]) ? verb.stems[tense][i] : base;
    var end = MC.END[cls][tense][i];
    out.push({ stem: st, end: end, changed: st !== base, full: st + end });
  }
  return out;
};

MC.findVerb = function (inf) {
  for (var g = 0; g < MC.VERB_GROUPS.length; g++) {
    var vs = MC.VERB_GROUPS[g].verbs;
    for (var i = 0; i < vs.length; i++) if (vs[i].inf === inf) return vs[i];
  }
  return null;
};
