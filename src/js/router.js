const routes = {
  '/': 'home',
  '/test': 'test',
  '/review': 'review',
  '/stats': 'stats',
  '/report': 'report',
  '/profile': 'profile'
};

// 路由到 HTML 文件的映射
const routeFiles = {
  'home': null,  // 首页在主文件 index.html 中
  'profile': 'src/pages/profile.html',
  'review': 'src/pages/review.html',
  'report': 'src/pages/report.html'
};

class Router {
  constructor() {
    this.currentRoute = '/';
    this.currentPage = null;
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

  async render() {
    const componentName = routes[this.currentRoute] || 'home';
    const pageFile = routeFiles[componentName];

    // 清除之前的页面
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = '';
    }

    if (pageFile) {
      // 加载独立的 HTML 页面
      try {
        const response = await fetch(pageFile);
        const html = await response.text();
        app.innerHTML = html;

        // 执行内联的脚本
        const scripts = app.querySelectorAll('script');
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
          });
          newScript.textContent = oldScript.textContent;
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });

        // 重新初始化 Vue 应用
        if (window.initProfileApp) {
          window.initProfileApp();
        }
        if (window.initReviewApp) {
          window.initReviewApp();
        }
        if (window.initReportApp) {
          window.initReportApp();
        }
      } catch (e) {
        console.error('加载页面失败:', e);
        app.innerHTML = '<p>页面加载失败</p>';
      }
    }

    // 触发路由变化事件
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