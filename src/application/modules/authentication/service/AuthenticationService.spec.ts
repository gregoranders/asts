/// <reference path="../../../library.d.ts" />
'use strict';

import angular from 'angular'; angular;
import {AuthenticationService} from "./AuthenticationService"; AuthenticationService;
import 'angular-mocks';

'use strict';

describe('AuthenticationService', (): void => {

  var $httpBackend: any, $http: any, $q: any;

  beforeEach( inject((_$httpBackend_:any, _$http_:any, _$q_:any): void => {
    $httpBackend = _$httpBackend_;
    $http = _$http_;
    $q = _$q_;
  }));

  afterEach( (): void => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('login', (): void => {

    it('should resolve on Status 200', (): void => {

      $httpBackend.when('POST', AuthenticationService.LOGIN_URL).respond(200, {test: true}, {}, 'Authenticated');

      $httpBackend.expectPOST(AuthenticationService.LOGIN_URL, (param: any): boolean => {
        return 'username=user&password=pass' === param;
      });

      var testSubject: AuthenticationService = new AuthenticationService($http, $q);

      testSubject.login('user', 'pass')
        .then( (data: any): void => {
          expect(data.test).toBeTruthy();
        })
        .catch( (response: any): void => {
          expect(response).toBeNull();
        });

      $httpBackend.flush();
    });

    it('should reject on Status != 200', (): void => {

      $httpBackend.when('POST', AuthenticationService.LOGIN_URL).respond(201, {test: true}, {}, 'Unauthorized');

      $httpBackend.expectPOST(AuthenticationService.LOGIN_URL, (param: any): boolean => {
        return 'username=user&password=pass' === param;
      });

      var testSubject: AuthenticationService = new AuthenticationService($http, $q);

      testSubject.login('user', 'pass')
        .then( (data: any): void => {
          expect(data).toBeNull();
        })
        .catch( (response: any): void => {
          expect(response.data.test).toBeTruthy();
          expect(response.status).toBe(201);
          expect(response.statusText).toBe('Unauthorized');

        });

      $httpBackend.flush();
    });

    it('should reject on Status 401', (): void => {

      $httpBackend.when('POST', AuthenticationService.LOGIN_URL).respond(401, {test: true}, {}, 'Rejected');

      $httpBackend.expectPOST(AuthenticationService.LOGIN_URL);

      var testSubject: AuthenticationService = new AuthenticationService($http, $q);

      testSubject.login('user', 'pass')
        .then( (data: any): void => {
          expect(data).toBeNull();
        })
        .catch( (response: any): void => {
          expect(response.data.test).toBeTruthy();
          expect(response.status).toBe(401);
          expect(response.statusText).toBe('Rejected');
        });

      $httpBackend.flush();
    });

  });

  describe('logout', (): void => {

    it('should resolve on Status 200', (): void => {

      $httpBackend.when('POST', AuthenticationService.LOGOUT_URL).respond(200, {test: true}, {}, 'Logged out');

      $httpBackend.expectPOST(AuthenticationService.LOGOUT_URL);

      var testSubject: AuthenticationService = new AuthenticationService($http, $q);

      testSubject.logout()
        .then( (data: any): void => {
          expect(data.test).toBeTruthy();
        })
        .catch( (response: any): void => {
          expect(response).toBeNull();
        });

      $httpBackend.flush();
    });

    it('should reject on Status != 200', (): void => {

      $httpBackend.when('POST', AuthenticationService.LOGOUT_URL).respond(401, {test: true}, {}, 'Rejected');

      $httpBackend.expectPOST(AuthenticationService.LOGOUT_URL);

      var testSubject: AuthenticationService = new AuthenticationService($http, $q);

      testSubject.logout()
        .then( (data: any): void => {
          expect(data).toBeNull();
        })
        .catch( (response: any): void => {
          expect(response.data.test).toBeTruthy();
          expect(response.status).toBe(401);
          expect(response.statusText).toBe('Rejected');
        });

      $httpBackend.flush();
    });

  });

});
