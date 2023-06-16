import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o Not Found', () => {
  test('Testa se a página tem h2', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina-que-nao-existe');
    });

    const headTwo = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(headTwo).toBeInTheDocument();
  });

  test('Teste da imagem', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/not-exist');
    });

    const imagem = screen.getByRole('img', { name: /Pikachu crying because the page requested was not found/i });
    expect(imagem).toBeInTheDocument();

    const src = imagem.getAttribute('src');
    expect(src).toEqual('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
