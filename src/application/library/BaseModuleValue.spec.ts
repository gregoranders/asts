/// <reference path="../library.d.ts" />
'use strict';

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestValueClass implements angular.IValue<string> {
  static identifier:string = 'TestValueClass';
  value:string = 'test';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when value method invoked', ():void => {

    it('should throw error on null value', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.value(null)
      }).toThrow(new Error('Invalid value'));
    });

    it('should throw error on invalid value', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.value(<any>{})
      }).toThrow(new Error('Invalid value'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        constant: () => {

        },
        value: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'value');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.value(<any>TestValueClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.value).toHaveBeenCalledWith(TestValueClass.identifier, jasmine.any(Function));
    });
  });


});
