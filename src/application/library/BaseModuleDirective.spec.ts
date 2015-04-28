/// <reference path="../library.d.ts" />
'use strict';

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestDirectiveClass implements angular.IDirective {
  static $inject: string[] = [];
  static identifier:string = 'TestDirectiveClass';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when directive method invoked', ():void => {

    it('should throw error on null directive', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.directive(null)
      }).toThrow(new Error('Invalid directive'));
    });

    it('should throw error on invalid directive', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.directive({})
      }).toThrow(new Error('Invalid directive'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        directive: () => {

        },
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'directive');
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.directive(<any>TestDirectiveClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.directive).toHaveBeenCalledWith(TestDirectiveClass.identifier, jasmine.any(Function));
    });
  });


});
