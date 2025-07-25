import './Hero.css';
import banner from '../assets/banner-inicial.png';
import RightIcon from '../assets/Right.png';
import RightIconHover from '../assets/RightHover.png'; // <- a imagem diferente no hover

import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="grif-rotulos" className="hero" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-content">
        <h1>
          Impressão de rótulos que impulsiona grandes marcas a se tornarem referência de mercado.
        </h1>
        <p>
          Soluções gráficas com tecnologia de ponta para 
          quem exige precisão, velocidade e confiança.
        </p>

        <a
          href="#solucoes"
          className="btn-hero"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Soluções
          <img
            src={isHovered ? RightIconHover : RightIcon}
            alt="seta"
            className="Right"
          />
        </a>
      </div>
    </section>
  );
}
