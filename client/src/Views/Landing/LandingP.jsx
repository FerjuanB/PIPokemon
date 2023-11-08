
import { Link } from 'react-router-dom';
import style from './LandingP.module.css';
import loader from './31.mp4';
import logo from './pokemonsquirtle.png';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../Redux/actions';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className={style.landing}>
      {loading ? (
        <div className={style.videocontainer}>
          <video src={loader} autoPlay muted className={style.video}></video>
          <div className={style.overlay}></div>
        </div>
      ) : (
        <div className={style.principal}>
          <img src={logo} alt="" className={style.logo} />
          <div className={style.buttoncontainer}>
            <button className={style.button}>
              <Link to="/home">Ready? Press</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
