import '@babel/polyfill';
import Navigator from './initNavigator'
import './style.sass'
/**
 * App
 */
class App {
  /**
   * Init everything
   */
  constructor() {
    const current = window.location.pathname.replace(/\D+/g, '');
    Navigator.showPage(current || '0', true, true);
  }
}
const createApp = async () => {
  new App();
};
createApp();
