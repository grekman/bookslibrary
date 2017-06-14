import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BooksList extends Component {
  render() {
    return (
      <ul>
        <li><Link to="item/1" >Book 1</Link></li>
        <li><Link to="item/2" >Book 2</Link></li>
        <li><Link to="item/3" >Book 3</Link></li>
        <li><Link to="item/4" >Book 4</Link></li>
        <li><Link to="item/5" >Book 5</Link></li>
        <li><Link to="item/6" >Book 6</Link></li>
        <li><Link to="item/7" >Book 7</Link></li>
        <li><Link to="item/8" >Book 8</Link></li>
        <li><Link to="item/9" >Book 9</Link></li>
        <li><Link to="item/10">Book 10</Link></li>
      </ul>

    )

  }
}
