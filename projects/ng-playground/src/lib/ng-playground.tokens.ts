import { InjectionToken, Type } from '@angular/core';

export interface AbstractRoute {
  title: string;
  children: CustomRoute[];
}

export interface LeafRoute {
  title: string;
  component: Type<any>;
}

export type CustomRoute = AbstractRoute | LeafRoute;

export const PLAYGROUND_ROUTES = new InjectionToken<any>('PLAYGROUND_ROUTES');
export const PLAYGROUND_CUSTOM_MENU_COMPONENT = new InjectionToken<any>('PLAYGROUND_CUSTOM_MENU_COMPONENT');
