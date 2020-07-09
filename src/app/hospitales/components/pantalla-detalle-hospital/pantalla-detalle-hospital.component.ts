import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { HospitalesService } from '../../services/hospitales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantalla-detalle-hospital',
  templateUrl: './pantalla-detalle-hospital.component.html',
  styleUrls: ['./pantalla-detalle-hospital.component.scss']
})
export class PantallaDetalleHospitalComponent implements OnInit {

  public hospital: Hospital;
  public idHospital: string;

  constructor(private hospitalServ: HospitalesService,
              private route: ActivatedRoute) {
              }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idHospital = String(params.hospitalId);
      this.getHospitalById(this.idHospital);
    });
  }

  private getHospitalById(id: string) {
    this.hospitalServ.getHospitalById(id).subscribe((hospital) => this.hospital = hospital);
  }
}
