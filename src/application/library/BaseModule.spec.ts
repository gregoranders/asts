/// <reference path="../library.d.ts" />

import {BaseModule} from './BaseModule';

declare
var window:any;

class TestConfigurationClass {
  static $inject:string[] = [];
}

describe('BaseModule', ():void => {

  window.angular = {
    module: ():void => {
    }
  };

  it('should throw Error on null name', ():void => {
    expect(():void => {
      new BaseModule(null, [])
    }).toThrow(new Error('Invalid module name'));
  });

  it('should throw Error on empty name', ():void => {
    expect(():void => {
      new BaseModule('', [])
    }).toThrow(new Error('Invalid module name'));
  });

  it('should throw Error on invalid dependencies', ():void => {
    expect(():void => {
      new BaseModule('test', null)
    }).toThrow(new Error('Invalid module dependencies'));
  });

  it('should throw Error on invalid dependencies', ():void => {
    expect(():void => {
      new BaseModule('test', <any>1)
    }).toThrow(new Error('Invalid module dependencies'));
  });

  it('should delegate to angular.module when created without configuration', ():void => {

    var native:any = {
      constant: ():void => {
      }
    };

    spyOn(window.angular, 'module').and.returnValue(native);
    spyOn(native, 'constant');

    var testSubject:BaseModule = new BaseModule('test', []);

    expect(native.constant).toHaveBeenCalledWith('test', testSubject);

    expect(window.angular.module).toHaveBeenCalledWith('test', []);
  });

  it('should delegate to angular.module when created with configuration', ():void => {

    var config:any = () => {
      },
      native:any = {
        constant: ():void => {
        }
      };

    config.$inject = [];

    spyOn(window.angular, 'module').and.returnValue(native);
    spyOn(native, 'constant');

    var testSubject: BaseModule = new BaseModule('test', [], config);

    expect(native.constant).toHaveBeenCalledWith('test', testSubject);

    expect(window.angular.module).toHaveBeenCalledWith('test', [], jasmine.any(Function));
    expect(native.constant).toHaveBeenCalledWith('test', testSubject);
  });

  it('should throw Error on invalid configuration', ():void => {
    expect(():void => {
      new BaseModule('test', [], 1)
    }).toThrow(new Error('Invalid module configuration'));
  });

  describe('when config method invoked', ():void => {

    it('should throw error on null configuration', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.config(null)
      }).toThrow(new Error('Invalid configuration'));
    });

    it('should throw error on invalid configuration', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.config({})
      }).toThrow(new Error('Invalid configuration'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        config: () => {

        },
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'config');
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(testSubject.config(TestConfigurationClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);
      expect(native.config).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });

  describe('when run method invoked', ():void => {

    it('should throw error on null run configuration', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.run(null)
      }).toThrow(new Error('Invalid run configuration'));
    });

    it('should throw error on invalid run configuration', ():void => {

      var native:any = {
        constant: ():void => {
        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);

      expect(():void => {
        testSubject.run({})
      }).toThrow(new Error('Invalid run configuration'));
    });

    it('should delegate to native', ():void => {

      var native:any = {
        run: () => {

        },
        constant: () => {

        }
      };

      spyOn(window.angular, 'module').and.returnValue(native);
      spyOn(native, 'constant');
      spyOn(native, 'run');

      var testSubject:BaseModule = new BaseModule('test', []);

      expect(testSubject.run(TestConfigurationClass)).toBe(testSubject);

      expect(window.angular.module).toHaveBeenCalled();

      expect(native.constant).toHaveBeenCalledWith('test', testSubject);
      expect(native.run).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });

});
