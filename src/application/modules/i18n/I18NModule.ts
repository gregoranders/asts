/// <reference path="../../library.d.ts" />
'use strict';

import {NAME} from './Version';
import {BaseModule} from '../../library/BaseModule';

/**
 * ModuleConfiguration.
 */
class I18NModuleConfiguration implements angular.IModuleConfiguration {

  static $inject: string[] = [
    NAME,
    '$translateProvider'
  ];

  constructor(private component: I18NModule, private $translateProvider: any) {

    $translateProvider.useStaticFilesLoader({
      prefix: component.baseURL + '/data/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en_US');
  }
}

/**
 * I18NModule.
 */
export class I18NModule extends BaseModule {

  static identifier:string = NAME;

  /**
   * I18NModule constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(public baseURL: string) {
    super(I18NModule.identifier, ['pascalprecht.translate'], I18NModuleConfiguration);
  }
}
