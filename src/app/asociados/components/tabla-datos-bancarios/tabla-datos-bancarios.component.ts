import { Component, OnInit, Input } from '@angular/core';
import { DatosBancarios } from '../../models/datosBancarios';

@Component({
  selector: 'app-tabla-datos-bancarios',
  templateUrl: './tabla-datos-bancarios.component.html',
  styleUrls: ['./tabla-datos-bancarios.component.scss']
})
export class TablaDatosBancariosComponent implements OnInit {

  @Input() datosBancarios: DatosBancarios;

  constructor() { }

  ngOnInit(): void {
  }

}
