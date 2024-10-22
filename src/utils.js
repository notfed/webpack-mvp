import Data from './data.xml';

function onClickMe() {
    document.querySelector('#clickMe').textContent = 'Yes, embedded JavaScript is working!';
}

export { onClickMe };