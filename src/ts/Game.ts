import * as THREE from "three";
import Dealer from "./Dealer";
import Pile from "./Pile";
import Stock from "./Stock";
import Waste from "./Waste";
import Foundation from "./Foundation";
import Card from "./Card";
import { GameTypes } from "./cardEnums";

export default class Game {
    private board: any;

    private stock: Stock;

    private waste: Waste;

    private selected: Card;

    private selectedMeta: Object = {
        dragging: false,
        stack: []
    };

    public start(): void {
        var geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(4200, 1452);
        var material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

    }
}