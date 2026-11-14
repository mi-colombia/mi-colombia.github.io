/* Module Parler — conversations longues du quotidien (1/2)
   turns : [phrase du personnage, traduction, [réponses : [es, fr, réaction es?, réaction fr?]]]
   short : nombre d'échanges de la version courte ; endShort / end : dernière réplique */
window.MC = window.MC || {};
MC.CONVS = MC.CONVS || [];

MC.CONVS.push({
  id: 'resto', emoji: '🍽️', t: 'Dîner au restaurant', who: 'Andrés, mesero', reg: 'b', place: 'Bogotá, Usaquén', short: 10,
  turns: [
    ['¡Buenas noches! Bienvenido. ¿Mesa para cuántas personas?', 'Bonsoir ! Bienvenue. Une table pour combien de personnes ?', [
      ['Para dos personas, por favor.', 'Pour deux personnes, s’il vous plaît.'],
      ['Para mí solo, por favor.', 'Juste pour moi, s’il vous plaît.']]],
    ['¿Tiene reserva?', 'Vous avez une réservation ?', [
      ['Sí, a nombre de {NOM}.', 'Oui, au nom de {NOM}.', 'Perfecto, aquí está.', 'Parfait, la voici.'],
      ['No, no tengo reserva.', 'Non, je n’ai pas réservé.', 'No hay problema, tenemos mesa.', 'Pas de problème, nous avons une table.']]],
    ['¿Prefiere adentro o en la terraza?', 'Vous préférez à l’intérieur ou en terrasse ?', [
      ['Adentro, por favor, hace frío.', 'À l’intérieur, s’il vous plaît, il fait froid.', 'Sí, esta noche está haciendo frío.', 'Oui, il fait froid ce soir.'],
      ['En la terraza, por favor.', 'En terrasse, s’il vous plaît.', 'Listo, le traigo una cobija por si acaso.', 'D’accord, je vous apporte une couverture au cas où.']]],
    ['Siga por aquí. Aquí tiene la carta. ¿Le traigo algo de tomar mientras tanto?', 'Suivez-moi. Voici la carte. Je vous apporte quelque chose à boire en attendant ?', [
      ['Sí, ¿me regala una limonada de coco?', 'Oui, vous me donnez une limonade au coco ?'],
      ['Sí, una cerveza, por favor.', 'Oui, une bière, s’il vous plaît.'],
      ['Agua, por favor.', 'De l’eau, s’il vous plaît.']]],
    ['Listo. ¿Es la primera vez que viene?', 'Très bien. C’est la première fois que vous venez ?', [
      ['Sí, es la primera vez.', 'Oui, c’est la première fois.', '¡Bienvenido entonces!', 'Bienvenue alors !'],
      ['No, ya vine el año pasado.', 'Non, je suis déjà venu l’année dernière.', '¡Qué bueno que volvió!', 'Super que vous soyez revenu !']]],
    ['¿Ya sabe qué va a pedir o quiere que le recomiende algo?', 'Vous savez déjà ce que vous allez commander ou vous voulez que je vous recommande quelque chose ?', [
      ['¿Qué me recomienda?', 'Qu’est-ce que vous me recommandez ?'],
      ['Todavía no sé. ¿Cuál es el plato típico?', 'Je ne sais pas encore. Quel est le plat typique ?']]],
    ['El ajiaco es la especialidad de la casa. También tenemos una bandeja paisa muy buena.', 'L’ajiaco est la spécialité de la maison. On a aussi une très bonne bandeja paisa.', [
      ['¿Qué tiene el ajiaco?', 'Qu’est-ce qu’il y a dans l’ajiaco ?', 'Pollo, tres clases de papa, mazorca y guascas. Viene con crema, alcaparras y aguacate.', 'Du poulet, trois sortes de pommes de terre, du maïs et des guascas. Servi avec crème, câpres et avocat.'],
      ['¿La bandeja paisa es muy grande?', 'La bandeja paisa, c’est très copieux ?', '¡Uy, sí! Es para gente con mucha hambre.', 'Oh oui ! C’est pour les gens qui ont très faim.']]],
    ['Entonces, ¿qué le traigo?', 'Alors, qu’est-ce que je vous apporte ?', [
      ['Un ajiaco, por favor.', 'Un ajiaco, s’il vous plaît.'],
      ['Una bandeja paisa, por favor.', 'Une bandeja paisa, s’il vous plaît.']]],
    ['¿Y de entrada? Tenemos empanadas y patacones.', 'Et en entrée ? On a des empanadas et des patacones.', [
      ['Unas empanadas, por favor.', 'Des empanadas, s’il vous plaît.'],
      ['No, gracias, sin entrada.', 'Non, merci, pas d’entrée.']]],
    ['Perfecto. ¿Es alérgico a algo?', 'Parfait. Vous êtes allergique à quelque chose ?', [
      ['No, a nada.', 'Non, à rien.'],
      ['Sí, no puedo comer mariscos.', 'Oui, je ne peux pas manger de fruits de mer.', 'Listo, tranquilo, el plato no tiene mariscos.', 'D’accord, ne vous inquiétez pas, le plat n’en contient pas.']]],
    ['Aquí están las empanadas, con ají. ¡Cuidado que el ají pica!', 'Voici les empanadas, avec la sauce pimentée. Attention, elle pique !', [
      ['Gracias. ¿Pica mucho?', 'Merci. Elle pique beaucoup ?', 'Un poquito, pero es rico.', 'Un petit peu, mais c’est bon.'],
      ['Me encanta el picante.', 'J’adore le piquant.', '¡Ah, entonces le va a gustar!', 'Ah, alors vous allez aimer !']]],
    ['¿Y qué lo trae por Bogotá? ¿Turismo o trabajo?', 'Et qu’est-ce qui vous amène à Bogotá ? Tourisme ou travail ?', [
      ['Turismo. Estoy de vacaciones.', 'Tourisme. Je suis en vacances.'],
      ['Estoy aprendiendo español.', 'J’apprends l’espagnol.', '¡Y lo habla muy bien!', 'Et vous le parlez très bien !']]],
    ['¿Y cuánto tiempo se va a quedar?', 'Et combien de temps allez-vous rester ?', [
      ['Dos semanas.', 'Deux semaines.'],
      ['Una semana en Bogotá y después voy a Cartagena.', 'Une semaine à Bogotá et après je vais à Cartagena.', '¡Uy, qué rico! Allá hace calor.', 'Oh, super ! Là-bas il fait chaud.']]],
    ['Aquí está su plato. ¡Buen provecho!', 'Voici votre plat. Bon appétit !', [
      ['¡Gracias, se ve delicioso!', 'Merci, ça a l’air délicieux !'],
      ['Muchas gracias.', 'Merci beaucoup.']]],
    ['¿Cómo le pareció? ¿Todo bien con la comida?', 'Comment l’avez-vous trouvé ? Tout va bien avec le repas ?', [
      ['¡Muy rico, me encantó!', 'Très bon, j’ai adoré !', '¡Qué bueno! Me alegra.', 'Super ! Ça me fait plaisir.'],
      ['Sí, muy bueno, pero estoy lleno.', 'Oui, très bon, mais je n’ai plus faim.']]],
    ['¿Le recojo el plato?', 'Je vous débarrasse ?', [
      ['Sí, gracias.', 'Oui, merci.'],
      ['Sí, por favor.', 'Oui, s’il vous plaît.']]],
    ['¿Le provoca un postre? Tenemos postre de natas y obleas.', 'Un dessert vous tente ? On a du postre de natas et des obleas.', [
      ['¿Qué son las obleas?', 'C’est quoi les obleas ?', 'Son galletas delgaditas con arequipe, queso y mermelada.', 'Ce sont des gaufrettes fines avec de la confiture de lait, du fromage et de la confiture.'],
      ['No, gracias, estoy lleno.', 'Non, merci, je n’ai plus faim.', 'Tranquilo.', 'Pas de souci.']]],
    ['¿Y un tintico o un aromática para terminar?', 'Et un petit café ou une infusion pour finir ?', [
      ['Un tinto, por favor.', 'Un café noir, s’il vous plaît.'],
      ['Una aromática, por favor.', 'Une infusion, s’il vous plaît.']]],
    ['Aquí tiene. ¿Algo más?', 'Voilà. Autre chose ?', [
      ['No, gracias. ¿Me trae la cuenta?', 'Non, merci. Vous m’apportez l’addition ?'],
      ['La cuenta, por favor.', 'L’addition, s’il vous plaît.']]],
    ['Aquí está. ¿Le incluyo el servicio voluntario?', 'La voici. J’inclus le service volontaire ?', [
      ['Sí, claro, el servicio fue excelente.', 'Oui, bien sûr, le service était excellent.', '¡Ay, muchas gracias!', 'Oh, merci beaucoup !'],
      ['Sí, inclúyalo.', 'Oui, incluez-le.']]],
    ['¿Va a pagar en efectivo o con tarjeta?', 'Vous allez payer en espèces ou par carte ?', [
      ['Con tarjeta, por favor.', 'Par carte, s’il vous plaît.'],
      ['En efectivo.', 'En espèces.']]],
    ['¿A cuántas cuotas?', 'En combien de fois ?', [
      ['A una cuota.', 'En une fois.'],
      ['A una, por favor.', 'En une fois, s’il vous plaît.']]],
    ['Listo, ya pasó. ¿Le pido un taxi?', 'C’est bon, c’est passé. Je vous appelle un taxi ?', [
      ['Sí, por favor, voy para el hotel.', 'Oui, s’il vous plaît, je rentre à l’hôtel.', 'Listo, en cinco minutos llega.', 'D’accord, il arrive dans cinq minutes.'],
      ['No, gracias, me voy caminando.', 'Non, merci, je rentre à pied.', 'Bueno, pero pilas con el celular en la calle.', 'D’accord, mais attention au portable dans la rue.']]],
    ['Fue un gusto atenderlo. ¿Va a volver?', 'Ce fut un plaisir de vous servir. Vous reviendrez ?', [
      ['¡Claro que sí! Muchas gracias por todo.', 'Bien sûr ! Merci beaucoup pour tout.'],
      ['Sí, la próxima vez pido la bandeja paisa.', 'Oui, la prochaine fois je prends la bandeja paisa.', '¡Jajaja, venga con hambre!', 'Hahaha, venez avec faim !']]]
  ],
  endShort: ['Ya le traigo las empanadas. ¡Buen provecho!', 'Je vous apporte les empanadas. Bon appétit !'],
  end: ['Que tenga una muy buena noche. ¡Lo esperamos!', 'Passez une très bonne soirée. On vous attend !']
});

