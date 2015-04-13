import {NAME} from './Version';
import {BaseModule} from '../../library/BaseModule';

import {ToolbarDirective} from './directive/ToolbarDirective';

/**
 * ToolbarModule.
 */
export class ToolbarModule extends BaseModule {

  static identifier:string = NAME;

  /**
   * ToolbarModule constructor.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  constructor(public baseURL: string) {
    super(ToolbarModule.identifier, []);

    this.directive(ToolbarDirective);
  }
}
