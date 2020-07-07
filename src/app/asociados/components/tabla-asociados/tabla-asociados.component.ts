import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AsociadosService } from '../../services/asociados.service';
import { Asociado } from '../../models/asociado';
import { MatTableDataSource } from '@angular/material/table';
// import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabla-asociados',
  templateUrl: './tabla-asociados.component.html',
  styleUrls: ['./tabla-asociados.component.scss']
})
export class TablaAsociadosComponent implements OnInit, OnChanges {
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  public asociadosList: Asociado[] = [];
  public displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'fechaNacimiento', 'fechaAlta'];
  public dataSource: MatTableDataSource<Asociado>;

  constructor( private asociadoService: AsociadosService) { }

  ngOnInit(): void {
    this.getAsociados();
    console.log(this.asociadosList);
    this.dataSource = new MatTableDataSource<Asociado>(this.asociadosList);
    // this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Asociado>(this.asociadosList);
  }

  public getAsociados() {
    this.asociadoService.getAsociadosList().subscribe((asociados) => {
      this.asociadosList = asociados;
    });
  }


}
