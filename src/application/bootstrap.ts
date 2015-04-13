/// <reference path="./library.d.ts" />

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-cookies';
import 'angular-material';
import 'angular-messages';
import 'angular-resource';
import 'angular-route';
import 'angular-sanitize';
import 'angular-touch';
import 'angular-translate';
import 'angular-translate-loader-static-files';

import {I18NModule} from './modules/i18n/I18NModule';
import {ThemeModule} from './modules/theme/ThemeModule';
import {ToolbarModule} from './modules/toolbar/ToolbarModule';
import {AuthenticationModule} from './modules/authentication/AuthenticationModule';
import {ScaffoldModule} from './modules/scaffold/ScaffoldModule';

new I18NModule('application/modules/i18n');
new ThemeModule('application/modules/theme');
new AuthenticationModule('application/modules/authentication');
new ToolbarModule('application/modules/toolbar');
new ScaffoldModule();

angular.bootstrap(document, [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMaterial',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'pascalprecht.translate',
  I18NModule.identifier,
  ThemeModule.identifier,
  ToolbarModule.identifier,
  ScaffoldModule.identifier,
  AuthenticationModule.identifier
]);
