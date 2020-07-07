import { Component, OnInit, Input } from '@angular/core';
import { Direccion } from '../../models/direccion';

@Component({
  selector: 'app-tabla-direccion',
  templateUrl: './tabla-direccion.component.html',
  styleUrls: ['./tabla-direccion.component.scss']
})
export class TablaDireccionComponent implements OnInit {

  @Input() direccion: Direccion;

  constructor() { }

  ngOnInit(): void {
  }

}
