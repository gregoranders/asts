/// <reference path="../../library.d.ts" />
'use strict';

import {VERSION,NAME,SERVICE} from "./Version";

describe('AuthenticationModule Version', (): void => {

  it('should export VERSION', (): void => {
    expect(VERSION).toBe('0.0.1');
  });

  it('should export NAME', (): void => {
    expect(NAME).toBe('com.web.authentication');
  });

  it('should export SERVICE', (): void => {
    expect(SERVICE).toBe('com.web.authentication.service');
  });

});
