// Tipo de Evento (probablemente un enum o tipo string)
export type TipoEvento = 'DEPORTIVO' | 'CULTURAL' | 'MUSICAL' | 'CINE' | 'TEATRO' | 'CIENCIA' | 'BAILE' | 'OTRO';

// Dirección
export interface CrearDireccionDTO {
  calle: string;
  ciudad: string;
  codigoPostal: string;
  pais: string;
}

// Localidad
export interface LocalidadDTO {
  id: string;
  nombre: string;
  precio: number;
  disponibles: number;
}

// Clase EventoGetDTO
export class EventoGetDTO {
  id: string;
  nombre: string;
  descripcion: string;
  tipoEvento: TipoEvento;
  poster: string;
  imgLocalidades: string;
  fecha: string;  // Este puede ser un string si lo recibes como una fecha en formato ISO
  direccion: CrearDireccionDTO;
  listaLocalidades: LocalidadDTO[];

  constructor(
    id: string,
    nombre: string,
    descripcion: string,
    tipoEvento: TipoEvento,
    poster: string,
    imgLocalidades: string,
    fecha: string,
    direccion: CrearDireccionDTO,
    listaLocalidades: LocalidadDTO[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipoEvento = tipoEvento;
    this.poster = poster;
    this.imgLocalidades = imgLocalidades;
    this.fecha = fecha;
    this.direccion = direccion;
    this.listaLocalidades = listaLocalidades;
  }
}
