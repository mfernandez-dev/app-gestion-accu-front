import { Component, OnInit, Input } from '@angular/core';
import { Asociado } from '../../models/asociado';
import { AsociadosService } from '../../services/asociados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';


export interface DialogData {
  asociadoId: number;
}

@Component({
  selector: 'app-pantalla-detalles',
  templateUrl: './pantalla-detalles.component.html',
  styleUrls: ['./pantalla-detalles.component.scss']
})

export class PantallaDetallesComponent implements OnInit {

  public asociado: Asociado;
  public idAsociado: string;

  constructor(private asociadoServ: AsociadosService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              public router: Router) {
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      data: {
        asociadoId: this.idAsociado
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.asociadoServ.removeAsociado(this.idAsociado).subscribe((resp) => {
        });
        this.router.navigate(['/asociados']);
      }
    });
  }
}
