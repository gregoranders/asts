/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseModuleRouteConfiguration.
 */
export class BaseModuleRouteConfiguration implements angular.IModuleConfiguration {

  static $inject: string[] = [
    '$routeProvider'
  ];

  /**
   * Constructor.
   *
   * @param $routeProvider Angular $routeProvider
   *
   * @see https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
   */
  constructor(private $routeProvider:angular.IRouteProvider) {
    this.init();
  }

  init(): void {
  }

  when(path: string, route: angular.IRoute): BaseModuleRouteConfiguration {
    this.$routeProvider.when(path, route);
    return this;
  }

  otherwise(route: angular.IRoute): BaseModuleRouteConfiguration {
    this.$routeProvider.otherwise(route);
    return this;
  }

}