MC.CONVS.push({
  id: 'medecin', emoji: '🩺', t: 'Chez le médecin', who: 'Doctora Patiño', reg: 'b', place: 'Bogotá, une clinique', short: 10,
  turns: [
    ['Buenos días, siga y siéntese. ¿En qué le puedo ayudar?', 'Bonjour, entrez et asseyez-vous. En quoi puis-je vous aider ?', [
      ['Buenos días, doctora. Me siento mal.', 'Bonjour, docteure. Je ne me sens pas bien.'],
      ['Buenos días. Estoy enfermo desde ayer.', 'Bonjour. Je suis malade depuis hier.']]],
    ['Cuénteme, ¿qué síntomas tiene?', 'Racontez-moi, quels symptômes avez-vous ?', [
      ['Me duele mucho la cabeza.', 'J’ai très mal à la tête.'],
      ['Me duele el estómago.', 'J’ai mal au ventre.'],
      ['Tengo tos y me duele la garganta.', 'Je tousse et j’ai mal à la gorge.']]],
    ['¿Desde cuándo se siente así?', 'Depuis quand vous sentez-vous comme ça ?', [
      ['Desde ayer en la noche.', 'Depuis hier soir.'],
      ['Desde hace dos días.', 'Depuis deux jours.']]],
    ['¿Ha tenido fiebre?', 'Vous avez eu de la fièvre ?', [
      ['Sí, un poquito anoche.', 'Oui, un peu hier soir.', 'Bueno, ahorita la medimos.', 'Bon, on va la prendre tout de suite.'],
      ['No, no he tenido fiebre.', 'Non, je n’ai pas eu de fièvre.', 'Bueno, eso es buena señal.', 'Bon, c’est bon signe.']]],
    ['¿Cuánto tiempo lleva en Bogotá?', 'Depuis combien de temps êtes-vous à Bogotá ?', [
      ['Llegué hace tres días.', 'Je suis arrivé il y a trois jours.', 'Ah, puede ser la altura. Bogotá está a dos mil seiscientos metros.', 'Ah, ça peut être l’altitude. Bogotá est à 2 600 mètres.'],
      ['Una semana.', 'Une semaine.']]],
    ['¿Ha comido algo diferente estos días?', 'Avez-vous mangé quelque chose d’inhabituel ces jours-ci ?', [
      ['Sí, comí en la calle ayer.', 'Oui, j’ai mangé dans la rue hier.', 'Mmm, puede ser eso.', 'Mmm, ça peut être ça.'],
      ['No, lo normal.', 'Non, comme d’habitude.']]],
    ['¿Está tomando algún medicamento?', 'Vous prenez un médicament ?', [
      ['No, ninguno.', 'Non, aucun.'],
      ['Sí, tomé un acetaminofén esta mañana.', 'Oui, j’ai pris du paracétamol ce matin.', 'Bien hecho.', 'Bien fait.']]],
    ['¿Es alérgico a algún medicamento?', 'Êtes-vous allergique à un médicament ?', [
      ['No, que yo sepa.', 'Non, pas que je sache.'],
      ['Sí, soy alérgico a la penicilina.', 'Oui, je suis allergique à la pénicilline.', 'Importante, lo anoto.', 'Important, je le note.']]],
    ['Bueno, vamos a revisarlo. Respire profundo… otra vez. Muy bien.', 'Bon, on va vous examiner. Respirez profondément… encore. Très bien.', [
      ['¿Es algo grave, doctora?', 'C’est grave, docteure ?'],
      ['¿Todo está bien?', 'Tout va bien ?']]],
    ['No, tranquilo, no es grave. Es una infección leve.', 'Non, rassurez-vous, ce n’est pas grave. C’est une infection légère.', [
      ['Ah, qué alivio.', 'Ah, quel soulagement.'],
      ['¿Y qué tengo que hacer?', 'Et qu’est-ce que je dois faire ?']]],
    ['Le voy a formular unas pastillas. Tómese una cada ocho horas, durante cinco días.', 'Je vais vous prescrire des comprimés. Prenez-en un toutes les huit heures, pendant cinq jours.', [
      ['¿Con comida o sin comida?', 'Avec ou sans repas ?', 'Con comida, para no irritar el estómago.', 'Pendant le repas, pour ne pas irriter l’estomac.'],
      ['¿Cada ocho horas? Listo.', 'Toutes les huit heures ? D’accord.']]],
    ['También tiene que tomar mucha agua y descansar.', 'Il faut aussi boire beaucoup d’eau et vous reposer.', [
      ['¿Puedo salir a caminar?', 'Je peux sortir marcher ?', 'Sí, pero suave, nada de subir a Monserrate todavía.', 'Oui, mais doucement, pas de montée à Monserrate pour l’instant.'],
      ['Listo, voy a descansar en el hotel.', 'D’accord, je vais me reposer à l’hôtel.']]],
    ['Y mientras toma las pastillas, nada de alcohol, ¿listo?', 'Et pendant le traitement, pas d’alcool, d’accord ?', [
      ['¿Ni una cervecita?', 'Même pas une petite bière ?', '¡Ni una! Jajaja.', 'Même pas une ! Hahaha.'],
      ['Entendido, nada de alcohol.', 'Compris, pas d’alcool.']]],
    ['¿Dónde se está quedando?', 'Où logez-vous ?', [
      ['En un hotel en La Candelaria.', 'Dans un hôtel à La Candelaria.'],
      ['En un apartamento en Chapinero.', 'Dans un appartement à Chapinero.']]],
    ['Hay una droguería aquí al lado. Allá le venden las pastillas.', 'Il y a une pharmacie juste à côté. On vous y vendra les comprimés.', [
      ['¿Necesito la fórmula?', 'J’ai besoin de l’ordonnance ?', 'Sí, aquí se la doy firmada.', 'Oui, je vous la donne signée.'],
      ['Perfecto, gracias.', 'Parfait, merci.']]],
    ['¿Tiene seguro de viaje?', 'Vous avez une assurance voyage ?', [
      ['Sí, aquí está mi tarjeta.', 'Oui, voici ma carte.'],
      ['No, voy a pagar directamente.', 'Non, je vais payer directement.', 'Listo, en la recepción le dicen el valor.', 'D’accord, à l’accueil on vous dira le montant.']]],
    ['Si en tres días no mejora, vuelva, ¿listo?', 'Si dans trois jours ça ne va pas mieux, revenez, d’accord ?', [
      ['Listo, doctora.', 'D’accord, docteure.'],
      ['¿Y si la fiebre sube?', 'Et si la fièvre monte ?', 'Si pasa de treinta y nueve, venga a urgencias.', 'Si elle dépasse 39, venez aux urgences.']]],
    ['¿Tiene alguna otra pregunta?', 'Vous avez une autre question ?', [
      ['¿Puedo viajar a Cartagena el fin de semana?', 'Je peux voyager à Cartagena ce week-end ?', 'Sí, si se siente mejor. Allá el calor le va a hacer bien.', 'Oui, si vous allez mieux. Là-bas la chaleur vous fera du bien.'],
      ['No, eso es todo. Muchas gracias.', 'Non, c’est tout. Merci beaucoup.']]],
    ['Con mucho gusto. ¿Cómo se dice «gracias» en francés?', 'Avec plaisir. Comment dit-on « gracias » en français ?', [
      ['Se dice «merci».', 'On dit « merci ».', '¡Merci! Jajaja, qué bonito.', 'Merci ! Hahaha, c’est joli.'],
      ['«Merci», doctora.', '« Merci », docteure.']]],
    ['Bueno, que se mejore pronto.', 'Bon, prompt rétablissement.', [
      ['Gracias, doctora, muy amable.', 'Merci, docteure, très aimable.'],
      ['Muchas gracias, que tenga buen día.', 'Merci beaucoup, bonne journée.']]]
  ],
  endShort: ['Le formulo algo para el dolor. Que se mejore pronto.', 'Je vous prescris quelque chose contre la douleur. Bon rétablissement.'],
  end: ['Cuídese mucho y bienvenido a Colombia.', 'Prenez bien soin de vous, et bienvenue en Colombie.']
});

