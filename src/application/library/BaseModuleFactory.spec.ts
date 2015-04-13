/// <reference path="../library.d.ts" />

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestFactoryClass implements angular.IService<any> {
  static $inject: string[] = [];
  static identifier:string = 'TestFactoryClass';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when factory method invoked', ():void => {

    it('should throw error on null factory', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.factory(null)
      }).toThrow(new Error('Invalid factory'));
    });

    it('should throw error on invalid factory', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.factory({})
      }).toThrow(new Error('Invalid factory'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        factory: () => {

        },
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'factory');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.factory(<any>TestFactoryClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();
      expect(native.constant).toHaveBeenCalledWith('test', testSubject);
      expect(native.factory).toHaveBeenCalledWith(TestFactoryClass.identifier, TestFactoryClass);
    });
  });


});
