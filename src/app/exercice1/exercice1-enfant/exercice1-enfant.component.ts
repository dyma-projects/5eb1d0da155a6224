import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input()
  public compteurEnfant : number = 0;

  @Output("incrementation")
  public event = new EventEmitter();

  public newVal: number = 0;

  constructor() {}

  ngOnInit() {}
  public compteurIncr(val: number): void {
    this.newVal += val;
    this.event.emit({
      value: this.newVal,
    });
  }
}
