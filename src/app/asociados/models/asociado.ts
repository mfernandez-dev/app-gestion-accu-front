import { Direccion } from './direccion';
import { DatosMedicos } from './datosMedicos';
import { DatosBancarios } from './datosBancarios';

export class Asociado {
  asociadoId: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNacimiento: Date;
  dni: string;
  fechaAlta: Date;
  fechaBaja: Date;
  datosBancarios: DatosBancarios;
  direccion: Direccion;
  datosMedicos: DatosMedicos;
}
