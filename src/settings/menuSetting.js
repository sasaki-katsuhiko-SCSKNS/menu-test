import { YnaG3SystemAdapter } from 'viy-menu';

import i18n from '@/i18n';

const { login, logout, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter();

const staticMenus = [
  // Static Menus Data Example
  {
    // path: '/demo',
    // meta: {
    //   title: 'blank.title.demo',
    //   rank: 10,
    // },
    children: [
      {
        path: '/noModule/UserDetail',
        name: 'UserDetail',
        meta: {
        //   title: 'blank.title.userDetail',
          showLink: false, // ここでshowLinkをfalseに設定
        },
      },
    ],
  },
];

/**
 * Options of VIY-Menu
 * @type {import("viy-menu").MenuOptions}
 */
const menuOptions = {
  title: 'ライダー備品管理システム',
  mode:'horizontal',
  i18n,
  getMenus: () => getMenusByEnv(staticMenus),
  login,
  logout,
  getUserInfo,
  views: import.meta.glob('/src/views/**/*.{vue,jsx}'),
};

export default menuOptions;
