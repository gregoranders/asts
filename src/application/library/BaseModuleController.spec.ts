/// <reference path="../library.d.ts" />
'use strict';

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestControllerClass implements angular.IController<any> {
  static $inject: string[] = [];
  static identifier:string = 'TestControllerClass';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when controller method invoked', ():void => {

    it('should throw error on null controller', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.controller(null)
      }).toThrow(new Error('Invalid controller'));
    });

    it('should throw error on invalid controller', ():void => {

      var native:any = {
        run: () => {

        },
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'run');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.controller({})
      }).toThrow(new Error('Invalid controller'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        controller: () => {

        },
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'controller');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.controller(<any>TestControllerClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);
      expect(native.controller).toHaveBeenCalledWith(TestControllerClass.identifier, TestControllerClass);
    });
  });


});
