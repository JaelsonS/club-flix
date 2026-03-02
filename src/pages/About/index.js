import { Link } from 'react-router-dom';
import './about.css';
import { 
  FaFilm, 
  FaStar, 
  FaMobileAlt, 
  FaSearch, 
  FaInstagram, 
  FaGithub, 
  FaEnvelope, 
  FaArrowLeft 
} from 'react-icons/fa';

import { SiX } from 'react-icons/si';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1>Club Flix</h1>
          <p className="tagline">Seu cinema pessoal, onde seus filmes favoritos estão sempre a um clique de distância</p>
        </div>

        <section className="about-section">
          <h2>Sobre Nós</h2>
          <p>
            Club Flix é uma plataforma moderna e intuitiva criada para trazer a melhor experiência de descoberta 
            e exploração de filmes. Nosso objetivo é conectar cinéfilos ao redor do mundo com conteúdo de alta qualidade 
            e recomendações personalizadas.
          </p>
        </section>

        <section className="about-section">
          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso à informação sobre cinema, permitindo que todos possam descobrir, explorar e compartilhar 
            suas paixões cinematográficas. Acreditamos que o cinema é uma forma de arte universal que une pessoas de 
            diferentes culturas e background.
          </p>
        </section>

        <section className="about-section">
          <h2>O Que Oferecemos</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">
  <FaFilm />
</span>
              <h3>Catálogo Extenso</h3>
              <p>Acesso a milhares de filmes e informações detalhadas sobre cada um</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
  <FaStar />
</span>
              <h3>Avaliações</h3>
              <p>Veja as avaliações da comunidade e faça suas próprias análises</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
  <FaMobileAlt />
</span>
              <h3>Interface Intuitiva</h3>
              <p>Design limpo e responsivo que funciona em qualquer dispositivo</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
  <FaSearch />
</span>
              <h3>Descoberta Fácil</h3>
              <p>Encontre novos filmes facilmente com nossa navegação avançada</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Tecnologia</h2>
          <p>
            Club Flix foi desenvolvido com as tecnologias mais modernas do mercado:
          </p>
          <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">React Router</div>
            <div className="tech-item">Axios</div>
            <div className="tech-item">The Movie DB API</div>
            <div className="tech-item">CSS3</div>
            <div className="tech-item">JavaScript ES6+</div>
          </div>
        </section>

        <section className="about-section">
          <h2>Dados</h2>
          <p>
            Todos os dados de filmes, imagens e avaliações são fornecidos pela 
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"> The Movie Database (TMDb)</a>, 
            uma base de dados colaborativa e confiável de informações sobre filmes e séries.
          </p>
        </section>

        <section className="about-section contact-section">
          <h2>Conecte-se Conosco</h2>
          <p>Tem dúvidas, sugestões ou quer falar comigo? Meus canais estão abaixo:</p>
          <div className="contact-links">
            <a href="https://www.instagram.com/jaelsonsantoos" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="feature-icon">
  <FaInstagram size={28} />
</span> 
            </a>
            <a href="https://x.com/jaelsonsil56152?s=21" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="feature-icon">
  <SiX size={28} />
</span> 
            </a>
            <a href="mailto:jaelsonsilva345@gmail.com" className="contact-link">
              <span className="feature-icon">
  <FaEnvelope size={28} />
</span> 
            </a>
            <a href="https://github.com/JaelsonS" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="feature-icon">
  <FaGithub size={28} />
</span> 
            </a>
             <p className="portfolio-link">
            Confira meu portfólio: <a href="https://portfolio-santos.vercel.app" target="_blank" rel="noopener noreferrer">portfolio-santos.vercel.app</a>
          </p>
          </div>
         
        </section>

        <div className="about-footer">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Voltar para Home
          </Link>
          <p className="copyright">© 2026 Club Flix. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
