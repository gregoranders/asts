/// <reference path="../library.d.ts" />
'use strict';

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestInvalidClass {
}

class TestClass {
  static $inject: string[] = ['test1', 'test2'];

  constructor(public test1:any, public test2: any) {

  }
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  describe('when createFactory method invoked', ():void => {

    it('should throw error on null clazz', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.createFactory(null)
      }).toThrow(new Error('Invalid class provided'));
    });

    it('should throw error when class is not implementing $inject', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.createFactory(TestInvalidClass)
      }).toThrow(new Error('Invalid class provided'));
    });

    it('should return factory function', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(testSubject.createFactory(TestClass)).toBeDefined();
    });

    it('should return factory with same $inject as class', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []),
        factory: any = testSubject.createFactory(TestClass);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(factory.$inject).toBe(TestClass.$inject);
    });

    it('should not return given clazz', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(testSubject.createFactory(TestClass)).not.toBe(TestClass);
    });

    it('should return given clazz when factory is called', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []),
          factory: any = testSubject.createFactory(TestClass);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(factory()).toBeDefined();
    });

    it('should return given clazz when factory is called', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []),
        factory: any = testSubject.createFactory(TestClass),
        product: any = factory('test2', 'test1');

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(product.test1).toBe('test2');
      expect(product.test2).toBe('test1');
    });

  });


});
