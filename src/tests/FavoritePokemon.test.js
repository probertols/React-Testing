import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Favorite Pokemon test', () => {
  renderWithRouter(<App />);
  test('Testando msg pokemon', () => {
    const clickPokemon = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(clickPokemon);
    const favText = screen.getByText('No favorite Pokémon found');
    expect(favText).toBeInTheDocument();
  });
  test('Testando pokemons favoritados', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);
    const favPoke = screen.getByText(/pokémon favoritado?/i);
    userEvent.click(favPoke);
    const linkFav = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(linkFav);
    const pokemon = screen.getByText(/Pikachu/i);
    expect(pokemon).toBeInTheDocument();
  });
});
