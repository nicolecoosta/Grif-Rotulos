import { useEffect, useRef, useState } from 'react';
import './Diferenciais.css';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

const slides = [
  {
    img: slide1,
    title: 'Precisão técnica',
    desc: 'Alta performance na impressão com controle rígido de qualidade.',
  },
  {
    img: slide2,
    title: 'UTI de Produção',
    desc: 'Controle de produção em ambiente monitorado com rastreabilidade.',
  },
  {
    img: slide3,
    title: 'Tecnologia de Ponta',
    desc: 'Equipamentos de última geração para soluções inovadoras.',
  },
  {
    img: slide4,
    title: 'Sustentabilidade',
    desc: 'Compromisso com práticas sustentáveis em todos os processos.',
  },
];

export default function Diferenciais() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000); // a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = slides.length;
    const track = trackRef.current;

    // Se chegou na última cópia, reseta sem transição para criar o loop suave
    if (index === slides.length) {
      // Chegou no slide extra (cópia do primeiro)
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        setIndex(0);
      }, 800); // espera a transição atual terminar
    } else {
      track.style.transition = 'transform 0.8s ease-in-out';
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
