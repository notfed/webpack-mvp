import _ from 'lodash';
import { onClickMe } from './utils.js';
import './index.css';
import Data from './data.xml';

window.addEventListener('load', () => {
  document.querySelector('#clickMe').addEventListener('click', () => {
    onClickMe();
  });

  document.querySelector('#xmlDoc').textContent = JSON.stringify(Data);
});