MC.CONVS.push({
  id: 'appart', emoji: '🏠', t: 'Louer un appartement', who: 'Don Germán, propriétaire', reg: 'b', place: 'Bogotá, Chapinero', short: 10,
  turns: [
    ['¿Aló? Buenas tardes.', 'Allô ? Bonjour.', [
      ['Buenas tardes. Llamo por el apartamento en arriendo.', 'Bonjour. J’appelle pour l’appartement à louer.'],
      ['Hola, vi su anuncio del apartamento.', 'Bonjour, j’ai vu votre annonce pour l’appartement.']]],
    ['Ah, sí. ¿Para cuánto tiempo lo necesita?', 'Ah oui. Pour combien de temps en avez-vous besoin ?', [
      ['Por tres meses.', 'Pour trois mois.'],
      ['Por un mes, más o menos.', 'Pour un mois, à peu près.', 'Bueno, para un mes es un poquito más caro.', 'Bon, pour un mois c’est un petit peu plus cher.']]],
    ['¿Y para cuántas personas?', 'Et pour combien de personnes ?', [
      ['Para mí solo.', 'Pour moi seul.'],
      ['Para mi esposa y yo.', 'Pour ma femme et moi.']]],
    ['Perfecto. El apartamento tiene dos habitaciones, cocina y un baño.', 'Parfait. L’appartement a deux chambres, une cuisine et une salle de bain.', [
      ['¿Está amoblado?', 'Il est meublé ?', 'Sí, tiene todo: camas, sofá, nevera, lavadora.', 'Oui, il y a tout : lits, canapé, frigo, machine à laver.'],
      ['¿En qué piso queda?', 'Il est à quel étage ?', 'En el quinto piso, con ascensor.', 'Au cinquième, avec ascenseur.']]],
    ['¿Quiere saber algo más?', 'Vous voulez savoir autre chose ?', [
      ['¿Cuánto vale el arriendo al mes?', 'Combien coûte le loyer par mois ?'],
      ['¿Y cuál es el precio?', 'Et quel est le prix ?']]],
    ['Son dos millones quinientos al mes, con administración incluida.', 'C’est deux millions cinq cent mille par mois, charges de copropriété comprises.', [
      ['¿Incluye los servicios?', 'Ça inclut l’eau, l’électricité, le gaz ?', 'El agua y el gas sí, la luz y el internet no.', 'L’eau et le gaz oui, l’électricité et internet non.'],
      ['Está un poquito caro. ¿Me lo deja en dos millones?', 'C’est un peu cher. Vous me le laissez à deux millions ?', 'Mmm, por tres meses se lo dejo en dos millones trescientos.', 'Mmm, pour trois mois je vous le laisse à deux millions trois cent mille.']]],
    ['Claro. ¿Algo más?', 'Bien sûr. Autre chose ?', [
      ['¿El apartamento tiene internet?', 'L’appartement a internet ?', 'Sí, fibra óptica, muy rápido.', 'Oui, la fibre, très rapide.'],
      ['Necesito internet para trabajar.', 'J’ai besoin d’internet pour travailler.', 'Tranquilo, el internet es muy bueno.', 'Ne vous inquiétez pas, internet est très bon.']]],
    ['¿Qué más le gustaría saber?', 'Qu’aimeriez-vous savoir d’autre ?', [
      ['¿En qué barrio queda?', 'Dans quel quartier il se trouve ?', 'En Chapinero Alto, en la calle cincuenta y seis con carrera quinta.', 'À Chapinero Alto, calle 56 et carrera 5.'],
      ['¿Es un barrio seguro?', 'C’est un quartier sûr ?', 'Sí, es muy tranquilo, y el edificio tiene portería veinticuatro horas.', 'Oui, très tranquille, et l’immeuble a un gardien 24 h/24.']]],
    ['¿Alguna otra pregunta?', 'Une autre question ?', [
      ['¿Hay tiendas y supermercados cerca?', 'Il y a des magasins et des supermarchés près ?', 'Sí, a dos cuadras hay un supermercado y una droguería.', 'Oui, à deux rues il y a un supermarché et une pharmacie.'],
      ['¿Y el TransMilenio está cerca?', 'Et le TransMilenio est près ?', 'La estación más cercana está a diez minutos caminando.', 'La station la plus proche est à dix minutes à pied.']]],
    ['¿Quiere venir a verlo?', 'Vous voulez venir le voir ?', [
      ['Sí, ¿puedo ir mañana?', 'Oui, je peux venir demain ?', 'Claro, ¿a qué hora le queda bien?', 'Bien sûr, à quelle heure ça vous arrange ?'],
      ['Sí, ¿hoy es posible?', 'Oui, c’est possible aujourd’hui ?', 'Hoy a las seis, si quiere.', 'Aujourd’hui à six heures, si vous voulez.']]],
    ['¿A qué hora le queda bien?', 'À quelle heure ça vous arrange ?', [
      ['A las diez de la mañana.', 'À dix heures du matin.'],
      ['Después del almuerzo, como a las tres.', 'Après le déjeuner, vers trois heures.']]],
    ['Listo. Bienvenido, siga. Esta es la sala.', 'Très bien. Bienvenue, entrez. Voici le salon.', [
      ['¡Qué bonito! Tiene mucha luz.', 'Que c’est joli ! Il y a beaucoup de lumière.', 'Sí, da hacia los cerros.', 'Oui, il donne sur les montagnes.'],
      ['Es más grande de lo que pensaba.', 'C’est plus grand que je pensais.']]],
    ['Aquí está la cocina. La estufa es de gas.', 'Voici la cuisine. La gazinière est au gaz.', [
      ['¿El horno funciona?', 'Le four marche ?', 'Sí, todo funciona perfecto.', 'Oui, tout marche parfaitement.'],
      ['¿Hay agua caliente?', 'Il y a de l’eau chaude ?', 'Sí, hay calentador. Aquí en Bogotá es indispensable.', 'Oui, il y a un chauffe-eau. Ici à Bogotá c’est indispensable.']]],
    ['Y estas son las habitaciones.', 'Et voici les chambres.', [
      ['¿Las camas son dobles?', 'Les lits sont doubles ?', 'Una doble y una sencilla.', 'Un double et un simple.'],
      ['Me gusta mucho.', 'Ça me plaît beaucoup.']]],
    ['¿Tiene alguna pregunta?', 'Vous avez une question ?', [
      ['¿Hace frío en las noches?', 'Il fait froid la nuit ?', 'Un poquito, pero hay cobijas de sobra.', 'Un peu, mais il y a des couvertures en plus.'],
      ['¿Puedo tener visitas?', 'Je peux recevoir des visites ?', 'Claro, solo avisa en la portería.', 'Bien sûr, prévenez juste le gardien.']]],
    ['¿Entonces qué dice? ¿Le gusta?', 'Alors, qu’en dites-vous ? Il vous plaît ?', [
      ['Sí, me gusta. Lo quiero tomar.', 'Oui, il me plaît. Je veux le prendre.'],
      ['Me gusta, pero lo tengo que pensar.', 'Il me plaît, mais je dois réfléchir.', 'Tranquilo, pero tengo otras personas interesadas.', 'Pas de souci, mais j’ai d’autres personnes intéressées.']]],
    ['Necesito un depósito de un mes.', 'J’ai besoin d’une caution d’un mois.', [
      ['¿Me devuelve el depósito al final?', 'Vous me rendez la caution à la fin ?', 'Sí, si todo queda en buen estado.', 'Oui, si tout est en bon état.'],
      ['Listo, no hay problema.', 'D’accord, pas de problème.']]],
    ['¿Cómo prefiere pagar?', 'Comment préférez-vous payer ?', [
      ['Por transferencia, si es posible.', 'Par virement, si c’est possible.'],
      ['En efectivo.', 'En espèces.']]],
    ['Perfecto. ¿Cuándo quiere entrar?', 'Parfait. Quand voulez-vous emménager ?', [
      ['El lunes, si se puede.', 'Lundi, si c’est possible.'],
      ['Mañana mismo.', 'Dès demain.', '¡Uy, qué rápido! Bueno, listo.', 'Oh, c’est rapide ! Bon, d’accord.']]],
    ['Necesito una copia de su pasaporte para el contrato.', 'J’ai besoin d’une copie de votre passeport pour le contrat.', [
      ['Claro, se la mando por WhatsApp.', 'Bien sûr, je vous l’envoie par WhatsApp.'],
      ['Aquí tiene mi pasaporte.', 'Voici mon passeport.']]],
    ['Listo. Aquí están las llaves. Esta es la de la puerta y esta la del edificio.', 'Voilà. Voici les clés. Celle-ci pour la porte et celle-là pour l’immeuble.', [
      ['Perfecto, muchas gracias.', 'Parfait, merci beaucoup.'],
      ['¿Y si tengo un problema, lo llamo a usted?', 'Et si j’ai un problème, je vous appelle ?', 'Sí, a cualquier hora. Este es mi número.', 'Oui, à n’importe quelle heure. Voici mon numéro.']]],
    ['Bienvenido al barrio. ¡Que se amañe!', 'Bienvenue dans le quartier. Que vous vous y plaisiez !', [
      ['¡Gracias! Seguro que me voy a amañar.', 'Merci ! Je suis sûr que je vais m’y plaire.'],
      ['Muchas gracias, don Germán.', 'Merci beaucoup, don Germán.']]]
  ],
  endShort: ['Listo, lo espero entonces. Le mando la dirección por WhatsApp.', 'Très bien, je vous attends. Je vous envoie l’adresse par WhatsApp.'],
  end: ['Cualquier cosa me escribe. ¡Que esté muy bien!', 'Pour quoi que ce soit, écrivez-moi. Portez-vous bien !']
});

