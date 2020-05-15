import OpeningSummary from '../../models/openingSummary'

import Images from '../../utils/Images'

// Flank
    // english opening
    // dutch defense
    // benoni
    // london

// Semi Open
    // scandinavian
    //alekhine
    // carokann
    // sicilian

// Open
    // kings gambit
    // vienna
    // bishops opening
    // french
    // russian
    // scotch
    // four knights
    // italian
    // ruy lopez
    // philidor

// Closed games
    // semi slav
    // slav
    // grunfeld
    // queens gambit
    // tarrasch

// Indian Defense
    // kings indian
    // catalan
    // nimzo

const OPENING_SUMMARY = [

    new OpeningSummary (1, "English Opening", "c2c4 ...", 1, Images.opening.english),
    new OpeningSummary (2, "Dutch Defense", "c2c4 f7f5 ...", 1, Images.opening.dutch ),
    new OpeningSummary (3, "Benoni Defense", "d2d4 g8f6 c2c4 c7c5 d4d5 ...", 1, Images.opening.benoni ),
    new OpeningSummary (4, "London System", "d2d4 ... c1f4", 1, Images.opening.london ),

    new OpeningSummary (5, "Scandinavian Defense", "e2e4 d7d5 ...", 2, Images.opening.scandinavian ),
    new OpeningSummary (6, "Alekhine Defense", "e2e4 g8f6 ...", 2, Images.opening.alekhine ),
    new OpeningSummary (7, "Caro-Kann Defense", "e2e4 c7c6 ...", 2, Images.opening.carokann ),
    new OpeningSummary (8, "Sicilian Defense", "e2e4 c7c5 ...", 2, Images.opening.sicilian ),

    new OpeningSummary (9, "King's Gambit", "e2e4 e7e5 f2f4 ...", 3, Images.opening.kingsgambit ),
    new OpeningSummary (10, "Vienna Game", "e2e4 e7e5 b1c3 ...", 3, Images.opening.vienna ),
    new OpeningSummary (11, "Bishop's Opening", "e2e4 e7e5 f1c4 ...", 3, Images.opening.bishops),
    new OpeningSummary (12, "French Defense", "e2e4 e7e6 ...", 3, Images.opening.french ),
    new OpeningSummary (13, "Russian Game", "e2e4 e7e5 g1f3 g8f6 ...", 3, Images.opening.russian ),
    new OpeningSummary (14, "Scotch Game", "e2e4 e7e5 g1f3 b8c6 d2d4 ...", 3, Images.opening.scotch ),
    new OpeningSummary (15, "Four Knights Game", "e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 ...", 3, Images.opening.fourknights ),
    new OpeningSummary (16, "Italian Game", "e2e4 e7e5 g1f3 b8c6 f1c4 ...", 3, Images.opening.italian ),
    new OpeningSummary (17, "Ruy Lopez", "e2e4 e7e5 g1f3 b8c6 f1b5 ...", 3, Images.opening.ruylopez ),
    new OpeningSummary (18, "Philidor", "e2e4 e7e5 g1f3 d7d6 ...", 3, Images.opening.philidor ),

    new OpeningSummary (19, "Slav Defense", "d2d4 d7d5 c2c4 c7c6 ...", 4, Images.opening.slav ),
    new OpeningSummary (20, "Semi-Slav Defense", "d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 ...", 4, Images.opening.semislav ),
    new OpeningSummary (21, "Grünfeld Defence", "d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 ...", 4, Images.opening.grunfeld ),
    new OpeningSummary (22, "Queen's Gambit", "d2d4 d7d5 c2c4 ...", 4, Images.opening.queensgambit ),
    new OpeningSummary (23, "Tarrasch Defense", "d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 ...", 4, Images.opening.tarrasch ),

    new OpeningSummary (24, "King's Indian", "d2d4 g8f6 c2c4 g7g6 ...", 5, Images.opening.kingsindian ),
    new OpeningSummary (25, "Catalan Opening", "d2d4 g8f6 c2c4 e7e6 g2g3 ...", 5, Images.opening.catalan ),
    new OpeningSummary (26, "Nimzo-Indian Defense", "d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 ...", 5, Images.opening.nimzoindian ),

]

export default OPENING_SUMMARY;

