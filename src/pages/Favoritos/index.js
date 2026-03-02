import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    
    const minhaLista = localStorage.getItem('@clubflix');
   setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return (filme.id !== id);
    });
    setFilmes(filtroFilmes);
    localStorage.setItem('@clubflix', JSON.stringify(filtroFilmes));
    toast.success('Filme removido com sucesso!');
  }

  if (filmes.length === 0) {
    return (
      <div className='container favoritos-vazio'>
        <div className='vazio-content'>
          <h1>😕</h1>
          <h2>Você não possui nenhum filme salvo :(</h2>
          <p className='descricao'>Adicione filmes à sua lista para vê‑los aqui.</p>
          <Link to='/' className='btn-explorar'>
            <span role='img' aria-label='Home'>🏠</span> Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Meus Filmes Favoritos</h1>
      <ul className='favoritos-list'>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}
                alt={filme.title}
                className='fav-poster'
              />
              <span className='fav-title'>{filme.title}</span>
              <div className='btn-container'>
                <Link to={`/filme/${filme.id}`} className='btn-acessar'>
                  Ver Detalhes
                </Link>
                <button className='btn-remover' onClick={() => excluirFilme(filme.id)} aria-label="Remover filme">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="trash-icon"
                  >
                    <path d="M3 6h18v2H3V6zm2 3h14l-1 12H6L5 9zm3-5h8v2H8V4z" />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

}

export default Favoritos;
