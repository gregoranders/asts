/// <reference path="../../library.d.ts" />
'use strict';

import angular from 'angular';
import {LoginController} from "./LoginController";
import {IAuthenticationService} from "../service/IAuthenticationService";
import 'angular-mocks';

describe('LoginController', ():void => {

  var $scope:angular.IScope,
    $rootScope:angular.IScope,
    $q:angular.IQService,
    serviceSuccess:IAuthenticationService,
    serviceError:IAuthenticationService;

  beforeEach(inject((_$q_, _$rootScope_):void => {
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $rootScope = _$rootScope_;
    serviceSuccess = {
      login: ():void => {
        var defer = $q.defer();
        defer.resolve({user: 'username'});
        return defer.promise;
      }
    };
    serviceError = {
      login: ():void => {
        var defer = $q.defer();
        defer.reject({});
        return defer.promise;
      }
    };
  }));

  it('should attach itself as vm to $scope', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    expect($scope.vm).toBe(testSubject);
  });

  it('should initialize username to null', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    expect($scope.vm.username).toBeNull();
  });

  it('should initialize password to null', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    expect($scope.vm.password).toBeNull();
  });

  it('should initialize state to 0', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    expect($scope.vm.state).toBe(0);
  });

  it('should set state to 1 on success', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    testSubject.login('test', 'test');
    $scope.$digest();
    expect($scope.vm.state).toBe(1);
  });

  it('should set state to -1 on error', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceError);
    testSubject.login('test', 'test');
    $scope.$digest();
    expect($scope.vm.state).toBe(-1);
  });

  it('should set "authenticated" to true on $rootScope on success', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    testSubject.login('test', 'test');
    $scope.$digest();
    expect($rootScope.authenticated).toBeTruthy();
  });

  it('should set "authenticatedUser" to "username" on $rootScope on success', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceSuccess);
    testSubject.login('test', 'test');
    $scope.$digest();
    expect($rootScope.authenticatedUser).toBe('username');
  });

  it('should set "authenticated" to false on $rootScope on error', ():void => {
    var testSubject:LoginController = new LoginController($scope, $rootScope, serviceError);
    testSubject.login('test', 'test');
    $scope.$digest();
    expect($rootScope.authenticated).toBeFalsy();
  });

});
