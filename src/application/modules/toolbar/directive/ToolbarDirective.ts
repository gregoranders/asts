import {NAME} from '../Version';
import {BaseDirective} from '../../../library/BaseDirective';

import {ToolbarController} from './controller/ToolbarController';

export class ToolbarDirective extends BaseDirective {

  static $inject: string[] = [
    NAME
  ];

  static identifier: string = 'toolbarDirective';

  templateUrl: string = '/directive/view/toolbar.html';

  controller: any = ToolbarController;

  constructor(component: any) {
    super();
    var baseURL: string = component.baseURL;

    this.templateUrl = baseURL + this.templateUrl;
  }
}
