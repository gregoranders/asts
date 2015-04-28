/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseDirective.
 */
export class BaseHttpService<T> implements angular.IHttpService<T> {

  static $inject: string[] = [
    '$http',
    '$q'
  ];

  static identifier: string = 'BaseHttpService';

  /**
   * Constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(protected $http: any, protected $q: any) {
    if (!$http) {
      throw new Error('Invalid $http provided');
    }
    if (!$q) {
      throw new Error('Invalid $q provided');
    }
  }

}
