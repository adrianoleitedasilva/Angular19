import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  item: string = '';

  adicionarItem() {
    console.log('Item recebido: ', this.item);
    this.item = '';
  }
}
