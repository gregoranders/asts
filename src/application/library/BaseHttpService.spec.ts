/// <reference path="../library.d.ts" />
'use strict';

import {BaseHttpService} from './BaseHttpService';

describe('BaseHttpService', ():void => {

  it('should throw Error on null $http', ():void => {
    expect(():void => {
      new BaseHttpService(null, {})
    }).toThrow(new Error('Invalid $http provided'));
  });

  it('should throw Error on null $q', ():void => {
    expect(():void => {
      new BaseHttpService({}, null)
    }).toThrow(new Error('Invalid $q provided'));
  });

  it('should have static $identifier', ():void => {
    expect(BaseHttpService.identifier).toBe('BaseHttpService');
  });

  it('should have static $inject', ():void => {
    expect(BaseHttpService.$inject).toBeDefined();
  });

  it('should have static $inject with 2 elements in it', ():void => {
    expect(BaseHttpService.$inject.length).toBe(2);
  });

  it('should have static $inject with $scope in it', ():void => {
    expect(BaseHttpService.$inject).toContain('$http');
  });

  it('should have static $inject with $q in it', ():void => {
    expect(BaseHttpService.$inject).toContain('$q');
  });

  it('should be able to be created', ():void => {
    var scope:any = {},
      q:any = {},
      testSubject:BaseHttpService<any> = new BaseHttpService<any>(scope, q);

    expect(testSubject).toBeDefined();
  });

});
