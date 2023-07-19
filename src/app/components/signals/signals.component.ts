import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.sass']
})
export class SignalsComponent implements OnInit{
  // definición de una variable string con signals
  countSignal: WritableSignal<number> = signal(0);
  // Computed permite subscribirse al cambio de otro signal y aplicar una función que cambie el valor de la variable computada
  // cada vez que cambie count cambiará doubleCount, aplicando una función para el cálculo
  doubleCount: Signal<number> = computed(() => this.countSignal() * 2);
  // definimos un signal que es un string[]
  cadenasSignal: WritableSignal<string[]> = signal([]);
  // Signals are getter functions - calling them reads their value.

  ngOnInit(): void {
    // cambiar un valor por otro
    this.countSignal.set(2)
    // Increment the count by 1.
    // Cambiar el valor usando un a función
    this.countSignal.update((value: number) => value + 1);
    // Mutate cambia el valor interno sin reescribir su contenido
    this.cadenasSignal.mutate((value: string[]): void => {
      value.push("hola")
    })
  }
  cambia(){
    this.cadenasSignal.mutate((value: string[]): void =>{
      value.push("Adios")
    })
  }

}
