import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() Imagem: string | undefined;
  @Input() Descricao: string | undefined;
  @Input() Valor_anterior:  string | undefined;
  @Input() Valor_novo:  string | undefined;
  @Input() Parcelamento:  string | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
