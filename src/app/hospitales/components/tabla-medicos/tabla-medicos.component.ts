import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Medico } from '../../models/medico';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-tabla-medicos',
  templateUrl: './tabla-medicos.component.html',
  styleUrls: ['./tabla-medicos.component.scss']
})
export class TablaMedicosComponent implements OnInit, OnChanges {

  @Input() especialistas: Medico[];

  public displayedColumns: string[] = ['nombre', 'consulta', 'email', 'tlf', 'especialidad'];
  public dataSource: MatTableDataSource<Medico>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Medico>(this.especialistas);
  }
}
