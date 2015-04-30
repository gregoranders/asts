/// <reference path="../../../library.d.ts" />
'use strict';

import {NAME,SERVICE} from '../Version';
import {BaseController} from '../../../library/BaseController';

import {IAuthenticationService} from '../service/IAuthenticationService';

export class LogoutController extends BaseController {

  static $inject: string[] = [
    '$scope',
    SERVICE
  ];

  static identifier: string = NAME + '.LogoutController';

  constructor($scope: angular.IScope<BaseController>, private service: IAuthenticationService) {
    super($scope);

    this.service.logout()
    .then( (data: any): void => {

      })
    .catch( (response: any): void => {
        console.log(response);
      });
  }
}
