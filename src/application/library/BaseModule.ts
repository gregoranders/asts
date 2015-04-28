/// <reference path="../library.d.ts" />
'use strict';

/**
 * BaseModule.
 */
export class BaseModule implements angular.IModule {

  /**
   * Native Angular Module.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  private native: any;

  /**
   * Module constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(name: string, dependencies: string[], configuration?: angular.IModuleConfiguration) {
    if (!name || name.length === 0) {
      throw new Error('Invalid module name');
    }
    if (!dependencies || typeof dependencies !== 'object') {
      throw new Error('Invalid module dependencies');
    }
    if (configuration) {
      if (typeof configuration !== 'function') {
        throw new Error('Invalid module configuration');
      }
      this.native = angular.module(name, dependencies, this.createFactory(configuration));
      this.native.constant(name, this);
    } else {
      this.native = angular.module(name, dependencies);
      this.native.constant(name, this);
    }
  }

  config(clazz: angular.IModuleConfiguration): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid configuration');
    }
    this.native.config(this.createFactory(clazz));
    return this;
  }

  run(clazz: angular.IModuleRunConfiguration): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid run configuration');
    }
    this.native.run(this.createFactory(clazz));
    return this;
  }

  constant<T>(clazz: angular.IConstant<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid constant');
    }
    this.native.constant(clazz.identifier, clazz);
    return this;
  }

  value<T>(clazz: angular.IValue<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid value');
    }
    this.native.value(clazz.identifier, clazz);
    return this;
  }

  controller<T extends angular.IScope<any>>(clazz: angular.IController<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid controller');
    }
    this.native.controller(clazz.identifier, clazz);
    return this;
  }

  service<T>(clazz: angular.IService<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid service');
    }
    this.native.service(clazz.identifier, clazz);
    return this;
  }

  directive(clazz: angular.IDirective): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid directive');
    }
    this.native.directive(clazz.identifier, this.createFactory(clazz));
    return this;
  }

  factory<T>(clazz: angular.IFactory<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid factory');
    }
    this.native.factory(clazz.identifier, clazz);
    return this;
  }

  provider<T>(clazz: angular.IProvider<T>): angular.IModule {
    if (!clazz || typeof clazz !== 'function') {
      throw new Error('Invalid provider');
    }
    this.native.provider(clazz.identifier, clazz);
    return this;
  }

  createFactory(clazz: any): any {

    if (!clazz || !clazz.$inject) {
      throw new Error('Invalid class provided');
    }

    var factory: angular.IFactory<any> = (...params: any[]): any => {

      function constructor(): void {
        return clazz.apply(this, params);
      }

      constructor.prototype = clazz.prototype;

      var dummy: any = constructor;

      return new dummy;
    };

    factory.$inject = clazz.$inject;

    return factory;
  }
}
