import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "homeChunk" */ './screens/home/home'),
  loading: () => <div>loading...</div>,
  modules: ['homeChunk'],
});

const HostPage = Loadable({
  loader: () => import(/* webpackChunkName: "hostChunk" */ './screens/host/host'),
  loading: () => <div>loading page...</div>,
  modules: ['hostChunk'],
});

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/host" component={HostPage} />
    </Switch>
  );
}
