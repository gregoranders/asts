/// <reference path="../../../library.d.ts" />
'use strict';

import {angular} from 'angular';

import {LogoutController} from "./LogoutController";
import {IRootScope} from '../../commons/IRootScope';
import {IAuthenticationService} from "../service/IAuthenticationService";
import 'angular-mocks';

describe('LogoutController', ():void => {

  var $scope:angular.IScope<LogoutController>,
    $rootScope:IRootScope,
    $q:angular.IQService,
    serviceSuccess:IAuthenticationService,
    serviceError:IAuthenticationService;

  beforeEach(inject((_$q_: angular.IQService, _$rootScope_: IRootScope):void => {
    $q = _$q_;
    $scope = <angular.IScope<LogoutController>>_$rootScope_.$new();
    $rootScope = _$rootScope_;
    serviceSuccess = {
      login: (): any => {
        var defer = $q.defer();
        defer.resolve({user: 'username'});
        return defer.promise;
      },
      logout: ():void => {
        var defer = $q.defer();
        defer.resolve({});
        return defer.promise;
      }
    };
    serviceError = {
      login: (): any => {
        var defer = $q.defer();
        defer.reject({user: 'username'});
        return defer.promise;
      },
      logout: ():void => {
        var defer = $q.defer();
        defer.reject({});
        return defer.promise;
      }
    };
  }));

  it('should attach itself as vm to $scope', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceSuccess);
    expect($scope.vm).toBe(testSubject);
  });

  it('should initialize state to 0', ():void => {
    new LogoutController($scope, $rootScope, serviceSuccess);
    expect($scope.vm.state).toBe(0);
  });

  it('should set state to 1 on success', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceSuccess);
    testSubject.logout();
    $scope.$digest();
    expect($scope.vm.state).toBe(1);
  });

  it('should set state to -1 on error', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceError);
    testSubject.logout();
    $scope.$digest();
    expect($scope.vm.state).toBe(-1);
  });

  it('should set "authenticated" to false on $rootScope on success', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceSuccess);
    testSubject.logout();
    $scope.$digest();
    expect($rootScope.authenticated).toBeFalsy();
  });

  it('should set "authenticatedUser" to "null" on $rootScope on success', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceSuccess);
    testSubject.logout();
    $scope.$digest();
    expect($rootScope.authenticatedUser).toBeNull();
  });

  it('should set "authenticated" to false on $rootScope on error', ():void => {
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceError);
    testSubject.logout();
    $scope.$digest();
    expect($rootScope.authenticated).toBeFalsy();
  });

});
