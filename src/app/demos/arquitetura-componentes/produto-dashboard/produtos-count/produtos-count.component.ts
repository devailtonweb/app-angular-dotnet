import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produtos-count',
  templateUrl: './produtos-count.component.html',
  styles: []
})
export class ProdutosCountComponent implements OnInit {

  @Input()
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
  }

  countProduto():number {
    let productCount = this.produtos.filter((produto)=> produto.ativo).length;
    return productCount;
  }

}
