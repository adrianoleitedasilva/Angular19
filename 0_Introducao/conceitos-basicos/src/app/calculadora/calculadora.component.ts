import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  numero1: number = 0; // Poderiamos inserir uma interrogacao logo após o nome da var para tornar a declaracao do valor opcional.
  numero2: number = 0;
  resultado: number = 0;

  calculaResultado() {
    console.log('Chamando o método para calcular o resultado!');
    console.log('Numero1: ' + this.numero1);
    console.log('Numero2: ' + this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }
}
