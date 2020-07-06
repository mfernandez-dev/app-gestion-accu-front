import { Direccion } from './direccion';

export class DatosBancarios {
  iban: string;
  titular: string;
  modalidadPago: string;
  direccionFacturacion: Direccion;
  historialFacturacion: [];
}
