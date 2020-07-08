import { Component, OnInit, Input } from '@angular/core';
import { DatosMedicos } from '../../models/datosMedicos';

@Component({
  selector: 'app-tabla-datos-medicos',
  templateUrl: './tabla-datos-medicos.component.html',
  styleUrls: ['./tabla-datos-medicos.component.scss']
})
export class TablaDatosMedicosComponent implements OnInit {

  @Input() datosMedicos: DatosMedicos;

  constructor() { }

  ngOnInit(): void {
  }

}
