import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { lazyLoad } from 'utils/loadable';
import { getStore } from 'redux/store';

import './index.css';

const store = getStore();

const HomePage = lazyLoad(() => import('pages/HomePage'));
const NotFoundPage = lazyLoad(() => import('pages/NotFoundPage'));

const FirstPage = lazyLoad(() =>
  import('pages/FirstPage').then(async (module) => {
    const { default: reducer, sliceKey } = await import(
      'pages/FirstPage/slice'
    );

    store.injectReducer(sliceKey, reducer);
    return module;
  }),
);
const SecondPage = lazyLoad(() =>
  import('pages/SecondPage').then(async (module) => {
    const { default: reducer, sliceKey } = await import(
      'pages/FirstPage/slice'
    );

    store.injectReducer(sliceKey, reducer);
    return module;
  }),
);
const ThirdPage = lazyLoad(() => import('pages/ThirdPage'));

// const store = getStore();
// store.injectReducer(appKey, appReducer);

const App = () => (
  <BrowserRouter>
    <Helmet
      titleTemplate="%s - ReactJS Skeleton"
      defaultTitle="ReactJS Skeleton"
    >
      <meta name="description" content="ReactJS Skeleton application" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/first" component={FirstPage} />
      <Route path="/second" component={SecondPage} />
      <Route path="/third" component={ThirdPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

App.propTypes = {};

export default App;
