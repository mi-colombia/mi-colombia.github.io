/* Paliers 3, 4 et 5 — leçons */
window.MC = window.MC || {};
MC.PALIERS = MC.PALIERS || [];

MC.PALIERS.push({
  id: 'p3', name: 'Comer', fr: 'Manger', desc: 'Restaurant, marché, jugos et corrientazo',
  grammar: 'Gustar · diminutifs · pretérito',
  seances: [
    { t: 'Commander au restaurant', cat: 'resto', l: {
      intro: 'Pour commander, les Colombiens disent « ¿Me regala…? » (vous me donnez… ?), même si on paie. C’est poli et naturel.',
      ex: [['¿Me regala la carta, por favor?', 'Vous me donnez la carte, s’il vous plaît ?'], ['¿Me regala un jugo de mango en agua?', 'Un jus de mangue à l’eau, s’il vous plaît.'], ['¿Qué me recomienda?', 'Qu’est-ce que vous me recommandez ?'], ['Para mí, el corrientazo.', 'Pour moi, le menu du jour.']],
      notes: [['i', '« Quisiera… » (je voudrais) marche aussi, plus neutre.'], ['b', 'À Bogotá, le « corrientazo » (soupe + plat + jus) est le déjeuner pas cher des travailleurs.']] } },
    { t: 'Gustar et encantar', cat: 'resto', l: {
      intro: '« Me gusta » se construit à l’envers : c’est la chose qui plaît. Singulier : me gusta ; pluriel : me gustan.',
      ex: [['Me gusta el ajiaco.', 'J’aime l’ajiaco.'], ['Me gustan las arepas.', 'J’aime les arepas.'], ['¿Le gusta el tinto?', 'Vous aimez le café ?'], ['Nos encanta Cartagena.', 'Nous adorons Cartagena.']],
      notes: [['i', 'me / te / le / nos / les gusta : à moi, à toi, à vous-lui, à nous, à vous-eux.']] } },
    { t: 'Les diminutifs : un tintico, un ratico', cat: 'resto', l: {
      intro: 'Les Colombiens adorent les diminutifs en -ito / -ico. Ils rendent la phrase plus douce et plus aimable.',
      ex: [['¿Se toma un tintico?', 'Vous prenez un petit café ?'], ['Espéreme un ratico.', 'Attendez-moi un petit moment.'], ['Un poquito de ají.', 'Un tout petit peu de sauce piquante.'], ['Está cerquita.', 'C’est tout près.']],
      notes: [['i', 'Après -t, on dit souvent -ico : momento → momentico, rato → ratico.'], ['b', 'Bogotá est la capitale du diminutif poli : « ¿Me regala un juguito? ».']] } },
    { t: 'Este, ese, aquel', cat: 'marche', l: {
      intro: 'Pour montrer : este (près de moi), ese (près de toi), aquel (loin). Au féminin : esta, esa, aquella.',
      ex: [['¿Cuánto vale este mango?', 'Combien coûte cette mangue ?'], ['Esa piña está muy madura.', 'Cet ananas est très mûr.'], ['Quiero aquellos aguacates.', 'Je veux ces avocats-là.'], ['¿Y esto qué es?', 'Et ça, c’est quoi ?']],
      notes: [['i', '« Esto » et « eso » = ceci, cela (quand on ne sait pas le nom).']] } },
    { t: 'Au marché : la libra', cat: 'marche', l: {
      intro: 'Au marché, on compte en « libras » (500 g). On demande le prix avec « ¿A cómo está…? » et on peut négocier gentiment.',
      ex: [['¿A cómo está la libra de tomate?', 'À combien est la livre de tomates ?'], ['Me regala media libra de queso.', 'Une demi-livre de fromage, s’il vous plaît.'], ['¿Me rebaja un poquito?', 'Vous me faites un petit prix ?'], ['¿Y la ñapa?', 'Et le petit bonus ?']],
      notes: [['i', 'La « ñapa » est le petit extra offert par le vendeur. On peut la demander en souriant.'], ['c', 'Le marché de Bazurto, à Cartagena, est immense et très vivant.']] } },
    { t: 'Lo, la, los, las : « je le prends »', cat: 'marche', l: {
      intro: 'Pour ne pas répéter un mot : lo (masculin), la (féminin), los, las (pluriel). Ils se placent avant le verbe conjugué.',
      ex: [['—¿Y el mango? —Lo quiero.', '—Et la mangue ? —Je la veux.'], ['Las piñas, las llevo.', 'Les ananas, je les prends.'], ['¿La cuenta? Ya la traigo.', 'L’addition ? Je l’apporte.'], ['No lo sé.', 'Je ne sais pas.']],
      notes: [['i', 'Attention : « el mango » est masculin, donc « lo ».']] } },
    { t: 'Le pretérito : verbes en -AR', cat: 'resto', l: {
      intro: 'C’est le passé de l’oral en Colombie, pour une action terminée : -é, -aste, -ó, -amos, -aron.',
      ex: [['Ayer almorcé en el centro.', 'Hier, j’ai déjeuné au centre.'], ['¿Usted ya pagó?', 'Vous avez déjà payé ?'], ['Tomamos un jugo de lulo.', 'Nous avons bu un jus de lulo.'], ['Me encantó.', 'J’ai adoré.']],
      notes: [['i', 'Les Colombiens disent « ¿Ya comió? » plutôt que « ¿Ha comido? ».'], ['i', 'L’accent compte : hablo (je parle) ≠ habló (il a parlé).']],
      conj: ['hablar', 'pret'] } },
    { t: 'Le pretérito : verbes en -ER et -IR', cat: 'resto', l: {
      intro: 'Une seule série pour -ER et -IR : -í, -iste, -ió, -imos, -ieron.',
      ex: [['Comí una bandeja paisa.', 'J’ai mangé une bandeja paisa.'], ['¿Qué pidió usted?', 'Qu’est-ce que vous avez commandé ?'], ['Bebimos limonada de coco.', 'Nous avons bu de la limonade au coco.'], ['Vivieron en Bogotá.', 'Ils ont vécu à Bogotá.']],
      notes: [['i', '« Pedir » change à la 3e personne : pidió, pidieron.']],
      conj: ['comer', 'pret'] } },
    { t: 'Ser et ir au pretérito : fui', cat: 'marche', l: {
      intro: 'Surprise : ser et ir ont exactement le même pretérito (fui, fuiste, fue, fuimos, fueron). Le contexte dit lequel.',
      ex: [['Ayer fui al mercado.', 'Hier, je suis allé au marché.'], ['Fue muy rico.', 'C’était très bon.'], ['¿Fueron a Bazurto?', 'Vous êtes allés à Bazurto ?'], ['Fuimos en taxi.', 'Nous y sommes allés en taxi.']],
      notes: [['i', '« Fue » + adjectif = c’était (une expérience finie).']],
      conj: ['ir', 'pret'] } },
    { t: 'Pretérito irrégulier : tuve, estuve, hice', cat: 'resto', l: {
      intro: 'Certains verbes très courants ont un radical spécial au passé, et pas d’accent : tuve, estuve, hice, pude, quise.',
      ex: [['Estuve en Cartagena una semana.', 'J’ai été à Cartagena une semaine.'], ['Tuve que pagar en efectivo.', 'J’ai dû payer en espèces.'], ['¿Qué hizo el fin de semana?', 'Qu’avez-vous fait ce week-end ?'], ['No pude comer más.', 'Je n’ai pas pu manger plus.']],
      notes: [['i', '« Hizo » s’écrit avec un z.']],
      conj: ['tener', 'pret'] } },
    { t: 'Comparer : más, menos, tan… como', cat: 'marche', l: {
      intro: 'Plus que : más… que. Moins que : menos… que. Aussi… que : tan… como. Meilleur : mejor ; pire : peor.',
      ex: [['El mango es más dulce que el lulo.', 'La mangue est plus sucrée que le lulo.'], ['Aquí es menos caro.', 'Ici, c’est moins cher.'], ['Es tan rico como en casa.', 'C’est aussi bon qu’à la maison.'], ['Este jugo es mejor.', 'Ce jus est meilleur.']],
      notes: [['i', 'On ne dit jamais « más bueno » pour la qualité : on dit « mejor ».']] } },
    { t: '¡Qué rico! Muy, tan, demasiado', cat: 'resto', l: {
      intro: 'Pour l’intensité : muy (très), demasiado (trop), et l’exclamation ¡Qué…! ou ¡Qué… tan…!',
      ex: [['¡Qué rico!', 'Trop bon !'], ['¡Qué sopa tan rica!', 'Quelle bonne soupe !'], ['Está demasiado picante.', 'C’est trop piquant.'], ['Está muy dulce.', 'C’est très sucré.']],
      notes: [['i', '« Rico » = bon (nourriture) mais aussi agréable (une situation).'], ['c', 'Sur la côte : « ¡Erda, qué rico! ».']] } },
    { t: 'Payer et laisser un pourboire', cat: 'resto', l: {
      intro: 'L’addition propose souvent un « servicio voluntario » de 10 % : on peut l’accepter ou le refuser.',
      ex: [['La cuenta, por favor.', 'L’addition, s’il vous plaît.'], ['¿Incluye el servicio?', 'Le service est compris ?'], ['¿Puedo pagar con tarjeta?', 'Je peux payer par carte ?'], ['Quédese con las vueltas.', 'Gardez la monnaie.']],
      notes: [['i', 'Au terminal de carte, on te demande souvent « ¿A cuántas cuotas? » : réponds « a una » (en une fois).']] } },
    { t: 'Test du palier Comer', test: true }
  ]
});

