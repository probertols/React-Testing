import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('About test', () => {
  test('Testando h2', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(title).toBeInTheDocument();
  });

  test('Testando paragrafos', () => {
    renderWithRouter(<About />);
    const textOne = `This application simulates a Pokédex, a
    digital encyclopedia containing all Pokémon`;
    const textTwo = 'One can filter Pokémon by type, and see more details for each one of them';

    const paragraphone = screen.getByRole('heading', textOne);
    const paragraphtwo = screen.getByRole('heading', textTwo);

    expect(paragraphone).toBeInTheDocument();
    expect(paragraphtwo).toBeInTheDocument();
  });

  test('Testando imagem', () => {
    renderWithRouter(<About />);
    const imageField = screen.getByRole('img', { name: 'Pokédex' });
    const imageurl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imageField).toBeInTheDocument();
    expect(imageField.src).toBe(imageurl);
  });
});
