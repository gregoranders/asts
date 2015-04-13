/// <reference path='../application/library.d.ts' />
'use strict';

describe('index', () => {

  var title = 'ES6';

  browser.get('/#/');

  it('should have the appropriate title', () => {
    expect(browser.getTitle()).toEqual(title);
  });

});
