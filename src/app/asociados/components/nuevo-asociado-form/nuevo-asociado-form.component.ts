import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      dni: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      portal: ['', Validators.required],
      piso: ['', Validators.required],
      letra: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      pais: ['', Validators.required],
      codigoPostal: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      paciente: ['', Validators.required],
      patologia: ['', Validators.required],
      fechaDiagnostico: ['', Validators.required],
      tratamiento: ['', Validators.required],
      hospital: ['', Validators.required],
      doctor: ['', Validators.required],
    });
    this.fourthFormGroup = this.formBuilder.group({
      titularCuenta: ['', Validators.required],
      iban: ['', Validators.required],
      formaPago: ['', Validators.required],

    });
  }

}
