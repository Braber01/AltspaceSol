import Card from './Card';
import { CardRank, CardSuit,GameTypes, BuildRules, DeckCount } from "./CardEnums";
import * as THREE from 'three';

/**
 *A foundation is where the Aces or
 * other cards depending on game is build up or down
 * building rules also depend on type of game
*/

export default class Foundation {
    /**
     * @type {string}
    */
    protected className: string = 'foundation';

    /**
     * Array containing all the cards of the foundation pile
     * @type {Array<Card>}
    */
    public cards: Card[];

    /**
     *The suit of the cards currently allowed in foundation
     * in games like klondike and varients
     * @type {number | CardSuit}
     */
    public suit: CardSuit;

    /**
     * The value of latest added card in this foundation
     * @type {number | CardRank}
    */
    public highestRank: CardRank;

    /**
     * Determine if we can add this card to this foundation.
     * if there are no cards and GameType === Klondike
     * it will accept any ace but otherwise
     * it needs to be same suit as this foundation contains and be the next sequental card in the series.
     *
     * @param {Card} card
     * @returns {boolean}
    */
    canAddCard(card: Card): boolean {
        if (card.gameType == GameTypes.KLONDIKE) {
            //TODO: Research all the other games and add rules for it
            if (this.cards.length == 0 && card.rank == CardRank.ACE) {
                return true;
            }
            return this.suit == card.suit && (this.highestRank + 1) == card.rank;
        }
    }
}