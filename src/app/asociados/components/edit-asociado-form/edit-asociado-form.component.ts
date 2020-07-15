import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsociadosService } from '../../services/asociados.service';
import { Asociado } from '../../models/asociado';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../models/direccion';
import { DatosMedicos } from '../../models/datosMedicos';
import { DatosBancarios } from '../../models/datosBancarios';
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
  ngOnChanges(): void {
    this.formularioEdicion = this.formBuilder.group({
      nombre: [this.asociado?.nombre, Validators.required],
      apellido1: [this.asociado?.apellido1, Validators.required],
      apellido2: [this.asociado?.apellido2, Validators.required],
      dni: [this.asociado?.dni, [Validators.required,
                                  Validators.maxLength(9),
                                  Validators.minLength(9)]],
      fechaNacimiento: [this.asociado?.fechaNacimiento, Validators.required],
      fechaAlta: [this.asociado?.fechaAlta, Validators.required],
      calle: [this.asociado?.direccion.calle, Validators.required],
      numero: [this.asociado?.direccion.numero],
      portal: [this.asociado?.direccion.portal],
      piso: [this.asociado?.direccion.piso],
      puerta: [this.asociado?.direccion.letra],
      localidad: [this.asociado?.direccion.localidad, Validators.required],
      provincia: [this.asociado?.direccion.provincia, Validators.required],
      codigoPostal: [this.asociado?.direccion.codigoPostal, [Validators.required,
                                                            Validators.minLength(5),
                                                            Validators.maxLength(5)]],
      pais: [this.asociado?.direccion.pais, Validators.required],
      titular: [this.asociado?.datosBancarios.titular, Validators.required],
      modalidadPago: [this.asociado?.datosBancarios.modalidadPago, Validators.required],
      iban: [this.asociado?.datosBancarios.iban, Validators.required],
      patologia: [this.asociado?.datosMedicos.enfermedad],
      fechaDiagnostico: [this.asociado?.datosMedicos.fechaDiagnostico],
      tratamiento: [this.asociado?.datosMedicos.tratamiento]
    });
  }

  updateAsociado(): void {
    this.asociadoServ.updateAsociado(this.asociado.asociadoId, this.getFormData())
      .subscribe(data => console.log(data), error => console.log(error));
  }

  getFormData(): Asociado {
    const asociado = new Asociado();
    if (this.formularioEdicion.dirty && this.formularioEdicion.valid) {
      asociado.asociadoId = this.asociado.asociadoId;
      asociado.nombre = this.formularioEdicion.value.nombre;
      asociado.apellido1 = this.formularioEdicion.value.apellido1;
      asociado.apellido2 = this.formularioEdicion.value.apellido2;
      asociado.dni = this.formularioEdicion.value.dni;
      asociado.fechaNacimiento = this.formularioEdicion.value.fechaNacimiento;
      asociado.fechaAlta = this.formularioEdicion.value.fechaAlta;
      asociado.direccion = this.getDireccion();
      asociado.datosMedicos = this.getDatosMedicos();
      asociado.datosBancarios = this.getDatosBancarios();
      console.log(asociado);
      return asociado;
    }
  }
  getDireccion(): Direccion {
    const direccion = new Direccion();

    direccion.calle = this.formularioEdicion.value.calle;
    direccion.numero = this.formularioEdicion.value.numero;
    direccion.portal = this.formularioEdicion.value.portal;
    direccion.piso = this.formularioEdicion.value.piso;
    direccion.letra = this.formularioEdicion.value.puerta;
    direccion.provincia = this.formularioEdicion.value.provincia;
    direccion.localidad = this.formularioEdicion.value.localidad;
    direccion.pais = this.formularioEdicion.value.pais;
    direccion.codigoPostal = this.formularioEdicion.value.codigoPostal;
    return direccion;
  }
  getDatosMedicos(): DatosMedicos {
    const datosMedicos = new DatosMedicos();
    datosMedicos.paciente = this.asociado.datosMedicos.paciente;
    datosMedicos.enfermedad = this.formularioEdicion.value.patologia;
    datosMedicos.fechaDiagnostico = this.formularioEdicion.value.fechaDiagnostico;
    datosMedicos.tratamiento = this.formularioEdicion.value.tratamiento;

    return datosMedicos;
  }

  getDatosBancarios(): DatosBancarios {
    const datosBancarios = new DatosBancarios();

    datosBancarios.titular = this.formularioEdicion.value.titular;
    datosBancarios.iban = this.formularioEdicion.value.iban;
    datosBancarios.modalidadPago = this.formularioEdicion.value.modalidadPago;
    datosBancarios.direccionFacturacion = this.asociado.datosBancarios.direccionFacturacion;
    datosBancarios.historialFacturacion = this.asociado.datosBancarios.historialFacturacion;

    return datosBancarios;
  }
}
