    import { Link } from 'react-router-dom';
    import style from './LandingP.module.css';
    import pokeBall from './LandingMain.gif';
    import logo from './pokelogo.png'
    const LandingPage = () => {
      return (
        <div className={style.landing}>
            <img src={logo} alt="" className={style.logo} />
            <button className={style.button}>
              <Link to="/home">Ready? press</Link>
            </button>
          <div className={style.imageContainer}>
          <img src={pokeBall} alt="landingImage" />
          <div className={style.titleContainer}>
          </div>
          
            <div className={style.overlay}></div>
          </div>
          <div className={style.buttonContainer}>
          </div>
        </div>
      );
    };

    export default LandingPage;
