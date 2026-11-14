/* Paliers 1 et 2 — leçons
   Chaque séance : t = titre, cat = catégorie de vocabulaire, l = leçon
   l.ex = exemples [espagnol, français], l.notes = [région (b = Bogotá, c = côte, i = info), texte], l.conj = [verbe, temps] */
window.MC = window.MC || {};
MC.PALIERS = MC.PALIERS || [];

MC.PALIERS.push({
  id: 'p1', name: 'Llegar', fr: 'Arriver', desc: 'Saluer, se présenter, l’aéroport et l’hôtel',
  grammar: 'Présent de ser, estar, tener · verbes en -AR',
  seances: [
    { t: 'Saluer comme un Colombien', cat: 'politesse', l: {
      intro: 'En Colombie, on salue toujours avant de demander quoi que ce soit, même à un chauffeur de taxi ou à un vendeur. « Buenas » marche à toute heure.',
      ex: [['Buenos días, ¿cómo está?', 'Bonjour, comment allez-vous ?'], ['Buenas, ¿cómo vas?', 'Salut, comment ça va ?'], ['Muy bien, gracias. ¿Y usted?', 'Très bien, merci. Et vous ?'], ['—Gracias. —Con gusto.', '—Merci. —Avec plaisir.']],
      notes: [['i', 'À « gracias », on répond « con gusto » (avec plaisir) plutôt que « de nada ».'], ['b', 'À Bogotá, on enchaîne volontiers plusieurs formules : « Buenos días, ¿cómo está? ¿Bien? ».']] } },
    { t: 'Usted, tú et sumercé', cat: 'politesse', l: {
      intro: 'Il y a trois façons de dire « tu / vous ». « Usted » est très courant, même entre amis à Bogotá. « Tú » domine sur la côte. « Sumercé » est un vous affectueux de Bogotá et Boyacá.',
      ex: [['¿Usted es de aquí?', 'Vous êtes d’ici ?'], ['¿Tú eres de aquí?', 'Tu es d’ici ?'], ['¿Sumercé qué necesita?', 'De quoi avez-vous besoin ?'], ['¿Ustedes quieren un tinto?', 'Vous voulez un café ? (à plusieurs)']],
      notes: [['b', 'Rolo : on peut dire « usted » à son meilleur ami ou à sa mère, ce n’est pas froid.'], ['c', 'Costeño : « tú » partout, très vite. « Usted » sonne plus distant.'], ['i', 'Au pluriel, toujours « ustedes » : en Colombie, « vosotros » n’existe pas.']] } },
    { t: 'Ser : dire qui on est', cat: 'presenter', l: {
      intro: '« Ser » sert à dire ce qu’on est de façon durable : le nom, l’origine, le métier, le caractère.',
      ex: [['Soy francés.', 'Je suis français.'], ['¿Usted es de Bogotá?', 'Vous êtes de Bogotá ?'], ['Somos amigos.', 'Nous sommes amis.'], ['Ella es muy buena gente.', 'Elle est très sympa.']],
      notes: [['i', 'Pas de « je suis » + article pour le métier : « Soy profesor », pas « soy un profesor ».']],
      conj: ['ser', 'pres'] } },
    { t: 'Estar : comment et où on est', cat: 'presenter', l: {
      intro: '« Estar » sert pour ce qui change : l’humeur, la santé, l’endroit où l’on est.',
      ex: [['Estoy bien, gracias.', 'Je vais bien, merci.'], ['Estoy en Cartagena.', 'Je suis à Cartagena.'], ['¿Dónde está el hotel?', 'Où est l’hôtel ?'], ['Estamos cansados.', 'Nous sommes fatigués.']],
      notes: [['i', '« ¿Cómo está? » (comment allez-vous ?) utilise toujours estar.']],
      conj: ['estar', 'pres'] } },
    { t: 'Ser ou estar ?', cat: 'presenter', l: {
      intro: 'Truc simple : ser = ce que tu ES (identité), estar = comment ou où tu ES en ce moment. Certains mots changent de sens selon le verbe.',
      ex: [['Soy aburrido.', 'Je suis ennuyeux. (caractère)'], ['Estoy aburrido.', 'Je m’ennuie. (en ce moment)'], ['La sopa está rica.', 'La soupe est bonne. (là, maintenant)'], ['Cartagena es bonita.', 'Cartagena est belle. (toujours)']],
      notes: [['i', 'Pour un lieu : « ¿Dónde está…? ». Pour un événement : « La fiesta es en mi casa » (ser).']] } },
    { t: 'Tener : l’âge, la faim, la soif', cat: 'famille', l: {
      intro: 'Là où le français dit « avoir faim, soif, chaud », l’espagnol utilise aussi « tener ». On dit aussi son âge avec « tener ».',
      ex: [['Tengo cuarenta años.', 'J’ai quarante ans.'], ['¿Tiene hambre?', 'Vous avez faim ?'], ['Tengo mucha sed.', 'J’ai très soif.'], ['Tenemos dos hijos.', 'Nous avons deux enfants.']],
      notes: [['i', '« Tener que » + infinitif = devoir : « Tengo que irme » (je dois y aller).']],
      conj: ['tener', 'pres'] } },
    { t: 'Masculin, féminin et articles', cat: 'famille', l: {
      intro: 'Les mots en -o sont souvent masculins (el), ceux en -a souvent féminins (la). Au pluriel : los, las. Attention, le genre ne correspond pas toujours au français.',
      ex: [['el hermano, la hermana', 'le frère, la sœur'], ['los papás', 'les parents'], ['el día, la mano', 'le jour, la main (exceptions)'], ['la leche, el carro', 'le lait, la voiture']],
      notes: [['i', '« Los papás » = les parents (le papa et la maman).'], ['i', 'Un mot en -e peut être des deux : « el tomate », « la gente ».']] } },
    { t: 'Les nombres et la plata', cat: 'nombres', l: {
      intro: 'En Colombie, les prix montent vite : un tinto coûte environ 2 000 pesos. Les Colombiens comptent souvent en « lucas » (milliers) : « dos lucas » = 2 000 pesos.',
      ex: [['Son cinco mil pesos.', 'Ça fait cinq mille pesos.'], ['Vale veinte lucas.', 'Ça coûte vingt mille pesos.'], ['Un millón de pesos.', 'Un million de pesos.'], ['¿Tiene sencillo?', 'Vous avez de la petite monnaie ?']],
      notes: [['i', 'Le point sépare les milliers : 20.000 = vingt mille.'], ['i', '« Un palo » = un million, en argot.']] } },
    { t: '¿Cuánto vale? Prix et pluriel', cat: 'nombres', l: {
      intro: 'Pour le pluriel : on ajoute -s après une voyelle, -es après une consonne. Pour demander un prix : « ¿Cuánto vale? » ou « ¿Cuánto es? ».',
      ex: [['¿Cuánto vale la arepa?', 'Combien coûte l’arepa ?'], ['¿Cuánto valen las arepas?', 'Combien coûtent les arepas ?'], ['un billete, dos billetes', 'un billet, deux billets'], ['una ciudad, dos ciudades', 'une ville, deux villes']],
      notes: [['i', '« Barato » = pas cher, « caro » = cher. « Está muy caro » = c’est très cher.']] } },
    { t: 'Les verbes en -AR au présent', cat: 'aeroport', l: {
      intro: 'C’est le groupe le plus courant. On enlève -ar et on ajoute -o, -as, -a, -amos, -an.',
      ex: [['Hablo un poquito de español.', 'Je parle un petit peu espagnol.'], ['¿Usted trabaja aquí?', 'Vous travaillez ici ?'], ['Viajamos mucho.', 'Nous voyageons beaucoup.'], ['Llego mañana.', 'J’arrive demain.']],
      notes: [['i', '« Usted » se conjugue comme « él / ella » : « usted habla ».'], ['i', '« Ustedes » comme « ellos » : « ustedes hablan ».']],
      conj: ['hablar', 'pres'] } },
    { t: 'Arriver : hay et queda', cat: 'aeroport', l: {
      intro: '« Hay » = il y a (invariable). Pour situer un endroit, les Colombiens disent « queda » plutôt que « está ».',
      ex: [['¿Hay wifi en el hotel?', 'Il y a le wifi à l’hôtel ?'], ['No hay toallas.', 'Il n’y a pas de serviettes.'], ['¿Dónde queda la recepción?', 'Où se trouve la réception ?'], ['El hostal queda en Getsemaní.', 'L’auberge se trouve à Getsemaní.']],
      notes: [['i', '« Queda » vient de « quedar » (se trouver). On l’entend partout en Colombie.']] } },
    { t: 'Poser des questions', cat: 'temps', l: {
      intro: 'Les mots interrogatifs portent toujours un accent : qué, quién, dónde, cuándo, cómo, cuánto, por qué.',
      ex: [['¿Qué necesita?', 'De quoi avez-vous besoin ?'], ['¿Cuándo llega?', 'Quand arrivez-vous ?'], ['¿Por qué no?', 'Pourquoi pas ?'], ['¿Quién es?', 'Qui est-ce ?']],
      notes: [['i', 'Le point d’interrogation s’ouvre aussi au début : ¿…?'], ['i', '« ¿Cierto? » en fin de phrase = n’est-ce pas ?']] } },
    { t: 'L’heure et les jours', cat: 'temps', l: {
      intro: 'Pour l’heure : « Es la una », puis « Son las dos, las tres… ». « Y media » = et demie, « y cuarto » = et quart.',
      ex: [['¿Qué hora es?', 'Quelle heure est-il ?'], ['Son las tres y media.', 'Il est trois heures et demie.'], ['Nos vemos el sábado.', 'On se voit samedi.'], ['Ahorita llego.', 'J’arrive dans un moment.']],
      notes: [['i', '« Ahorita » peut vouloir dire tout de suite… ou dans deux heures. C’est très colombien !'], ['i', 'Les jours s’écrivent sans majuscule : el lunes, el martes.']] } },
    { t: 'Test du palier Llegar', test: true }
  ]
});

