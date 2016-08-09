import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} /> // If route ONLY matches parent, just show "/" route and not children
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
