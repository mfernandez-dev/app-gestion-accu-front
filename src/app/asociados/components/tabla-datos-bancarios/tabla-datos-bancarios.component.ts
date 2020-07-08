import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DatosBancarios } from '../../models/datosBancarios';

@Component({
  selector: 'app-tabla-datos-bancarios',
  templateUrl: './tabla-datos-bancarios.component.html',
  styleUrls: ['./tabla-datos-bancarios.component.scss']
})
export class TablaDatosBancariosComponent implements OnInit, OnChanges {

  @Input() datosBancarios: DatosBancarios;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

}
