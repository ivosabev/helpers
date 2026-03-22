import config from '@ivosabev/config/oxlint' with {type: 'json'};
import {type OxlintConfig, defineConfig} from 'oxlint';

export default defineConfig({
  extends: [config as OxlintConfig],
});
