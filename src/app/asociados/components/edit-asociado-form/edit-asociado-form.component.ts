import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsociadosService } from '../../services/asociados.service';
import { Asociado } from '../../models/asociado';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-asociado-form',
  templateUrl: './edit-asociado-form.component.html',
  styleUrls: ['./edit-asociado-form.component.scss']
})
export class EditAsociadoFormComponent implements OnInit, OnChanges {
  @Input() asociado: Asociado;

  formularioEdicion: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private asociadoServ: AsociadosService) {

  }
  ngOnInit(): void {

  }
  ngOnChanges(): void{
    this.formularioEdicion = this.formBuilder.group({
      nombre: [this.asociado?.nombre, Validators.required],
      apellido1: [this.asociado?.apellido1, Validators.required],
      apellido2: [this.asociado?.apellido2, Validators.required],
      dni: [this.asociado?.dni, Validators.required],
      fechaNacimiento: [this.asociado?.fechaNacimiento, Validators.required],
      fechaAlta: [this.asociado?.fechaAlta, Validators.required],
      calle: [this.asociado?.direccion.calle, Validators.required],
      numero: [this.asociado?.direccion.numero, Validators.required],
      portal: [this.asociado?.direccion.portal, Validators.required],
      piso: [this.asociado?.direccion.piso, Validators.required],
      puerta: [this.asociado?.direccion.letra, Validators.required],
      localidad: [this.asociado?.direccion.localidad, Validators.required],
      provincia: [this.asociado?.direccion.provincia, Validators.required],
      codigoPostal: [this.asociado?.direccion.codigoPostal, Validators.required],
      pais: [this.asociado?.direccion.pais, Validators.required],
      titular: [this.asociado?.datosBancarios.titular, Validators.required],
      modalidadPago: [this.asociado?.datosBancarios.modalidadPago, Validators.required],
      iban: [this.asociado?.datosBancarios.iban, Validators.required],
      patologia: [this.asociado?.datosMedicos.enfermedad, Validators.required],
      fechaDiagnostico: [this.asociado?.datosMedicos.fechaDiagnostico, Validators.required],
      tratamiento: [this.asociado?.datosMedicos.tratamiento, Validators.required]
    });
  }
}
