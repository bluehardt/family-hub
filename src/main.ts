/// <reference types="@angular/localize" />

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import '@angular/localize/init';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';

// registerLocaleData(localePl, 'it-IT', localePlExtra);

platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
    // providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  })
  .catch((err) => console.error(err));
