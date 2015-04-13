/// <reference path="../library.d.ts" />

import {BaseModuleRouteConfiguration} from './BaseModuleRouteConfiguration';

var TestClassSpy: any = {
  called: (): void => {}
};

class TestClass extends BaseModuleRouteConfiguration {

  init(): void {
    TestClassSpy.called('test');
  }
}


describe('BaseRouteModuleConfiguration', ():void => {

  it('should have static $inject', ():void => {
    expect(BaseModuleRouteConfiguration.$inject).toBeDefined();
  });

  it('should have static $inject with 1 element in it', ():void => {
    expect(BaseModuleRouteConfiguration.$inject.length).toBe(1);
  });

  it('should have static $inject with $routeProvider in it', ():void => {
    expect(BaseModuleRouteConfiguration.$inject).toContain('$routeProvider');
  });

  it('should be able to be created', ():void => {
    var routeProvider:any = {},
      testSubject:BaseModuleRouteConfiguration = new BaseModuleRouteConfiguration(routeProvider);

    expect(testSubject).toBeDefined();
  });

  it('should call init when created', ():void => {
    var routeProvider:any = {};

    spyOn(TestClassSpy, 'called');

    new TestClass(routeProvider);

    expect(TestClassSpy.called).toHaveBeenCalledWith('test');
  });

  it('should delegate to $routeProvider when "when" is called and return itself', ():void => {
    var routeProvider:any = {
        when: ():void => {
        }
      },
      testSubject:BaseModuleRouteConfiguration = new BaseModuleRouteConfiguration(routeProvider);

    spyOn(routeProvider, 'when');

    expect(testSubject.when('/test', {
      templateUrl: 'hase',
      controller: 'nase'
    })).toBe(testSubject);

    expect(routeProvider.when).toHaveBeenCalledWith('/test', {
      templateUrl: 'hase',
      controller: 'nase'
    });
  });

  it('should delegate to $routeProvider when "otherwise" is called and return itself', ():void => {
    var routeProvider:any = {
        otherwise: ():void => {
        }
      },
      testSubject:BaseModuleRouteConfiguration = new BaseModuleRouteConfiguration(routeProvider);

    spyOn(routeProvider, 'otherwise');

    expect(testSubject.otherwise({
      templateUrl: 'nase',
      controller: 'hase'
    })).toBe(testSubject);

    expect(routeProvider.otherwise).toHaveBeenCalledWith({
      templateUrl: 'nase',
      controller: 'hase'
    });
  });

});
