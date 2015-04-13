/// <reference path="../library.d.ts" />

import {BaseDirective} from './BaseDirective';

describe('BaseDirective', ():void => {

  it('should have static $identifier', ():void => {
    expect(BaseDirective.identifier).toBe('BaseDirective');
  });

  it('should have static $inject', ():void => {
    expect(BaseDirective.$inject).toBeDefined();
  });

  it('should have static $inject with nothing in it', ():void => {
    expect(BaseDirective.$inject.length).toBe(0);
  });

  it('should be able to be created', ():void => {
    expect(new BaseDirective()).toBeDefined();
  });

});
