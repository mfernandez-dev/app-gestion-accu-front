import { Medico } from './medico';

export class Hospital {
  hospitalId: string;
  nombreHospital: string;
  abreviatura: string;
  especialistas: Medico[];
}
