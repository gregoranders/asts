/// <reference path="../../library.d.ts" />

import {VERSION,NAME} from "./Version";

describe('AuthenticationModule Version', (): void => {

  it('should export VERSION', (): void => {
    expect(VERSION).toBe('0.0.1');
  });

  it('should export NAME', (): void => {
    expect(NAME).toBe('com.web.authentication');
  });

});