MC.PALIERS.push({
  id: 'p4', name: 'Rumbear', fr: 'Faire la fête', desc: 'Soirée, plage, drague et argot',
  grammar: 'Verbes pronominaux · pretérito irrégulier · futur',
  seances: [
    { t: 'Inviter quelqu’un à sortir', cat: 'soiree', l: {
      intro: 'Pour proposer : « ¿Nos tomamos algo? », « ¿Vamos a…? », « ¿Quiere…? ». Le nosotros au présent sert à proposer.',
      ex: [['¿Nos tomamos algo?', 'On boit un verre ?'], ['¿Vamos a bailar salsa?', 'On va danser la salsa ?'], ['¿Quiere salir el viernes?', 'Vous voulez sortir vendredi ?'], ['¿Cuál es el plan?', 'C’est quoi le plan ?']],
      notes: [['b', 'À Bogotá, la rumba se fait beaucoup dans la Zona T ou à Chapinero.'], ['c', 'À Cartagena : Getsemaní et la Plaza de la Trinidad le soir.']] } },
    { t: 'Les verbes pronominaux', cat: 'soiree', l: {
      intro: 'Comme en français : me, te, se, nos, se avant le verbe. Divertirse (s’amuser), quedarse (rester), acostarse (se coucher).',
      ex: [['Me divertí mucho.', 'Je me suis beaucoup amusé.'], ['Nos quedamos hasta las tres.', 'Nous sommes restés jusqu’à trois heures.'], ['¿A qué hora se acostó?', 'À quelle heure vous êtes-vous couché ?'], ['Me voy a la casa.', 'Je rentre à la maison.']],
      notes: [['i', '« Irse » = s’en aller : « Me voy » (j’y vais, je m’en vais).']] } },
    { t: 'Me gustas : ce qui plaît', cat: 'soiree', l: {
      intro: 'Avec gustar, on peut aussi parler des personnes : « me gustas » (tu me plais), « le gusto » (je lui plais).',
      ex: [['Me gustas mucho.', 'Tu me plais beaucoup.'], ['¿Te gusta bailar?', 'Tu aimes danser ?'], ['Me cae bien.', 'Il m’est sympathique.'], ['Estoy tragado.', 'Je suis fou amoureux.']],
      notes: [['i', '« Caer bien / mal » = trouver quelqu’un sympa ou pas.'], ['i', '« Te quiero » = je t’aime (affection) ; « te amo » est plus fort.']] } },
    { t: '¡Qué…! Les exclamations', cat: 'argot', l: {
      intro: 'L’exclamation colombienne par excellence : ¡Qué + nom ou adjectif! On peut ajouter « tan » : ¡Qué playa tan bonita!',
      ex: [['¡Qué chimba!', 'Trop génial !'], ['¡Qué pena!', 'Désolé ! / La gêne !'], ['¡Qué rumba tan buena!', 'Quelle super soirée !'], ['¡Qué boleta!', 'La honte !']],
      notes: [['i', '« Chimba » est très familier : à éviter avec la belle-famille !']] } },
    { t: 'L’argot de base', cat: 'argot', l: {
      intro: 'Les mots qui font sonner colombien : parce (pote), bacano et chévere (cool), camellar (bosser), el man (le mec).',
      ex: [['Parce, ¡qué bacano!', 'Mon pote, trop cool !'], ['Ese man es muy chévere.', 'Ce mec est très sympa.'], ['Mañana toca camellar.', 'Demain, il faut bosser.'], ['¡Qué paila!', 'Trop dommage !']],
      notes: [['b', 'Rolo : « chino » pour un gamin, « gomelo » pour un bourge.'], ['c', 'Costeño : « mi llave » pour un pote, « la vaina » pour un truc.']] } },
    { t: 'Raconter sa soirée', cat: 'soiree', l: {
      intro: 'On raconte au pretérito : chaque étape est une action terminée. Les connecteurs aident : primero, después, luego, al final.',
      ex: [['Primero fuimos a comer.', 'D’abord, nous sommes allés manger.'], ['Después bailamos champeta.', 'Ensuite, nous avons dansé la champeta.'], ['Luego tomamos guaro.', 'Puis nous avons bu de l’aguardiente.'], ['Al final llegué a las cinco.', 'À la fin, je suis rentré à cinq heures.']],
      notes: [['i', 'Un « parche » = un groupe de potes, un plan sortie.']] } },
    { t: 'Pretérito irrégulier : dije, vine, supe', cat: 'soiree', l: {
      intro: 'Encore des verbes clés avec un passé spécial : decir → dije, venir → vine, saber → supe, poner → puse, querer → quise.',
      ex: [['Le dije que sí.', 'Je lui ai dit oui.'], ['Vino con sus amigos.', 'Il est venu avec ses amis.'], ['No supe qué decir.', 'Je n’ai pas su quoi dire.'], ['Quiso bailar conmigo.', 'Elle a voulu danser avec moi.']],
      notes: [['i', 'Decir au pluriel : dijeron (pas « dijieron »).']],
      conj: ['decir', 'pret'] } },
    { t: 'Aller à la plage', cat: 'plage', l: {
      intro: 'Depuis Cartagena, on va à Playa Blanca ou aux îles du Rosaire en « lancha ». Le « pasadía » inclut souvent le bateau, le repas et la plage.',
      ex: [['Vamos a ir a Playa Blanca.', 'Nous allons aller à Playa Blanca.'], ['¿Cuánto vale el pasadía?', 'Combien coûte la journée tout compris ?'], ['¿Me presta el bloqueador?', 'Tu me prêtes la crème solaire ?'], ['El mar está muy rico.', 'La mer est super bonne.']],
      notes: [['c', 'Sur la plage, les vendeurs sont insistants : un « no, gracias » souriant suffit.']] } },
    { t: 'Le parler costeño', cat: 'plage', l: {
      intro: 'Sur la côte caraïbe, on avale les « s » et les fins de mots, on parle vite et avec humour. Quelques mots clés : ¡Ajá!, ¡Eche!, mi llave.',
      ex: [['¡Ajá! ¿Y qué más?', 'Bon ! Et quoi de neuf ?'], ['¡Eche, qué calor!', 'Eh ben, quelle chaleur !'], ['¿Qué más, mi llave?', 'Ça va, mon pote ?'], ['Vamo’ pa’ la playa.', 'On va à la plage.']],
      notes: [['c', '« ¿Qué hubo, pues? » se prononce souvent « ¿Quiubo, pue’? ».'], ['c', '« Mamar gallo » (taquiner) est un art sur la côte.']] } },
    { t: 'Le parler rolo', cat: 'argot', l: {
      intro: 'À Bogotá, le ton est plus posé et plus poli. On vouvoie beaucoup, on utilise « sumercé » et des diminutifs.',
      ex: [['¿Sumercé qué va a tomar?', 'Qu’est-ce que vous allez prendre ?'], ['¡Qué oso!', 'La honte !'], ['Regáleme un minutico.', 'Accordez-moi une petite minute.'], ['¡Uy, qué frío tan berraco!', 'Ouh, quel froid terrible !']],
      notes: [['b', 'Bogotá est à 2 600 m d’altitude : il y fait frais toute l’année.'], ['b', '« Rolo » = habitant de Bogotá ; la côte dit plutôt « cachaco ».']] } },
    { t: 'Estar + adjectif : l’état', cat: 'soiree', l: {
      intro: 'Pour décrire comment on se sent après une soirée : estar + adjectif. L’adjectif s’accorde.',
      ex: [['Estoy prendido.', 'Je suis pompette.'], ['Estamos muertos de cansancio.', 'Nous sommes morts de fatigue.'], ['Hoy estoy enguayabado.', 'Aujourd’hui j’ai la gueule de bois.'], ['Ella está feliz.', 'Elle est heureuse.']],
      notes: [['i', '« Enguayabado » vient de « guayabo » : la gueule de bois.']] } },
    { t: 'Le futur simple', cat: 'plage', l: {
      intro: 'Il se forme avec l’infinitif + é, ás, á, emos, án. À l’oral, il sert surtout à faire des suppositions.',
      ex: [['Mañana iremos a las islas.', 'Demain, nous irons aux îles.'], ['¿Dónde estará Juan?', 'Où peut bien être Juan ?'], ['Será muy caro.', 'Ça doit être très cher.'], ['Te llamaré.', 'Je t’appellerai.']],
      notes: [['i', 'Pour un projet, préfère « voy a + infinitif ».']],
      conj: ['tener', 'fut'] } },
    { t: 'Proposer, accepter, refuser', cat: 'soiree', l: {
      intro: 'Accepter : ¡De una!, ¡Hágale!, ¡Listo! Refuser poliment : Qué pena, no puedo. Hoy no, otro día.',
      ex: [['—¿Un guaro? —¡De una!', '—Un aguardiente ? —Carrément !'], ['—¿Bailamos? —¡Hágale!', '—On danse ? —Allez !'], ['Qué pena, hoy no puedo.', 'Désolé, aujourd’hui je ne peux pas.'], ['Otro día, ¿listo?', 'Un autre jour, d’accord ?']],
      notes: [['i', 'En Colombie, un « sí » vague peut cacher un non : « de pronto » = peut-être.']] } },
    { t: 'Test du palier Rumbear', test: true }
  ]
});

