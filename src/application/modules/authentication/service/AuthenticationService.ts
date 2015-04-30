/// <reference path="../../../library.d.ts" />
'use strict';

import {NAME, SERVICE} from '../Version';
import {BaseHttpService} from '../../../library/BaseHttpService';

import {IAuthenticationService} from './IAuthenticationService';

export class AuthenticationService extends BaseHttpService<number> implements IAuthenticationService {

  static identifier:string = SERVICE;

  static LOGIN_URL:string = '/auth/login';

  static LOGOUT_URL:string = '/auth/logout';

  login(username:string, password:string):any {

    var req:any = {
      method: 'POST',
      url: AuthenticationService.LOGIN_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      crossDomain: true,
      xhrFields: {withCredentials: true},
      transformRequest: function (obj:any) {
        var str:string[] = [];
        for (var tmp in obj) {
          str.push(encodeURIComponent(tmp) + "=" + encodeURIComponent(obj[tmp]));
        }
        return str.join("&");
      },
      data: {
        username: username,
        password: password
      }
    };

    var deferred = this.$q.defer();

    this.$http(req)
      .then((response:any):any => {
        if (response.status !== 200) {
          deferred.reject(response);
        }

        deferred.resolve(response.data);
      })
      .catch((response:any):void => {
        deferred.reject(response);
      });

    return deferred.promise;
  }

  logout(): any {

    var deferred = this.$q.defer();

    var req:any = {
      method: 'POST',
      url: AuthenticationService.LOGOUT_URL,
      data: {}
    };

    this.$http(req)
      .then((response:any):any => {
        deferred.resolve(response.data);
      })
      .catch((response:any):void => {
        deferred.reject(response);
      });

    return deferred.promise;
  }
}
