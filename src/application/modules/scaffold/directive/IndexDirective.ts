/// <reference path="../../../library.d.ts" />
'use strict';

import {BaseDirective} from '../../../library/BaseDirective';

export class IndexDirective extends BaseDirective {

  static identifier: string = 'indexDirective';

  template: string = '<h3>index directive</h3>';
}
