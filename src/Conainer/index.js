import {Page} from 'j4skit'
import template from './index.pug'
import Navigator from '../initNavigator'
class Container extends Page {

  render() {
    return template(this.props);
  }
  componentDidMount() {
    super.componentDidMount();
    let isFullScreen = false
    document.addEventListener('keypress', (e) => {
      if(e.key === 'k') {
        if(!isFullScreen) {
          isFullScreen = true;
          document.documentElement?.requestFullscreen?.()
        } else {
          isFullScreen = false;
          document.exitFullscreen?.();
        }
      }
    })
    document
      .getElementById('current_page')
      .addEventListener('click', e => {
        const x = e.clientX;
        const current = window.location.pathname.replace(/\D+/g, '');
        if(x >= window.innerWidth * 0.8) {
          if(current < 7)
          Navigator.showPage(`/${Number(current) + 1}`);
        } else if (x <= window.innerWidth * 0.2){
          if(current > 0)
            Navigator.showPage(`/${current - 1}`);
        }
      })
  }
}

export {
  Container
}