MC.PALIERS.push({
  id: 'p2', name: 'Moverse', fr: 'Se déplacer', desc: 'Taxi, bus, demander son chemin',
  grammar: 'Verbes en -ER/-IR · ir a + infinitif · diphtongues',
  seances: [
    { t: 'Prendre un taxi', cat: 'taxi', l: {
      intro: 'On salue le chauffeur, on donne l’adresse, et on vérifie le prix si le taxi n’a pas de compteur, surtout à Cartagena.',
      ex: [['Buenas, lléveme al centro, por favor.', 'Bonjour, emmenez-moi au centre, s’il vous plaît.'], ['¿Cuánto me cobra hasta Bocagrande?', 'Combien vous me prenez jusqu’à Bocagrande ?'], ['Pare aquí, por favor.', 'Arrêtez-vous ici, s’il vous plaît.'], ['¿Me deja en la esquina?', 'Vous me déposez au coin ?']],
      notes: [['c', 'À Cartagena, les taxis n’ont pas de compteur : on se met d’accord sur le prix avant de monter.'], ['b', 'À Bogotá, le prix s’affiche en « unidades » sur le compteur, converti à la fin.']] } },
    { t: 'Les verbes en -ER et -IR', cat: 'taxi', l: {
      intro: 'Même logique que -AR : -ER donne -o, -es, -e, -emos, -en. -IR est identique sauf nosotros : -imos.',
      ex: [['Como arepas todos los días.', 'Je mange des arepas tous les jours.'], ['¿Dónde vive usted?', 'Où habitez-vous ?'], ['Vivimos en Francia.', 'Nous habitons en France.'], ['No comprendo.', 'Je ne comprends pas.']],
      notes: [['i', 'Seule différence -ER / -IR au présent : comemos / vivimos.']],
      conj: ['vivir', 'pres'] } },
    { t: 'Ir : le verbe aller', cat: 'taxi', l: {
      intro: '« Ir » est totalement irrégulier : voy, vas, va, vamos, van. On l’utilise avec « a » pour la destination.',
      ex: [['Voy al aeropuerto.', 'Je vais à l’aéroport.'], ['¿Para dónde va?', 'Vous allez où ?'], ['Vamos en bus.', 'On y va en bus.'], ['¡Vamos pues!', 'Allez, on y va !']],
      notes: [['i', '« a + el » se contracte en « al » : voy al centro.'], ['c', 'Costeño : « vamo’ pa’ la playa » (le s et la fin de « para » s’avalent).']],
      conj: ['ir', 'pres'] } },
    { t: 'Ir a + infinitif : le futur de l’oral', cat: 'taxi', l: {
      intro: 'C’est le futur que les Colombiens utilisent le plus : ir (conjugué) + a + infinitif.',
      ex: [['Voy a coger un taxi.', 'Je vais prendre un taxi.'], ['¿Usted va a ir al centro?', 'Vous allez aller au centre ?'], ['Vamos a llegar tarde.', 'On va arriver en retard.'], ['Van a volver mañana.', 'Ils vont revenir demain.']],
      notes: [['b', 'À Bogotá, avec usted : « ¿Usted va a bajar aquí? ».'], ['c', 'À Cartagena : « Vamo’ a ve’ » (vamos a ver = on va voir).'], ['i', 'En Colombie, « coger » (prendre) est un verbe normal, sans double sens.']] } },
    { t: 'Calles et carreras : les adresses', cat: 'ville', l: {
      intro: 'À Bogotá, les rues sont numérotées : les « calles » vont d’est en ouest, les « carreras » du nord au sud. « Calle 26 # 13-45 » = calle 26, à 45 m de l’angle avec la carrera 13.',
      ex: [['Voy para la calle 85 con carrera 15.', 'Je vais au croisement de la calle 85 et de la carrera 15.'], ['Queda en la Séptima.', 'C’est sur la carrera 7.'], ['¿En qué barrio queda?', 'C’est dans quel quartier ?'], ['Es a tres cuadras.', 'C’est à trois rues d’ici.']],
      notes: [['b', 'Les montagnes sont à l’est de Bogotá : si tu les vois devant toi, tu regardes vers l’est.'], ['c', 'Cartagena n’a pas ce système dans la vieille ville : les rues y ont des noms (Calle de la Media Luna…).']] } },
    { t: '¿Dónde queda? Demander son chemin', cat: 'ville', l: {
      intro: 'Pour demander un lieu : « ¿Dónde queda…? ». Pour savoir la distance : « ¿Está lejos? ».',
      ex: [['Disculpe, ¿dónde queda el museo del Oro?', 'Excusez-moi, où se trouve le musée de l’Or ?'], ['¿Está lejos de aquí?', 'C’est loin d’ici ?'], ['Queda cerca, a dos cuadras.', 'C’est près, à deux rues.'], ['Estoy perdido.', 'Je suis perdu.']],
      notes: [['i', 'On commence toujours par « disculpe » ou « qué pena con usted ».']] } },
    { t: 'Siga derecho : les indications', cat: 'ville', l: {
      intro: 'Les indications se donnent à l’impératif avec usted : siga (continuez), voltee (tournez), baje (descendez), suba (montez).',
      ex: [['Siga derecho dos cuadras.', 'Continuez tout droit sur deux rues.'], ['Voltee a la izquierda en la esquina.', 'Tournez à gauche au coin.'], ['Suba por la calle 10.', 'Montez par la calle 10.'], ['Es al frente del parque.', 'C’est en face du parc.']],
      notes: [['i', '« Voltear » (tourner) est le mot colombien ; « girar » existe aussi.'], ['i', '« Al frente de » = en face de, « al lado de » = à côté de.']] } },
    { t: 'Querer et poder', cat: 'taxi', l: {
      intro: 'Deux verbes indispensables : « quiero » (je veux) et « puedo » (je peux). Leur voyelle change au présent : e → ie, o → ue.',
      ex: [['Quiero ir a Monserrate.', 'Je veux aller à Monserrate.'], ['¿Puede parar aquí?', 'Vous pouvez vous arrêter ici ?'], ['No podemos llegar a tiempo.', 'Nous ne pouvons pas arriver à l’heure.'], ['¿Quiere un tinto?', 'Vous voulez un café ?']],
      notes: [['i', 'Avec nosotros, pas de changement : queremos, podemos.']],
      conj: ['poder', 'pres'] } },
    { t: 'Les diphtongues : pensar, volver, pedir', cat: 'ville', l: {
      intro: 'Beaucoup de verbes changent leur voyelle quand elle porte l’accent : e → ie (pensar), o → ue (volver), e → i (pedir). Jamais avec nosotros.',
      ex: [['Pienso que es por aquí.', 'Je pense que c’est par ici.'], ['Vuelvo en cinco minutos.', 'Je reviens dans cinq minutes.'], ['Pido un taxi por la app.', 'Je commande un taxi par l’appli.'], ['Volvemos mañana.', 'Nous revenons demain.']],
      notes: [['i', 'Regarde l’onglet Verbes : les radicaux qui changent sont surlignés.']],
      conj: ['volver', 'pres'] } },
    { t: 'Le « yo » irrégulier', cat: 'taxi', l: {
      intro: 'Certains verbes sont réguliers sauf à « yo » : tengo, hago, salgo, pongo, conozco, traigo.',
      ex: [['Salgo a las seis.', 'Je pars à six heures.'], ['¿Qué hago?', 'Qu’est-ce que je fais ?'], ['No conozco Bogotá.', 'Je ne connais pas Bogotá.'], ['Traigo la maleta.', 'J’apporte la valise.']],
      notes: [['i', 'Les autres personnes sont normales : sales, sale, salimos, salen.']],
      conj: ['salir', 'pres'] } },
    { t: 'Estar + gérondif : en ce moment', cat: 'ville', l: {
      intro: 'Pour dire ce qu’on est en train de faire : estar + gérondif (-ando pour -AR, -iendo pour -ER/-IR). Très utilisé au téléphone.',
      ex: [['Estoy llegando.', 'J’arrive. (je suis en train d’arriver)'], ['Estamos buscando el hotel.', 'Nous cherchons l’hôtel.'], ['¿Qué está haciendo?', 'Qu’est-ce que vous faites ?'], ['Está lloviendo.', 'Il pleut.']],
      notes: [['i', '« Estoy llegando » au téléphone peut vouloir dire « je pars juste de chez moi »… heure colombienne !']] } },
    { t: 'En bus, en TransMilenio, en buseta', cat: 'taxi', l: {
      intro: 'Pour le moyen de transport : « en » (en bus, en taxi), mais « a pie » (à pied). Pour monter et descendre : subirse, bajarse.',
      ex: [['Voy en TransMilenio.', 'J’y vais en TransMilenio.'], ['Me bajo en la próxima.', 'Je descends au prochain arrêt.'], ['¿Este bus va para el centro?', 'Ce bus va au centre ?'], ['Vamos a pie.', 'On y va à pied.']],
      notes: [['b', 'Le TransMilenio se paie avec la carte TuLlave, à recharger en station.'], ['c', 'À Cartagena, on prend aussi des busetas et des mototaxis (plus risqués).']] } },
    { t: 'Ahorita, ya, todavía', cat: 'temps', l: {
      intro: 'Les mots du temps sont essentiels… et élastiques en Colombie. « Ya » = déjà ou maintenant, « todavía » = encore, « ahorita » = dans un moment.',
      ex: [['Ya llegué.', 'Je suis arrivé.'], ['Todavía no.', 'Pas encore.'], ['Ahorita lo hago.', 'Je le fais dans un moment.'], ['Ya mismo voy.', 'J’y vais tout de suite.']],
      notes: [['c', 'Sur la côte, « ahorita » peut vouloir dire « plus tard, peut-être ».'], ['i', '« Ya mismo » = tout de suite (vraiment).']] } },
    { t: 'Test du palier Moverse', test: true }
  ]
});
