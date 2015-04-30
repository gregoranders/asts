/// <reference path="../../../library.d.ts" />
'use strict';

export interface IAuthenticationService  {

  login(username:string, password:string):any;

  logout(): any;
}
