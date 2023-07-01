import { Pelicula } from './contenido';

describe('Test Peliculas', () => {
  it('pelicula con presupuesto bajo no es interesante', () => {
    // Arrange
    const peliculaSinPresupuesto = new Pelicula(2);

    // Assert
    expect(peliculaSinPresupuesto.esInteresante()).toBe(false);
  });

  it('película estrenada hace mucho no es interesante', () => {
    // Arrange
    const hace2Anios = new Date();
    hace2Anios.setFullYear(hace2Anios.getFullYear() - 2);

    const peliculaVieja = new Pelicula(6, hace2Anios);

    // Assert
    expect(peliculaVieja.esInteresante()).toBe(false);
  });

  it('película estrenada recientemente y con buen presupuesto es interesante', () => {
    // Arrange
    const peliculaEstrenada = new Pelicula(6, new Date());

    // Assert
    expect(peliculaEstrenada.esInteresante()).toBe(true);
  });
});
