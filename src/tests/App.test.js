import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('App Test', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favorite = screen.getByRole('link', { name: 'Favorite Pokémon' });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });

  test('Redirect Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });
  test('Redirect About', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });
  test('Redirect Favorite', () => {
    const { history } = renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favorite);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('Redirect NotFound', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('barabam');
    });
    const notFound = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(notFound).toBeInTheDocument();
  });
});
