/// <reference path="../../../library.d.ts" />
'use strict';

import {BaseHttpService} from '../../../library/BaseHttpService';

export class ScaffoldHttpService extends BaseHttpService<number> {

  static identifier: string = 'ScaffoldHttpService';

  static URL:string = '/scaffold';

  process():any {

    var deferred = this.$q.defer();

    var req:any = {
      method: 'POST',
      url: ScaffoldHttpService.URL,
      data: {
      }
    };

    this.$http(req)
      .then((response:any):any => {
        if (response.status !== 200) {
          deferred.reject(response);
        }

        deferred.resolve(response.data);
      })
      .catch((response:any):void => {
        deferred.reject(response);
      });

    return deferred.promise;
  }
}
