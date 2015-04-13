/// <reference path="../../../library.d.ts" />

import {BaseController} from '../../../library/BaseController';

/**
 * IndexController.
 *
 * @see https://docs.angularjs.org/guide/controller
 */
export class IndexController extends BaseController {

  static $inject = [
    '$scope',
    'com.web.authentication.service'
  ];

  /**
   * buttonText.
   */
  buttonText:string = 'Click Me';

  buttonEnabled: boolean = true;

  constructor($scope: angular.IScope<IndexController>, private service: any) {
    super($scope);
  }

  /**
   * buttonClick.
   */
  login():void {
    this.service.login('demo', 'demo');
  }

  logout():void {
    this.service.logout();
  }
}
