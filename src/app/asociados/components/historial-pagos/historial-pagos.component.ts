import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Factura } from '../../models/factura';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss']
})
export class HistorialPagosComponent implements OnInit, OnChanges{

  @Input() facturas: Factura[];

  public displayedColumns: string[] = ['ano', 'cantidadAPagar', 'fechaPago', 'pagado'];
  public dataSource: MatTableDataSource<Factura>;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Factura>(this.facturas);
  }

}
