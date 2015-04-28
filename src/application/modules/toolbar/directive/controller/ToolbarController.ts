/// <reference path="../../../../library.d.ts" />

import {VERSION,NAME,URL,YEAR} from '../../../../library/Version';
import {BaseController} from '../../../../library/BaseController';

interface ILanguage {
  code: string;
  label: string;
}

interface ITheme {
  code: string;
  label: string;
}

/**
 * ToolbarController.
 *
 * @see https://docs.angularjs.org/guide/controller
 */
export class ToolbarController extends BaseController {

  static $inject: string[] = [
    '$scope',
    '$translate'
  ];

  languages: ILanguage[] = [
    {code: 'en_US', label: 'asts.language.english'},
    {code: 'de_DE', label: 'asts.language.german'},
  ];

  language: string = null;

  version: string = VERSION;

  url: string = URL;

  year: string = YEAR;

  constructor($scope: angular.IScope<ToolbarController>, private $translate: any) {
    super($scope);

    this.language = this.languages[0].code;

    this.language = $translate.preferredLanguage();

    $scope.$watch('vm.language', (newValue: any, oldValue: any): void => {
      if (newValue && oldValue && newValue !== oldValue) {
        this.$translate.use(newValue);
      }
    });
  }
}
