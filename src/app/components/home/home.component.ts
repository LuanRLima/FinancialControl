import { Component, OnInit } from '@angular/core';
import { Finance} from '../../models/finance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //cards
  valorTotal: number = 0;
  saida: number = 0;
  entrada: number = 0;
  investimentos: number = 0;
  financeModel = {
    tipo: 'Entrada',
    valor: 888,
    data: '12/01/2020'
  }

  //objeto da model
  financa: Finance ={
    tipo: 'Entrada',
    valor: 888,
    data: '12/01/2020'
  }
  //array de obejto da model
  financas: Finance[] = [];

  finance = [{
    tipo: 'Entrada',
    valor: 2650,
    data: '20/02/2021'
  },
  {
    tipo: 'Saida',
    valor: 980,
    data: '20/02/2021'
  },
  {
    tipo: 'Entrada',
    valor: 20,
    data: '20/02/2021'
  },
  {
    tipo: 'Saida',
    valor: 9870,
    data: '20/02/2021'
  },
  {
    tipo: 'Investimento',
    valor: 20000,
    data: '20/02/2021'
  },
  {
    tipo: 'Entrada',
    valor: 200,
    data: '20/02/2021'
  },
]
  constructor() { }

  somavalorTotal(){
    for(let i = 0; i < this.finance.length; i++){
      if(this.finance[i].tipo === 'Saída'){
        this.saida += this.finance[i].valor;
      }else if(this.finance[i].tipo === 'Entrada'){
        this.entrada += this.finance[i].valor;
      }else if(this.finance[i].tipo === 'Investimentos'){
        this.investimentos += this.finance[i].valor;
      }
    }
    this.saldoConta();
  }
  somaSaidas(){
    var soma = this.finance.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
    for(let alt = 0; alt < this.financas.length; alt++){
      if(this.financas[alt].tipo === 'Saida'){
        this.saida += this.financas[alt].valor?.valueOf() || 0;
      }
    }
  }
  somaEntradas(){
    for(let alt = 0; alt < this.financas.length; alt++){
      if(this.financas[alt].tipo === 'Entrada'){
        this.entrada += this.financas[alt].valor?.valueOf() || 0;
      }
    }
  }
  somaInvestimento(){
    for(let alt = 0; alt < this.financas.length; alt++){
      if(this.financas[alt].tipo === 'Investimento'){
        this.investimentos += this.financas[alt].valor?.valueOf() || 0;
      }
    }
  }

  excluir(id: number | string){
    this.financas.splice(Number(id), 1);
    console.log("excluir");
    this.valorTotal = 0;
    this.saida = 0;
    this.entrada = 0;
    this.investimentos = 0;
    this.somaSaidas();
    this.somaEntradas();
    this.somaInvestimento();
    this.somavalorTotal();
    this.saveLocalStorage();
  }
  saldoConta(){
    this.valorTotal += this.entrada - this.saida - this.investimentos;
  }

  createFinance(){
    this.financas.push({
       tipo: this.financeModel.tipo,
       valor: this.financeModel.valor,
       data: this.financeModel.data
    });
    this.recalcular();
    //this.toastr.success('Financeiro adicionado com sucesso');
  }

  recalcular(){
    this.valorTotal = 0;
    this.saida = 0;
    this.entrada = 0;
    this.investimentos = 0;
    this.somaSaidas();
    this.somaEntradas();
    this.somaInvestimento();
    this.somavalorTotal();
    this.saveLocalStorage();
  }

  saveLocalStorage(){
    if(localStorage.length != 0){
      if(!localStorage.getItem('local_fuctura')){
        localStorage.setItem('local_fuctura', JSON.stringify(this.financas));
    }else{
      localStorage.removeItem('local_fuctura');
      localStorage.setItem('local_fuctura', JSON.stringify(this.financas));
    }
   }
  }
  loadLocalStorage(){
    if(localStorage.length != 0){
      if(localStorage.getItem('local_fuctura')){
        let financas = JSON.parse(localStorage.getItem('local_fuctura'));
        this.financas = JSON.parse(financas || '');
      }
    }
  }


  ngOnInit(): void {
    this.somavalorTotal();
    this.saldoConta();
  }

}
