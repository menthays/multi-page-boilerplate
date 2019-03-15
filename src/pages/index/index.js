import './index.scss';

const displayTimer = callback =>
  setInterval(() => {
    document.body.innerHTML = `Now: ${new Date().toLocaleString()}`;
    if (callback) {
      callback();
    }
  }, 1000);

displayTimer();

export { displayTimer };
