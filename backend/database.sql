CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `cooking_time` int(11) DEFAULT NULL,
  `number_of_persons` int(11) DEFAULT NULL,
  `difficulty` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL
);

INSERT INTO `recipe` (`id`, `name`, `cooking_time`, `number_of_persons`, `difficulty`, `picture`) VALUES
(1, "Cookies pépites de chocolat", 30, 6, "facile", "C:\Users\MICHET DE LA BAUME\Documents\formation Wild\Checkpoint4\checkpoint_4\frontend\src\assets\pictures\cookies_chocolat.jfif"),
(2, "Cookies à la mélasse", 45, 6, "moyen", "../frontend/src/assets/pictures/cookies_melasse.jpg"),
(3, "Cookies aux fruits", 50, 6, "moyen", "https://img.passeportsante.net/1200x675/2020-12-17/i98176-cookies-aux-fruits-rouges-sans-beurre.webp");


CREATE TABLE `ingredients` (
  `id` int(11) PRIMARY KEY NOT NULL,
  `name` varchar(255) NOT NULL
);

INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'beurre'),
(2, 'sucre blanc'),
(3, 'sucre roux'),
(4, 'bicarbonate de soude'),
(5, 'sel'),
(6, 'vanille'),
(7, 'oeufs'),
(8, 'farine'),
(9, 'corn-flakes'),
(10, 'pépites de chocolat'),
(11, 'mélasse'),
(12, 'cannelle'),
(13, 'noix de muscade'),
(14, 'confiture de fruits');


CREATE TABLE `recipes-ingredients` (
  `id` int(11) PRIMARY KEY NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `id_recipes` int(11) NOT NULL,
  `id_ingredients` int(11) NOT NULL
);

ALTER TABLE `recipes-ingredients` ADD KEY `fk_recipes_ingredients_recipes` (`id_recipes`);

ALTER TABLE `recipes-ingredients` ADD KEY `fk_recipes_ingredients_ingredients` (`id_ingredients`);


INSERT INTO `recipes-ingredients` (`id`, `quantity`, `id_recipes`, `id_ingredients`) VALUES
(1, 2, 1, 1),
(2, 250, 1, 2),
(3, 250, 1, 3),
(4, 10, 1, 4),
(5, 5, 1, 5),
(6, 10, 1, 6),
(7, 2, 1, 7),
(8, 625, 1, 8),
(9, 500, 1, 9),
(10, 250, 1, 10),
(11, 3, 2, 1),
(12, 500, 2, 2),
(13, 125, 2, 11),
(14, 2, 2, 7),
(15, 20, 2, 4),
(16, 5, 2, 5),
(17,15, 2, 12),
(18, 5, 2, 13),
(19, 1000, 2, 8),
(20, 2, 3, 1),
(21, 500, 3, 2),
(22, 125, 3, 14),
(23, 2, 3, 7),
(24, 2, 3, 4),
(25, 5, 3, 5),
(26, 1000, 3, 8),
(27, 75, 3, 2);





CREATE TABLE `steps` (
  `id` int(11) PRIMARY KEY NOT NULL,
  `rank` int(11) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `id_recipes` int(11) NOT NULL
);

ALTER TABLE `steps` ADD KEY `fk_steps_recipes` (`id_recipes`);

INSERT INTO `steps` (`id`, `rank`, `description`, `id_recipes`) VALUES
(1, 1, "Faire fondre le beurre, ajouter les sucres et mélanger. Verser le bicarbonate, le sel, la vanille et les oeufs battus. Bien mélanger. Incorporer la farine sans cesser de remuer. Ajouter les corn-flakes broyés, les pépites de chocolat et tourner jusqu\'à ce", 1),
(2, 2, "Du bout des doigts, confectionner des boules de la taille d\'une noix et les disposer sur une plaque à pâtisserie préalablement enduite de matière grasse. Douze boulettes pour une plaque standard. Les écraser délicatement avec une spatule enduite de farine", 1),
(3, 3, "Cuire à 190° durant huit à dix minutes. Laisser refroidir sur la plaque pendant deux minutes puis transférer les cookies sur une grille jusqu\'à complet refroidissement. (La grille est un accessoire essentiel si l\'on veut des cookies bien croustillants.", 1),
(4, 4, "Rendement : six à huit douzaines, en fonction de la taille des cookies. Note : Si les cookies ont tendance à s\'étaler sur la plaque, ne pas les écraser avant la cuisson et réduire la température à 175°.", 1),
(5, 1, "Faire fondre le beurre dans un grand bol allant au micro-ondes. Ajouter le sucre et la mélasse. Mélanger, laisser reposer quelques minutes puis incorporer les oeufs battus, le bicarbonate de soude, le sel, la cannelle et la noix de muscade en remuant après chaque ajout. Verseer doucement la farine sans cesser de remuer. On doit obtenir une pâte sèche et friable.", 2),
(6, 2, "Couvrir et mettre au frigo pendant 2 heures au moin. (Toute la nuit c'est bien aussi). Préchauffer le four à 175°C, la grille en position médiane.", 2),
(7, 3, "Confectionner des boules de pâte de la taille d'une noix. Les rouler dans un bol de sucre blanc puis les disposer sur une plaque enduite de matière grasse (12 pour une plaque standard). Les écraser légèrement au moyen d'une spatule pour éviter qu'elles ne roulent quand vous les porterez dans le four.", 2),
(8, 4, "Cuire pendant 10 à 12 minutes. Les cookies s'aplatiront d'eux mêmes. Laissez-les pendant 2 minutes sur la plaque avant de les transférer sur une grille où ils finiront de refroidir", 2),
(9, 5, "Les cookies à la mélasse se conservent bien au congélateur. Enveloppez-les d'une feuille d'aluminium que vous glisserez dans un sac à congélation. Vous pourrez les garder jusqu'à 3 mois.", 2),
(10, 1, "Faire fondre le beurre dans un grand bol allant au micro-ondes. Ajoutez le sucre blanc et mélangez soigneusement. Laissez reposer pendant que vous passez à l'étape suivante", 3),
(11, 2, "Faites fondre la confiture au four micro-ondes ou dans une casserole à feu doux jusqu'à obtenir un genre de sirop que vous verserez dans le bol contenant le beurre et le sucre. Ajoutez les oeufs battus, le bicarbonate de soude et le sel en remuant à chaque nouvel ingrédient", 3),
(12, 3, "Ajoutez la farine. Mélangez soigneusement. Couvrez le bol et laissez-le au frigo pendan au moins deux heures. Préchauffez le four à 175°, la grille en position médiane. Sortir la pâte du frigo", 3),
(13, 3, "Confectionner des boulettes de pâte de la taille d'une noix. Verser dans un bol le sucre blanc que vous avez réservé, y rouler vos boulettes de pâte puis les déposer sur une plaque à pâtisserie préalablement enduite de matière grasse.2crasez-les délicatement au moyen d'une spatule graissée. Avec le pouce imprimer un creux au centre de chaque cookie et remplir ce creux avec un peu de confiture.", 3),
(14, 3, "Cuire pendant dix à douze minutes sur laplaque puis les transférer sur une grille.", 3);