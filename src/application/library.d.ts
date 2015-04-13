
declare function describe(description: string, specDefinitions: () => void): void;

declare function spyOn(obj: any, method: string): any;

declare function it(expectation: string, assertion: () => void): void;

declare function expect(condition: any): any;

declare var element: any;

declare function before(before: () => void): any;
declare function beforeEach(before: () => void): any;

interface IProtractorBy {
  css(selector: string): any;
  id(selector: string): any;
  model(selector: string): any;
  binding(selector: string): any;
}

declare var by: IProtractorBy;

declare var browser: any;

declare module jasmine {
  function any(expression: any): any;
}

/**
 * AngularJS.
 *
 * @see https://docs.angularjs.org
 */
declare module angular {

  /**
   * Identifier used when registering.
   *
   * When registering a controller/service/module/factory... Angular uses the following syntax:
   *
   * <code>
   *  angular.module('foo', []).controller('name', function() {});
   * </code>
   *
   * This identifier is used as 'name'.
   */
  interface IIdentifier {
    identifier?: string;
  }

  /**
   * Angular Dependency Injection.
   *
   * Angular DI mechanism works like this. Given a function
   *
   * <code>
   * function($service, $factory) {
   *  ...
   * }
   * </code>
   *
   * Angular will inject something called $service and $factory as the parameters when calling this function.
   * When minimising your code these parameters will most certainly be altered, breaking DI.
   * This static property maps the parameters to string values that will not be altered.
   *
   * @see https://docs.angularjs.org/guide/di
   */
  interface IInject {
    $inject?: string[];
  }

  /**
   * Angular Scope.
   *
   * @see https://docs.angularjs.org/guide/scope
   * @see https://github.com/johnpapa/angular-styleguide#style-y032
   */
  interface IScope<T extends IController<IScope<any>>> {
    vm: T;
  }

  /**
   * Angular Controller.
   *
   * @see https://docs.angularjs.org/guide/controller
   */
  interface IController<T extends IScope<IController<any>>> extends IInject, IIdentifier {
  }

  /**
   * Angular Service.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IService<T> extends IInject, IIdentifier  {
  }

  /**
   * Angular Service.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IHttpService<T> extends IService<T>  {
  }

  /**
   * Angular Directive.
   *
   * @see https://docs.angularjs.org/guide/directive
   */
  interface IDirective extends IInject, IIdentifier  {
  }

  /**
   * Angular Module Configuration.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  interface IModuleConfiguration extends IInject {
  }

  /**
   * Angular Module Configuration.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  interface IModuleRunConfiguration extends IInject {
  }

  /**
   * Angular Factory Provider.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IFactory<T> extends IInject, IIdentifier {
  }

  /**
   * Angular Service Provider.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IProvider<T> extends IInject, IIdentifier {
  }

  /**
   * Angular Constant Provider.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IConstant<T> extends IIdentifier {
    constant: T;
  }

  /**
   * Angular Value Provider.
   *
   * @see https://docs.angularjs.org/guide/providers
   */
  interface IValue<T> extends IIdentifier {
    value: T;
  }

  /**
   * Angular Module.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  interface IModule extends IIdentifier{

    config(configuration: IModuleConfiguration): IModule;

    run(configuration: IModuleRunConfiguration): IModule;

    constant<T>(clazz: IConstant<T>): IModule;

    value<T>(clazz: IValue<T>): IModule;

    factory<T>(factory: IFactory<T>): IModule;

    provider<T>(provider: IProvider<T>): IModule;

    controller(clazz: IController<IScope<any>>): IModule;

    service<T>(clazz: IService<T>): IModule;

    directive(clazz: IDirective): IModule;
  }

  interface IBootstrapOptions {
    strictDi: boolean;
  }

  /**
   * Angular.
   *
   * @see https://docs.angularjs.org/api/ng/function
   */
  interface IAngular {

    /**
     * @see https://docs.angularjs.org/api/ng/function/angular.module
     */
    module(name: string, dependencies: string[], configuration?: any): IModule;

    /**
     * @see https://docs.angularjs.org/api/ng/function/angular.bootstrap
     */
    bootstrap(document: Document, dependencies: string[], options?: IBootstrapOptions): void;
  }

  /**
   * Angular Route.
   *
   * @see https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
   */
  interface IRoute {

    /**
     * Template URL.
     */
    templateUrl: string;

    /**
     * Controller handling the route.
     */
    controller?: IController<any>
  }

  /**
   * Angular Route Provider.
   *
   * @see https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
   */
  interface IRouteProvider {

    when(path: string, route: IRoute): IRouteProvider;

    otherwise(route: IRoute): IRouteProvider;
  }

}

declare var angular: angular.IAngular;
