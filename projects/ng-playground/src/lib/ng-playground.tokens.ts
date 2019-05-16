import { InjectionToken, Type } from '@angular/core';
import { Route, ResolveData } from '@angular/router';

export interface AbstractRoute {
  title: string;
  children: CustomRoute[];
  resolve?: ResolveData;
}

export interface LeafRoute {
  title: string;
  component: Type<any>;
  resolve?: ResolveData;
}

export type CustomRoute = AbstractRoute | LeafRoute;

export type RouteWithLink = Route & {
  title: string;
  children: RouteWithLink[];
  routerLink: string[];
};

export type PlaygroundRoutes = RouteWithLink[];

export const PLAYGROUND_ROUTES = new InjectionToken<any>('PLAYGROUND_ROUTES');