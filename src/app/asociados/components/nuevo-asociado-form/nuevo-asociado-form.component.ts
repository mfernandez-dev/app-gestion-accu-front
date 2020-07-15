import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Asociado } from '../../models/asociado';
import { Direccion } from '../../models/direccion';
import { DatosMedicos } from '../../models/datosMedicos';
import { DatosBancarios } from '../../models/datosBancarios';
import { AsociadosService } from '../../services/asociados.service';

@Component({
  selector: 'app-nuevo-asociado-form',
  templateUrl: './nuevo-asociado-form.component.html',
  styleUrls: ['./nuevo-asociado-form.component.scss']
})
export class NuevoAsociadoFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private asociadoServ: AsociadosService) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: [''],
      dni: ['', [Validators.required,
            Validators.minLength(9),
            Validators.maxLength(9)]],
      fechaNacimiento: ['', Validators.required],
      fechaAlta: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      calle: ['', Validators.required],
      numero: [''],
      portal: [''],
      piso: [''],
      letra: [''],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      pais: ['', Validators.required],
      codigoPostal: ['', [Validators.required,
                          Validators.maxLength(5),
                          Validators.minLength(5)]],
    });
    this.thirdFormGroup = this.formBuilder.group({
      paciente: ['', Validators.required],
      patologia: [''],
      fechaDiagnostico: [''],
      tratamiento: ['']
    });
    this.fourthFormGroup = this.formBuilder.group({
      titularCuenta: ['', Validators.required],
      iban: ['', Validators.required],
      modalidadPago: ['', Validators.required],

    });
  }

  saveAsociado(){
    this.asociadoServ.postNewAsociado(this.setAsociado())
      .subscribe(data => console.log(data), error => console.log(error));
  }

  setAsociado(): Asociado{

    const newAsociado = new Asociado();

    if (this.firstFormGroup.dirty && this.firstFormGroup.valid) {
      newAsociado.nombre = this.firstFormGroup.value.nombre;
      newAsociado.apellido1 = this.firstFormGroup.value.apellido1;
      newAsociado.apellido2 = this.firstFormGroup.value.apellido2;
      newAsociado.dni = this.firstFormGroup.value.dni;
      newAsociado.fechaNacimiento = this.firstFormGroup.value.fechaNacimiento;
      newAsociado.fechaAlta = this.firstFormGroup.value.fechaAlta;
      newAsociado.fechaBaja = '';
      newAsociado.direccion = this.setDireccion();
      newAsociado.datosMedicos = this.setDatosMedicos();
      newAsociado.datosBancarios = this.setDatosBancarios();
      console.log(newAsociado);
      return newAsociado;
    }
  }

  setDireccion(): Direccion {

    const direccion = new Direccion();
    direccion.calle = this.secondFormGroup.value.calle;
    direccion.numero = this.secondFormGroup.value.numero;
    direccion.portal = this.secondFormGroup.value.portal;
    direccion.piso = this.secondFormGroup.value.piso;
    direccion.letra = this.secondFormGroup.value.letra;
    direccion.localidad = this.secondFormGroup.value.localidad;
    direccion.provincia = this.secondFormGroup.value.provincia;
    direccion.pais = this.secondFormGroup.value.pais;
    direccion.codigoPostal = this.secondFormGroup.value.codigoPostal;

    return direccion;
  }

  setDatosMedicos(): DatosMedicos {
    const datosMedicos = new DatosMedicos();

    datosMedicos.paciente = this.thirdFormGroup.value.paciente;
    datosMedicos.enfermedad = this.thirdFormGroup.value.patologia;
    datosMedicos.fechaDiagnostico = this.thirdFormGroup.value.fechaDiagnostico;
    datosMedicos.tratamiento = this.thirdFormGroup.value.tratamiento;

    return datosMedicos;
  }

  setDatosBancarios(): DatosBancarios {
    const datosBancarios = new DatosBancarios();

    datosBancarios.titular = this.fourthFormGroup.value.titularCuenta;
    datosBancarios.iban = this.fourthFormGroup.value.iban;
    datosBancarios.modalidadPago = this.fourthFormGroup.value.modalidadPago;
    datosBancarios.direccionFacturacion = this.setDireccion();
    datosBancarios.historialFacturacion = [];

    return datosBancarios;
  }

}
