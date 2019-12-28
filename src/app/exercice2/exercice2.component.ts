import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"]
})
export class Exercice2Component implements OnInit {
  @ViewChild("refValue", { static: true }) refValeur : ElementRef;
  public valeur: string;

  constructor() {}

  ngOnInit() {
    this.valeur = this.refValeur.nativeElement.value;
  }
}
