import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public user: string;
  public users: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  deleteUser(user: string): void {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
