import { InjectionToken, Type } from '@angular/core';
import { Route } from '@angular/router';

export interface AbstractRoute {
  title: string;
  children: CustomRoute[];
}

export interface LeafRoute {
  title: string;
  component: Type<any>;
}

export type CustomRoute = AbstractRoute | LeafRoute;

export type RouteWithLink = Route & {
  title: string;
  children: RouteWithLink[];
  routerLink: string[];
};

export const PLAYGROUND_ROUTES = new InjectionToken<RouteWithLink[]>('PLAYGROUND_ROUTES');
