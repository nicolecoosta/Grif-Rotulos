import Marquee from "react-fast-marquee";
import './Marcas.css';

import flora from '../assets/logos/flora.png';
import natura from '../assets/logos/natura.png';
import pg from '../assets/logos/pg.png';
import avon from '../assets/logos/avon.png';
import heineken from '../assets/logos/heineken.png';
import ache from '../assets/logos/ache.png';

const logos = [flora, natura, pg, avon, heineken, ache];

export default function Marcas() {
  return (
    <section className="marcas">
      <p>Mais de <span>5.000 marcas</span> líderes confiam na Grif para elevar o padrão dos seus rótulos.</p>

      <Marquee gradient={false} speed={25} pauseOnHover={true}>
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`marca ${index}`}
            className="logo-img"
          />
        ))}
      </Marquee>
    </section>
  );
}
