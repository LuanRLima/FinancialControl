import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  valorTotal: number = 0;
  saida: number = 0;
  entrada: number = 0;
  investimentos: number = 0;


  finances = [
    {tipo: 'Saída',
    valor:  100,
    data: '01/01/2020'
    },
    {tipo: 'Entrada',
    valor:  100,
    data: '01/01/2020'
    },
    {tipo: 'Saída',
    valor:  5000,
    data: '01/01/2020'
    },
    {tipo: 'Investimento',
    valor:  2000,
    data: '01/01/2020'
    },
    {tipo: 'Saída',
    valor:  1010,
    data: '01/01/2020'
    },

  ]
  constructor() { }

  somavalorTotal(){
    for(let i = 0; i < this.finances.length; i++){
      if(this.finances[i].tipo === 'Saída'){
        this.saida += this.finances[i].valor;
      }else if(this.finances[i].tipo === 'Entrada'){
        this.entrada += this.finances[i].valor;
      }else if(this.finances[i].tipo === 'Investimentos'){
        this.investimentos += this.finances[i].valor;
      }
    }
  }
  saldoConta(){
    this.valorTotal += this.entrada - this.saida;
  }

  excluirItem(id: number | string){
    this.finances.splice(Number(id), 1)
    this.valorTotal = 0;
    this.saida = 0;
    this.entrada = 0;
    this.investimentos = 0;
    this.somavalorTotal();
    this.saldoConta();
  }


  ngOnInit(): void {
    this.somavalorTotal();
    this.saldoConta();
  }

}
