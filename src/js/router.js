const routes = {
  '/': 'home',
  '/test': 'test',
  '/review': 'review',
  '/stats': 'stats',
  '/profile': 'profile'
};

class Router {
  constructor() {
    this.currentRoute = '/';
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    const hash = window.location.hash.slice(1) || '/';
    this.navigate(hash);
  }

  navigate(path) {
    this.currentRoute = routes[path] ? path : '/';
    window.location.hash = this.currentRoute;
    this.render();
  }

  render() {
    const componentName = routes[this.currentRoute] || 'home';
    // 简单的路由切换，实际由Vue组件处理
    window.dispatchEvent(new CustomEvent('route-change', { detail: this.currentRoute }));
  }

  handleRoute() {
    const path = window.location.hash.slice(1) || '/';
    if (routes[path]) {
      this.currentRoute = path;
      this.render();
    } else {
      this.navigate('/');
    }
  }
}

window.router = new Router();