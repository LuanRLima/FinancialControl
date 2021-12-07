import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  name: string = ""

  @Input()
  valorTotal = 0;
  @Input()
  saida = 0;
  @Input()
  entrada = 0;
  @Input()
  investimentos = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
