import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalesService } from '../../services/hospitales.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-hospitales',
  templateUrl: './tabla-hospitales.component.html',
  styleUrls: ['./tabla-hospitales.component.scss']
})
export class TablaHospitalesComponent implements OnInit, OnChanges{

  public hospitalList: Hospital[] = [];
  public displayedColumns: string[] = ['abreviatura', 'nombreHospital', 'details'];
  public dataSource: MatTableDataSource<Hospital>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private hospitalService: HospitalesService) { }

  ngOnInit(): void {
    this.getHospitales();
  }

  ngOnChanges(changes: SimpleChanges): void{
  }

  public getHospitales() {
    this.hospitalService.getHospitalesList().subscribe((hospitales) => {
      this.dataSource = new MatTableDataSource<Hospital>(hospitales);
      this.dataSource.paginator = this.paginator;
    });
  }
}
