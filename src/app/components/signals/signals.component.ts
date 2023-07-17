import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.sass']
})
export class SignalsComponent implements OnInit{
  // definición de una variable string con signals
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  cadenas: WritableSignal<string[]> = signal([]);
  // Signals are getter functions - calling them reads their value.

  ngOnInit(): void {
    this.count.set(2)
    // Increment the count by 1.
    this.count.update((value: number) => value + 1);
    this.cadenas.mutate((value: string[]): void => {
      value.push("hola")
    })
  }
  cambia(){
    this.cadenas.mutate((value: string[]): void =>{
      value.push("Adios")
    })
  }

}
