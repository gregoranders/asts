/// <reference path='../../../application/library.d.ts' />
'use strict';

describe('Authentication Module Login', () => {

  var title: string = 'ES6',
    username: any,
    password: any,
    button: any;

  beforeEach( ():void => {
    browser.get('/#/login');

    username = element(by.model('vm.username'));
    password = element(by.model('vm.password'));

    button = element(by.css('.form--button'));
  });

  it('should have the appropriate title', () => {
    expect(browser.getTitle()).toEqual(title);
  });

  it('should have the username defined', () => {
    expect(username).toBeDefined();
  });

  it('should have empty username', () => {
    expect(username.getText()).toBe('');
  });

  it('should have the password defined', () => {
    expect(password).toBeDefined();
  });

  it('should have empty password', () => {
    expect(password.getText()).toBe('');
  });

  it('should have the login button defined', () => {
    expect(button).toBeDefined();
  });

  it('should have the login button with "Login text', () => {
    expect(button.getText()).toBe('Login');
  });

});
