/// <reference path="../../../library.d.ts" />
'use strict';

import {NAME,SERVICE} from '../Version';
import {BaseController} from '../../../library/BaseController';
import {IRootScope} from '../../commons/IRootScope';

import {IAuthenticationService} from '../service/IAuthenticationService';

export class LogoutController extends BaseController {

  static $inject: string[] = [
    '$scope',
    '$rootScope',
    SERVICE
  ];

  static identifier: string = NAME + '.LogoutController';

  public state: number = 0;

  constructor($scope: angular.IScope<BaseController>,
              private $rootScope: IRootScope,
              private service: IAuthenticationService) {
    super($scope);
  }

  logout(): void {
    this.service.logout()
      .then( (data: any): void => {
        this.state = 1;
        this.$rootScope.authenticated = false;
        this.$rootScope.authenticatedUser = null;
      })
      .catch( (response: any): void => {
        this.state = -1;
        this.$rootScope.authenticated = false;
        this.$rootScope.authenticatedUser = null;
      });
  }
}
