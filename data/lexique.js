/* Lexique Mi Colombia — espagnol de Colombie (Bogotá = b, Cartagena / côte = c, partout = -)
   Format d'une ligne : espagnol | français | région | type (m = mot, p = phrase, v = verbe) */
window.MC = window.MC || {};
MC.CATS = [
  { id: 'politesse', name: 'Salutations et politesse', color: '#0B6764' },
  { id: 'presenter', name: 'Se présenter', color: '#2563A6' },
  { id: 'famille', name: 'Famille et amis', color: '#9A3412' },
  { id: 'nombres', name: 'Nombres et argent', color: '#7A4B00' },
  { id: 'temps', name: 'Temps, jours et heures', color: '#5B3E96' },
  { id: 'aeroport', name: 'Aéroport et hôtel', color: '#0B6764' },
  { id: 'taxi', name: 'Taxi et transports', color: '#2563A6' },
  { id: 'ville', name: 'Ville et directions', color: '#9A3412' },
  { id: 'resto', name: 'Restaurant', color: '#7A4B00' },
  { id: 'marche', name: 'Marché et courses', color: '#3F6212' },
  { id: 'plage', name: 'Plage et Cartagena', color: '#0E7490' },
  { id: 'soiree', name: 'Soirée et rumba', color: '#9D174D' },
  { id: 'argot', name: 'Argot colombien', color: '#5B3E96' },
  { id: 'vie', name: 'Goûts et conversation', color: '#3F6212' },
  { id: 'sante', name: 'Urgences et santé', color: '#B42318' }
];

