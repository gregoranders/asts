/// <reference path="../library.d.ts" />

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestServiceClass implements angular.IService<any> {
  static $inject: string[] = [];
  static identifier:string = 'TestServiceClass';
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when service method invoked', ():void => {

    it('should throw error on null service', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.service(null)
      }).toThrow(new Error('Invalid service'));
    });

    it('should throw error on invalid service', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.service({})
      }).toThrow(new Error('Invalid service'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        service: () => {

        },
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'service');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.service(<any>TestServiceClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.service).toHaveBeenCalledWith(TestServiceClass.identifier, TestServiceClass);
    });
  });


});
