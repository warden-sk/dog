/*
 * Copyright 2024 Marek Kobida
 * Last Updated: 26.09.2024
 */

import type { Repository } from './types';

const repositories: Repository[] = [
  {
    name: 'aplikácia „Súbory“ (klient)',
    path: '/Users/marekkobida/Documents/warden/leopold/applications/Files/.git',
  },
  {
    name: 'aplikácia „Súbory“ (server)',
    path: '/Users/marekkobida/Documents/warden/leopold/applications/Files/.git/modules/server',
  },
  {
    name: 'nahadzovač',
    path: '/Users/marekkobida/Documents/warden/leopold/updater/.git',
  },
  {
    name: 'softvér „five“ (sťahovač dát)',
    path: '/Users/marekkobida/Documents/warden/leopold/five/.git',
  },
  {
    name: 'softvér „schémy“',
    path: '/Users/marekkobida/Documents/warden/leopold/schemas/.git',
  },
  {
    name: 'stránka „fivestarliving.sk“',
    path: '/Users/marekkobida/Documents/warden/leopold/applications/fivestarliving/.git',
  },
  {
    name: 'stránka „redred.app“ (klient)',
    path: '/Users/marekkobida/Documents/warden/leopold/.git/modules/client',
  },
  {
    name: 'stránka „redred.app“ (server)',
    path: '/Users/marekkobida/Documents/warden/leopold/.git/modules/server',
  },
];

export default repositories;
