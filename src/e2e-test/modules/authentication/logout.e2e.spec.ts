/// <reference path='../../../application/library.d.ts' />
'use strict';

describe('Authentication Module Login', () => {

  var title = 'ES6';

  browser.get('/#/logout');

  it('should have the appropriate title', () => {
    expect(browser.getTitle()).toEqual(title);
  });

});
