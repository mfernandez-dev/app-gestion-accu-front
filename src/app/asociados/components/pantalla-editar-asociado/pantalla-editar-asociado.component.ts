import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsociadosService } from '../../services/asociados.service';
import { Asociado } from '../../models/asociado';

@Component({
  selector: 'app-pantalla-editar-asociado',
  templateUrl: './pantalla-editar-asociado.component.html',
  styleUrls: ['./pantalla-editar-asociado.component.scss']
})
export class PantallaEditarAsociadoComponent implements OnInit {

  private idAsociado: string;
  public asociado: Asociado;

  constructor(private asociadoServ: AsociadosService,
              private route: ActivatedRoute) { }

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
