import { Serie } from '../src/domain/contenido';

describe('Test Series', () => {
  it('serie con presupuesto bajo no es interesante', () => {
    // Arrange
    const serieSinPresupuesto = new Serie(2);

    // Assert
    expect(serieSinPresupuesto.esInteresante()).toBe(false);
  });

  it('serie con muchas temporadas no es interesante', () => {
    // Arrange
    const serieMuchasTemporadas = new Serie(6, 5);

    // Assert
    expect(serieMuchasTemporadas.esInteresante()).toBe(false);
  });

  it('serie con pocas temporadas y con buen presupuesto es interesante', () => {
    // Arrange
    const serieInteresante = new Serie(6, 4);

    // Assert
    expect(serieInteresante.esInteresante()).toBe(true);
  });
});
