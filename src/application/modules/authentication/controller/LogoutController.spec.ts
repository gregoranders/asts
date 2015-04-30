/// <reference path="../../library.d.ts" />
'use strict';

import angular from 'angular';
import {LogoutController} from "./LogoutController";
import {IAuthenticationService} from "../service/IAuthenticationService";
import 'angular-mocks';

describe('LogoutController', ():void => {

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
      logout: ():void => {
        var defer = $q.defer();
        defer.resolve({});
        return defer.promise;
      }
    };
    serviceError = {
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
    var testSubject:LogoutController = new LogoutController($scope, $rootScope, serviceSuccess);
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
