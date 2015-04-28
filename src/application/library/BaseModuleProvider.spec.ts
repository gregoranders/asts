/// <reference path="../library.d.ts" />
'use strict';

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestProviderClass implements angular.IService<any> {
  static $inject: string[] = [];
  static identifier:string = 'TestProviderClass';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when provider method invoked', ():void => {

    it('should throw error on null provider', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.provider(null)
      }).toThrow(new Error('Invalid provider'));
    });

    it('should throw error on invalid provider', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.provider({})
      }).toThrow(new Error('Invalid provider'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        provider: () => {

        },
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'provider');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.provider(<any>TestProviderClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);
      expect(native.provider).toHaveBeenCalledWith(TestProviderClass.identifier, TestProviderClass);
    });
  });


});
