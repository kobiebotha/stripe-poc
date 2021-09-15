import './template/scss/index.scss';
import './style.scss';
import template from './template/template.handlebars';

import { setupClient } from '@journeyapps/pdf-cli';

setupClient(template);