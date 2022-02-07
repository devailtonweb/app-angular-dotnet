import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styles: []
})
export class ProdutoDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<Produto> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setStatus(){
    this.status.emit(this.produto);
  }

}
