import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import './Infraestrutura.css';
import img1 from '../assets/infraestrutura/infra1.jpg';
import img2 from '../assets/infraestrutura/infra2.jpg';
import img3 from '../assets/infraestrutura/infra3.jpg';
import img4 from '../assets/infraestrutura/infra4.jpg';
import img5 from '../assets/infraestrutura/infra5.jpg';
import img6 from '../assets/infraestrutura/infra6.jpg';
import img7 from '../assets/infraestrutura/infra7.jpg';
import img8 from '../assets/infraestrutura/infra8.jpg';
import img9 from '../assets/infraestrutura/infra9.png';

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Infraestrutura() {
  return (
    <section className="infraestrutura">
      <span className="subtitulo-infra">ESTRUTURA GRIF RÓTULOS</span>
      <h2 className="titulo-gradiente-infra">
        Infraestrutura de alta performance para grandes demandas
      </h2>
      <p>
        Nosso parque gráfico, um dos <strong>maiores da América Latina</strong>, é operado por um time técnico de excelência e equipado com máquinas de última geração em flexografia.
        Essa combinação de estrutura robusta e expertise nos posiciona como referência nacional em produção de rótulos em larga escala.
        <br /><br />
        Com agilidade e controle absoluto, atendemos as demandas mais críticas do mercado com a confiança que grandes marcas exigem.
      </p>

      <Swiper
        modules={[Mousewheel, Pagination]}
        mousewheel={{ releaseOnEdges: true }}
        pagination={{ clickable: true }}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          1024: {
            slidesPerView: 1.35,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.45,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
        }}
        className="infra-swiper"
      >
        {imagens.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Infra ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
