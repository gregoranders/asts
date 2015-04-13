import {NAME} from './Version';
import {BaseModule} from '../../library/BaseModule';
import {BaseDirective} from '../../library/BaseDirective';
import {BaseModuleRouteConfiguration} from '../../library/BaseModuleRouteConfiguration';

import {IndexController} from './controller/IndexController';
import {IndexDirective} from './directive/IndexDirective';

import {ScaffoldService} from './service/ScaffoldService';
import {ScaffoldHttpService} from './service/ScaffoldHttpService';

/**
 * RouteConfiguration.
 */
class RouteConfiguration extends BaseModuleRouteConfiguration {

  init(): void {
    super.when('/', {
      templateUrl: 'application/modules/scaffold/view/index.html',
      controller: IndexController
    })
  }

}

/**
 * ScaffoldModule.
 */
export class ScaffoldModule extends BaseModule {

  static identifier:string = NAME;

  /**
   * ScaffoldModule constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(public baseURL: string) {
    super(ScaffoldModule.identifier, ['ngRoute', 'com.web.authentication'], RouteConfiguration);

    this.directive(IndexDirective);

    this.service(ScaffoldService);
    this.service(ScaffoldHttpService);
  }
}
