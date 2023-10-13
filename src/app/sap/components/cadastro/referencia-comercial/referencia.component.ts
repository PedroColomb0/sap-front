import { Component, Input } from '@angular/core';
import { Referencia, ReferenciaComercial } from '../../../model/business-partner';

@Component({
  selector: 'app-referencia-comercial',
  templateUrl: './referencia.component.html',
})
export class ReferenciaComponent {

  @Input()
  referencia : Referencia

  ngOnInit(): void {

  }

}
