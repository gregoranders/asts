import {NAME} from './Version';
import {BaseModule} from '../../library/BaseModule';

/**
 * ModuleConfiguration.
 */
class ThemeModuleConfiguration  {

  static $inject: string[] = [
    NAME,
    '$mdThemingProvider'
  ];

  constructor(private component: any, private $mdThemingProvider: any) {
    $mdThemingProvider.alwaysWatchTheme(true);

    $mdThemingProvider.theme('red')
      .primaryPalette('red')
      .accentPalette('pink');

    $mdThemingProvider.theme('green')
      .primaryPalette('green')
      .accentPalette('light-green');

    $mdThemingProvider.theme('blue')
      .primaryPalette('blue')
      .accentPalette('light-blue');

    $mdThemingProvider.setDefaultTheme('blue');
  }
}

/**
 * ThemeModule.
 */
export class ThemeModule extends BaseModule {

  static identifier:string = NAME;

  /**
   * ThemeModule constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(public baseURL: string) {
    super(ThemeModule.identifier, ['ngMaterial'], ThemeModuleConfiguration);
  }
}
