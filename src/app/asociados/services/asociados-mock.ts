import { Asociado } from '../models/asociado';

export let ASOCIADOS: Asociado[] = [
  {
    asociadoId: 'abcd123',
    nombre: 'Miguel',
    apellido1: 'Fernandez',
    apellido2: 'Sanchez',
    fechaNacimiento: new Date('December 17, 1995 03:24:00'),
    dni: '1234556789M',
    fechaAlta: new Date('December 17, 1995 03:24:00'),
    fechaBaja: new Date('December 17, 1995 03:24:00'),
    datosBancarios: {
      iban: 'ES00 0000 0000 0000 0000',
      titular: 'Miguel Fernandez',
      modalidadPago: 'anual',
      direccionFacturacion: {
        calle: 'calle calle calle',
        numero: '4',
        portal: 'a',
        piso: '3',
        letra: 'a',
        localidad: 'Coruna',
        provincia: 'Coruna',
        codigoPostal: '12123',
        pais: 'Espana'
      },
      historialFacturacion: [
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        },
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        }
      ]
    },
    direccion: {
      calle: 'calle calle calle',
      numero: '4',
      portal: 'a',
      piso: '3',
      letra: 'a',
      localidad: 'Coruna',
      provincia: 'Coruna',
      codigoPostal: '12123',
      pais: 'Espana'
    },
    datosMedicos: {
      enfermedad: 'Crohn',
      fechaDiagnostico: new Date('December 17, 1995 03:24:00'),
      paciente: true,
      tratamiento: 'Biologico'
    }
  },
  {
    asociadoId: 'abcd124',
    nombre: 'Miguel',
    apellido1: 'Fernandez',
    apellido2: 'Sanchez',
    fechaNacimiento: new Date('December 17, 1995 03:24:00'),
    dni: '1234556789M',
    fechaAlta: new Date('December 17, 1995 03:24:00'),
    fechaBaja: new Date('December 17, 1995 03:24:00'),
    datosBancarios: {
      iban: 'ES00 0000 0000 0000 0000',
      titular: 'Miguel Fernandez',
      modalidadPago: 'anual',
      direccionFacturacion: {
        calle: 'calle calle calle',
        numero: '4',
        portal: 'a',
        piso: '3',
        letra: 'a',
        localidad: 'Coruna',
        provincia: 'Coruna',
        codigoPostal: '12123',
        pais: 'Espana'
      },
      historialFacturacion: [
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        },
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        }
      ]
    },
    direccion: {
      calle: 'calle calle calle',
      numero: '4',
      portal: 'a',
      piso: '3',
      letra: 'a',
      localidad: 'Coruna',
      provincia: 'Coruna',
      codigoPostal: '12123',
      pais: 'Espana'
    },
    datosMedicos: {
      enfermedad: 'Crohn',
      fechaDiagnostico: new Date('December 17, 1995 03:24:00'),
      paciente: true,
      tratamiento: 'Biologico'
    }
  },
  {
    asociadoId: 'abcd125',
    nombre: 'Miguel',
    apellido1: 'Fernandez',
    apellido2: 'Sanchez',
    fechaNacimiento: new Date('December 17, 1995 03:24:00'),
    dni: '1234556789M',
    fechaAlta: new Date('December 17, 1995 03:24:00'),
    fechaBaja: new Date('December 17, 1995 03:24:00'),
    datosBancarios: {
      iban: 'ES00 0000 0000 0000 0000',
      titular: 'Miguel Fernandez',
      modalidadPago: 'anual',
      direccionFacturacion: {
        calle: 'calle calle calle',
        numero: '4',
        portal: 'a',
        piso: '3',
        letra: 'a',
        localidad: 'Coruna',
        provincia: 'Coruna',
        codigoPostal: '12123',
        pais: 'Espana'
      },
      historialFacturacion: [
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        },
        {
          ano: '2018',
          cantidadAPagar: '35euros',
          fechaPago: new Date('December 17, 1995 03:24:00'),
          pagado: true
        }
      ]
    },
    direccion: {
      calle: 'calle calle calle',
      numero: '4',
      portal: 'a',
      piso: '3',
      letra: 'a',
      localidad: 'Coruna',
      provincia: 'Coruna',
      codigoPostal: '12123',
      pais: 'Espana'
    },
    datosMedicos: {
      enfermedad: '',
      fechaDiagnostico: new Date('December 17, 1995 03:24:00'),
      paciente: false,
      tratamiento: ''
    }
  }
];
