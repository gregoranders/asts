/// <reference path="../../../library.d.ts" />
'use strict';

import angular from 'angular'; angular;
import {AuthenticationService} from "./AuthenticationService"; AuthenticationService;
import 'angular-mocks';

'use strict';

describe('AuthenticationService', (): void => {

  var $httpBackend: any;

  beforeEach( inject((_$httpBackend_): void => {
    $httpBackend = _$httpBackend_;

  }));

  it('should call httpBackend', (): void => {
    expect($httpBackend).toBeDefined();
  });

});
