import { Injectable } from '@angular/core';
import { Gastos } from '../interface/gastos';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: Gastos[]=[];

  constructor() { }

  public agregarGastos(monto: number, gastos: string){
    this.gastos.push({monto,gastos});
  }

  public mostrarGastos() {
    return this.gastos;
  }

}
