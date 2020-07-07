import { Medico } from './medico';

export class Hospital {
  id: string;
  nombreHospital: string;
  abreviatura: string;
  especialistas: Medico[];
}
