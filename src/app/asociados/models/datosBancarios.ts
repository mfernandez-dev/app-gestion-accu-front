import { Direccion } from './direccion';
import { Factura } from './factura';

export class DatosBancarios {
  iban: string;
  titular: string;
  modalidadPago: string;
  direccionFacturacion: Direccion;
  historialFacturacion: Factura[];
}