MC.CONVS.push({
  id: 'telephone', emoji: '📞', t: 'Appeler un ami', who: 'Jhon, ami costeño', reg: 'c', place: 'Cartagena, au téléphone', short: 10,
  turns: [
    ['¿Aló? ¡Ajá, mi llave! ¿Qué más pues?', 'Allô ? Alors mon pote ! Quoi de neuf ?', [
      ['¡Quiubo, Jhon! Todo bien, ¿y tú?', 'Salut Jhon ! Tout va bien, et toi ?'],
      ['¡Hola, parce! Bien, bien. ¿Cómo estás?', 'Salut mon pote ! Bien, bien. Comment tu vas ?']]],
    ['Aquí, camellando. ¡Qué calor tan bravo hoy! ¿Y tú dónde andas?', 'Là, je bosse. Quelle chaleur aujourd’hui ! Et toi, t’es où ?', [
      ['Estoy en el hotel, descansando.', 'Je suis à l’hôtel, je me repose.'],
      ['Estoy en la playa de Bocagrande.', 'Je suis à la plage de Bocagrande.', '¡Uy, qué envidia!', 'Oh, je suis jaloux !']]],
    ['¿Y qué has hecho estos días?', 'Et qu’est-ce que t’as fait ces jours-ci ?', [
      ['Ayer fui a la ciudad amurallada.', 'Hier je suis allé dans la vieille ville.', '¿Y te gustó?', 'Et ça t’a plu ?'],
      ['Fui a las islas del Rosario.', 'Je suis allé aux îles du Rosaire.', '¡Eche! ¿Y qué tal el agua?', 'Eh ben ! Et l’eau, c’était comment ?']]],
    ['¿Qué fue lo que más te gustó?', 'Qu’est-ce qui t’a le plus plu ?', [
      ['Me encantaron los colores de las casas.', 'J’ai adoré les couleurs des maisons.'],
      ['El agua, era transparente.', 'L’eau, elle était transparente.']]],
    ['¿Y ya probaste la arepa de huevo?', 'Et t’as déjà goûté l’arepa de huevo ?', [
      ['Sí, ¡me encantó!', 'Oui, j’ai adoré !', '¡Eso! Ya eres costeño.', 'Voilà ! T’es déjà costeño.'],
      ['No, todavía no. ¿Dónde la venden?', 'Non, pas encore. Où on en vend ?', 'En cualquier esquina, mi llave. La mejor es en La Boquilla.', 'À n’importe quel coin de rue, mon pote. La meilleure, c’est à La Boquilla.']]],
    ['Oye, ¿qué vas a hacer esta noche?', 'Dis, tu fais quoi ce soir ?', [
      ['Nada todavía. ¿Tienes un plan?', 'Rien encore. T’as un plan ?'],
      ['Quería salir a comer algo.', 'Je voulais sortir manger un truc.']]],
    ['Vamos a Getsemaní con unos amigos. ¿Te apuntas?', 'On va à Getsemaní avec des potes. Tu viens ?', [
      ['¡De una! ¿A qué hora?', 'Carrément ! À quelle heure ?'],
      ['¡Hágale! ¿Quiénes van?', 'Allez ! Qui vient ?', 'Mi prima Daniela, Kevin y unos amigos de la universidad.', 'Ma cousine Daniela, Kevin et des amis de la fac.']]],
    ['Como a las ocho, pero tú sabes, hora costeña, jajaja.', 'Vers huit heures, mais tu sais, heure costeña, hahaha.', [
      ['Jajaja, entonces llego a las nueve.', 'Hahaha, alors j’arrive à neuf heures.', '¡Eso, ya entendiste!', 'Voilà, t’as compris !'],
      ['Listo, a las ocho estoy allá.', 'Ok, à huit heures je suis là-bas.', '¡Uy, el francés puntual!', 'Oh, le Français ponctuel !']]],
    ['¿Sabes llegar a la Plaza de la Trinidad?', 'Tu sais aller à la Plaza de la Trinidad ?', [
      ['Sí, ya fui una vez.', 'Oui, j’y suis déjà allé une fois.'],
      ['No, ¿me mandas la ubicación?', 'Non, tu m’envoies la localisation ?', 'Claro, ya te la mando por WhatsApp.', 'Bien sûr, je te l’envoie par WhatsApp.']]],
    ['¿Vas a ir caminando o en taxi?', 'Tu vas y aller à pied ou en taxi ?', [
      ['En taxi, el hotel está lejos.', 'En taxi, l’hôtel est loin.', 'Pilas, negocia el precio antes de subirte.', 'Attention, négocie le prix avant de monter.'],
      ['Caminando, está cerca.', 'À pied, c’est près.']]],
    ['Oye, ¿y el español cómo vas?', 'Dis, et l’espagnol, ça avance ?', [
      ['Bien, practico todos los días con una aplicación.', 'Bien, je pratique tous les jours avec une appli.', '¡Se nota, hablas muy bien!', 'Ça se voit, tu parles très bien !'],
      ['Más o menos, ustedes hablan muy rápido.', 'Moyen, vous parlez très vite.', '¡Jajaja, es que los costeños somos así!', 'Hahaha, c’est que les costeños sont comme ça !']]],
    ['¿Y entiendes cuando hablamos costeño?', 'Et tu comprends quand on parle costeño ?', [
      ['A veces no, se comen las letras.', 'Parfois non, vous mangez les lettres.', '¡Eso es verdad, mi llave! Vamo’ pa’ la playa, jajaja.', 'C’est vrai, mon pote ! « Vamo’ pa’ la playa », hahaha.'],
      ['Cada vez entiendo más.', 'Je comprends de plus en plus.']]],
    ['Oye, ¿y cuándo te vas para Bogotá?', 'Dis, et tu pars quand pour Bogotá ?', [
      ['El jueves en la mañana.', 'Jeudi matin.'],
      ['Todavía no sé, me estoy amañando aquí.', 'Je sais pas encore, je me plais bien ici.', '¡Eche, quédate pues!', 'Eh ben, reste alors !']]],
    ['Allá hace frío, ¿ya tienes chaqueta?', 'Là-bas il fait froid, t’as une veste ?', [
      ['Sí, traje una chaqueta.', 'Oui, j’ai apporté une veste.'],
      ['No, ¿hace mucho frío?', 'Non, il fait très froid ?', 'Para nosotros los costeños, ¡muchísimo! Jajaja.', 'Pour nous les costeños, énormément ! Hahaha.']]],
    ['¿Y te vas en avión o en bus?', 'Et tu y vas en avion ou en bus ?', [
      ['En avión, es más rápido.', 'En avion, c’est plus rapide.'],
      ['En bus, para ver el paisaje.', 'En bus, pour voir le paysage.', '¡Uy, son como veinte horas!', 'Oh, c’est environ vingt heures !']]],
    ['Antes de que te vayas tenemos que ir a comer pescado a La Boquilla.', 'Avant que tu partes, on doit aller manger du poisson à La Boquilla.', [
      ['¡Claro! ¿El miércoles?', 'Bien sûr ! Mercredi ?'],
      ['Me encantaría. ¿Cuándo puedes?', 'J’adorerais. Quand est-ce que tu peux ?', 'El miércoles salgo temprano del camello.', 'Mercredi je sors tôt du boulot.']]],
    ['Listo, el miércoles entonces. Yo invito.', 'Ok, mercredi alors. C’est moi qui invite.', [
      ['No, no, yo invito, tú me has ayudado mucho.', 'Non, non, c’est moi qui invite, tu m’as beaucoup aidé.', '¡Ajá, bueno, hacemos vaca!', 'Bon, d’accord, on partage !'],
      ['¡Gracias, mi llave!', 'Merci, mon pote !']]],
    ['Oye, me tengo que ir, mi jefe me está mirando, jajaja.', 'Dis, je dois y aller, mon chef me regarde, hahaha.', [
      ['Jajaja, listo, nos vemos esta noche.', 'Hahaha, ok, on se voit ce soir.'],
      ['Dale, chao, nos vemos en Getsemaní.', 'Vas-y, salut, on se voit à Getsemaní.']]],
    ['¡Pilas con el celular en la calle, ¿oíste?!', 'Fais gaffe au portable dans la rue, t’as entendu ?!', [
      ['Sí, tranquilo, no doy papaya.', 'Oui, t’inquiète, je fais attention.', '¡Eso, ya hablas colombiano!', 'Voilà, tu parles déjà colombien !'],
      ['Sí, gracias por el consejo.', 'Oui, merci pour le conseil.']]]
  ],
  endShort: ['¡Listo, mi llave! Te mando la ubicación. ¡Nos vemos!', 'Ok, mon pote ! Je t’envoie la localisation. À plus !'],
  end: ['¡Chao, mi llave! Nos vemos ahorita.', 'Salut, mon pote ! À tout à l’heure.']
});

