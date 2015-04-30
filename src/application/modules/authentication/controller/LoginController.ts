/// <reference path="../../../library.d.ts" />
'use strict';

import {NAME,SERVICE} from '../Version';
import {BaseController} from '../../../library/BaseController';

import {IAuthenticationService} from '../service/IAuthenticationService';

export class LoginController extends BaseController {

  static $inject: string[] = [
    '$scope',
    SERVICE
  ];

  static identifier: string = NAME + '.LoginController';

  constructor($scope: angular.IScope<BaseController>, private service: IAuthenticationService) {
    super($scope);
    console.log('login', service);

    this.service.login('user', 'pass')
      .then( (data: any): void => {

      })
      .catch( (response: any): void => {
        console.log(response);
      });
  }
}
