import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number = 0;

  @Output("incrementation") public even = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  public compteurIncr(val: number): void {
    this.compteur += val;
    this.even.emit({
      value: this.compteur,
    });
  }
}
