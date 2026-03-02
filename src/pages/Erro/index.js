import { Link } from 'react-router-dom';
import './erro.css';

function Erro () {
    return (
        <div className="not-found">
            <h1>Opss... Página Não Encontrada</h1>
            <h2>Desculpe, a página que você está procurando não existe.</h2>
            <Link to="/">Voltar para Home e ver os filmes</Link>

                
        </div>
    )
}

export default Erro;