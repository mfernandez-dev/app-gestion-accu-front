import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Factura } from '../../models/factura';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss']
})
export class HistorialPagosComponent implements OnInit, OnChanges{

  @Input() facturas: Factura[];

  public displayedColumns: string[] = ['ano', 'cantidadAPagar', 'fechaPago', 'pagado'];
  public dataSource: MatTableDataSource<Factura>;


  constructor() {
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Factura>(this.facturas);
    this.dataSource.paginator = this.paginator;
  }

}
