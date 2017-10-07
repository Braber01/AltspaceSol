// #region CardData
export enum CardRank {
    ACE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13
}

export enum CardSuit {
    CLUBS = 0,
    DIAMONDS = 1,
    HEARTS = 2,
    SPADES = 3
}

export enum CardColor {
    RED = 1,
    BLACK = 2
}

// #endregion

// #region Building
export enum BuildRules {
    NONE = 0, //0
    ASCENDING = 1 << 0, //0b01 | 1
    DECENDING = 1 << 1, //0b10 | 2
    ALT_COLOR = 1 << 2, //0b100 | 4
    SAME_COLOR = 1 << 3, //0b1000 | 8
    SAME_SUIT = 1 << 4, //0b1_0000| 16
    ANY_SUIT_BUT_SAME = 1 << 5, //0b10_0000 | 32
    ANY_SUIT = 1 << 6, //0b100_0000 | 64
    //alt color
    ASC_ALT_COLOR = BuildRules.ASCENDING | BuildRules.ALT_COLOR,
    DEC_ALT_COLOR = BuildRules.DECENDING | BuildRules.ALT_COLOR,
    //same color
    ASC_SAME_COLOR = BuildRules.ASCENDING | BuildRules.SAME_COLOR,
    DEC_SAME_COLOR = BuildRules.DECENDING | BuildRules.SAME_COLOR,
    //same suit
    ASC_SAME_SUIT = BuildRules.ASCENDING | BuildRules.SAME_SUIT,
    DEC_SAME_SUIT = BuildRules.DECENDING | BuildRules.SAME_SUIT,
    //Any suit but same
    ASC_ANY_SUIT_BUT_SAME = BuildRules.ASCENDING | BuildRules.ANY_SUIT_BUT_SAME,
    DEC_ANY_SUIT_BUT_SAME = BuildRules.DECENDING | BuildRules.ANY_SUIT_BUT_SAME,
    //Any Suit
    ASC_ANY_SUIT = BuildRules.ASCENDING | BuildRules.ANY_SUIT,
    DEC_ANY_SUIT = BuildRules.DECENDING | BuildRules.ANY_SUIT
}



// #endregion

export enum DrawOptions {
    DRAW_ONE = 1,
    DRAW_THREE = 2
}

export enum GameTypes {
    KLONDIKE = 1,
    CANFIELD = 2,
    FREECELL = 3,
    SPIDER = 4,
    FOURTY_THEEVES = 5,
    FAN = 6,
    ADDITION = 7,
    CASTLE = 8,
    YUKON = 9,
    TERRACE = 10,
    SIR_TOMMY =11
}

export enum DeckCount {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4
}