MC.PALIERS.push({
  id: 'p5', name: 'Conversar', fr: 'Discuter', desc: 'Raconter, donner son avis, se débrouiller',
  grammar: 'Imparfait · pretérito ou imparfait · impératif',
  seances: [
    { t: 'L’imparfait : verbes en -AR', cat: 'vie', l: {
      intro: 'L’imparfait décrit les habitudes et le décor du passé. Pour -AR : -aba, -abas, -aba, -ábamos, -aban.',
      ex: [['Cuando era niño, jugaba fútbol.', 'Quand j’étais petit, je jouais au foot.'], ['Trabajaba en un hotel.', 'Je travaillais dans un hôtel.'], ['Siempre viajábamos en verano.', 'Nous voyagions toujours en été.'], ['¿Dónde estudiaba usted?', 'Où étudiiez-vous ?']],
      notes: [['i', 'En Colombie, on dit « jugar fútbol » sans « al ».']],
      conj: ['hablar', 'imp'] } },
    { t: 'L’imparfait : -ER, -IR et ser, ir, ver', cat: 'vie', l: {
      intro: '-ER et -IR : -ía, -ías, -ía, -íamos, -ían. Seulement trois irréguliers : ser (era), ir (iba), ver (veía).',
      ex: [['Vivía en Lyon.', 'Je vivais à Lyon.'], ['Era muy tímido.', 'J’étais très timide.'], ['Íbamos a la playa cada año.', 'Nous allions à la plage chaque année.'], ['Veíamos novelas con mi abuela.', 'On regardait des telenovelas avec ma grand-mère.']],
      notes: [['i', 'Trois irréguliers seulement : c’est le temps le plus facile !']],
      conj: ['ser', 'imp'] } },
    { t: 'Pretérito ou imparfait ?', cat: 'vie', l: {
      intro: 'Le pretérito raconte les actions (ce qui s’est passé). L’imparfait pose le décor (comment c’était).',
      ex: [['Llovía cuando llegué.', 'Il pleuvait quand je suis arrivé.'], ['Estaba en la playa y vi un delfín.', 'J’étais à la plage et j’ai vu un dauphin.'], ['Era tarde, entonces cogí un taxi.', 'Il était tard, alors j’ai pris un taxi.'], ['Fue un viaje increíble.', 'Ça a été un voyage incroyable.']],
      notes: [['i', 'Astuce : si tu peux dire « en train de » en français, c’est souvent l’imparfait.']] } },
    { t: 'Hace dos años : le temps écoulé', cat: 'vie', l: {
      intro: '« Hace » + durée = il y a. « Hace… que » + présent = ça fait… que. « Llevar » + durée = ça fait… que (très colombien).',
      ex: [['Fui a Colombia hace dos años.', 'Je suis allé en Colombie il y a deux ans.'], ['Hace un mes que estudio español.', 'Ça fait un mois que j’étudie l’espagnol.'], ['Llevo tres días en Bogotá.', 'Ça fait trois jours que je suis à Bogotá.'], ['¿Hace cuánto vive aquí?', 'Depuis combien de temps vivez-vous ici ?']],
      notes: [['i', '« ¿Cuánto lleva en Colombia? » est une question qu’on te posera souvent.']] } },
    { t: 'Donner son avis', cat: 'vie', l: {
      intro: 'Pour donner son avis : creo que, me parece que, para mí. Pour demander : ¿usted qué opina?, ¿qué le parece?',
      ex: [['Creo que la Selección va a ganar.', 'Je pense que la sélection va gagner.'], ['Me parece muy bacano.', 'Je trouve ça génial.'], ['Para mí, Cartagena es más bonita.', 'Pour moi, Cartagena est plus belle.'], ['¿Qué le parece Bogotá?', 'Que pensez-vous de Bogotá ?']],
      notes: [['i', 'Pour être d’accord : « estoy de acuerdo » ; pas d’accord : « no estoy de acuerdo ».']] } },
    { t: 'Les connecteurs : pues, o sea, entonces', cat: 'vie', l: {
      intro: 'Ces petits mots rendent ton espagnol fluide : pues (bon, donc), o sea (c’est-à-dire), entonces (alors), la verdad (franchement), bueno (bon).',
      ex: [['Pues, la verdad, no sé.', 'Bon, franchement, je ne sais pas.'], ['O sea, ¿usted no viene?', 'Ça veut dire que vous ne venez pas ?'], ['Entonces, ¿qué hacemos?', 'Alors, on fait quoi ?'], ['Bueno, nos vemos mañana.', 'Bon, on se voit demain.']],
      notes: [['i', '« Pues » se met partout en Colombie : « sí, pues », « hágale, pues ».']] } },
    { t: 'L’impératif avec tú', cat: 'sante', l: {
      intro: 'Avec tú, l’impératif affirmatif ressemble au présent sans le s : habla, come, escribe. Quelques irréguliers : ven, ten, haz, pon, sal, di, ve.',
      ex: [['Espera un momento.', 'Attends un moment.'], ['Ven acá.', 'Viens ici.'], ['Dime la verdad.', 'Dis-moi la vérité.'], ['Ten cuidado.', 'Fais attention.']],
      notes: [['c', 'Sur la côte, on entend surtout l’impératif avec tú.']] } },
    { t: 'L’impératif avec usted', cat: 'sante', l: {
      intro: 'Avec usted, on inverse la voyelle : -AR → -e (espere), -ER/-IR → -a (coma, escriba). Pour les verbes au yo irrégulier, on part du yo : tengo → tenga.',
      ex: [['Espere un momento, por favor.', 'Attendez un moment, s’il vous plaît.'], ['Llame a la policía.', 'Appelez la police.'], ['Tenga cuidado.', 'Faites attention.'], ['Venga conmigo.', 'Venez avec moi.']],
      notes: [['b', 'À Bogotá, on adoucit avec « regáleme » : « Regáleme su nombre » (donnez-moi votre nom).']] } },
    { t: 'Urgences : expliquer un problème', cat: 'sante', l: {
      intro: 'Pour la douleur, « doler » fonctionne comme « gustar » : me duele la cabeza, me duelen los pies.',
      ex: [['Me duele el estómago.', 'J’ai mal au ventre.'], ['Me robaron la billetera.', 'On m’a volé mon portefeuille.'], ['Necesito un médico.', 'J’ai besoin d’un médecin.'], ['¿Dónde queda la droguería más cercana?', 'Où est la pharmacie la plus proche ?']],
      notes: [['i', 'Numéro d’urgence en Colombie : 123.'], ['i', 'Une pharmacie se dit « droguería » en Colombie.']] } },
    { t: 'Me gustaría : souhaits et politesse', cat: 'vie', l: {
      intro: 'Le conditionnel exprime les souhaits et adoucit les demandes : me gustaría, podría, quisiera.',
      ex: [['Me gustaría volver a Colombia.', 'J’aimerais revenir en Colombie.'], ['¿Podría ayudarme?', 'Pourriez-vous m’aider ?'], ['Quisiera una habitación doble.', 'Je voudrais une chambre double.'], ['Sería un sueño.', 'Ce serait un rêve.']],
      notes: [['i', 'Formation : infinitif + -ía, -ías, -ía, -íamos, -ían.']] } },
    { t: 'Si + présent : les hypothèses simples', cat: 'vie', l: {
      intro: 'Comme en français : si + présent, puis présent ou futur proche.',
      ex: [['Si llueve, vamos al museo.', 'S’il pleut, on va au musée.'], ['Si tiene tiempo, le muestro el barrio.', 'Si vous avez le temps, je vous montre le quartier.'], ['Si quiere, lo llevo.', 'Si vous voulez, je vous emmène.'], ['Si no hay trancón, llegamos en diez minutos.', 'S’il n’y a pas d’embouteillage, on arrive en dix minutes.']],
      notes: [['i', 'Jamais de futur après « si » : « si llueve », pas « si lloverá ».']] } },
    { t: 'Acabar de, volver a, seguir', cat: 'vie', l: {
      intro: 'Trois tournures pratiques : acabar de (venir de), volver a (refaire), seguir + gérondif (continuer à).',
      ex: [['Acabo de llegar.', 'Je viens d’arriver.'], ['Quiero volver a Cartagena.', 'Je veux retourner à Cartagena.'], ['Sigo estudiando español.', 'Je continue à étudier l’espagnol.'], ['¿Me lo vuelve a decir?', 'Vous pouvez me le redire ?']],
      notes: [['i', '« ¿Me lo vuelve a repetir? » : la façon polie de faire répéter.']] } },
    { t: 'Raconter son voyage', cat: 'vie', l: {
      intro: 'Tu as tout pour raconter : imparfait pour le décor, pretérito pour les actions, et tes avis.',
      ex: [['Estuve dos semanas y media en Colombia.', 'J’ai passé deux semaines et demie en Colombie.'], ['Lo que más me gustó fue Cartagena.', 'Ce qui m’a le plus plu, c’est Cartagena.'], ['La gente era muy amable.', 'Les gens étaient très gentils.'], ['Me amañé mucho.', 'Je m’y suis beaucoup plu.']],
      notes: [['i', '« Amañarse » = se sentir bien quelque part : un mot qui fera sourire les Colombiens.']] } },
    { t: 'Test final', test: true }
  ]
});
