import Card from "./Card";
import { GameTypes, BuildRules } from "./CardEnums";
//no node elements so no THREE.js needed

export default class Selected {
    private card: Card;
    protected stack: Card[] = [];
    public dragging: boolean = false;
}