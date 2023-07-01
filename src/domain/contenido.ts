export abstract class Contenido {
  constructor(public presupuesto: number) {}

  esInteresante = () =>
    this.presupuesto > 5 && this.cumpleCriterioInteresante();

  abstract cumpleCriterioInteresante(): boolean;
}

/**
 * Serie
 */
export class Serie extends Contenido {
  constructor(presupuesto: number, public temporadas: number = 5) {
    super(presupuesto);
  }

  override cumpleCriterioInteresante = () => this.temporadas < 5;
}

/**
 * Pelicula
 */
export class Pelicula extends Contenido {
  constructor(presupuesto: number, public fechaEstreno: Date = new Date()) {
    super(presupuesto);
  }

  override cumpleCriterioInteresante = () => this.seEstrenoRecientemente();

  seEstrenoRecientemente = () =>
    this.fechaEstreno.getFullYear() == new Date().getFullYear();
}
