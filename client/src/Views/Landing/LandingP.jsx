import { Link } from 'react-router-dom';
import style from './LandingP.module.css';
import pokeBall from './LandingMain.gif';

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <div className={style.imageContainer}>
        <img src={pokeBall} alt="dog-landing" />
        <div className={style.overlay}></div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>
          <Link to="/home">Ingresar</Link>
        </button>
      </div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Pokemon Search & Create your own</h1>
      </div>
    </div>
  );
};

export default LandingPage;