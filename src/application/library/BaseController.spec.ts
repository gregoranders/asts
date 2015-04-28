/// <reference path="../library.d.ts" />
'use strict';

import {BaseController} from './BaseController';

describe('BaseController', ():void => {

  it('should throw Error on null $scope', ():void => {
    expect(():void => {
      new BaseController(null)
    }).toThrow(new Error('Invalid $scope provided'));
  });

  it('should have static $identifier', ():void => {
    expect(BaseController.identifier).toBe('BaseController');
  });

  it('should have static $inject', ():void => {
    expect(BaseController.$inject).toBeDefined();
  });

  it('should have static $inject with 1 element in it', ():void => {
    expect(BaseController.$inject.length).toBe(1);
  });

  it('should have static $inject with $scope in it', ():void => {
    expect(BaseController.$inject).toContain('$scope');
  });

  it('should set vm property to self on $scope', ():void => {
    var scope:any = {},
      testSubject:BaseController = new BaseController(scope);

    expect(testSubject).toBeDefined();
    expect(scope.vm).toBe(testSubject);
  });

});
