import * as THREE from "three";
import Dealer from "./Dealer";
import Pile from "./Pile";
import Stock from "./Stock";
import Waste from "./Waste";
import Foundation from "./Foundation";
import Card from "./Card";

export default class Game {
    private board: any;

    private stock: Stock;

    private waste: Waste;

    private selected: Card;

    private selectedMeta: Object = {
        dragging: false,
        stack: []
    };

    public start() {
        var geometry = new THREE.PlaneGeometry(5, 20, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

    }

}