import { createApp } from 'vue';
import { buildTime } from 'vite-plugin-build-time';
import { getBuildVersion } from 'vite-plugin-build-version';
import dayjs from 'dayjs';
import App from './App.vue';
import router from './router';
import store from './store';

import 'dayjs/locale/zh-cn';
import './styles/index.less';

dayjs.locale('zh-cn');

createApp(App).use(router).use(store).mount('#app');

/* 项目基础信息 */
const env = import.meta.env;

// eslint-disable-next-line no-console
console.log(`    __                                                                     __
   / /_  ____ _________       _   ____  _____        ____  _________  ____/ /
  / __ \\/ __ \`/ ___/ _ \\_____| | / / / / / _ \\______/ __ \\/ ___/ __ \\/ __  / 
 / /_/ / /_/ (__  )  __/_____/ |/ / /_/ /  __/_____/ /_/ / /  / /_/ / /_/ /  
/_.___/\\__,_/____/\\___/      |___/\\__,_/\\___/     / .___/_/   \\____/\\__,_/   
                                                 /_/`);
// eslint-disable-next-line no-console
console.log(
  `%cEnvironment%c${env.VITE_RUNTIME_ENV}`,
  `background: #606060;
  padding: 0 6px;
  border-radius: 3px 0 0 3px;`,
  `background: #3AA172;
  padding: 0 6px;
  border-radius: 0 3px 3px 0;`,
);
// eslint-disable-next-line no-console
console.log(
  '%cPlatform%cCiLiBeng',
  `background: #606060;
  padding: 0 6px;
  border-radius: 3px 0 0 3px;`,
  `background: #1475B2;
  padding: 0 6px;
  border-radius: 0 3px 3px 0;
  font-style: italic;`,
);
// eslint-disable-next-line no-console
console.log(
  `%cVersion%cV${getBuildVersion()}`,
  `background: #606060;
  padding: 0 6px;
  border-radius: 3px 0 0 3px;`,
  `background: #1475B2;
  padding: 0 6px;
  border-radius: 0 3px 3px 0;`,
);
// eslint-disable-next-line no-console
console.log(
  `%cBuildTime%c${dayjs(new Date(buildTime())).format('YYYY-MM-DD hh:mm:ss')}`,
  `background: #606060;
  padding: 0 6px;
  border-radius: 3px 0 0 3px;`,
  `background: #1475B2;
  padding: 0 6px;
  border-radius: 0 3px 3px 0;`,
);
