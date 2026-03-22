import config from '@ivosabev/config/oxfmt' with {type: 'json'};
import {type OxfmtConfig, defineConfig} from 'oxfmt';

export default defineConfig({
  ...(config as OxfmtConfig),
});
