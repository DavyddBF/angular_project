import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  // url: string = 'jw.org';
  // valor1: number = 3;
  // valor2: number = 10;

  // boleano: boolean = true;

  // getValor(): number {
  //   return 1;
  // }

  // getTrueOrFalse(): string {
  //   if(this.boleano && true) {
  //     return 'Verdadeiro';
  //   } else {
  //     return 'Falso'
  //   }
  // }


  teste(variavel:any): any {
    console.log(variavel.value);
  }
}