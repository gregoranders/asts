/// <reference path="../../../../library.d.ts" />

import {BaseController} from '../../../../library/BaseController';

/**
 * ToolbarController.
 *
 * @see https://docs.angularjs.org/guide/controller
 */
export class ToolbarController extends BaseController {

  language: string = 'en';

  languages: string[] = [
    'en',
    'de'
  ];

  theme: string = 'blue';

  themes: string[] = [
    'red',
    'green',
    'blue'
  ];

  constructor($scope: angular.IScope<ToolbarController>) {
    super($scope);
  }
}
