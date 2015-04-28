/// <reference path="../library.d.ts" />
'use strict';

import {BaseService} from './BaseService';

describe('BaseService', ():void => {

  it('should have static $identifier', ():void => {
    expect(BaseService.identifier).toBe('BaseService');
  });

  it('should have static $inject', ():void => {
    expect(BaseService.$inject).toBeDefined();
  });

  it('should have static $inject with nothing in it', ():void => {
    expect(BaseService.$inject.length).toBe(0);
  });

  it('should be able to be created', ():void => {
    expect(new BaseService()).toBeDefined();
  });

});
