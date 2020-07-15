import { Component, OnInit, Input } from '@angular/core';
import { Asociado } from '../../models/asociado';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-info-personal',
  templateUrl: './tabla-info-personal.component.html',
  styleUrls: ['./tabla-info-personal.component.scss']
})
export class TablaInfoPersonalComponent implements OnInit {

  @Input() asociado: Asociado;

  constructor() { }

  ngOnInit(): void {
  }

}
