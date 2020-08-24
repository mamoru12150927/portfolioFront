import React from 'react';
import header from './css/header.css';

class Appheader extends React.Component {
  render() {
    return (
    <>
    <header className="header">
      <nav>
        <h1>
          もっちゃんポートフォリオサイト
        </h1>
        <ul>
          <a href="">自己紹介/PR</a>
          <a href="">業務経歴</a>
          <a href="">保有資格</a>
        </ul>
      </nav>
    </header>
    </>
    )
  }
}

export default Appheader;
