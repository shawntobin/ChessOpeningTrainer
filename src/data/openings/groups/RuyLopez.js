

import Opening from "../../../models/opening";

// Ruy Lopez lines with 15+ moves only

const RUY_LOPEZ = [

new Opening( 2392,947,"Open Games and the French Defense","Cozio Defense, Tartakower Gambit","C60 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g7g6 d2d4 e5d4 f3d4 f8g7 c1e3 g8e7 b1c3 e8g8 d1d2 d7d5",16),
new Opening( 2450,1005,"Open Games and the French Defense","Berlin Defense, Berlin Wall","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 c8d7",18),
new Opening( 2451,1006,"Open Games and the French Defense","Berlin Defense, Cordel Variation","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6f5",16),
new Opening( 2452,1007,"Open Games and the French Defense","Berlin Defense, l'Hermet Variation, Berlin Wall Defense","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8",16),
new Opening( 2456,1011,"Open Games and the French Defense","Berlin Defense, Pillsbury Variation","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6b7 b2b3",17),
new Opening( 2457,1012,"Open Games and the French Defense","Berlin Defense: Rio de Janeiro Variation","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6b7 b1c3 e8g8 f1e1 b7c5 f3d4 c5e6 c1e3 e6d4 e3d4 c6c5",26),
new Opening( 2462,1017,"Open Games and the French Defense","Berlin Defense, Winawer Attack","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6b7 f3d4",17),
new Opening( 2463,1018,"Open Games and the French Defense","Berlin Defense, Zukertort Variation","C67 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6b7 c2c4",17),
new Opening( 2492,1047,"Open Games and the French Defense","Noah's Ark Trap","C71 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 d7d6 d2d4 c6d4 f3d4 e5d4 d1d4 c7c5",16),
new Opening( 2493,1048,"Open Games and the French Defense","Closed Variations, Kecskemet Variation","C72 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 e1g1 c8d7 c2c3 g8f6 d2d4 f8e7 b1d2 e8g8 f1e1 d7e8",18),
new Opening( 2510,1065,"Open Games and the French Defense","Wormald Attack, Grünfeld Variation","C77 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 b7b5 a4b3 f8e7 d2d4 d7d6 c2c3 c8g4",16),
new Opening( 2518,1073,"Open Games and the French Defense","Rabinovich Variation","C78 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 d7d6 f3g5 d6d5 e4d5 c6d4 f1e1 f8c5 e1e5 e8f8",20),
new Opening( 2521,1076,"Open Games and the French Defense","Steinitz Defense Deferred, Boleslavsky Variation","C79 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 d7d6 a4c6 b7c6 d2d4 f6e4 f1e1 f7f5 d4e5 d6d5 b1c3",19),
new Opening( 2524,1079,"Open Games and the French Defense","Open, Berger Variation","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 a2a4 c6d4 f3d4 e5d4 b1c3",19),
new Opening( 2527,1082,"Open Games and the French Defense","Open Variations, Bernstein Variation, Luther Line","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 b1d2 f8c5 d1e1",19),
new Opening( 2528,1083,"Open Games and the French Defense","Open Variations, Bernstein Variation","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 b1d2",17),
new Opening( 2530,1085,"Open Games and the French Defense","Open Variations, Harksen Gambit","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 c2c4",15),
new Opening( 2531,1086,"Open Games and the French Defense","Open Variations, Karpov Gambit","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 b1d2 e4c5 c2c3 d5d4 f3g5",21),
new Opening( 2533,1088,"Open Games and the French Defense","Open Variations, Main Line","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6",16),
new Opening( 2535,1090,"Open Games and the French Defense","Open Variations","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5",15),
new Opening( 2539,1094,"Open Games and the French Defense","Open Variations, Schlechter Defense","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 a2a4 c6d4",16),
new Opening( 2540,1095,"Open Games and the French Defense","Open Variations, Zukertort Variation","C80 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c6e7",16),
new Opening( 2541,1096,"Open Games and the French Defense","Open, Howell Attack, Ekstrom Variation","C81 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 f1d1 e8g8 c2c4 b5c4 b3c4 d8d7",24),
new Opening( 2542,1097,"Open Games and the French Defense","Open Variations, Howell Attack","C81 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 c2c4",19),
new Opening( 2543,1098,"Open Games and the French Defense","Open Variations, Howell Attack","C81 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2",17),
new Opening( 2544,1099,"Open Games and the French Defense","Open, Motzko Attack, Nenarokov Variation","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5 d1d3 c6e7",20),
new Opening( 2545,1100,"Open Games and the French Defense","Open","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3",17),
new Opening( 2546,1101,"Open Games and the French Defense","Open Variations, Berlin Variation","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 e4c5",18),
new Opening( 2547,1102,"Open Games and the French Defense","Open Variations, Dilworth Variation","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5 b1d2 e8g8 b3c2 e4f2",22),
new Opening( 2548,1103,"Open Games and the French Defense","Open Variations, Italian Variation","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5",18),
new Opening( 2549,1104,"Open Games and the French Defense","Open Variations, Motzko Attack","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5 d1d3",19),
new Opening( 2550,1105,"Open Games and the French Defense","Open Variations, St. Petersburg Variation","C82 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5 b1d2",19),
new Opening( 2551,1106,"Open Games and the French Defense","Open, Tarrasch Trap","C83 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 f1e1 e8g8 f3d4 d8d7 d4e6 f7e6 e1e4",25),
new Opening( 2552,1107,"Open Games and the French Defense","Open Variations, Breslau Variation","C83 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 f1e1 e8g8 f3d4 c6e5",22),
new Opening( 2553,1108,"Open Games and the French Defense","Open Variations, Classical Defense, Main Line","C83 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 f8e7 f1e1 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3",19),
new Opening( 2554,1109,"Open Games and the French Defense","Open Variations, Classical Defense","C83 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7",18),
new Opening( 2555,1110,"Open Games and the French Defense","Open Variations, Malkin Variation","C83 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 b1d2 e8g8 d1e2",21),
new Opening( 2556,1111,"Open Games and the French Defense","Closed, Basque Gambit (North Spanish Variation)","C84 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d4 e5d4 e4e5 f6e4 c2c3",15),
new Opening( 2557,1112,"Open Games and the French Defense","Closed Variations, Center Attack, Basque Gambit","C84 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d4 e5d4 e4e5 f6e4 c2c3 d4c3",16),
new Opening( 2567,1122,"Open Games and the French Defense","Closed, Anti-Marshall","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 a2a4",15),
new Opening( 2568,1123,"Open Games and the French Defense","Closed Defense, Alekhine Gambit","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 e8g8 d2f1 c8g4 f1e3 g4f3 d1f3",27),
new Opening( 2569,1124,"Open Games and the French Defense","Closed, Leonhardt Variation","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 c6a5 b3c2 c7c5 d2d4 d8c7 h2h3 a5c6 d4d5 c6b8 b1d2 g7g5",26),
new Opening( 2572,1127,"Open Games and the French Defense","Closed Variations, Balla Variation","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 c6a5 b3c2 c7c5 d2d4 d8c7 a2a4",21),
new Opening( 2573,1128,"Open Games and the French Defense","Closed Variations, Rosen Attack","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 d2d4",15),
new Opening( 2575,1130,"Open Games and the French Defense","Noah's Ark Trap","C88 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 d2d4 c6d4 f3d4 e5d4 d1d4 c7c5",20),
new Opening( 2576,1131,"Open Games and the French Defense","Marshall Attack, Main Line","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4",23),
new Opening( 2577,1132,"Open Games and the French Defense","Marshall Attack, Modern Main Line","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4 e7d6 e5e1 d8h4 g2g3 h4h3",28),
new Opening( 2578,1133,"Open Games and the French Defense","Marshall Attack, Modern Variation","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6",22),
new Opening( 2579,1134,"Open Games and the French Defense","Marshall Attack, Original Marshall Attack","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 d5f6",22),
new Opening( 2580,1135,"Open Games and the French Defense","Marshall Attack","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5",16),
new Opening( 2581,1136,"Open Games and the French Defense","Marshall Attack, Re3 Variation","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 b3d5 c6d5 d2d4 e7d6 e5e3",27),
new Opening( 2582,1137,"Open Games and the French Defense","Marshall Attack, Steiner Variation","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 e5e4",18),
new Opening( 2583,1138,"Open Games and the French Defense","Marshall, Main Line, Spassky Variation","C89 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4 e7d6 e5e1 d8h4 g2g3 h4h3 c1e3 c8g4 d1d3 a8e8 b1d2 e8e6 a2a4 h3h5",36),
new Opening( 2584,1139,"Open Games and the French Defense","Closed Variations, Closed Defense","C90 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8",16),
new Opening( 2585,1140,"Open Games and the French Defense","Closed Variations, Lutikov Variation","C90 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 b3c2",17),
new Opening( 2586,1141,"Open Games and the French Defense","Closed Variations, Pilnik Variation","C90 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 d2d3 d7d6 c2c3",17),
new Opening( 2587,1142,"Open Games and the French Defense","Closed Variations, Suetin Variation","C90 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 a2a3",17),
new Opening( 2588,1143,"Open Games and the French Defense","Closed Variations, Bogoljubov Variation","C91 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 d2d4 c8g4",18),
new Opening( 2589,1144,"Open Games and the French Defense","Closed Variations, Yates Variation","C91 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 d2d4",17),
new Opening( 2590,1145,"Open Games and the French Defense","Closed Variations, Yates Variation, Short Attack","C91 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 d2d4 c8g4 a2a4",19),
new Opening( 2591,1146,"Open Games and the French Defense","Closed Variations, Flohr System","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7",18),
new Opening( 2592,1147,"Open Games and the French Defense","Closed Variations, Keres Defense","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d6 h2h3 a6a5",18),
new Opening( 2593,1148,"Open Games and the French Defense","Closed Variations, Keres Defense","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 f6d7",18),
new Opening( 2594,1149,"Open Games and the French Defense","Closed Variations, Kholmov Variation","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8e6",18),
new Opening( 2595,1150,"Open Games and the French Defense","Closed Variations","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3",17),
new Opening( 2596,1151,"Open Games and the French Defense","Closed Variations, Smyslov-Breyer-Zaitsev Hybrid","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7 d2d4 f8e8 b1d2 e7f8 a2a3 h7h6",24),
new Opening( 2597,1152,"Open Games and the French Defense","Closed Variations, Zaitsev System","C92 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 f8e8",18),
new Opening( 2598,1153,"Open Games and the French Defense","Closed Variations, Smyslov Defense","C93 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 h7h6",18),
new Opening( 2599,1154,"Open Games and the French Defense","Morphy Defense, Breyer Defense, Quiet Variation","C94 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d3",19),
new Opening( 2600,1155,"Open Games and the French Defense","Morphy Defense, Breyer Defense","C94 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8",18),
new Opening( 2601,1156,"Open Games and the French Defense","Closed, Breyer","C95 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4",19),
new Opening( 2602,1157,"Open Games and the French Defense","Closed Variations, Breyer Defense","C95 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 f3h4",21),
new Opening( 2603,1158,"Open Games and the French Defense","Closed Variations, Breyer Defense","C95 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c8b7 b3c2 c7c5",24),
new Opening( 2604,1159,"Open Games and the French Defense","Morphy Defense, Breyer Defense, Zaitsev Hybrid","C95 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7",20),
new Opening( 2605,1160,"Open Games and the French Defense","Closed, Rossolimo Defense","C96 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d6 h2h3 c6a5 b3c2 c7c6 d2d4 d8c7",22),
new Opening( 2606,1161,"Open Games and the French Defense","Closed Variations, Borisenko Variation","C96 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 a5c6",22),
new Opening( 2607,1162,"Open Games and the French Defense","Closed Variations, Closed Defense","C96 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2",19),
new Opening( 2608,1163,"Open Games and the French Defense","Closed Variations, Closed Defense","C96 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5",20),
new Opening( 2609,1164,"Open Games and the French Defense","Closed Variations, Keres Defense","C96 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 f6d7",22),
new Opening( 2610,1165,"Open Games and the French Defense","Closed, Chigorin, Yugoslav System","C97 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 c8d7 d2f1 f8e8 f1e3 g7g6",28),
new Opening( 2611,1166,"Open Games and the French Defense","Closed Variations, Chigorin Defense","C97 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7",22),
new Opening( 2612,1167,"Open Games and the French Defense","Closed Variations, Chigorin Defense","C98 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 a5c6",24),
new Opening( 2613,1168,"Open Games and the French Defense","Closed Variations, Chigorin Defense","C98 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 a5c6 d4c5",25),
new Opening( 2614,1169,"Open Games and the French Defense","Morphy Defense, Chigorin Defense, Panov System","C99 Ruy Lopez","e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 c5d4 c3d4",25)
]

export default RUY_LOPEZ;