MC.RAW_LEX = {
politesse: `
Buenos días | Bonjour (le matin) | - | p
Buenas tardes | Bonjour (l'après-midi) | - | p
Buenas noches | Bonsoir, bonne nuit | - | p
Buenas | Salut (à toute heure) | - | p
¿Cómo está? | Comment allez-vous ? | b | p
¿Cómo vas? | Comment ça va ? | - | p
Bien, ¿y usted? | Bien, et vous ? | b | p
Muy bien, gracias | Très bien, merci | - | p
gracias | merci | - | m
Muchas gracias | Merci beaucoup | - | p
Con gusto | Avec plaisir (réponse à merci) | - | p
por favor | s'il vous plaît | - | p
disculpe | excusez-moi | - | m
permiso | pardon (pour passer) | - | m
¡Qué pena con usted! | Je suis vraiment désolé(e) | b | p
chao | salut (pour partir) | - | m
Hasta luego | À plus tard | - | p
Nos vemos | On se voit, à plus | - | p
Que le vaya bien | Bonne continuation (à quelqu'un qu'on vouvoie) | b | p
Que esté muy bien | Portez-vous bien | b | p
A la orden | À votre service | - | p
siga | entrez, allez-y | - | m
listo | d'accord, ok, c'est bon | - | m
dale | ok, vas-y | - | m
claro | bien sûr | - | m
Bienvenido / bienvenida | Bienvenu(e) | - | p
saludar | saluer | - | v
despedirse | dire au revoir | - | v
`,
presenter: `
¿Cómo se llama? | Comment vous appelez-vous ? | b | p
¿Cómo te llamas? | Comment tu t'appelles ? | - | p
Me llamo… | Je m'appelle… | - | p
Mucho gusto | Enchanté(e) | - | p
igualmente | de même, moi aussi | - | m
¿De dónde es usted? | D'où êtes-vous ? | b | p
Soy de Francia | Je viens de France | - | p
francés / francesa | français / française | - | m
¿A qué se dedica? | Que faites-vous dans la vie ? | - | p
Trabajo en… | Je travaille dans… | - | p
¿Cuántos años tiene? | Quel âge avez-vous ? | - | p
Tengo cuarenta años | J'ai quarante ans | - | p
Vivo en Francia | J'habite en France | - | p
el nombre | le prénom | - | m
el apellido | le nom de famille | - | m
el país | le pays | - | m
la ciudad | la ville | - | m
el trabajo | le travail | - | m
el jefe / la jefa | le chef / la cheffe | - | m
casado / casada | marié(e) | - | m
soltero / soltera | célibataire | - | m
Estoy aprendiendo español | J'apprends l'espagnol | - | p
Hablo un poquito de español | Je parle un tout petit peu espagnol | - | p
¿Me repite, por favor? | Vous pouvez répéter, s'il vous plaît ? | - | p
Más despacio, por favor | Plus lentement, s'il vous plaît | - | p
No entiendo | Je ne comprends pas | - | p
¿Cómo se dice… en español? | Comment on dit… en espagnol ? | - | p
ser | être (identité, origine) | - | v
estar | être (état, lieu) | - | v
llamarse | s'appeler | - | v
vivir | vivre, habiter | - | v
trabajar | travailler | - | v
`,
famille: `
la familia | la famille | - | m
la mamá | la maman | - | m
el papá | le papa | - | m
los papás | les parents | - | m
el hermano / la hermana | le frère / la sœur | - | m
el hijo / la hija | le fils / la fille | - | m
el esposo / la esposa | le mari / la femme | - | m
el novio / la novia | le copain / la copine | - | m
el amigo / la amiga | l'ami / l'amie | - | m
el parcero / el parce | le pote | - | m
mi llave | mon pote | c | m
los abuelos | les grands-parents | - | m
el tío / la tía | l'oncle / la tante | - | m
el primo / la prima | le cousin / la cousine | - | m
el sobrino / la sobrina | le neveu / la nièce | - | m
el suegro / la suegra | le beau-père / la belle-mère | - | m
el bebé | le bébé | - | m
el pelado / la pelada | le gamin / la gamine, le jeune | - | m
el chino / la china | le gamin / la gamine | b | m
mijo / mija | mon grand / ma grande (affectueux) | - | m
el man | le mec | - | m
la vecina / el vecino | la voisine / le voisin | - | m
mayor / menor | plus âgé / plus jeune | - | m
Tengo dos hijos | J'ai deux enfants | - | p
¿Tiene hermanos? | Vous avez des frères et sœurs ? | - | p
querer | aimer (quelqu'un), vouloir | - | v
conocer | connaître, rencontrer | - | v
`,
nombres: `
uno / una | un / une | - | m
dos | deux | - | m
tres | trois | - | m
cuatro | quatre | - | m
cinco | cinq | - | m
seis | six | - | m
siete | sept | - | m
ocho | huit | - | m
nueve | neuf | - | m
diez | dix | - | m
veinte | vingt | - | m
cincuenta | cinquante | - | m
cien | cent | - | m
mil | mille | - | m
un millón | un million | - | m
la plata | l'argent | - | m
el billete | le billet | - | m
la moneda | la pièce | - | m
mil pesos | mille pesos | - | p
una luca | mille pesos (argot) | - | m
un palo | un million de pesos (argot) | - | m
¿Cuánto vale? | Combien ça coûte ? | - | p
¿Cuánto es? | C'est combien ? | - | p
Está muy caro | C'est très cher | - | p
barato / barata | pas cher | - | m
el cajero | le distributeur de billets | - | m
la tarjeta | la carte bancaire | - | m
en efectivo | en espèces | - | p
las vueltas | la monnaie (qu'on vous rend) | - | m
¿Tiene sencillo? | Vous avez de la petite monnaie ? | - | p
pagar | payer | - | v
cambiar | changer | - | v
`,
temps: `
hoy | aujourd'hui | - | m
mañana | demain | - | m
ayer | hier | - | m
ahorita | tout de suite, dans un moment | - | m
la mañana | le matin | - | m
la tarde | l'après-midi | - | m
la noche | la nuit, le soir | - | m
el lunes | lundi | - | m
el martes | mardi | - | m
el miércoles | mercredi | - | m
el jueves | jeudi | - | m
el viernes | vendredi | - | m
el sábado | samedi | - | m
el domingo | dimanche | - | m
la semana | la semaine | - | m
el fin de semana | le week-end | - | m
el puente | le pont (week-end prolongé) | - | m
el mes | le mois | - | m
el año | l'année | - | m
la hora | l'heure | - | m
¿Qué hora es? | Quelle heure est-il ? | - | p
Son las tres | Il est trois heures | - | p
Es la una y media | Il est une heure et demie | - | p
temprano | tôt | - | m
tarde | tard | - | m
Hace calor | Il fait chaud | - | p
Está haciendo frío | Il fait froid | - | p
el aguacero | l'averse | - | m
llover | pleuvoir | - | v
esperar | attendre | - | v
`,
aeroport: `
el aeropuerto | l'aéroport | - | m
el vuelo | le vol | - | m
la maleta | la valise | - | m
el morral | le sac à dos | - | m
el pasaporte | le passeport | - | m
la salida | la sortie, le départ | - | m
la llegada | l'arrivée | - | m
el hotel | l'hôtel | - | m
el hostal | l'auberge | - | m
la habitación | la chambre | - | m
la reserva | la réservation | - | m
Tengo una reserva a nombre de… | J'ai une réservation au nom de… | - | p
la llave | la clé | - | m
el aire acondicionado | la climatisation | - | m
el ventilador | le ventilateur | - | m
la ducha | la douche | - | m
el baño | les toilettes, la salle de bain | - | m
la toalla | la serviette | - | m
el desayuno | le petit-déjeuner | - | m
¿A qué hora es el desayuno? | À quelle heure est le petit-déjeuner ? | - | p
¿Cuál es la clave del wifi? | Quel est le mot de passe du wifi ? | - | p
la recepción | la réception | - | m
el piso | l'étage | - | m
el ascensor | l'ascenseur | - | m
la cama doble | le lit double | - | m
¿Dónde queda el baño? | Où sont les toilettes ? | - | p
llegar | arriver | - | v
viajar | voyager | - | v
quedarse | rester, loger | - | v
`,
taxi: `
el taxi | le taxi | - | m
el taxista | le chauffeur de taxi | - | m
la carrera | la course (de taxi) | - | m
el bus | le bus | - | m
la buseta | le minibus | - | m
el TransMilenio | le bus rapide de Bogotá | b | m
el paradero | l'arrêt de bus | - | m
la estación | la station | - | m
el carro | la voiture | - | m
la moto | la moto | - | m
el mototaxi | le moto-taxi | c | m
la cicla | le vélo | - | m
Lléveme a… | Emmenez-moi à… | - | p
¿Cuánto me cobra hasta…? | Combien vous me prenez jusqu'à… ? | - | p
Pare aquí, por favor | Arrêtez-vous ici, s'il vous plaît | - | p
¿Me deja en la esquina? | Vous me déposez au coin ? | - | p
el trancón | l'embouteillage | - | m
el pasaje | le ticket, le prix du trajet | - | m
el conductor | le conducteur | - | m
el semáforo | le feu (de circulation) | - | m
el pico y placa | la circulation alternée | b | m
la tarjeta TuLlave | la carte de transport de Bogotá | b | m
el aeropuerto El Dorado | l'aéroport de Bogotá | b | m
manejar | conduire | - | v
coger | prendre (un bus, un taxi) | - | v
tomar | prendre | - | v
bajarse | descendre | - | v
subirse | monter | - | v
ir | aller | - | v
volver | revenir, rentrer | - | v
`,
ville: `
¿Dónde queda…? | Où se trouve… ? | - | p
a la derecha | à droite | - | p
a la izquierda | à gauche | - | p
derecho | tout droit | - | m
la cuadra | le pâté de maisons | - | m
a dos cuadras | à deux rues d'ici | - | p
cerca | près | - | m
lejos | loin | - | m
¿Está lejos? | C'est loin ? | - | p
la esquina | le coin (de rue) | - | m
la calle | la rue (est-ouest à Bogotá) | b | m
la carrera | la rue (nord-sud à Bogotá) | b | m
el centro | le centre-ville | - | m
el barrio | le quartier | - | m
el centro comercial | le centre commercial | - | m
la tienda | la petite épicerie de quartier | - | m
la droguería | la pharmacie | - | m
el banco | la banque | - | m
la iglesia | l'église | - | m
la plaza | la place | - | m
el parque | le parc | - | m
el museo | le musée | - | m
el andén | le trottoir | - | m
La Candelaria | le quartier historique de Bogotá | b | m
Getsemaní | le quartier animé de Cartagena | c | m
la ciudad amurallada | la vieille ville fortifiée | c | m
Siga derecho y voltee a la derecha | Continuez tout droit et tournez à droite | - | p
voltear | tourner | - | v
perderse | se perdre | - | v
caminar | marcher | - | v
buscar | chercher | - | v
`,
resto: `
¿Me regala la carta? | Vous me donnez la carte ? | - | p
la carta | le menu (la carte) | - | m
el corrientazo | le menu du jour pas cher | b | m
el almuerzo | le déjeuner | - | m
la comida | le dîner (repas du soir) | - | m
la cuenta | l'addition | - | m
La cuenta, por favor | L'addition, s'il vous plaît | - | p
la propina | le pourboire | - | m
el mesero / la mesera | le serveur / la serveuse | - | m
el tinto | le petit café noir | - | m
el perico | le café au lait (petite tasse) | - | m
el jugo | le jus de fruits | - | m
¿En agua o en leche? | À l'eau ou au lait ? (pour un jus) | - | p
la arepa | la galette de maïs | - | m
la arepa de huevo | l'arepa frite fourrée à l'œuf | c | m
el ajiaco | la soupe de poulet aux trois pommes de terre | b | m
la changua | la soupe au lait et aux œufs (petit-déj.) | b | m
el patacón | la banane plantain écrasée et frite | - | m
el arroz con coco | le riz au coco | c | m
el pescado frito | le poisson frit | c | m
la limonada de coco | la limonade au coco | c | m
la empanada | le chausson frit | - | m
el ají | la sauce pimentée | - | m
la gaseosa | le soda | - | m
una pola | une bière (argot) | - | m
¡Buen provecho! | Bon appétit ! | - | p
para llevar | à emporter | - | p
¿Qué me recomienda? | Qu'est-ce que vous me recommandez ? | - | p
¿Pica? | C'est piquant ? | - | p
Estoy lleno / llena | J'ai bien mangé, je n'ai plus faim | - | p
la cuchara | la cuillère | - | m
el tenedor | la fourchette | - | m
el cuchillo | le couteau | - | m
la servilleta | la serviette en papier | - | m
pedir | commander, demander | - | v
comer | manger | - | v
beber | boire | - | v
`,
marche: `
el mercado | le marché | - | m
la plaza de mercado | le marché couvert | - | m
la fruta | le fruit | - | m
el mango | la mangue | - | m
la piña | l'ananas | - | m
la papaya | la papaye | - | m
el lulo | le lulo (fruit acidulé) | - | m
el maracuyá | le fruit de la passion | - | m
la guanábana | le corossol | - | m
el banano | la banane | - | m
el plátano | la banane plantain | - | m
el aguacate | l'avocat | - | m
la papa | la pomme de terre | - | m
el tomate | la tomate | - | m
la cebolla | l'oignon | - | m
el queso | le fromage | - | m
los huevos | les œufs | - | m
la libra | la livre (500 g) | - | m
media libra | une demi-livre | - | p
¿Me regala una libra de tomate? | Vous me donnez une livre de tomates ? | - | p
¿A cómo está el mango? | Elle est à combien, la mangue ? | - | p
¿Me rebaja? | Vous me faites un prix ? | - | p
la ñapa | le petit bonus offert par le vendeur | - | m
la bolsa | le sac | - | m
el supermercado | le supermarché | - | m
maduro / madura | mûr / mûre | - | m
fresco / fresca | frais / fraîche | - | m
comprar | acheter | - | v
vender | vendre | - | v
escoger | choisir | - | v
`,
plage: `
la playa | la plage | - | m
el mar | la mer | - | m
la arena | le sable | - | m
el sol | le soleil | - | m
la ola | la vague | - | m
el bloqueador | la crème solaire | - | m
la carpa | la tente (location de plage) | - | m
la sombrilla | le parasol, le parapluie | - | m
el vestido de baño | le maillot de bain | - | m
las gafas de sol | les lunettes de soleil | - | m
la lancha | le bateau à moteur | - | m
el muelle | le quai | - | m
el pasadía | la journée tout compris (plage, île) | - | m
las islas del Rosario | les îles du Rosaire | c | m
Playa Blanca | la plage de sable blanc près de Cartagena | c | m
la palenquera | la vendeuse de fruits en tenue traditionnelle | c | m
el sombrero vueltiao | le chapeau traditionnel de la côte | c | m
el coco | la noix de coco | - | m
la brisa | la brise | - | m
el calor | la chaleur | - | m
¿Cuánto vale la carpa? | Combien coûte la tente ? | - | p
¡Qué calor! | Quelle chaleur ! | - | p
la piscina | la piscine | - | m
nadar | nager | - | v
asolearse | prendre le soleil | - | v
bañarse | se baigner | - | v
descansar | se reposer | - | v
`,
soiree: `
la rumba | la fête, la sortie | - | m
la fiesta | la fête | - | m
la discoteca | la boîte de nuit | - | m
la champeta | la musique et danse de Cartagena | c | m
la salsa | la salsa | - | m
el vallenato | la musique traditionnelle de la côte | c | m
el reguetón | le reggaeton | - | m
¿Bailamos? | On danse ? | - | p
¿Quiere bailar? | Vous voulez danser ? | b | p
el guaro | l'aguardiente (alcool anisé) | - | m
una media de guaro | une demi-bouteille d'aguardiente | - | p
el ron | le rhum | - | m
¡Salud! | Santé ! | - | p
el parche | la bande de potes, le plan | - | m
¿Cuál es el plan? | C'est quoi le plan ? | - | p
¿Nos tomamos algo? | On boit un verre ? | - | p
el cover | l'entrée payante | - | m
prendido / prendida | pompette | - | m
el guayabo | la gueule de bois | - | m
la pinta | la tenue, le look | - | m
Me gustas | Tu me plais | - | p
¿Me pasas tu WhatsApp? | Tu me donnes ton WhatsApp ? | - | p
tragado / tragada | fou amoureux / folle amoureuse | - | m
bailar | danser | - | v
rumbear | faire la fête | - | v
parchar | traîner entre potes | - | v
cuadrar | fixer (un plan), se mettre ensemble | - | v
divertirse | s'amuser | - | v
salir | sortir | - | v
`,
argot: `
chévere | sympa, super | - | m
bacano / bacana | génial, cool | - | m
chimba | génial (très familier) | - | m
berraco / berraca | balèze, courageux (ou très énervé) | - | m
el camello | le boulot | - | m
camellar | bosser | - | v
la vaina | le truc | c | m
la jartera | la flemme, l'ennui | - | m
boleta | la honte, ringard | - | m
gomelo / gomela | bourge, fils à papa | b | m
rolo / rola | habitant de Bogotá | b | m
costeño / costeña | habitant de la côte caraïbe | c | m
cachaco / cachaca | habitant de l'intérieur (vu de la côte) | c | m
paila | dommage, c'est foutu | - | m
el tombo | le flic | - | m
sapo / sapa | balance, fouineur | - | m
mono / mona | blond / blonde | - | m
chiviado / chiviada | contrefait, faux | - | m
achantado / achantada | triste, abattu | - | m
tenaz | dur, énorme | - | m
marica | mec (entre potes très proches, vulgaire sinon) | - | m
amañarse | se plaire quelque part | - | v
embarrarla | faire une gaffe | - | v
mamar gallo | taquiner, faire marcher | - | v
echar los perros | draguer | - | v
`,
vie: `
Me gusta… | J'aime… | - | p
Me encanta… | J'adore… | - | p
No me gusta | Je n'aime pas | - | p
Creo que… | Je pense que… | - | p
Me parece que… | Il me semble que… | - | p
Para mí… | Pour moi… | - | p
Estoy de acuerdo | Je suis d'accord | - | p
¿Usted qué opina? | Qu'en pensez-vous ? | b | p
la verdad | franchement | - | m
o sea | c'est-à-dire, genre | - | m
pues | bon, donc, hein | - | m
bueno | bon | - | m
entonces | alors, donc | - | m
el fútbol | le foot | - | m
la Selección | l'équipe nationale de foot | - | m
el partido | le match | - | m
el viaje | le voyage | - | m
las vacaciones | les vacances | - | m
la música | la musique | - | m
la película | le film | - | m
el sueño | le rêve | - | m
Cuando era niño… | Quand j'étais petit… | - | p
Antes vivía en… | Avant, je vivais à… | - | p
Hace dos años | Il y a deux ans | - | p
¿En serio? | Sérieux ? | - | p
¡No le creo! | Je ne vous crois pas ! | - | p
Me gustaría… | J'aimerais… | - | p
cocinar | cuisiner | - | v
jugar | jouer | - | v
leer | lire | - | v
contar | raconter | - | v
recordar | se souvenir | - | v
pensar | penser | - | v
`,
sante: `
¡Ayuda! | À l'aide ! | - | p
la policía | la police | - | m
el hospital | l'hôpital | - | m
la clínica | la clinique | - | m
el médico | le médecin | - | m
Me siento mal | Je ne me sens pas bien | - | p
Me duele la cabeza | J'ai mal à la tête | - | p
el estómago | l'estomac, le ventre | - | m
la fiebre | la fièvre | - | m
la gripa | la grippe, le rhume | - | m
las pastillas | les comprimés | - | m
Soy alérgico a… | Je suis allergique à… | - | p
Estoy enfermo / enferma | Je suis malade | - | p
Me robaron el celular | On m'a volé mon portable | - | p
el celular | le portable | - | m
la billetera | le portefeuille | - | m
Llame a una ambulancia | Appelez une ambulance | - | p
el 123 | le numéro d'urgence en Colombie | - | m
Estoy perdido / perdida | Je suis perdu(e) | - | p
el seguro | l'assurance | - | m
la embajada | l'ambassade | - | m
el repelente | l'anti-moustique | - | m
el zancudo | le moustique | - | m
la picadura | la piqûre | - | m
doler | faire mal | - | v
ayudar | aider | - | v
llamar | appeler | - | v
`
};

