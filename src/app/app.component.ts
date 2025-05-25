import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'family-hub';

  sidebarExpanded = true;

  constructor(private router: Router) {
    const currentUrl = this.router.url;

    // Only redirect from root path
    if (currentUrl === '/' || currentUrl === '') {
      const browserLang = navigator.language || navigator.languages[0];
      const locale = browserLang.startsWith('pl') ? 'pl' : 'en-US';
      this.router.navigateByUrl(`/${locale}`);
    }
  }
}
