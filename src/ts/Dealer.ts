import * as THREE from "three";
import Card from "./Card";
import { CardRank, CardSuit,GameTypes } from "./CardEnums"
import Pile from "./Pile";
import Stock from "./Stock";


export default class Dealer {



/**
 * Create a standard deck of cards without jokers.
 * @param {Function} selectCallback
 * @returns {Card[]}
 */
    static createCards(selectCallback: Function): Card[] {
        let cards: Card[] = [];
        for (let i = CardRank.ACE; i <= CardRank.KING; i++) {
            cards.push(new Card(i, CardSuit.CLUBS, selectCallback));
            cards.push(new Card(i, CardSuit.DIAMONDS, selectCallback));
            cards.push(new Card(i, CardSuit.HEARTS, selectCallback));
            cards.push(new Card(i, CardSuit.SPADES, selectCallback));
        }
        return cards;
    }

    /**
     * Shuffle a deck of Cards
     * @param {Card[]} cards
     * @returns {Card[]}
     */
    static shuffleCards(cards: Card[]): Card[] {
        let shuffleIndex = cards.length, randomIndex, tempCard;
        while (shuffleIndex !== 0) {
            randomIndex = Math.floor(Math.random() * shuffleIndex--);
            tempCard = cards[randomIndex];
            cards[randomIndex] = cards[shuffleIndex];
            cards[shuffleIndex] = tempCard;
        } //end While
        return cards;
    }

    static buildTabeau(stock: Stock,gameType: GameTypes): Pile[] {
        let tableau: Pile[] = [];
        switch (gameType) {
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
                break;
            case GameTypes.KLONDIKE:
                for (let i = 0; i < 7; i++) {
                    tableau.push(new Pile(i));
                }
                let added = 0;
                let card: any;
                while (added < 28) {
                    for (let i = 1; i <= tableau.length; i++) {
                        let index = i - 1;
                        if (tableau[index].cards.length < index) {
                            card = stock.draw();
                            card.isInPile = true;
                            tableau[index].cards.push(card);
                            added++;
                        } else if (tableau[index].cards.length == index) {
                            card = stock.draw;
                            card.isInPile = true;
                            card.revealed = true;
                            tableau[index].cards.push(card);
                            added++;
                        }
                    }
                }
                return tableau;
            case GameTypes.SIR_TOMMY:
                break;
            case GameTypes.SPIDER:
                break;
            case GameTypes.TERRACE:
                break;
            case GameTypes.YUKON:
                break;
        }//end switch
    }
}