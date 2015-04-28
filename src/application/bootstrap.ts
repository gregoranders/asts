/// <reference path="./library.d.ts" />

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-cookies';
import 'angular-messages';
import 'angular-resource';
import 'angular-route';
import 'angular-sanitize';
import 'angular-touch';
import 'angular-translate';
import 'angular-translate-loader-static-files';

import {I18NModule} from './modules/i18n/I18NModule';
import {ToolbarModule} from './modules/toolbar/ToolbarModule';

new I18NModule('application/modules/i18n');
new ToolbarModule('application/modules/toolbar');

angular.bootstrap(document, [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'pascalprecht.translate',
  I18NModule.identifier,
  ToolbarModule.identifier
]);
