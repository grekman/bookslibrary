import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
//Layout
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';
//Pages
import Library from './components/library';
import BooksList from './components/books-list';
import AuthorsList from './components/authors-list';
import GenresList from './components/genres-list';
import BookItem from './components/book-item';
export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Library}>
            </Route>
            <Route path="books">
                <Route component={SearchLayout} >
                    <IndexRoute component={AuthorsList} />
                </Route>

                <Route path=":Id" component={BooksList}>
                </Route>

                <Route path = "/:Id/:Id" >
                    <IndexRoute component={BookItem} />
                </Route>


            </Route>
            <Route path="genres">
              <Route component={SearchLayout} >
                <IndexRoute component={GenresList} />
              </Route>
              <Route path=":Id" component={BooksList}>
              </Route>

              <Route path = "/:Id/:Id" >
                  <IndexRoute component={BookItem} />
              </Route>

            </Route>
        </Route>
    </Router>
)
