import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  public result: number = 0;


  constructor() {}

  ngOnInit() {
  }
  public incrCompteur(event: any) : void{
    this.result = event.value;
    this.compteur = event.value;
  }
}
