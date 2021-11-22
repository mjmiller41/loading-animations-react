import React from 'react';
import {
  Dots,
  MinimalSpinner,
  ProgressBar,
  Spinner,
  TrinitySpinner,
  Waves,
} from 'loading-animations-react';
import logo128 from '../../images/logo128.png';
import * as classes from './App.css';

function App() {
  return (
    <div className={classes.grid}>
      <header className={classes.header}>
        <img className={classes.headerImg} src={logo128} alt='' />
        <h2 className={classes.headerTitle}>loader-animations-react</h2>
        <img
          className={`${classes.headerImgRight} ${classes.headerImg}`}
          src={logo128}
          alt=''
        />
      </header>
      <main className={classes.main}>
        <Dots />
        <ProgressBar />
        <Waves />
        <Spinner />
        <MinimalSpinner />
        <TrinitySpinner />
      </main>
      <footer className={classes.footer}>
        Icons made by
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>{' '}
        from
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
}

export default App;
