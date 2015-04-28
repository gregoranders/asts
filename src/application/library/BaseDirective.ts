/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseDirective.
 */
export class BaseDirective implements angular.IDirective {

  static $inject: string[] = [];

  static identifier: string = 'BaseDirective';

  /**
   * Constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor() {
  }

}
