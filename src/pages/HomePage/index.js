import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="A Boilerplate application homepage" />
    </Helmet>
    <div className={styles.wrapper}>
      <Link to="/first">First</Link>
      <Link to="/second">Second</Link>
      <Link to="third">Third</Link>
    </div>
  </>
);

export default HomePage;
