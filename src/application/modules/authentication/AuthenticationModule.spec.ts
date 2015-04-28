/// <reference path="../../library.d.ts" />

import angular from 'angular';
import {AuthenticationModule} from "./AuthenticationModule"; AuthenticationModule;

'use strict';

describe('AuthenticationModule', (): void => {

  var basePath: string = 'application/modules/authentication',
    testSubject: AuthenticationModule;

  beforeEach( (): void => {
    testSubject = new AuthenticationModule(basePath);
  });

  it('should be defined', (): void => {
    expect(testSubject).toBeDefined();
  });

  it('should be defined as angular module', (): void => {
    expect(angular.module(AuthenticationModule.identifier)).toBeDefined();
  });

  it('should have correct base path', (): void => {
    expect(testSubject.baseURL).toBe(basePath);
  });

});
