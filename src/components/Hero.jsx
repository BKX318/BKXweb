import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        BK<span style={{color: '#6306e2'}}>X</span> <span style={{letterSpacing: '0.1em'}}>EPOXY</span>
      </h1>
      <p>Profesionalna epoxy rješenja u okrugu Osijeka <br /> Za podove koji žele više  <br /> 
      </p>
      <Link to="/contact" className="btn primary">Zatraži besplatnu procjenu</Link>
    </section>
  );
}