MC.CONVS.push({
  id: 'famille', emoji: '👨‍👩‍👧', t: 'Rencontrer la famille d’une amie', who: 'Doña Rosa, maman de Daniela', reg: 'c', place: 'Cartagena, un déjeuner du dimanche', short: 10,
  turns: [
    ['¡Bienvenido, mijo! Siga, siga, está en su casa.', 'Bienvenue, mon grand ! Entrez, entrez, faites comme chez vous.', [
      ['Muchas gracias, señora. Mucho gusto.', 'Merci beaucoup, madame. Enchanté.'],
      ['Gracias por la invitación, doña Rosa.', 'Merci pour l’invitation, doña Rosa.']]],
    ['Daniela nos ha hablado mucho de usted. ¿Cómo está?', 'Daniela nous a beaucoup parlé de vous. Comment allez-vous ?', [
      ['Muy bien, gracias. ¿Y usted?', 'Très bien, merci. Et vous ?', 'Bien, gracias a Dios.', 'Bien, Dieu merci.'],
      ['Bien, un poquito nervioso.', 'Bien, un peu nerveux.', '¡Ay, tranquilo, aquí somos buena gente!', 'Oh, ne vous inquiétez pas, on est des gens sympas ici !']]],
    ['Le traje un juguito de corozo, bien frío. ¿Le gusta?', 'Je vous ai apporté un petit jus de corozo, bien frais. Ça vous plaît ?', [
      ['¡Qué rico! Nunca lo había probado.', 'Que c’est bon ! Je n’en avais jamais goûté.', 'Es típico de aquí de la costa.', 'C’est typique d’ici, de la côte.'],
      ['Sí, muy refrescante, gracias.', 'Oui, très rafraîchissant, merci.']]],
    ['Este es mi esposo, Rafael, y el abuelo, don Manuel.', 'Voici mon mari, Rafael, et le grand-père, don Manuel.', [
      ['Mucho gusto, señor.', 'Enchanté, monsieur.'],
      ['Encantado de conocerlos.', 'Ravi de vous rencontrer.']]],
    ['¿Y usted de qué parte de Francia es?', 'Et vous êtes de quelle région de France ?', [
      ['Soy del sur de Francia.', 'Je suis du sud de la France.'],
      ['Vivo cerca de Lyon.', 'J’habite près de Lyon.']]],
    ['¿Y allá hace mucho frío?', 'Et là-bas il fait très froid ?', [
      ['En invierno sí, pero en verano hace calor.', 'En hiver oui, mais en été il fait chaud.'],
      ['Ahora sí, está haciendo frío.', 'En ce moment oui, il fait froid.', '¡Ay, yo no aguantaría!', 'Oh, moi je ne supporterais pas !']]],
    ['¿Y tiene familia allá?', 'Et vous avez de la famille là-bas ?', [
      ['Sí, tengo un hijo de cinco años.', 'Oui, j’ai un fils de cinq ans.', '¡Ay, qué lindo! ¿Y cómo se llama?', 'Oh, c’est mignon ! Et comment il s’appelle ?'],
      ['Sí, mis papás y mis hermanos.', 'Oui, mes parents et mes frères et sœurs.']]],
    ['¿Tiene fotos?', 'Vous avez des photos ?', [
      ['Sí, mire, aquí está.', 'Oui, regardez, la voici.', '¡Qué belleza! Se parece a usted.', 'Quelle merveille ! Il vous ressemble.'],
      ['Sí, espere, se las muestro.', 'Oui, attendez, je vous les montre.']]],
    ['Bueno, vengan a la mesa que ya está el almuerzo.', 'Bon, venez à table, le déjeuner est prêt.', [
      ['¡Huele delicioso!', 'Ça sent délicieux !', 'Hice arroz con coco y pescado frito.', 'J’ai fait du riz au coco et du poisson frit.'],
      ['Con mucho gusto. ¿Le ayudo con algo?', 'Avec plaisir. Je peux vous aider ?', '¡Ay, qué caballero! No, siéntese tranquilo.', 'Oh, quel gentleman ! Non, asseyez-vous tranquillement.']]],
    ['Sírvase todo lo que quiera, mijo.', 'Servez-vous autant que vous voulez, mon grand.', [
      ['Gracias, todo se ve muy rico.', 'Merci, tout a l’air très bon.'],
      ['¿Qué es esto, señora?', 'Qu’est-ce que c’est, madame ?', 'Patacones, plátano verde frito. Con suerito costeño.', 'Des patacones, de la banane plantain verte frite. Avec du suero costeño.']]],
    ['¿Le gustó el pescado?', 'Le poisson vous a plu ?', [
      ['¡Está buenísimo! Usted cocina muy bien.', 'Il est excellent ! Vous cuisinez très bien.', '¡Ay, gracias! Es receta de mi mamá.', 'Oh, merci ! C’est la recette de ma mère.'],
      ['Sí, muy rico, en Francia no comemos así.', 'Oui, très bon, en France on ne mange pas comme ça.']]],
    ['¿Y qué se come en Francia?', 'Et qu’est-ce qu’on mange en France ?', [
      ['Mucho pan, queso y vino.', 'Beaucoup de pain, de fromage et de vin.', '¡Jajaja, como en las películas!', 'Hahaha, comme dans les films !'],
      ['Depende de la región, pero el queso es muy importante.', 'Ça dépend de la région, mais le fromage est très important.']]],
    ['Don Manuel: ¿Y a usted le gusta el vallenato, joven?', 'Don Manuel : Et vous aimez le vallenato, jeune homme ?', [
      ['Todavía no lo conozco bien.', 'Je ne le connais pas encore bien.', '¡Ahorita le pongo un Diomedes Díaz!', 'Je vais vous mettre un Diomedes Díaz tout de suite !'],
      ['Sí, me gusta mucho el acordeón.', 'Oui, j’aime beaucoup l’accordéon.', '¡Eso! Usted es de los nuestros.', 'Voilà ! Vous êtes des nôtres.']]],
    ['¿Y cómo conoció a Daniela?', 'Et comment avez-vous connu Daniela ?', [
      ['La conocí bailando champeta en Getsemaní.', 'Je l’ai rencontrée en dansant la champeta à Getsemaní.', '¡Ay, esta niña! Siempre bailando.', 'Oh, cette petite ! Toujours en train de danser.'],
      ['Por un amigo, Jhon.', 'Par un ami, Jhon.', '¡Ah, el primo Jhon! Ese muchacho sí es buena gente.', 'Ah, le cousin Jhon ! Ce garçon est vraiment sympa.']]],
    ['¿Y cuánto tiempo más se queda en Colombia?', 'Et combien de temps restez-vous encore en Colombie ?', [
      ['Una semana más.', 'Encore une semaine.'],
      ['Me voy el domingo, desafortunadamente.', 'Je pars dimanche, malheureusement.', '¡Ay, tan rápido!', 'Oh, déjà !']]],
    ['¿Va a volver?', 'Vous allez revenir ?', [
      ['¡Claro! Me encanta Cartagena.', 'Bien sûr ! J’adore Cartagena.'],
      ['Sí, el próximo año, con mi familia.', 'Oui, l’année prochaine, avec ma famille.', '¡Aquí los esperamos a todos!', 'On vous attend tous ici !']]],
    ['¿Quiere un tintico después del almuerzo?', 'Vous voulez un petit café après le déjeuner ?', [
      ['Sí, por favor.', 'Oui, s’il vous plaît.'],
      ['No, gracias, estoy muy lleno.', 'Non, merci, j’ai très bien mangé.', '¡Jajaja, así me gusta!', 'Hahaha, c’est comme ça que je l’aime !']]],
    ['Y de postre hice cocadas.', 'Et en dessert j’ai fait des cocadas.', [
      ['¿Qué son las cocadas?', 'C’est quoi les cocadas ?', 'Dulces de coco. Las venden las palenqueras en el centro.', 'Des confiseries à la noix de coco. Les palenqueras en vendent dans le centre.'],
      ['¡Una sola, por favor, o no voy a poder caminar!', 'Une seule, s’il vous plaît, sinon je ne pourrai plus marcher !', '¡Jajaja, qué chistoso!', 'Hahaha, qu’il est drôle !']]],
    ['Bueno, mijo, fue un placer conocerlo.', 'Bon, mon grand, ce fut un plaisir de vous connaître.', [
      ['El placer es mío. Muchas gracias por todo.', 'Le plaisir est pour moi. Merci beaucoup pour tout.'],
      ['Gracias, doña Rosa, la comida estuvo deliciosa.', 'Merci, doña Rosa, le repas était délicieux.']]],
    ['Vuelva cuando quiera. Esta es su casa.', 'Revenez quand vous voulez. C’est votre maison.', [
      ['Muchas gracias, que Dios les pague.', 'Merci beaucoup, que Dieu vous le rende.', '¡Ay, y habla como colombiano!', 'Oh, et il parle comme un Colombien !'],
      ['Gracias, hasta pronto.', 'Merci, à bientôt.']]]
  ],
  endShort: ['Bueno, vengan a la mesa que se enfría el almuerzo.', 'Bon, venez à table, le déjeuner refroidit.'],
  end: ['Que le vaya muy bien, mijo. ¡Saludos a su familia!', 'Bonne continuation, mon grand. Le bonjour à votre famille !']
});

