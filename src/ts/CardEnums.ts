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
    CLUBS = 1,
    DIAMONDS = 2,
    HEARTS = 3,
    SPADES = 4
}

export enum CardColor {
    RED = 1,
    BLACK = 2
}

// #endregion

// #region Building
export enum BuildingDirections {
    ACENDING = 1,
    DECENDING = 2
}

export enum BuildingRules {
    //TODO: add this enum on 10/5/2017
    ALT_COLOR = 1,
    SAME_COLOR = 2,
    SAME_SUIT = 3,
    ANY_SUIT_BUT_SAME = 4,
    ANY_SUIT = 5
}

// #endregion

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