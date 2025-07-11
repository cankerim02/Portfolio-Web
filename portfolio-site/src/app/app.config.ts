import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    // importProvidersFrom(HttpClientModule) //eski HttpClientModule'u kullanmak yerine, SSR uyumlu hale getirmek için aşağıdaki satırı kullanıyoruz
    provideHttpClient(withFetch()), //SSR uyumlu hale getirir
    provideClientHydration()
  ]
};
