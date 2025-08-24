import * as ComponentMap from './components'

export default {
  install(Vue) {
    // Register all components
    for (const componentName in ComponentMap) {
      Vue.component(componentName, ComponentMap[componentName]);
    }

    // Open Serial Monitor Tab
    Vue.prototype.$global.$on("menu-serial-monitor", () => {
      // eslint-disable-next-line no-console
      console.info("open-serial-monitor"); // ใช้ console.info ถ้าอยากเก็บไว้
      Vue.prototype.$global.ui.addBottomTab('serial-monitor', 'Serial Monitor', 'SerialMonitor');
    });

    // Open Compile Logs Tab
    Vue.prototype.$global.$on("menu-compile-logs", () => {
      // eslint-disable-next-line no-console
      console.info("open-compile-logs");
      Vue.prototype.$global.ui.addBottomTab('compile-logs', 'Compile Logs', 'CompileLogs');
    });
  }
};
