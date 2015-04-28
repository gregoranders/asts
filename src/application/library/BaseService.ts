/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseDirective.
 */
export class BaseService<T> implements angular.IService<T> {

  static $inject: string[] = [];

  static identifier: string = 'BaseService';

  /**
   * Constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor() {
  }
}
