/// <reference path="../../../../library.d.ts" />

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
    '$translate',
    '$mdTheming'
  ];

  languages: ILanguage[] = [
    {code: 'en_US', label: 'asts.language.english'},
    {code: 'de_DE', label: 'asts.language.german'},
  ];

  language: string = null;

  theme: string = null;

  themes: ITheme[] = [
    {code: 'red', label: 'asts.theme.red'},
    {code: 'green', label: 'asts.theme.green'},
    {code: 'blue', label: 'asts.theme.blue'},
  ];

  version: string = '0.0.1';

  url: string = 'http://github.com/gregoranders/asts';

  year: number = 2015;

  constructor($scope: angular.IScope<ToolbarController>, private $translate: any, private $mdTheming: any) {
    super($scope);

    this.language = this.languages[0].code;
    this.theme = this.themes[0].code;

    this.language = $translate.preferredLanguage();
    this.theme = $mdTheming.defaultTheme();

    $scope.$watch('vm.language', (newValue: any, oldValue: any): void => {
      if (newValue && oldValue && newValue !== oldValue) {
        this.$translate.use(newValue);
      }
    });

    $scope.$watch('vm.theme', (newValue: any, oldValue: any): void => {
      if (newValue && oldValue && newValue !== oldValue) {

      }
    });
  }
}
