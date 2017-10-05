import Card from './Card';
import * as THREE from 'three';

/**
 * Repesents the stock
*/
export default class Stock {

    /**
     * All cards in the stock.
     * @type {Array<Card>}
    */
    private cards: Card[];

    /**
     * determine if the stock has any cards in it
     * @returns {boolean}
    */
    public hasCard(): boolean {
        return this.cards.length > 0;
    }

    /**
     * Get a card or thee from the stock to waste
     * used when moving cards from the stock to the waste
     * @returns {Card}
    */
    public draw(): Card {
        let card: any = this.cards.pop;
        //this.updateThree();
        return card;
    }

    /**
     *return a card or three from the waste to the stock
     * @param {Card} card
    */
    public undoDraw(card: Card): void {
        this.cards.push(card);
    }

    /**
     * Move a card to the stock.
     * Usally done when recycleing the waste
     * @param {Card} card
    */
    public add(card: Card): void {
        this.cards.unshift(card);
        //this.updateThree
    }

    /**
     * Get a card back from the stock.
     * used when undoing an action that moved a card from the waste to the stock
     * @returns {Card}
    */
    public undoAdd(): Card {
        return this.cards.shift();
    }

    //public setupThree(): any { }

    //public updateThree(): any
}