import {NAME} from './Version';
import {BaseModule} from '../../library/BaseModule';

import {AuthenticationService} from './service/AuthenticationService';

/**
 * RouteConfiguration.
 */
class AuthenticationModuleRouteConfiguration {

  /**
   * @see https://docs.angularjs.org/guide/di
   */
  static $inject: string[] = ['$routeProvider', NAME];

  /**
   * RouteConfiguration constructor.
   *
   * @param $routeProvider Angular routeProvider
   *
   * @see https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
   */
  constructor($routeProvider:angular.IRouteProvider, component: AuthenticationModule) {
    $routeProvider.when('/login', {
      templateUrl: component.baseURL + '/view/login.html'
    }).when('/logout', {
      templateUrl: component.baseURL + '/view/logout.html'
    });
  }
}

/**
 * AuthenticationModule.
 */
export class AuthenticationModule extends BaseModule {

  static identifier:string = NAME;

  /**
   * AuthenticationModule constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(public baseURL: string) {
    super(AuthenticationModule.identifier, ['ngRoute'], AuthenticationModuleRouteConfiguration);

    this.service(AuthenticationService);
  }
}
