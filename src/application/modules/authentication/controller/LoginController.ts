/// <reference path="../../../library.d.ts" />
'use strict';

import {NAME,SERVICE} from '../Version';
import {BaseController} from '../../../library/BaseController';

import {IAuthenticationService} from '../service/IAuthenticationService';

export class LoginController extends BaseController {

  static $inject: string[] = [
    '$scope',
    '$rootScope',
    SERVICE
  ];

  static identifier: string = NAME + '.LoginController';

  public username: string = null;

  public password: string = null;

  public state: number = 0;

  constructor($scope: angular.IScope<BaseController>,
              private $rootScope: angular.IScope<BaseController>,
              private service: IAuthenticationService) {
    super($scope);
  }

  login(): void {

    this.service.login(this.username, this.password)
      .then( (data: any): void => {
        this.state = 1;
        this.$rootScope.authenticated = true;
        if (data && data.user) {
          this.$rootScope.authenticatedUser = data.user;
        }
      })
      .catch( (response: any): void => {
        this.state = -1;
        this.$rootScope.authenticated = false;
        this.$rootScope.authenticatedUser = null;
      });
  }
}
