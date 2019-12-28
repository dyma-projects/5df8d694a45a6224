import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur : number;
  @Output() result = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.result.emit(this.compteur++);
  }

  decrement() {
    this.result.emit(this.compteur--);
  }
}
