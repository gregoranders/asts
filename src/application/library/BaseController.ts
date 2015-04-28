/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseController.
 *
 * Controller:
 * <code>
 *     class MyController extends BaseController {
 *        text: string = 'some text';
 *
 *        method(): void {
 *          this.text = 'other text';
 *        };
 *     }
 * </code>
 *
 * View:
 * <code>
 *     <button ng-click="vm.method()">{{ vm.text }}</button>
 * </code>
 *
 * @see https://docs.angularjs.org/guide/controller
 * @see https://docs.angularjs.org/guide/scope
 */
export class BaseController implements angular.IController<angular.IScope<BaseController>> {

  static $inject: string[] = [
    '$scope'
  ];

  static identifier: string = 'BaseController';

  /**
   * Constructor.
   *
   * Binds controller to $scope as 'vm'.
   *
   * @param $scope Angular $scope this controller will be associated with
   *
   * @see https://docs.angularjs.org/guide/controller
   * @see https://docs.angularjs.org/guide/scope
   */
  constructor($scope: angular.IScope<BaseController>) {
    if (!$scope) {
      throw new Error('Invalid $scope provided');
    }
    $scope.vm = this;
  }
}
