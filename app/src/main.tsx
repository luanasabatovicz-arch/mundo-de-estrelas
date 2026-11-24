import { render } from 'preact';
import { App } from './ui/App';
import { startApp } from './core/store';
import './styles.css';

startApp();
render(<App />, document.getElementById('app')!);

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
