import Card from "./Card";

//waste for all solitare games
export default class Waste {

    //hidden cards in the waste
    private cards: Card[] = [];

    //all visible cards in the waste
    private visible: Card[] = [];

    /**
     * Move a card to the stock.
     * done when redealing / Recycling the waste
     * @param {Card[]} cards
    */
    public add(cards: Card[]): void {
        this.clearVisible();

        //make new cards visible and add to the list of visible cards
        this.visible = cards.map((card) => {
            card.revealed = true;
            return card;
        });
        //this.updateThree
    }
    /**
     * Move any currently visible cards to the main cards array,
     * while marking the cards as not being revealed
    */
    protected clearVisible(): void {
        while (this.visible.length) {
            let card = this.visible.pop();
            card.revealed = false;
            this.cards.push(card);
        }
    }

    /**
     * Get a card back from the stock
     *Used when undoing an action that moved a card from the waste
     * to the stock
     * @returns {Card}
    */
    public undoAdd(): Card {
        //TODO: Respect drawn cards. No reason to restore 3 visible cards if there were only two left visible
        return this.cards.pop();
    }

    /**
     * Get all the cards from the waste
     * @returns {Card[]}
    */
    public recycle(): Card[] {
        this.clearVisible();
        let cards = this.cards;
        this.cards = [];

        //this.updateThree
        return cards;
    }

    /**
     * draw the top-most visible card
     * @returns {Card | null}
    */
    public draw(): Card {
        if (this.visible.length) {
            let card = this.visible.pop();

            if (this.visible.length === 0) {
                //while
            }
            return card;
        }
        return null;
    }

    //public setupThree() { }
    //updateThree()
}