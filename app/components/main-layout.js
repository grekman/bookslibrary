import React, {Component} from 'react';
import {Link} from 'react-router';


export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <aside>
          <ul>
            <li><Link to="/">Library</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/genres">Genres</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
