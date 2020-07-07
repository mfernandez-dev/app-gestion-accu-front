import { Component, OnInit, Input } from '@angular/core';
import { Asociado } from '../../models/asociado';
import { AsociadosService } from '../../services/asociados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantalla-detalles',
  templateUrl: './pantalla-detalles.component.html',
  styleUrls: ['./pantalla-detalles.component.scss']
})
export class PantallaDetallesComponent implements OnInit {

  public asociado: Asociado;
  public idAsociado: string;

  constructor(private asociadoServ: AsociadosService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idAsociado = String(params.asociadoId);
      this.getAsociadoById(this.idAsociado);
    });
  }


  private getAsociadoById(id: string) {
    this.asociadoServ.getAsociadoById(id).subscribe((asociado) => this.asociado = asociado);
  }
}
