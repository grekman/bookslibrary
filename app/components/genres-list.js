import React, {Component} from 'react';
import {Link} from 'react-router';

export default class GenresList extends Component {
  render() {
    return (
      <ul>
        <li><Link to="books/1" >Genre 1</Link></li>
        <li><Link to="books/2" >Genre 2</Link></li>
        <li><Link to="books/3" >Genre 3</Link></li>
        <li><Link to="books/4" >Genre 4</Link></li>
        <li><Link to="books/5" >Genre 5</Link></li>
        <li><Link to="books/6" >Genre 6</Link></li>
        <li><Link to="books/7" >Genre 7</Link></li>
        <li><Link to="books/8" >Genre 8</Link></li>
        <li><Link to="books/9" >Genre 9</Link></li>
        <li><Link to="books/10">Genre 10</Link></li>
      </ul>

    )

  }
}
