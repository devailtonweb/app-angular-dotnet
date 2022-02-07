import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutosCountComponent } from './produtos-count/produtos-count.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild('teste', { static: false}) message: ElementRef;

  @ViewChild(ProdutosCountComponent, {static: false}) contador: ProdutosCountComponent;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor() { }

  ngOnInit() {
    this.produtos = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'gopro.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'laptop.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'mouse.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: false,
      valor: 600,
      imagem: 'headset.jpg'
    }];
  }

  modificaStatus(produto: Produto): void {
    console.log(produto)
    produto.ativo = !produto.ativo;
  }

  ngAfterViewInit():void {
    let message: Observable<any> = fromEvent(this.message.nativeElement, 'click');
    message.subscribe(()=>{
      alert('i');
      return;
    });

    console.log(this.contador.countProduto());

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    });

  }

}
