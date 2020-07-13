import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-asociado-form',
  templateUrl: './edit-asociado-form.component.html',
  styleUrls: ['./edit-asociado-form.component.scss']
})
export class EditAsociadoFormComponent implements OnInit {

  formularioEdicion = new FormGroup({
    nombre: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    dni: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    fechaAlta: new FormControl(''),
    calle: new FormControl(''),
    numero: new FormControl(''),
    portal: new FormControl(''),
    piso: new FormControl(''),
    puerta: new FormControl(''),
    localidad: new FormControl(''),
    provincia: new FormControl(''),
    codigoPostal: new FormControl(''),
    pais: new FormControl(''),
    titular: new FormControl(''),
    modalidadPago: new FormControl(''),
    iban: new FormControl(''),
    patologia: new FormControl(''),
    fechaDiagnostico: new FormControl(''),
    tratamiento: new FormControl('')
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
