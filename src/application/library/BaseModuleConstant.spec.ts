/// <reference path="../library.d.ts" />

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestConstantClass implements angular.IConstant<string> {
  static identifier:string = 'TestConstantClass';
  constant:string = 'test';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when constant method invoked', ():void => {

    it('should throw error on null constant', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.constant(null)
      }).toThrow(new Error('Invalid constant'));
    });

    it('should throw error on invalid constant', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.constant(<any>{})
      }).toThrow(new Error('Invalid constant'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.constant(<any>TestConstantClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.constant).toHaveBeenCalledWith(TestConstantClass.identifier, jasmine.any(Function));
    });
  });


});
