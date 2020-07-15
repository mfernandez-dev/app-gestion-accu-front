import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-detalles-hospital',
  templateUrl: './boton-detalles-hospital.component.html',
  styleUrls: ['./boton-detalles-hospital.component.scss']
})
export class BotonDetallesHospitalComponent implements OnInit {
  @Input() hospitalId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
