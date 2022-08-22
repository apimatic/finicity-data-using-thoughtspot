/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, Schema, string } from '../schema';

export interface InstitutionBranding {
  logo: string;
  alternateLogo: string | null;
  icon: string;
  alternateIcon: string;
  primaryColor: string;
  secondaryColor: string | null;
  gradientColorTop: string;
  gradientColorBottom: string;
  tile: string;
  tileSmall: string | null;
  buttonTextColor: string;
  [key: string]: unknown;
}

export const institutionBrandingSchema: Schema<InstitutionBranding> = expandoObject(
  {
    logo: ['logo', string()],
    alternateLogo: ['alternateLogo', nullable(string())],
    icon: ['icon', string()],
    alternateIcon: ['alternateIcon', string()],
    primaryColor: ['primaryColor', string()],
    secondaryColor: ['secondaryColor', nullable(string())],
    gradientColorTop: ['gradientColorTop', string()],
    gradientColorBottom: ['gradientColorBottom', string()],
    tile: ['tile', string()],
    tileSmall: ['tileSmall', nullable(string())],
    buttonTextColor: ['buttonTextColor', string()],
  }
);
