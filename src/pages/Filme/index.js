import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filme-info.css';
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '60f82ecadab12f17d6d12a0e1bf56ad8',  
          language: 'pt-PT',
        }
        })
        .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
       .catch(() => {
        console.log('Filme não encontrado');
        navigate('/', { replace: true });
        return;
        
      });
    }

    loadFilme();

    return () => {
      console.log('Componente desmontado');
    };
  }, [navigate,id]);
  
function handleSalvarFilme() {
  const minhaLista = localStorage.getItem('@clubflix');

  let filmesSalvos = JSON.parse(minhaLista) || [];

  const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

  if (hasFilme) {
    toast.warn('Este filme já está na sua lista de favoritos!');
    return;
  }

  filmesSalvos.push(filme);
  localStorage.setItem('@clubflix', JSON.stringify(filmesSalvos));
  toast.success('Filme salvo com sucesso!');
}

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando detalhes do filme...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-buttons">
        <button onClick={() => window.open(`https://www.youtube.com/results?search_query=${filme.title} Trailer`, '_blank')}>Trailer</button>
        <button onClick={handleSalvarFilme}>Salvar</button>
      </div>
    </div>
  );
}

export default Filme;