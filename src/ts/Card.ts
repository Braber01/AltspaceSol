import { CardRank, CardSuit, CardColor,GameTypes } from "./CardEnums";
import * as THREE from "three" ;

/**
 * The Main Card class. Contains basic data about each card.
 * Can be one of four suits and have one of 13 values
 */
export default class Card {
    // public node: HTMLElement

    /**
     * The value of the Card. 2-10, Jack, Queen,King,Ace
     * @type {CardRank}
     */
    public rank: CardRank;

    /**
     * The suit of the card
     * Clubs, Diamonds, Hearts Spades
     * @type {CardSuit}
     */
    public suit: CardSuit;

    /**
     * The Callback to run when this card is selected.
     * @type {Function}
     */
    private selectCallback: Function;

    /**
     * Has this card been revealed?
     * @type {boolean}
     */
    public revealed: boolean;

    /**
     * Is this card Currently in a pile?
     * Set "from outside" when card is being moved
     * @type {boolean}
     */
    public isInPile: boolean = false;

    /**
     * Is this card currently in a foundation?
     * Set "from outside" when card is being moved.
     * @type {boolean}
     */
    public isInFoundation: boolean;

    public gameType: GameTypes;
    static fileNameArray: any[] = [2, 3, 4, 5, 6, 7, 8, 8, 9, 10, "jack", "queen", "king", "ace"];
    static texturePrefix: string = "assets/Cards/";
    static suitArray: string[] = ["clubs", "diamonds", "hearts", "spades"];

    /**
     * Create a new card
     * @param {CardRank} rank
     * @param {CardSuit} suit
     * @param {Function} selectCallback
     * @param {GameTypes=} gameType
     */
    constructor(rank: CardRank, suit: CardSuit, selectCallback: Function,gameType:GameTypes = GameTypes.KLONDIKE) {
        this.rank = rank;
        this.suit = suit;
        this.selectCallback = selectCallback;
    }

    /**
     * Get the color value of this card.
     * @returns {CardColor}
     */
    public color(): CardColor {
        return (this.suit === CardSuit.HEARTS || this.suit === CardSuit.DIAMONDS) ? CardColor.RED : CardColor.BLACK;
    }

    fileName():string {
        return Card.texturePrefix + Card.fileNameArray[this.rank] + "_of_" + Card.suitArray[this.suit] + ".png";
    }

    /**
     * TODO: setup thee.js elements
     * not sure of the types yet
     *
     */

    // each card model is 600x726
    setupThree(): any {

    }

    isSelectable(): boolean {
        return this.revealed === true;
    }

    updateThree(): any { }

    acceptsSibling(card: Card): boolean {
        // todo replace with switch(gameType)
        if (this.gameType === GameTypes.KLONDIKE) {
            if (this.isInFoundation) {
                return card.suit === this.suit && card.rank === (this.rank + 1);
            }
            if (this.isInPile) {
                return card.color() !== this.color() && card.rank === (this.rank - 1);
            }
            // todo Add Additonal Game Rules below

            return false;
        }
    }
}