/// <reference path="../../library.d.ts" />
'use strict';

export interface IRootScope extends angular.IScope<angular.IController> {
  authenticated: boolean;

  authenticatedUser: string;
}
