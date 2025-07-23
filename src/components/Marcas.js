import './Marcas.css';
import flora from '../assets/logos/flora.png';
import natura from '../assets/logos/natura.png';
import pg from '../assets/logos/pg.png';
import avon from '../assets/logos/avon.png';
import heineken from '../assets/logos/heineken.png';
import ache from '../assets/logos/ache.png';

const logos = [flora, natura, pg, avon, heineken, ache, /*acr, marca8, marca9, marca10*/];

export default function Marcas() {
  return (
    <section className="marcas">
      <p>Mais de <span>5.000 marcas</span> líderes confiam na Grif para elevar o padrão dos seus rótulos.</p>
      <div className="marcas-slider">
        <div className="marcas-track">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`marca ${index}`} className="logo-img" />
          ))}
        </div>
      </div>
    </section>
  );
}
