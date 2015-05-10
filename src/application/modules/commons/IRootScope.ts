/// <reference path="../../library.d.ts" />
'use strict';

export interface IRootScope extends angular.IScope<angular.IController<IRootScope>> {
  authenticated: boolean;

  authenticatedUser: string;
}
