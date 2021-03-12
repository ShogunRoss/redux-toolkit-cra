import React from 'react';
import { Helmet } from 'react-helmet-async';

import styles from './style.module.css';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </div>
      <p>Page not found.</p>
    </div>
  </>
);

export default NotFoundPage;
