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

import {ToolbarModule} from './modules/toolbar/ToolbarModule';
import {AuthenticationModule} from './modules/authentication/AuthenticationModule';
import {ScaffoldModule} from './modules/scaffold/ScaffoldModule';

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
  ToolbarModule.identifier,
  ScaffoldModule.identifier,
  AuthenticationModule.identifier
]);
