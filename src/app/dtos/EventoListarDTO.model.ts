export class EventoListarDTO {
  id?: string;
  nombre?: string;
  descripcion?: string;
  tipoEvento?: TipoEvento;
  poster?: string;
  imgLocalidades?: string;
  fecha?: string;
  direccion?: string;
}

export enum TipoEvento {
  DEPORTIVO,
  CULTURAL,
  MUSICAL,
  CINE,
  TEATRO,
  CIENCIA,
  BAILE,
  OTRO
}
