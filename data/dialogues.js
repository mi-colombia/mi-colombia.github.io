/* Dialogues guidés — 7 par palier
   Une scène : t = titre, who = personnage, reg = 'b' (Bogotá) ou 'c' (Cartagena)
   turns : [phrase du personnage (es), traduction, [réponses possibles : [es, fr, réaction es?, réaction fr?]]]
   end : dernière réplique du personnage */
window.MC = window.MC || {};
MC.DIALOGUES = {
p1: [
  { t: 'Arrivée à l’auberge', who: 'Yesenia, réceptionniste', reg: 'c', turns: [
    ['¡Buenas! Bienvenido al hostal. ¿Cómo está?', 'Bonjour ! Bienvenue à l’auberge. Comment allez-vous ?', [
      ['Muy bien, gracias. ¿Y usted?', 'Très bien, merci. Et vous ?', 'Bien, gracias a Dios.', 'Bien, Dieu merci.'],
      ['Bien, gracias.', 'Bien, merci.'],
      ['Buenas, todo bien.', 'Bonjour, tout va bien.']]],
    ['¿Cómo se llama usted?', 'Comment vous appelez-vous ?', [
      ['Me llamo {NOM}.', 'Je m’appelle {NOM}.'],
      ['Mi nombre es {NOM}.', 'Mon nom est {NOM}.']]],
    ['Mucho gusto, {NOM}. ¿De dónde es?', 'Enchantée, {NOM}. D’où êtes-vous ?', [
      ['Soy de Francia.', 'Je viens de France.', '¡Ay, qué chévere! Francia.', 'Oh, super ! La France.'],
      ['Soy francés.', 'Je suis français.', '¡Qué bacano!', 'Trop bien !']]]
    ], end: ['Bienvenido a Cartagena. Aquí está su llave.', 'Bienvenue à Cartagena. Voici votre clé.'] },
  { t: 'Un voisin de table', who: 'Don Hernando, retraité', reg: 'b', turns: [
    ['Buenos días. ¿Se puede sentar aquí, si quiere?', 'Bonjour. Vous pouvez vous asseoir ici, si vous voulez.', [
      ['Muchas gracias, muy amable.', 'Merci beaucoup, très aimable.'],
      ['Gracias, con mucho gusto.', 'Merci, avec plaisir.']]],
    ['¿Usted no es de aquí, cierto?', 'Vous n’êtes pas d’ici, n’est-ce pas ?', [
      ['No, soy francés.', 'Non, je suis français.'],
      ['No, soy de Francia.', 'Non, je viens de France.']]],
    ['¿Y qué hace en Bogotá?', 'Et que faites-vous à Bogotá ?', [
      ['Estoy de vacaciones.', 'Je suis en vacances.', '¡Qué bueno!', 'C’est bien !'],
      ['Estoy aprendiendo español.', 'J’apprends l’espagnol.', '¡Ah, muy bien! Habla muy bien.', 'Ah, très bien ! Vous parlez très bien.']]]
    ], end: ['Que le vaya muy bien en Bogotá, joven.', 'Bon séjour à Bogotá, jeune homme.'] },
  { t: 'L’amie d’un ami', who: 'Valentina', reg: 'b', turns: [
    ['¡Hola! Yo soy Valentina, la amiga de Andrés. ¿Cómo vas?', 'Salut ! Moi c’est Valentina, l’amie d’Andrés. Ça va ?', [
      ['Muy bien, ¿y tú?', 'Très bien, et toi ?'],
      ['Bien, mucho gusto.', 'Bien, enchanté.']]],
    ['Bien, bien. ¿Y estás cansado del viaje?', 'Bien, bien. Et tu es fatigué du voyage ?', [
      ['Sí, estoy un poco cansado.', 'Oui, je suis un peu fatigué.', 'Normal, es un viaje largo.', 'Normal, c’est un long voyage.'],
      ['No, estoy bien.', 'Non, ça va.', '¡Uy, qué bien!', 'Oh, tant mieux !']]],
    ['¿Y a qué te dedicas?', 'Et tu fais quoi dans la vie ?', [
      ['Soy jefe de un equipo de técnicos.', 'Je suis chef d’une équipe de techniciens.'],
      ['Trabajo en una empresa.', 'Je travaille dans une entreprise.']]]
    ], end: ['¡Qué chévere! Bueno, bienvenido al parche.', 'Trop bien ! Bon, bienvenue dans la bande.'] },
  { t: 'Parler de la famille', who: 'Doña Marlene, propriétaire', reg: 'c', turns: [
    ['¿Y usted tiene familia, mijo?', 'Et vous avez de la famille, mon grand ?', [
      ['Sí, tengo un hijo.', 'Oui, j’ai un fils.', '¡Ay, qué lindo!', 'Oh, c’est mignon !'],
      ['Sí, tengo esposa e hijos.', 'Oui, j’ai une femme et des enfants.', '¡Qué bueno!', 'C’est bien !']]],
    ['¿Y cuántos años tiene el niño?', 'Et quel âge a le petit ?', [
      ['Tiene cinco años.', 'Il a cinq ans.'],
      ['Mi hijo tiene cinco años.', 'Mon fils a cinq ans.']]],
    ['¿Y sus papás viven en Francia?', 'Et vos parents vivent en France ?', [
      ['Sí, viven en Francia.', 'Oui, ils vivent en France.'],
      ['Sí, mis papás viven en Francia.', 'Oui, mes parents vivent en France.']]]
    ], end: ['¡Ajá! Entonces la próxima vez los trae a Cartagena.', 'Bon ! Alors la prochaine fois, vous les amenez à Cartagena.'] },
  { t: 'Payer au café', who: 'Camilo, caissier', reg: 'b', turns: [
    ['Buenas, ¿qué le doy?', 'Bonjour, qu’est-ce que je vous donne ?', [
      ['¿Me regala un tinto, por favor?', 'Un petit café, s’il vous plaît.'],
      ['Un tinto y una empanada, por favor.', 'Un café et un chausson, s’il vous plaît.']]],
    ['Listo. Son cinco mil pesos.', 'D’accord. Ça fait cinq mille pesos.', [
      ['¿Puedo pagar con tarjeta?', 'Je peux payer par carte ?', 'Sí, señor, claro.', 'Oui monsieur, bien sûr.'],
      ['Aquí tiene, en efectivo.', 'Voilà, en espèces.']]],
    ['¿Tiene sencillo? Es que no tengo vueltas.', 'Vous avez de la petite monnaie ? Je n’ai pas de monnaie à rendre.', [
      ['No, qué pena, solo tengo este billete.', 'Non, désolé, j’ai seulement ce billet.', 'Tranquilo, ya busco.', 'Pas de souci, je cherche.'],
      ['Sí, tengo cinco mil.', 'Oui, j’ai cinq mille.', '¡Perfecto!', 'Parfait !']]]
    ], end: ['Muchas gracias. Que esté muy bien.', 'Merci beaucoup. Bonne journée.'] },
  { t: 'Arrivée à l’hôtel', who: 'Luis, réceptionniste', reg: 'c', turns: [
    ['Buenas noches, bienvenido. ¿Tiene reserva?', 'Bonsoir, bienvenue. Vous avez une réservation ?', [
      ['Sí, tengo una reserva a nombre de {NOM}.', 'Oui, j’ai une réservation au nom de {NOM}.'],
      ['Sí, a nombre de {NOM}.', 'Oui, au nom de {NOM}.']]],
    ['Perfecto. ¿Me regala su pasaporte, por favor?', 'Parfait. Vous me donnez votre passeport, s’il vous plaît ?', [
      ['Claro, aquí está.', 'Bien sûr, le voici.'],
      ['Sí, aquí tiene.', 'Oui, voilà.']]],
    ['Su habitación queda en el tercer piso. ¿Alguna pregunta?', 'Votre chambre est au troisième étage. Une question ?', [
      ['¿Cuál es la clave del wifi?', 'Quel est le mot de passe du wifi ?', 'Es «Cartagena2026», todo junto.', 'C’est « Cartagena2026 », tout attaché.'],
      ['¿Hay aire acondicionado?', 'Il y a la climatisation ?', 'Sí, señor, en todas las habitaciones.', 'Oui monsieur, dans toutes les chambres.']]]
    ], end: ['Que descanse. Bienvenido a Cartagena.', 'Reposez-vous bien. Bienvenue à Cartagena.'] },
  { t: 'Les horaires du petit-déjeuner', who: 'Ana María, réceptionniste', reg: 'b', turns: [
    ['Buenos días, ¿en qué le puedo ayudar?', 'Bonjour, en quoi puis-je vous aider ?', [
      ['¿A qué hora es el desayuno?', 'À quelle heure est le petit-déjeuner ?'],
      ['Buenos días. ¿Hasta qué hora hay desayuno?', 'Bonjour. Jusqu’à quelle heure il y a le petit-déjeuner ?']]],
    ['De seis y media a diez. ¿Algo más?', 'De six heures et demie à dix heures. Autre chose ?', [
      ['¿Qué hora es ahora?', 'Quelle heure est-il maintenant ?', 'Son las nueve y cuarto.', 'Il est neuf heures et quart.'],
      ['No, eso es todo, gracias.', 'Non, c’est tout, merci.']]],
    ['¿Va a salir hoy?', 'Vous allez sortir aujourd’hui ?', [
      ['Sí, voy a La Candelaria.', 'Oui, je vais à La Candelaria.', 'Lleve chaqueta, que hace frío.', 'Prenez une veste, il fait froid.'],
      ['Sí, mañana también.', 'Oui, demain aussi.']]]
    ], end: ['Listo. ¡Que tenga un buen día!', 'Très bien. Bonne journée !'] }
],
p2: [
  { t: 'En taxi à Bogotá', who: 'Don Álvaro, taxista', reg: 'b', turns: [
    ['Buenas tardes, ¿para dónde va?', 'Bonjour, vous allez où ?', [
      ['Buenas, voy para La Candelaria, por favor.', 'Bonjour, je vais à La Candelaria, s’il vous plaît.'],
      ['Lléveme a La Candelaria, por favor.', 'Emmenez-moi à La Candelaria, s’il vous plaît.']]],
    ['Listo. ¿Nos vamos por la Séptima o por la Circunvalar?', 'D’accord. On passe par la 7e ou par la Circunvalar ?', [
      ['Por la Séptima, por favor.', 'Par la 7e, s’il vous plaît.', 'Hay un poquito de trancón, pero listo.', 'Il y a un peu d’embouteillage, mais d’accord.'],
      ['¿Cuál es más rápida?', 'Laquelle est la plus rapide ?', 'A esta hora, la Circunvalar.', 'À cette heure-ci, la Circunvalar.'],
      ['Como usted quiera.', 'Comme vous voulez.']]],
    ['Ya llegamos. Son quince mil.', 'Nous sommes arrivés. Ça fait quinze mille.', [
      ['Aquí tiene. Muchas gracias.', 'Voilà. Merci beaucoup.'],
      ['¿Me deja en la esquina, por favor?', 'Vous me déposez au coin, s’il vous plaît ?', 'Claro, con gusto.', 'Bien sûr, avec plaisir.']]]
    ], end: ['Que le vaya bien. ¡Pilas con el celular!', 'Bonne journée. Attention à votre portable !'] },
  { t: 'Négocier un taxi à Cartagena', who: 'Wilmer, taxista', reg: 'c', turns: [
    ['¡Ajá, mi llave! ¿Pa’ dónde vas?', 'Alors mon pote ! Tu vas où ?', [
      ['Voy a Bocagrande. ¿Cuánto me cobra?', 'Je vais à Bocagrande. Combien vous me prenez ?'],
      ['¿Cuánto vale hasta Bocagrande?', 'Combien jusqu’à Bocagrande ?']]],
    ['Veinte mil.', 'Vingt mille.', [
      ['Uy, está muy caro. ¿Quince?', 'Ouh, c’est très cher. Quinze ?', 'Eche, bueno, dieciocho.', 'Bon allez, dix-huit.'],
      ['Listo, vamos.', 'D’accord, on y va.']]],
    ['Súbete, pues. ¿Primera vez en Cartagena?', 'Monte, alors. C’est ta première fois à Cartagena ?', [
      ['No, ya vine hace dos años.', 'Non, je suis déjà venu il y a deux ans.', '¡Ah, ya eres costeño entonces!', 'Ah, t’es déjà costeño alors !'],
      ['Sí, es mi primera vez.', 'Oui, c’est ma première fois.', '¡Bienvenido, te va a encantar!', 'Bienvenue, tu vas adorer !']]]
    ], end: ['Llegamos, mi llave. ¡Disfruta!', 'On est arrivés, mon pote. Profite bien !'] },
  { t: 'Perdu à La Candelaria', who: 'Una señora', reg: 'b', turns: [
    ['¿Sí, joven? ¿Le ayudo?', 'Oui, jeune homme ? Je peux vous aider ?', [
      ['Disculpe, ¿dónde queda el museo del Oro?', 'Excusez-moi, où se trouve le musée de l’Or ?'],
      ['Qué pena con usted, estoy buscando el museo del Oro.', 'Excusez-moi, je cherche le musée de l’Or.']]],
    ['Queda en la Séptima con calle dieciséis.', 'C’est sur la 7e, au croisement de la calle 16.', [
      ['¿Está lejos?', 'C’est loin ?', 'No, está cerquita, a cinco cuadras.', 'Non, c’est tout près, à cinq rues.'],
      ['¿Puedo ir a pie?', 'Je peux y aller à pied ?', 'Sí, claro, son cinco cuadras.', 'Oui, bien sûr, c’est à cinq rues.']]],
    ['Siga derecho por esta calle y voltee a la izquierda.', 'Continuez tout droit dans cette rue et tournez à gauche.', [
      ['Muchas gracias, muy amable.', 'Merci beaucoup, très aimable.'],
      ['¿A la izquierda? Listo, gracias.', 'À gauche ? D’accord, merci.']]]
    ], end: ['Con gusto. Y no dé papaya con la cámara, ¿listo?', 'Avec plaisir. Et ne montrez pas trop votre appareil photo, d’accord ?'] },
  { t: 'Trouver la Plaza de la Trinidad', who: 'Kevin, vendeur de jus', reg: 'c', turns: [
    ['¡A la orden! ¿Un jugo bien frío?', 'À votre service ! Un jus bien frais ?', [
      ['No, gracias. ¿Dónde queda la Plaza de la Trinidad?', 'Non, merci. Où est la Plaza de la Trinidad ?'],
      ['Ahorita no. ¿La Plaza de la Trinidad, por dónde es?', 'Pas maintenant. La Plaza de la Trinidad, c’est par où ?']]],
    ['¡Ajá! Siga derecho, a tres cuadras, al frente de la iglesia.', 'Bon ! Continuez tout droit, à trois rues, en face de l’église.', [
      ['¿Al frente de la iglesia? Perfecto.', 'En face de l’église ? Parfait.'],
      ['¿Es por aquí, a la derecha?', 'C’est par ici, à droite ?', 'No, derecho, derecho.', 'Non, tout droit, tout droit.']]],
    ['¿Y el jugo para la vuelta?', 'Et le jus, pour le retour ?', [
      ['Listo, a la vuelta le compro uno.', 'D’accord, au retour je vous en achète un.', '¡Eso! Lo espero.', 'Voilà ! Je vous attends.'],
      ['Bueno, deme uno de maracuyá.', 'Bon, donnez-m’en un au fruit de la passion.', '¡Ya mismo, mi llave!', 'Tout de suite, mon pote !']]]
    ], end: ['¡Que disfrute Getsemaní!', 'Profitez bien de Getsemaní !'] },
  { t: 'Prendre le TransMilenio', who: 'Paola, étudiante', reg: 'b', turns: [
    ['Hola, ¿necesita ayuda?', 'Bonjour, vous avez besoin d’aide ?', [
      ['Sí, por favor. ¿Este bus va para el centro?', 'Oui, s’il vous plaît. Ce bus va au centre ?'],
      ['Sí, quiero ir al centro. ¿Qué bus cojo?', 'Oui, je veux aller au centre. Je prends quel bus ?']]],
    ['Coja el B74 y se baja en la estación Museo del Oro.', 'Prenez le B74 et descendez à la station Museo del Oro.', [
      ['¿Y cómo pago?', 'Et comment je paie ?', 'Con la tarjeta TuLlave. Se recarga allá.', 'Avec la carte TuLlave. On la recharge là-bas.'],
      ['¿Cuántas estaciones son?', 'C’est combien de stations ?', 'Como seis o siete.', 'Six ou sept environ.']]],
    ['Y pilas con la maleta, que a esta hora va lleno.', 'Et attention à votre valise, à cette heure-ci c’est plein.', [
      ['Listo, muchas gracias.', 'D’accord, merci beaucoup.'],
      ['Gracias por la ayuda.', 'Merci pour l’aide.']]]
    ], end: ['Con gusto. ¡Buen viaje!', 'Avec plaisir. Bon trajet !'] },
  { t: 'Le programme du jour', who: 'Jhon, ami costeño', reg: 'c', turns: [
    ['¡Quiubo, parce! ¿Qué vas a hacer hoy?', 'Salut mon pote ! Tu vas faire quoi aujourd’hui ?', [
      ['Voy a caminar por la ciudad amurallada.', 'Je vais me promener dans la vieille ville.'],
      ['Voy a ir a la playa.', 'Je vais aller à la plage.']]],
    ['¿Y en la noche? ¿Vamos a Getsemaní?', 'Et ce soir ? On va à Getsemaní ?', [
      ['¡De una! ¿A qué hora?', 'Carrément ! À quelle heure ?', 'Como a las ocho, hora colombiana.', 'Vers huit heures, heure colombienne.'],
      ['¡Hágale! ¿Dónde nos vemos?', 'Allez ! On se retrouve où ?', 'En la Plaza de la Trinidad.', 'Sur la Plaza de la Trinidad.']]],
    ['Listo. ¿Vas a coger taxi o vas a pie?', 'Ça marche. Tu vas prendre un taxi ou tu y vas à pied ?', [
      ['Voy a ir a pie.', 'Je vais y aller à pied.'],
      ['Voy a coger un taxi.', 'Je vais prendre un taxi.']]]
    ], end: ['¡Eso! Nos vemos ahorita, mi llave.', 'Super ! À tout à l’heure, mon pote.'] },
  { t: 'Coincé dans les bouchons', who: 'Andrés, ami au téléphone', reg: 'b', turns: [
    ['¿Aló? Parce, ¿dónde está? Lo estamos esperando.', 'Allô ? Mon pote, t’es où ? On t’attend.', [
      ['Estoy llegando, pero hay mucho trancón.', 'J’arrive, mais il y a beaucoup de bouchons.'],
      ['Qué pena, estoy en un trancón.', 'Désolé, je suis dans un embouteillage.']]],
    ['¿Y dónde va?', 'Et t’en es où ?', [
      ['Voy por la Séptima con calle cuarenta y cinco.', 'Je suis sur la 7e, au niveau de la calle 45.'],
      ['Estoy pasando por Chapinero.', 'Je suis en train de passer par Chapinero.']]],
    ['Uy, todavía le falta. ¿Pedimos algo?', 'Ouh, il te reste du chemin. On commande quelque chose ?', [
      ['Sí, pidan, yo llego en veinte minutos.', 'Oui, commandez, j’arrive dans vingt minutes.'],
      ['Sí, pídanme una pola, por favor.', 'Oui, commandez-moi une bière, s’il vous plaît.', '¡Hágale pues!', 'Ça marche !']]]
    ], end: ['Listo, parce. ¡Lo esperamos!', 'Ça marche, mon pote. On t’attend !'] }
],
p3: [
  { t: 'Le corrientazo du midi', who: 'Doña Gloria, restauratrice', reg: 'b', turns: [
    ['¡Siga, siga! ¿Va a almorzar?', 'Entrez, entrez ! Vous allez déjeuner ?', [
      ['Sí, ¿qué hay de almuerzo hoy?', 'Oui, qu’est-ce qu’il y a au déjeuner aujourd’hui ?'],
      ['Sí, ¿me regala un corrientazo?', 'Oui, vous me servez un menu du jour ?']]],
    ['Hoy hay ajiaco y de seco pollo o carne. ¿Qué le provoca?', 'Aujourd’hui il y a de l’ajiaco, et en plat poulet ou viande. Qu’est-ce qui vous tente ?', [
      ['Pollo, por favor.', 'Du poulet, s’il vous plaît.'],
      ['Carne, por favor.', 'De la viande, s’il vous plaît.']]],
    ['¿Y de tomar? Hay jugo de mora o de lulo.', 'Et à boire ? Il y a du jus de mûre ou de lulo.', [
      ['De lulo, en agua.', 'Lulo, à l’eau.'],
      ['De mora, en leche, por favor.', 'Mûre, au lait, s’il vous plaît.']]]
    ], end: ['Ya se lo traigo. ¡Buen provecho!', 'Je vous l’apporte. Bon appétit !'] },
  { t: 'Petit-déjeuner bogotano', who: 'Don Fabio, serveur', reg: 'b', turns: [
    ['Buenos días, sumercé. ¿Qué le provoca?', 'Bonjour. Qu’est-ce qui vous ferait plaisir ?', [
      ['¿Qué me recomienda para el desayuno?', 'Qu’est-ce que vous me recommandez pour le petit-déjeuner ?', 'Una changua, bien calientica.', 'Une changua, bien chaude.'],
      ['Una changua, por favor.', 'Une changua, s’il vous plaît.']]],
    ['¿Y la quiere con huevo?', 'Et vous la voulez avec un œuf ?', [
      ['Sí, con huevo, por favor.', 'Oui, avec un œuf, s’il vous plaît.'],
      ['Sí, claro.', 'Oui, bien sûr.']]],
    ['¿Y para tomar? ¿Un tintico o un perico?', 'Et à boire ? Un petit café noir ou un café au lait ?', [
      ['Un perico, por favor.', 'Un café au lait, s’il vous plaît.'],
      ['Un tinto, gracias.', 'Un café noir, merci.']]]
    ], end: ['Con mucho gusto. Ya se lo traigo.', 'Avec grand plaisir. Je vous l’apporte.'] },
  { t: 'Au marché de Bazurto', who: 'Don Rafa, vendeur de fruits', reg: 'c', turns: [
    ['¡A la orden, mi amor! ¿Qué buscas?', 'À ton service, mon cœur ! Tu cherches quoi ?', [
      ['¿A cómo está el mango?', 'Elle est à combien, la mangue ?'],
      ['Quiero mangos y una piña.', 'Je veux des mangues et un ananas.']]],
    ['El mango a dos mil la libra. Está bien maduro.', 'La mangue est à deux mille la livre. Elle est bien mûre.', [
      ['Deme dos libras, por favor.', 'Donnez-m’en deux livres, s’il vous plaît.'],
      ['¿Me rebaja un poquito?', 'Vous me faites un petit prix ?', '¡Eche! Bueno, te lo dejo a mil quinientos.', 'Eh ben ! Bon, je te la laisse à mille cinq cents.']]],
    ['¿Algo más? La piña está fresquita.', 'Autre chose ? L’ananas est bien frais.', [
      ['Sí, una piña. ¿Y la ñapa?', 'Oui, un ananas. Et le petit bonus ?', '¡Ajá! Te doy un lulo de ñapa.', 'Bon ! Je te donne un lulo en bonus.'],
      ['No, eso es todo. ¿Cuánto es?', 'Non, c’est tout. C’est combien ?']]]
    ], end: ['Son diez mil, mi llave. ¡Que los disfrutes!', 'Ça fait dix mille, mon pote. Régale-toi !'] },
  { t: 'La palenquera', who: 'Doña Cecilia, palenquera', reg: 'c', turns: [
    ['¡Fruta, fruta fresca! ¿Una foto, mi amor?', 'Des fruits, des fruits frais ! Une photo, mon cœur ?', [
      ['¿Cuánto vale la foto?', 'Combien coûte la photo ?', 'Si me compra fruta, la foto es gratis.', 'Si vous m’achetez des fruits, la photo est gratuite.'],
      ['No, gracias. Quiero fruta.', 'Non, merci. Je veux des fruits.']]],
    ['Tengo mango, papaya y patilla. ¿Qué le gusta?', 'J’ai de la mangue, de la papaye et de la pastèque. Qu’est-ce que vous aimez ?', [
      ['Me gusta el mango.', 'J’aime la mangue.'],
      ['Me gustan todas. Un vaso mixto.', 'Je les aime toutes. Un gobelet mélangé.']]],
    ['¿Con sal y limón?', 'Avec du sel et du citron ?', [
      ['Sí, con sal y limón.', 'Oui, avec du sel et du citron.'],
      ['No, sin sal, gracias.', 'Non, sans sel, merci.']]]
    ], end: ['¡Que lo disfrute! Y ahora sí, la foto.', 'Régalez-vous ! Et maintenant, la photo.'] },
  { t: 'Raconter son repas d’hier', who: 'Laura, collègue', reg: 'b', turns: [
    ['¿Y qué hizo ayer? ¿Dónde comió?', 'Et qu’avez-vous fait hier ? Où avez-vous mangé ?', [
      ['Comí en un restaurante en Usaquén.', 'J’ai mangé dans un restaurant à Usaquén.'],
      ['Almorcé en La Candelaria.', 'J’ai déjeuné à La Candelaria.']]],
    ['¿Y qué pidió?', 'Et qu’avez-vous commandé ?', [
      ['Pedí un ajiaco.', 'J’ai commandé un ajiaco.', '¡El ajiaco es lo mejor de Bogotá!', 'L’ajiaco, c’est le meilleur de Bogotá !'],
      ['Pedí una bandeja paisa.', 'J’ai commandé une bandeja paisa.', '¡Uy, eso es mucha comida!', 'Ouh, c’est beaucoup à manger !']]],
    ['¿Y le gustó?', 'Et ça vous a plu ?', [
      ['Sí, me encantó.', 'Oui, j’ai adoré.'],
      ['Sí, estuvo muy rico.', 'Oui, c’était très bon.']]]
    ], end: ['¡Qué bueno! La próxima vez vamos juntos.', 'Super ! La prochaine fois, on y va ensemble.'] },
  { t: 'Restaurant de poisson', who: 'Yeison, serveur', reg: 'c', turns: [
    ['¡Bienvenidos! ¿Mesa para cuántos?', 'Bienvenue ! Une table pour combien ?', [
      ['Para dos, por favor.', 'Pour deux, s’il vous plaît.'],
      ['Para uno.', 'Pour une personne.']]],
    ['Hoy tenemos mojarra frita con arroz con coco y patacón.', 'Aujourd’hui on a du tilapia frit avec du riz au coco et des patacones.', [
      ['Perfecto, una mojarra, por favor.', 'Parfait, un tilapia, s’il vous plaît.'],
      ['¿El pescado es fresco?', 'Le poisson est frais ?', '¡Claro! Llegó esta mañana.', 'Bien sûr ! Il est arrivé ce matin.']]],
    ['¿Y para tomar? Tenemos limonada de coco.', 'Et à boire ? On a de la limonade au coco.', [
      ['Una limonada de coco, por favor.', 'Une limonade au coco, s’il vous plaît.'],
      ['Una cerveza bien fría.', 'Une bière bien fraîche.']]]
    ], end: ['¡Ya mismo se lo traigo!', 'Je vous l’apporte tout de suite !'] },
  { t: 'L’addition', who: 'Sandra, serveuse', reg: 'b', turns: [
    ['¿Les traigo algo más?', 'Je vous apporte autre chose ?', [
      ['No, gracias. La cuenta, por favor.', 'Non, merci. L’addition, s’il vous plaît.'],
      ['¿Me regala la cuenta, por favor?', 'Vous me donnez l’addition, s’il vous plaît ?']]],
    ['Aquí está. ¿Le incluyo el servicio?', 'La voici. J’inclus le service ?', [
      ['Sí, claro.', 'Oui, bien sûr.'],
      ['Sí, la comida estuvo muy rica.', 'Oui, le repas était très bon.', '¡Ay, muchas gracias!', 'Oh, merci beaucoup !']]],
    ['¿Va a pagar con tarjeta? ¿A cuántas cuotas?', 'Vous payez par carte ? En combien de fois ?', [
      ['A una cuota, por favor.', 'En une fois, s’il vous plaît.'],
      ['No, voy a pagar en efectivo.', 'Non, je vais payer en espèces.']]]
    ], end: ['Muchas gracias. ¡Que vuelvan pronto!', 'Merci beaucoup. Revenez vite !'] }
],
p4: [
  { t: 'Une champeta à Getsemaní', who: 'Daniela', reg: 'c', turns: [
    ['¡Hola! ¿Tú bailas champeta?', 'Salut ! Tu danses la champeta ?', [
      ['Un poquito. ¿Me enseñas?', 'Un petit peu. Tu m’apprends ?', '¡Claro! Ven, es fácil.', 'Bien sûr ! Viens, c’est facile.'],
      ['No, pero quiero aprender.', 'Non, mais je veux apprendre.', '¡Eche! Yo te enseño.', 'Eh ben ! Je vais t’apprendre.']]],
    ['¡Eso! Así, muy bien. ¿De dónde eres?', 'Voilà ! Comme ça, très bien. Tu viens d’où ?', [
      ['Soy de Francia.', 'Je viens de France.'],
      ['Soy francés, pero me encanta Cartagena.', 'Je suis français, mais j’adore Cartagena.', '¡Ajá! Se te nota.', 'Bon ! Ça se voit.']]],
    ['¿Nos tomamos algo?', 'On boit un verre ?', [
      ['¡De una! ¿Qué quieres tomar?', 'Carrément ! Qu’est-ce que tu veux boire ?', 'Una cerveza bien fría.', 'Une bière bien fraîche.'],
      ['¡Hágale! Yo invito.', 'Allez ! C’est moi qui invite.']]]
    ], end: ['¡Qué chévere conocerte!', 'Trop cool de te rencontrer !'] },
  { t: 'Organiser un plan', who: 'Felipe, parcero', reg: 'b', turns: [
    ['Parce, ¿cuál es el plan para el viernes?', 'Mon pote, c’est quoi le plan pour vendredi ?', [
      ['Ni idea. ¿Vamos a rumbear?', 'Aucune idée. On va faire la fête ?'],
      ['¿Nos tomamos algo en Chapinero?', 'On boit un verre à Chapinero ?']]],
    ['¡De una! ¿A qué hora cuadramos?', 'Carrément ! On se retrouve à quelle heure ?', [
      ['A las nueve, ¿le parece?', 'À neuf heures, ça vous va ?'],
      ['Como a las ocho.', 'Vers huit heures.']]],
    ['Listo. ¿Invito a Valentina y a su parche?', 'Ça marche. J’invite Valentina et sa bande ?', [
      ['¡Claro! Entre más, mejor.', 'Bien sûr ! Plus on est de fous, plus on rit.'],
      ['Sí, ¡qué bacano!', 'Oui, trop bien !']]]
    ], end: ['Hágale pues. ¡Nos vemos el viernes!', 'Allez, ça marche. On se voit vendredi !'] },
  { t: 'Au bar de la boîte', who: 'Brayan, barman', reg: 'c', turns: [
    ['¡Bienvenido! ¿Qué te sirvo?', 'Bienvenue ! Qu’est-ce que je te sers ?', [
      ['Una media de guaro, por favor.', 'Une demi-bouteille d’aguardiente, s’il te plaît.'],
      ['Un ron con Coca-Cola.', 'Un rhum-coca.']]],
    ['¿Con hielo y limón?', 'Avec des glaçons et du citron ?', [
      ['Sí, con hielo.', 'Oui, avec des glaçons.'],
      ['No, sin hielo, gracias.', 'Non, sans glaçons, merci.']]],
    ['Listo, son cuarenta mil. ¿Pagas ahora?', 'Voilà, ça fait quarante mille. Tu paies maintenant ?', [
      ['Sí, con tarjeta.', 'Oui, par carte.'],
      ['Sí, aquí tienes.', 'Oui, voilà.']]]
    ], end: ['¡Salud! Que disfrutes la rumba.', 'Santé ! Profite bien de la soirée.'] },
  { t: 'Journée à Playa Blanca', who: 'Don Ever, loueur de tentes', reg: 'c', turns: [
    ['¡Ajá, mi llave! ¿Una carpa? ¿Unas sillas?', 'Alors mon pote ! Une tente ? Des chaises ?', [
      ['¿Cuánto vale la carpa?', 'Combien coûte la tente ?'],
      ['Sí, ¿cuánto cobra por la carpa?', 'Oui, combien vous prenez pour la tente ?']]],
    ['Cincuenta mil todo el día, con dos sillas.', 'Cinquante mille toute la journée, avec deux chaises.', [
      ['¿Me la deja en cuarenta?', 'Vous me la laissez à quarante ?', 'Eche, bueno, cuarenta y cinco.', 'Bon allez, quarante-cinq.'],
      ['Listo, perfecto.', 'D’accord, parfait.']]],
    ['¿Y van a almorzar? Mi señora hace un pescado frito tenaz.', 'Et vous allez déjeuner ? Ma femme fait un poisson frit énorme.', [
      ['¡De una! ¿A qué hora?', 'Carrément ! À quelle heure ?', 'Como a la una.', 'Vers une heure.'],
      ['Ahorita no, gracias.', 'Pas pour l’instant, merci.']]]
    ], end: ['¡Disfruten la playa! ¡Y pilas con el sol!', 'Profitez de la plage ! Et attention au soleil !'] },
  { t: 'Raconter la rumba', who: 'Andrés, ami', reg: 'b', turns: [
    ['¡Parce! ¿Y qué tal la rumba del sábado?', 'Mon pote ! Et alors, la fête de samedi ?', [
      ['¡Estuvo buenísima!', 'C’était génial !'],
      ['¡Qué chimba, parce!', 'Trop génial, mon pote !']]],
    ['¿Y qué hicieron?', 'Et vous avez fait quoi ?', [
      ['Primero comimos y después fuimos a bailar.', 'D’abord on a mangé, et ensuite on est allés danser.'],
      ['Bailamos salsa toda la noche.', 'On a dansé la salsa toute la nuit.']]],
    ['¿Y a qué hora llegó a la casa?', 'Et à quelle heure tu es rentré ?', [
      ['Llegué a las cuatro de la mañana.', 'Je suis rentré à quatre heures du matin.', '¡Uy, con razón tiene esa cara!', 'Ouh, ça explique la tête que tu as !'],
      ['Ni idea, muy tarde.', 'Aucune idée, très tard.', '¡Jajaja, qué boleta!', 'Hahaha, la honte !']]]
    ], end: ['La próxima vez me invita, ¿listo?', 'La prochaine fois tu m’invites, d’accord ?'] },
  { t: 'Demander son numéro', who: 'Camila', reg: 'b', turns: [
    ['Bueno, ya me voy. ¡Qué noche tan chévere!', 'Bon, j’y vais. Quelle super soirée !', [
      ['Sí, me divertí mucho contigo.', 'Oui, je me suis beaucoup amusé avec toi.'],
      ['¿Ya te vas? ¡Qué pena!', 'Tu pars déjà ? Dommage !']]],
    ['Sí, mañana toca madrugar.', 'Oui, demain il faut se lever tôt.', [
      ['¿Me pasas tu WhatsApp?', 'Tu me donnes ton WhatsApp ?', '¡Claro! Anota.', 'Bien sûr ! Note.'],
      ['¿Te puedo escribir mañana?', 'Je peux t’écrire demain ?', 'Sí, dale. Te paso mi número.', 'Oui, vas-y. Je te donne mon numéro.']]],
    ['¿Y nos vemos otro día?', 'Et on se voit un autre jour ?', [
      ['¡De una! ¿El sábado?', 'Carrément ! Samedi ?'],
      ['Sí, me encantaría.', 'Oui, j’adorerais.']]]
    ], end: ['Listo. ¡Chao, que llegues bien!', 'Ça marche. Salut, rentre bien !'] },
  { t: 'Le lendemain', who: 'Jhon, ami costeño', reg: 'c', turns: [
    ['¡Ajá! ¿Cómo amaneciste, mi llave?', 'Alors ! Comment tu t’es réveillé, mon pote ?', [
      ['Uy, tengo un guayabo tenaz.', 'Ouh, j’ai une gueule de bois énorme.', '¡Jajaja, normal!', 'Hahaha, normal !'],
      ['Estoy muerto de cansancio.', 'Je suis mort de fatigue.']]],
    ['Toca un caldo de pescado. ¿Vamos?', 'Il faut une soupe de poisson. On y va ?', [
      ['¡De una! Tengo hambre.', 'Carrément ! J’ai faim.'],
      ['Ahorita no, quiero dormir.', 'Pas maintenant, je veux dormir.', '¡Qué pereza contigo!', 'Ce que t’es mou !']]],
    ['¿Y el fin de semana vamos a las islas?', 'Et ce week-end, on va aux îles ?', [
      ['¡Hágale! ¿Cuánto vale el pasadía?', 'Allez ! Combien coûte la journée ?', 'Como ciento cincuenta mil, todo incluido.', 'Environ cent cinquante mille, tout compris.'],
      ['Sí, me encantaría.', 'Oui, j’adorerais.']]]
    ], end: ['¡Eso! Ya te vas volviendo costeño.', 'Voilà ! Tu deviens costeño petit à petit.'] }
],
p5: [
  { t: 'Souvenirs d’enfance', who: 'Valentina', reg: 'b', turns: [
    ['¿Y cómo era usted de niño?', 'Et comment étiez-vous enfant ?', [
      ['Era muy tímido.', 'J’étais très timide.', '¿En serio? ¡No le creo!', 'Sérieux ? Je ne vous crois pas !'],
      ['Era muy inquieto.', 'J’étais très turbulent.', 'Jajaja, me lo imagino.', 'Hahaha, je l’imagine bien.']]],
    ['¿Y qué le gustaba hacer?', 'Et qu’aimiez-vous faire ?', [
      ['Jugaba fútbol todos los días.', 'Je jouais au foot tous les jours.'],
      ['Me gustaba jugar básquet.', 'J’aimais jouer au basket.']]],
    ['¿Y dónde vivía?', 'Et où habitiez-vous ?', [
      ['Vivía en un pueblo pequeño.', 'J’habitais dans un petit village.'],
      ['Vivía en la ciudad con mis papás.', 'J’habitais en ville avec mes parents.']]]
    ], end: ['¡Qué bonito! Yo también jugaba en la calle con mis primos.', 'C’est beau ! Moi aussi je jouais dans la rue avec mes cousins.'] },
  { t: 'Parler foot', who: 'Don Elkin, chauffeur', reg: 'c', turns: [
    ['¿Usted vio el partido de la Selección?', 'Vous avez vu le match de la sélection ?', [
      ['Sí, ¡qué partidazo!', 'Oui, quel super match !'],
      ['No, no lo vi. ¿Quién ganó?', 'Non, je ne l’ai pas vu. Qui a gagné ?', '¡Colombia, dos a uno!', 'La Colombie, deux à un !']]],
    ['¿Y qué opina de James?', 'Et que pensez-vous de James ?', [
      ['Creo que es un crack.', 'Je pense que c’est un crack.'],
      ['Me parece muy buen jugador.', 'Il me semble être un très bon joueur.']]],
    ['¿Y a usted le gusta más el fútbol o el básquet?', 'Et vous préférez le foot ou le basket ?', [
      ['Prefiero el básquet.', 'Je préfère le basket.', '¡Ajá! ¿Y de qué equipo?', 'Bon ! Et quelle équipe ?'],
      ['Me gustan los dos.', 'J’aime les deux.']]]
    ], end: ['¡Eche! Usted sabe de deportes.', 'Eh ben ! Vous vous y connaissez en sport.'] },
  { t: 'À la pharmacie', who: 'Doña Luz, pharmacienne', reg: 'b', turns: [
    ['Buenas, ¿en qué le puedo ayudar?', 'Bonjour, en quoi puis-je vous aider ?', [
      ['Me duele mucho la cabeza.', 'J’ai très mal à la tête.'],
      ['Me siento mal, creo que tengo gripa.', 'Je ne me sens pas bien, je crois que j’ai la grippe.']]],
    ['¿Tiene fiebre?', 'Vous avez de la fièvre ?', [
      ['Sí, un poquito.', 'Oui, un petit peu.'],
      ['No, no tengo fiebre.', 'Non, je n’ai pas de fièvre.']]],
    ['Tómese esta pastilla cada ocho horas. ¿Es alérgico a algo?', 'Prenez ce comprimé toutes les huit heures. Vous êtes allergique à quelque chose ?', [
      ['No, no soy alérgico.', 'Non, je ne suis pas allergique.'],
      ['No que yo sepa.', 'Pas que je sache.']]]
    ], end: ['Listo. Descanse y tome mucha agua. Que se mejore.', 'Très bien. Reposez-vous et buvez beaucoup d’eau. Bon rétablissement.'] },
  { t: 'Un vol de portable', who: 'Agente Pérez, policier', reg: 'c', turns: [
    ['Buenas, ¿qué le pasó?', 'Bonjour, que vous est-il arrivé ?', [
      ['Me robaron el celular.', 'On m’a volé mon portable.'],
      ['Necesito ayuda, me robaron la billetera.', 'J’ai besoin d’aide, on m’a volé mon portefeuille.']]],
    ['¿Dónde estaba y a qué hora fue?', 'Où étiez-vous et à quelle heure c’était ?', [
      ['Estaba en la playa, como a las tres.', 'J’étais à la plage, vers trois heures.'],
      ['Estaba caminando por el centro.', 'Je marchais dans le centre.']]],
    ['¿Vio a la persona?', 'Vous avez vu la personne ?', [
      ['Sí, era un hombre en una moto.', 'Oui, c’était un homme sur une moto.'],
      ['No, no vi nada.', 'Non, je n’ai rien vu.']]]
    ], end: ['Listo, vamos a hacer la denuncia. Tranquilo, lo importante es que usted está bien.', 'Bien, on va faire la déclaration. Calmez-vous, l’important c’est que vous alliez bien.'] },
  { t: 'Raconter son voyage', who: 'Doña Marlene', reg: 'c', turns: [
    ['¿Y cuánto tiempo estuvo en Colombia la primera vez?', 'Et combien de temps êtes-vous resté en Colombie la première fois ?', [
      ['Estuve dos semanas y media.', 'Je suis resté deux semaines et demie.'],
      ['Casi tres semanas.', 'Presque trois semaines.']]],
    ['¿Y qué fue lo que más le gustó?', 'Et qu’est-ce qui vous a le plus plu ?', [
      ['Lo que más me gustó fue la gente.', 'Ce qui m’a le plus plu, ce sont les gens.', '¡Ay, qué lindo!', 'Oh, c’est gentil !'],
      ['Me encantó Cartagena.', 'J’ai adoré Cartagena.', '¡Claro, es la más bonita!', 'Bien sûr, c’est la plus belle !']]],
    ['¿Y va a volver?', 'Et vous allez revenir ?', [
      ['Sí, quiero volver pronto.', 'Oui, je veux revenir bientôt.'],
      ['Me gustaría volver el próximo año.', 'J’aimerais revenir l’année prochaine.']]]
    ], end: ['Aquí lo esperamos. Usted ya es de la familia.', 'On vous attend ici. Vous faites déjà partie de la famille.'] },
  { t: 'Projets et rêves', who: 'Felipe, parcero', reg: 'b', turns: [
    ['Parce, ¿y usted qué sueña hacer?', 'Mon pote, et toi, tu rêves de faire quoi ?', [
      ['Me gustaría viajar por toda Colombia.', 'J’aimerais voyager dans toute la Colombie.'],
      ['Me gustaría hablar español perfecto.', 'J’aimerais parler un espagnol parfait.', '¡Ya casi, parce!', 'T’y es presque, mon pote !']]],
    ['¿Y si se gana la lotería, qué hace?', 'Et si tu gagnes au loto, tu fais quoi ?', [
      ['Si gano la lotería, compro una casa en Cartagena.', 'Si je gagne au loto, j’achète une maison à Cartagena.'],
      ['Si gano, viajo con mi familia.', 'Si je gagne, je voyage avec ma famille.']]],
    ['¿Y cuándo vuelve a Bogotá?', 'Et quand reviens-tu à Bogotá ?', [
      ['Creo que el próximo año.', 'Je pense que l’année prochaine.'],
      ['Ni idea, pero pronto.', 'Aucune idée, mais bientôt.']]]
    ], end: ['Hágale pues. Aquí tiene su casa.', 'Ça marche. Ici, tu es chez toi.'] },
  { t: 'Au revoir, Colombie', who: 'Jhon, ami costeño', reg: 'c', turns: [
    ['¡Ajá, mi llave! ¿Entonces ya te vas?', 'Alors mon pote ! Donc tu pars déjà ?', [
      ['Sí, mañana vuelvo a Francia.', 'Oui, demain je rentre en France.'],
      ['Sí, qué pena, se acabaron las vacaciones.', 'Oui, dommage, les vacances sont finies.']]],
    ['¿Y qué te llevas de Colombia?', 'Et qu’est-ce que tu emportes de Colombie ?', [
      ['Me llevo muchos amigos.', 'J’emporte beaucoup d’amis.', '¡Eso, mi llave!', 'Voilà, mon pote !'],
      ['Me llevo el español costeño.', 'J’emporte l’espagnol costeño.', '¡Eche, ya hablas como nosotros!', 'Eh ben, tu parles déjà comme nous !']]],
    ['¿Y cuándo vuelves?', 'Et quand est-ce que tu reviens ?', [
      ['Vuelvo pronto, te lo prometo.', 'Je reviens bientôt, promis.'],
      ['Si Dios quiere, el próximo año.', 'Si Dieu le veut, l’année prochaine.']]]
    ], end: ['¡Que te vaya bien, mi llave! Aquí te esperamos.', 'Bon voyage, mon pote ! On t’attend ici.'] }
]
};
