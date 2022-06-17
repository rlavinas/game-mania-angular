import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  Produtos1: ProdutoComponent[] = [];
  Produtos2: ProdutoComponent[] = [];

  constructor() {
    for (var i = 0; i < 10; i++){
      var Prod = new ProdutoComponent();
      Prod.Imagem = 'imagem_produto_item1'
      Prod.Descricao = 'jogo Supercross 4 para Xbox'
      Prod.Valor_anterior = 'R$ 199,00'
      Prod.Valor_novo = 'R$ 179,00'
      Prod.Parcelamento = 'em 1x no cartão de crédito'
      this.Produtos1.push(Prod);
    }

    for (var i = 0; i < 10; i++){
      var Prod = new ProdutoComponent();
      Prod.Imagem = 'imagem_produto_item2'
      Prod.Descricao = 'jogo Samurai Shodown para Xbox One'
      Prod.Valor_anterior = 'R$ 199,00'
      Prod.Valor_novo = 'R$ 179,00'
      Prod.Parcelamento = 'em 1x no cartão de crédito'
      this.Produtos2.push(Prod);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    let items1 = document.querySelectorAll('#carProdutos_01_01 .carousel .carousel-item');

    items1.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items1[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.childNodes[0])
            next = next.nextElementSibling
        }
    })

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    let items2 = document.querySelectorAll('#carProdutos_02_01 .carousel .carousel-item');
    
    items2.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items2[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.childNodes[0])
            next = next.nextElementSibling
        }
    })
  }
}
