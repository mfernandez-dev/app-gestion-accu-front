import { Component, OnInit, Input } from '@angular/core';
import { Asociado } from '../../models/asociado';

@Component({
  selector: 'app-pantalla-detalles',
  templateUrl: './pantalla-detalles.component.html',
  styleUrls: ['./pantalla-detalles.component.scss']
})
export class PantallaDetallesComponent implements OnInit {

  @Input() asociado: Asociado;

  constructor() { }

  ngOnInit(): void {
  }

}
