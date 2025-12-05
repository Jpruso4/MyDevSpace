import { ApplicationConfig, importProvidersFrom, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Custom loader para cargar las traducciones
export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient, private platformId: Object) {}

  getTranslation(lang: string): Observable<any> {
    // Obtener base href del DOM si está en el navegador
    let baseHref = '/';
    if (isPlatformBrowser(this.platformId)) {
      const baseTag = document.querySelector('base');
      baseHref = baseTag?.getAttribute('href') || '/';
    }
    
    // Asegurar que baseHref termine con /
    if (!baseHref.endsWith('/')) {
      baseHref += '/';
    }
    
    // Construir la ruta absoluta
    const path = `${baseHref}assets/i18n/${lang}.json`;
    return this.http.get(path);
  }
}

// Factory function para cargar las traducciones
export function HttpLoaderFactory(http: HttpClient, platformId: Object) {
  return new CustomTranslateLoader(http, platformId);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient, PLATFORM_ID]
        }
      })
    )
  ]
};
