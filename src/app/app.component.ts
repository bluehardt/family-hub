import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'family-hub';

  constructor(private http: HttpClient) {}

  // tmp to be removed
  instructions: any[] = [];
  loading$ = new BehaviorSubject(false);

  getLego(setNumber: string) {
    this.loading$.next(true);

    this.http
      .get<any[]>(
        `https://everything-be.vercel.app/api/lego/instructions/${setNumber}`
      )
      .subscribe({
        next: (res) => {
          this.instructions = res?.sort(
            (a, b) => a.sequence.element - b.sequence.element
          );
          console.log('lego?', this.instructions);
        },
        error: () => {
          this.loading$.next(false);
        },
        complete: () => {
          this.loading$.next(false);
        },
      });
  }
}