/* Expressions du jour : [espagnol, sens, quand l'utiliser, exemple, traduction, région] */
MC.EXPR = [
['¿Qué más?', 'Quoi de neuf ? / Ça va ?', 'La salutation n°1 entre amis, partout en Colombie.', '¡Hola, parce! ¿Qué más?', 'Salut mon pote ! Ça va ?', ''],
['Con mucho gusto', 'Avec grand plaisir', 'La réponse habituelle à « gracias ».', '—Gracias. —Con mucho gusto.', '—Merci. —Avec plaisir.', ''],
['¡Qué pena!', 'Désolé ! / Quelle gêne !', 'Pour s’excuser poliment, très colombien.', '¡Qué pena, llegué tarde!', 'Désolé, je suis en retard !', ''],
['¿Me regala…?', 'Vous me donnez… ?', 'Pour demander quelque chose poliment, même quand on paie.', '¿Me regala un tinto, por favor?', 'Un petit café, s’il vous plaît.', ''],
['Sumercé', 'Vous (affectueux)', 'À Bogotá : poli et chaleureux à la fois.', '¿Sumercé qué va a llevar?', 'Qu’est-ce que vous allez prendre ?', 'b'],
['Mi llave', 'Mon pote', 'Sur la côte caraïbe, entre amis.', '¿Qué más, mi llave?', 'Ça va, mon pote ?', 'c'],
['Todo bien', 'Tout va bien / Pas de souci', 'Réponse passe-partout pour rassurer.', '—Perdón. —Tranquilo, todo bien.', '—Pardon. —T’inquiète, pas de souci.', ''],
['¿Cierto?', 'N’est-ce pas ?', 'Se met en fin de phrase pour demander confirmation.', 'Usted es francés, ¿cierto?', 'Vous êtes français, n’est-ce pas ?', ''],
['Pues', 'Bon, donc, hein', 'Ponctue tout, en début ou en fin de phrase.', '¡Hágale pues!', 'Allez, vas-y alors !', ''],
['¡Hágale!', 'Vas-y ! / Ok, on y va !', 'Pour encourager ou accepter une proposition.', '—¿Vamos a la playa? —¡Hágale!', '—On va à la plage ? —Allez, go !', ''],
['Dar papaya', 'S’exposer bêtement', 'Conseil de prudence : ne pas offrir l’occasion qu’on profite de toi.', 'No dé papaya con el celular en la calle.', 'Ne sortez pas votre portable dans la rue.', ''],
['¡Pilas!', 'Attention ! / Sois vigilant !', 'Pour prévenir quelqu’un.', '¡Pilas con la maleta!', 'Attention à ta valise !', ''],
['Ojo', 'Fais gaffe', 'Même usage que « ¡pilas! ».', 'Ojo con el celular en el bus.', 'Fais gaffe à ton portable dans le bus.', ''],
['Toca', 'Il faut', 'Remplace souvent « hay que » à l’oral.', 'Toca coger un taxi.', 'Il faut prendre un taxi.', ''],
['Ahí vamos', 'On fait aller', 'Réponse modeste à « ¿cómo vas? ».', '—¿Cómo vas? —Ahí vamos.', '—Comment ça va ? —On fait aller.', ''],
['¿Quiubo?', 'Salut, quoi de neuf ?', 'Contraction de « ¿qué hubo? », très populaire.', '¡Quiubo, parce!', 'Salut, mon pote !', ''],
['¿Bien o qué?', 'Ça va ou quoi ?', 'Salutation familière.', '¡Parce! ¿Bien o qué?', 'Mon pote ! Ça va ou quoi ?', ''],
['¡Ajá!', 'Bon ! / Alors ?', 'Le mot à tout faire de la côte caraïbe.', '¡Ajá! ¿Y entonces qué?', 'Bon ! Et alors ?', 'c'],
['¡Eche!', 'Eh ben ! / Oh là !', 'Surprise ou interpellation, sur la côte.', '¡Eche, qué calor!', 'Eh ben, quelle chaleur !', 'c'],
['¿Entonces qué?', 'Alors, quoi de neuf ?', 'Salutation et relance.', '¡Entonces qué, parce!', 'Alors, mon pote !', ''],
['A la orden', 'À votre service', 'Les vendeurs le disent pour attirer les clients.', '¡A la orden! ¿Qué busca?', 'À votre service ! Vous cherchez quoi ?', ''],
['Bien pueda', 'Je vous en prie, allez-y', 'Formule polie pour inviter quelqu’un à faire quelque chose.', '—¿Puedo sentarme? —Bien pueda.', '—Je peux m’asseoir ? —Je vous en prie.', ''],
['Ser buena gente', 'Être sympa', 'Pour parler d’une personne gentille.', 'Don Álvaro es muy buena gente.', 'Don Álvaro est très sympa.', ''],
['¡Uy, no!', 'Oh non !', 'Réaction très courante à une mauvaise nouvelle.', '¡Uy, no, qué trancón!', 'Oh non, quel embouteillage !', ''],
['Hora colombiana', 'L’heure colombienne (en retard)', 'Humour : les horaires sont souples.', 'La fiesta es a las ocho, pero hora colombiana.', 'La fête est à 8 h, mais à l’heure colombienne.', ''],
['Madrugar', 'Se lever tôt', 'Un verbe en un seul mot, très utilisé.', 'Mañana toca madrugar.', 'Demain, il faut se lever tôt.', ''],
['¡Qué pereza!', 'Quelle flemme !', 'Quand on n’a pas envie.', '¡Qué pereza madrugar!', 'Quelle flemme de se lever tôt !', ''],
['Ni idea', 'Aucune idée', 'Réponse rapide.', '—¿Dónde queda? —Ni idea.', '—C’est où ? —Aucune idée.', ''],
['¡Qué rico!', 'Trop bon ! / Trop bien !', 'Pour la nourriture, mais aussi pour une situation agréable.', '¡Qué rico este jugo!', 'Il est trop bon ce jus !', ''],
['¡Buen provecho!', 'Bon appétit !', 'On le dit aussi aux inconnus qui mangent à côté.', '¡Buen provecho, señores!', 'Bon appétit, messieurs dames !', ''],
['La ñapa', 'Le petit bonus du vendeur', 'Au marché, on peut demander « ¿y la ñapa? ».', '¿Me da la ñapa, veci?', 'Vous me faites un petit cadeau, voisin ?', ''],
['Pedir un domicilio', 'Se faire livrer', '« Domicilio » = livraison à domicile.', 'Pidamos un domicilio de pizza.', 'Commandons une pizza en livraison.', ''],
['Hacer una vaca', 'Faire une cagnotte', 'Partager les frais entre amis.', 'Hagamos una vaca para el guaro.', 'Faisons une cagnotte pour l’aguardiente.', ''],
['Estar en la olla', 'Être dans la galère', 'Souvent pour un problème d’argent.', 'Estoy en la olla, no tengo plata.', 'Je suis dans la galère, j’ai pas d’argent.', ''],
['Por si las moscas', 'Au cas où', 'Pour prendre une précaution.', 'Lleve sombrilla, por si las moscas.', 'Prenez un parapluie, au cas où.', ''],
['¡Qué chimba!', 'C’est génial !', 'Très familier : entre potes seulement.', '¡Qué chimba de playa!', 'Elle est géniale, cette plage !', ''],
['¡Qué nota!', 'Trop bien !', 'Pour exprimer son enthousiasme.', '¡Qué nota este concierto!', 'Il est trop bien ce concert !', ''],
['De una', 'Carrément, tout de suite', 'Pour accepter avec enthousiasme.', '—¿Una pola? —¡De una!', '—Une bière ? —Carrément !', ''],
['¿Cuál es el plan?', 'C’est quoi le plan ?', 'Pour organiser une sortie.', 'Parce, ¿cuál es el plan para hoy?', 'Mon pote, c’est quoi le plan aujourd’hui ?', ''],
['Echar los perros', 'Draguer', 'Familier.', 'Ese man le está echando los perros.', 'Ce mec est en train de la draguer.', ''],
['Estar tragado', 'Être fou amoureux', 'Familier.', 'Está tragadísimo de ella.', 'Il est complètement fou d’elle.', ''],
['Tener guayabo', 'Avoir la gueule de bois', 'Le lendemain de rumba…', 'Hoy tengo un guayabo tenaz.', 'Aujourd’hui j’ai une sacrée gueule de bois.', ''],
['¡Qué boleta!', 'La honte !', 'Pour une situation gênante.', 'Me caí bailando, ¡qué boleta!', 'Je suis tombé en dansant, la honte !', ''],
['Hacer el oso', 'Se ridiculiser', 'Familier, surtout chez les jeunes.', 'Hice el oso en la pista.', 'Je me suis ridiculisé sur la piste.', ''],
['Mamar gallo', 'Taquiner, faire marcher', 'Le sport national de la côte !', 'Tranquilo, te estoy mamando gallo.', 'T’inquiète, je te fais marcher.', 'c'],
['¡Erda!', 'Purée ! / Wow !', 'Exclamation de la côte caraïbe.', '¡Erda, qué playa tan bonita!', 'Wow, quelle belle plage !', 'c'],
['¡Ay, nojoda!', 'Purée !', 'Exclamation forte de la côte (familier).', '¡Ay, nojoda, se me olvidó!', 'Purée, j’ai oublié !', 'c'],
['¡Qué vaina!', 'Zut ! / Quelle histoire !', 'Contrariété, surtout sur la côte.', '¡Qué vaina, perdí el bus!', 'Zut, j’ai raté le bus !', 'c'],
['Ir de paseo', 'Partir en excursion', '« Paseo » = sortie entre amis ou en famille.', 'Este finde nos vamos de paseo a Tierra Bomba.', 'Ce week-end, on part en excursion à Tierra Bomba.', 'c'],
['Darse una vuelta', 'Faire un tour', 'Pour se balader sans but précis.', 'Vamos a darnos una vuelta por Getsemaní.', 'On va faire un tour à Getsemaní.', ''],
['¡Qué oso!', 'La honte !', 'Très utilisé à Bogotá, surtout chez les jeunes.', '¡Qué oso, me equivoqué de nombre!', 'La honte, je me suis trompé de prénom !', 'b'],
['¡Qué jartera!', 'Quel ennui ! / Quelle flemme !', 'Pour une corvée.', '¡Qué jartera hacer fila!', 'Quelle flemme de faire la queue !', ''],
['Estar amañado', 'Se plaire quelque part', 'Pour dire qu’on se sent bien dans un lieu.', 'Estoy muy amañado en Cartagena.', 'Je me plais beaucoup à Cartagena.', ''],
['Ponerse las pilas', 'Se bouger, se motiver', 'Pour se motiver ou motiver quelqu’un.', 'Me tengo que poner las pilas con el español.', 'Je dois me bouger avec l’espagnol.', ''],
['Ni de fundas', 'Jamais de la vie', 'Refus catégorique, familier.', '¿Yo cantar? ¡Ni de fundas!', 'Moi, chanter ? Jamais de la vie !', ''],
['Estar de malas', 'Ne pas avoir de chance', 'Quand rien ne va.', 'Estoy de malas, se fue la luz.', 'Pas de chance, il y a une coupure de courant.', ''],
['¡Qué berraquera!', 'Génial ! / Quel courage !', 'Admiration.', '¡Qué berraquera de viaje!', 'Quel voyage génial !', ''],
['¡Tenaz!', 'Dur ! / Énorme !', 'Très fort, en bien ou en mal selon le contexte.', 'Ese examen estuvo tenaz.', 'Cet examen était super dur.', ''],
['Echarle cabeza', 'Bien réfléchir', 'Littéralement « y mettre la tête ».', 'Échele cabeza antes de decidir.', 'Réfléchissez bien avant de décider.', ''],
['Hacerse el loco', 'Faire comme si de rien n’était', 'Faire semblant de ne pas entendre ou voir.', 'Le pregunté y se hizo el loco.', 'Je lui ai demandé et il a fait l’innocent.', ''],
['Estar mamado', 'Être crevé / en avoir marre', 'Familier.', 'Estoy mamado de trabajar.', 'J’en ai marre de bosser.', ''],
['Ser pila', 'Être dégourdi', 'Pour quelqu’un de vif et malin.', 'Ese pelado es muy pila.', 'Ce gamin est très dégourdi.', ''],
['Me da cosa', 'Ça me gêne', 'Pour une petite gêne ou une appréhension.', 'Me da cosa pedirle eso.', 'Ça me gêne de lui demander ça.', ''],
['¿Sí o qué?', 'Pas vrai ?', 'Relance familière en fin de phrase.', 'Está haciendo calor, ¿sí o qué?', 'Il fait chaud, pas vrai ?', ''],
['¡Avemaría!', 'Mon Dieu ! / Wow !', 'Surprise (très d’Antioquia, compris partout).', '¡Avemaría, qué trancón!', 'Mon Dieu, quel embouteillage !', ''],
['¡Juepucha!', 'Mince !', 'Juron gentil.', '¡Juepucha, se me cayó el café!', 'Mince, j’ai renversé mon café !', ''],
['Echar carreta', 'Raconter des salades', 'Aussi : parler pour ne rien dire.', 'Deje de echar carreta.', 'Arrêtez de raconter des salades.', ''],
['Montársela a alguien', 'Charrier quelqu’un', 'Se moquer gentiment.', 'Mis amigos me la montan por mi acento.', 'Mes potes me charrient sur mon accent.', ''],
['¡Eso!', 'Voilà ! / Bravo !', 'Pour approuver.', '—¿Así? —¡Eso!', '—Comme ça ? —Voilà !', ''],
['Al pelo', 'Nickel, parfait', 'Quand tout se passe bien.', 'Todo quedó al pelo.', 'Tout est nickel.', ''],
['Estar en todas', 'Ne rien rater', 'Pour quelqu’un qui est de toutes les sorties.', 'Ese man está en todas las rumbas.', 'Ce mec ne rate aucune fête.', ''],
['¡Qué calor tan bravo!', 'Quelle chaleur infernale !', 'Sur la côte, « bravo » = intense, féroce.', '¡Eche, qué calor tan bravo hoy!', 'Eh ben, quelle chaleur infernale aujourd’hui !', 'c']
];

MC.parseLex = function () {
  var out = [];
  MC.CATS.forEach(function (c) {
    var raw = MC.RAW_LEX[c.id] || '';
    raw.split('\n').forEach(function (line) {
      line = line.trim();
      if (!line) return;
      var p = line.split('|').map(function (s) { return s.trim(); });
      out.push({ id: c.id + ':' + p[0], cat: c.id, es: p[0], fr: p[1], reg: p[2] === '-' ? '' : p[2], type: p[3] || 'm' });
    });
  });
  MC.EXPR.forEach(function (e, i) {
    out.push({ id: 'expr:' + e[0], cat: 'expr', es: e[0], fr: e[1], reg: e[5], type: 'e', ctx: e[2], ex: e[3], exFr: e[4], exprIndex: i });
  });
  return out;
};
