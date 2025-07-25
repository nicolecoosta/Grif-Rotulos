import { useEffect, useRef, useState } from 'react';
import './Diferenciais.css';
import slide1 from '../assets/slide-dif/slide1.png';
import slide2 from '../assets/slide-dif/slide2.png';
import slide3 from '../assets/slide-dif/slide3.png';
import slide4 from '../assets/slide-dif/slide4.png';
import slide5 from '../assets/slide-dif/slide5.png';
import slide6 from '../assets/slide-dif/slide6.png';
import slide7 from '../assets/slide-dif/slide7.png';
import slide8 from '../assets/slide-dif/slide8.png';

const slides = [
  {
    img: slide1,
    title: 'Precisão técnica',
    desc: 'Soluções gráficas avançadas com controle de qualidade em cada etapa.',
  },
  {
    img: slide2,
    title: 'UTI de Produção',
    desc: 'Sistema exclusivo com máquinas reservas e estoque estratégico. Agilidade garantida mesmo em emergências.',
  },
  {
    img: slide3,
    title: 'Tecnologia de Ponta',
    desc: 'Investimos continuamente em tecnologia  para oferecer processos mais sustentáveis, inteligentes e ágeis.',
  },
  {
    img: slide4,
    title: 'Sustentabilidade',
    desc: 'Reciclagem de resíduos e liner com parceiros homologados, promovendo uma economia circular de verdade.',
  },
  {
    img: slide5,
    title: 'Grandes Triagens',
    desc: 'Capacidade para grandes tiragens, com excelência técnica e constância nos prazos.',
  },
   {
    img: slide6,
    title: 'Relacionamento',
    desc: 'Relacionamentos sólidos com grandes indústrias, baseados em confiança e performance.',
  },
   {
    img: slide7,
    title: 'Agilidade',
    desc: 'Reconhecida pela velocidade de produção e estrutura que evita gargalos.',
  },
   {
    img: slide8,
    title: 'Estrutura',
    desc: 'Com estrutura de 11.000 m² somos uma das maiores indústrias gráficas da América Latina.',
  },
];

export default function Diferenciais() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000); // muda a cada 4s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = slides.length;
    const track = trackRef.current;
    if (!track) return;

    // Se chegou no final (cópia do primeiro), reseta pro início sem transição
    if (index === totalSlides) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        requestAnimationFrame(() => setIndex(0));
      }, 800); // espera a transição atual terminar
    } else {
      track.style.transition = 'transform 0.4s ease-in-out';
      track.style.transform = `translateX(-${index * 380}px)`;
    }
  }, [index]);

  return (
    <section className="diferenciais">
      <span className="subtitulo-diferenciais">Marca de sucesso tem Grif</span>
      <h2 className="titulo-gradiente">
        Por que as maiores marcas escolhem a Grif
      </h2>
      <p>
        Há 40 anos, a Grif transforma tecnologia em rótulos que elevam marcas.
        Conheça os diferenciais que fizeram da Grif uma referência nacional em
        soluções gráficas com inovação, agilidade e excelência técnica.
      </p>

      <div className="slider">
        <div className="track" ref={trackRef}>
          {slides.concat(slides).map((slide, i) => (
            <div className="card" key={i}>
              <img src={slide.img} alt={slide.title} className="card-img" />
              <div className="card-text">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index % slides.length ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
