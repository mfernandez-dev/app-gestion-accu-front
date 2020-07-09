import { Hospital } from '../models/hospital';

export let HOSPITALES: Hospital[] = [
  {
    hospitalId: 'abcdx321',
    nombreHospital: 'Centro Hospitalario Universitario A Coruna',
    abreviatura: 'CHUAC',
    especialistas: [
      {
        nombreCompleto: 'Jorce Lui Lopes Lopes',
        consulta: 'Ala oeste, planta 10, consulta 4',
        email: 'abcd@cdac.cas',
        tlfContacto: '+12 222 222 222',
        especialidad: 'pediatria'
      },
      {
        nombreCompleto: 'Pepito Grillo',
        consulta: 'planta 0, consulta 24',
        email: '',
        tlfContacto: '+12 123 123 321',
        especialidad: 'digestivo'
      }
    ]
  },
  {
    hospitalId: 'abcdx322',
    nombreHospital: 'Hospital Universitario Lucus Augusti',
    abreviatura: 'HULA',
    especialistas: [
      {
        nombreCompleto: 'Paco Fistas',
        consulta: 'Planta 4, consulta 3',
        email: 'correo@correo.es',
        tlfContacto: '102 123 123',
        especialidad: 'cirujano'
      },
    ]
  }
];