MC.CONVS.push({
  id: 'travail', emoji: '💼', t: 'Premier jour au travail', who: 'Laura, collègue', reg: 'b', place: 'Bogotá, un bureau', short: 10,
  turns: [
    ['¡Hola! Tú debes ser el nuevo, ¿cierto?', 'Salut ! Tu dois être le nouveau, non ?', [
      ['Sí, hola. Me llamo {NOM}.', 'Oui, bonjour. Je m’appelle {NOM}.'],
      ['Sí, soy yo. Mucho gusto.', 'Oui, c’est moi. Enchanté.']]],
    ['Yo soy Laura, trabajo en el equipo de proyectos. ¡Bienvenido!', 'Moi c’est Laura, je travaille dans l’équipe projets. Bienvenue !', [
      ['Gracias, Laura. Mucho gusto.', 'Merci, Laura. Enchanté.'],
      ['Encantado. ¿Hace cuánto trabajas aquí?', 'Ravi. Depuis combien de temps tu travailles ici ?', 'Llevo tres años.', 'Ça fait trois ans.']]],
    ['¿Y tú qué vas a hacer aquí?', 'Et toi, tu vas faire quoi ici ?', [
      ['Voy a ser jefe de un equipo de técnicos.', 'Je vais être chef d’une équipe de techniciens.', '¡Uy, qué responsabilidad!', 'Oh, quelle responsabilité !'],
      ['Voy a trabajar en mantenimiento.', 'Je vais travailler dans la maintenance.']]],
    ['¿Y es tu primera vez en Colombia?', 'Et c’est ta première fois en Colombie ?', [
      ['No, ya vine de vacaciones.', 'Non, je suis déjà venu en vacances.'],
      ['Sí, primera vez trabajando aquí.', 'Oui, première fois que je travaille ici.']]],
    ['Ven, te muestro la oficina. Aquí está tu puesto.', 'Viens, je te montre le bureau. Voici ton poste.', [
      ['¡Qué bien, tiene ventana!', 'Super, il y a une fenêtre !', 'Sí, y se ven los cerros.', 'Oui, et on voit les montagnes.'],
      ['Perfecto, gracias.', 'Parfait, merci.']]],
    ['Allá está la cocina. Hay café gratis todo el día.', 'Là-bas, c’est la cuisine. Il y a du café gratuit toute la journée.', [
      ['¡Excelente! Me encanta el café colombiano.', 'Excellent ! J’adore le café colombien.', '¡Aquí tomamos tinto todo el día!', 'Ici on boit du café toute la journée !'],
      ['¿Y dónde almuerzan ustedes?', 'Et vous déjeunez où ?', 'Casi siempre en un corrientazo aquí al lado.', 'Presque toujours dans un petit resto du coin.']]],
    ['¿A qué hora entras normalmente?', 'Tu commences à quelle heure d’habitude ?', [
      ['A las siete y media.', 'À sept heures et demie.', '¡Uy, madrugador!', 'Oh, un lève-tôt !'],
      ['A las ocho.', 'À huit heures.']]],
    ['Aquí el trancón es tenaz. ¿Cómo vas a venir?', 'Ici les bouchons sont terribles. Comment tu vas venir ?', [
      ['En TransMilenio.', 'En TransMilenio.', 'Buena idea, aunque va muy lleno.', 'Bonne idée, même s’il est très plein.'],
      ['En bicicleta, vivo cerca.', 'À vélo, j’habite près.', '¡Qué bien! Aquí hay ciclorrutas.', 'Super ! Ici il y a des pistes cyclables.']]],
    ['Mira, este es Camilo, el jefe de área.', 'Regarde, voici Camilo, le chef de service.', [
      ['Buenos días, mucho gusto.', 'Bonjour, enchanté.'],
      ['Encantado de conocerlo.', 'Ravi de vous rencontrer.']]],
    ['Camilo: Bienvenido. ¿Ya tienes tu computador y tu carné?', 'Camilo : Bienvenue. Tu as déjà ton ordinateur et ton badge ?', [
      ['Todavía no tengo el carné.', 'Je n’ai pas encore le badge.', 'Tranquilo, Laura te acompaña a recursos humanos.', 'Pas de souci, Laura t’accompagne aux ressources humaines.'],
      ['Sí, ya tengo todo, gracias.', 'Oui, j’ai déjà tout, merci.']]],
    ['A las diez tenemos reunión de equipo. ¿Puedes presentarte?', 'À dix heures on a réunion d’équipe. Tu peux te présenter ?', [
      ['Claro, con gusto.', 'Bien sûr, avec plaisir.'],
      ['Sí, pero mi español no es perfecto.', 'Oui, mais mon espagnol n’est pas parfait.', '¡No se preocupe, habla muy bien!', 'Ne t’inquiète pas, tu parles très bien !']]],
    ['Laura: ¿Y qué vas a decir en la presentación?', 'Laura : Et qu’est-ce que tu vas dire dans ta présentation ?', [
      ['Mi nombre, mi experiencia y mis objetivos.', 'Mon nom, mon expérience et mes objectifs.'],
      ['Que estoy feliz de trabajar con ustedes.', 'Que je suis content de travailler avec vous.', '¡Eso, así se gana al equipo!', 'Voilà, c’est comme ça qu’on gagne l’équipe !']]],
    ['¿Cuántas personas hay en tu equipo?', 'Il y a combien de personnes dans ton équipe ?', [
      ['Como quince técnicos.', 'Environ quinze techniciens.'],
      ['Todavía no sé exactamente.', 'Je ne sais pas encore exactement.']]],
    ['Un consejo: aquí la gente es muy amable, pero no siempre dice «no» directamente.', 'Un conseil : ici les gens sont très gentils, mais ne disent pas toujours « non » directement.', [
      ['¿Cómo así?', 'Comment ça ?', 'Si alguien dice «de pronto», casi siempre es un no.', 'Si quelqu’un dit « de pronto » (peut-être), c’est presque toujours un non.'],
      ['Interesante, gracias por el consejo.', 'Intéressant, merci pour le conseil.']]],
    ['¿Y en Francia cómo es el trabajo?', 'Et en France, le travail c’est comment ?', [
      ['Es más directo, pero almorzamos más tiempo.', 'C’est plus direct, mais on prend plus de temps pour déjeuner.', '¡Jajaja, eso me gusta!', 'Hahaha, ça me plaît !'],
      ['Parecido, pero con menos tinto.', 'Pareil, mais avec moins de café.']]],
    ['Ya casi es hora del almuerzo. ¿Vienes con nosotros?', 'C’est bientôt l’heure du déjeuner. Tu viens avec nous ?', [
      ['¡Claro! ¿Adónde van?', 'Bien sûr ! Vous allez où ?', 'Al corrientazo de doña Gloria, es barato y delicioso.', 'Au resto de doña Gloria, pas cher et délicieux.'],
      ['Sí, con gusto.', 'Oui, avec plaisir.']]],
    ['¿Te gusta la comida colombiana?', 'Tu aimes la cuisine colombienne ?', [
      ['Sí, sobre todo el ajiaco.', 'Oui, surtout l’ajiaco.', '¡Eres más rolo que yo!', 'T’es plus rolo que moi !'],
      ['Sí, pero todavía no conozco muchos platos.', 'Oui, mais je ne connais pas encore beaucoup de plats.']]],
    ['Los viernes salimos a tomar algo después del trabajo. ¿Te animas?', 'Le vendredi on sort boire un verre après le boulot. Ça te dit ?', [
      ['¡De una! Así conozco al equipo.', 'Carrément ! Comme ça je connais l’équipe.'],
      ['Me encantaría.', 'J’adorerais.']]],
    ['Bueno, cualquier cosa que necesites, me dices. Mi extensión es la doscientos tres.', 'Bon, si tu as besoin de quoi que ce soit, tu me dis. Mon poste, c’est le 203.', [
      ['Muchas gracias, Laura, eres muy amable.', 'Merci beaucoup, Laura, tu es très gentille.'],
      ['Perfecto, gracias por la ayuda.', 'Parfait, merci pour l’aide.']]],
    ['¡Bienvenido al equipo! Vas a ver que te vas a amañar.', 'Bienvenue dans l’équipe ! Tu vas voir, tu vas te plaire ici.', [
      ['¡Gracias! Estoy muy contento de estar aquí.', 'Merci ! Je suis très content d’être ici.'],
      ['Seguro que sí. ¡Hasta ahorita!', 'Sûrement. À tout à l’heure !']]]
  ],
  endShort: ['Bueno, te dejo instalarte. ¡Bienvenido!', 'Bon, je te laisse t’installer. Bienvenue !'],
  end: ['¡Nos vemos en la reunión!', 'On se voit à la réunion !']
});
