import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run mememaker:serve',
        production: 'nx run mememaker:preview',
      },
      ciWebServerCommand: 'nx run mememaker:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
