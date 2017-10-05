import Card from "./Card";
import { CardRank, CardSuit, CardColor, BuildingDirections, BuildingRules,GameTypes } from "./CardEnums";
import * as THREE from 'three';

/**
 *GameTypes: KLONDIKE
 * A pile is one of seven as part of the tableau which is where the main cards are.
 * They satart off with each card being hidden, exept the topmost
 * Add more cards Decending By AltColor
*/
export default class Pile {
    /**
    * @type {Array<Card>}
    */
    public cards: Card[];

    /**
     * The latest added card in this pile.
     * @type {Card}
    */
    public topCard: Card;

    public index: Number;

    /**
     * @type {string}
    */
    protected className: string = 'pile';

    /**
     * @param {number} index
    */
    constructor(index: number) {
        this.index = index;
    }

    /**
     * Determine if card can be added to this tableau pile.
     * if it is empty it will accept a king of any suit(Klondike),
     * otherwise accept cards of the oppsite color with the value one less
     * than the top most card
     *
     * @param {Card} card
     * @returns {boolean}
    */
    public canAddCard(card: Card): boolean {
        switch (card.gameType) {
            case GameTypes.ADDITION:
                break;
            case GameTypes.CANFIELD:
                break;
            case GameTypes.CASTLE:
                break;
            case GameTypes.FAN:
                break;
            case GameTypes.FOURTY_THEEVES:
                break;
            case GameTypes.FREECELL:

            case GameTypes.KLONDIKE:
                if (this.cards.length == 0 && card.rank == CardRank.KING) {
                    return true;
                }
                return this.topCard.color() !== card.color() && (this.topCard.rank - 1) == card.rank;
            case GameTypes.SIR_TOMMY:
                break;
            case GameTypes.SPIDER:
                break;
            case GameTypes.TERRACE:
                break;
            case GameTypes.YUKON:
                break;
        } //end switch

        //public render (use three.js for this)
        //public render(): any {}


    }
}