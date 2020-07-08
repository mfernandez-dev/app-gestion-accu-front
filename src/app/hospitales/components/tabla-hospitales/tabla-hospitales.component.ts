import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalesService } from '../../services/hospitales.service';

@Component({
  selector: 'app-tabla-hospitales',
  templateUrl: './tabla-hospitales.component.html',
  styleUrls: ['./tabla-hospitales.component.scss']
})
export class TablaHospitalesComponent implements OnInit, OnChanges{

  public hospitalList: Hospital[] = [];
  public displayedColumns: string[] = ['abreviatura', 'nombreHospital', 'details'];
  public dataSource: MatTableDataSource<Hospital>;

  constructor(private hospitalService: HospitalesService) { }

  ngOnInit(): void {
    this.getHospitales();
    this.dataSource = new MatTableDataSource<Hospital>(this.hospitalList);
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.dataSource = new MatTableDataSource<Hospital>(this.hospitalList);

  }

  public getHospitales() {
    this.hospitalService.getHospitalesList().subscribe((hospitales) => {
      this.hospitalList = hospitales;
    });
  }
}
