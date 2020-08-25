import React from 'react';
import Button from './Button';
import header from '../css/header.css'
import Appfooter from './Appfooter.js';
import LayOut from './layout';

class Appheader extends React.Component {
  render() {
    return (
    <LayOut>
      <header className="header">
          <h1>もっちゃんポートフォリオサイト</h1>
          <ul>
            <li><Button href="/introduction" value="自己紹介"/></li>
            <li><Button href="/frontend" value="フロントエンド実績"/></li>
            <li><Button href="/backend" value="バックエンド実績"/></li>
          </ul>
      </header>
      <Appfooter />
    </LayOut>
    )
  }
}

export default Appheader;
