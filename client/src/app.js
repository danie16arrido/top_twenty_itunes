import React from 'react';
import ReactDOM from 'react-dom';
import Container from './containers/Container.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <Container></Container>,
    document.getElementById('app')
  );
});
