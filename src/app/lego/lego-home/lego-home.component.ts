import { Component } from '@angular/core';
import { LegoService } from '../_services/lego.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lego-home',
  standalone: false,
  templateUrl: './lego-home.component.html',
  styleUrl: './lego-home.component.scss',
})
export class LegoHomeComponent {
  constructor(private legoService: LegoService) {}

  // tmp to be removed
  instructions: any[] = [];
  loading$ = new BehaviorSubject(false);

  getLego(setNumber: string) {
    this.loading$.next(true);

    this.legoService.getLegoSetInstructions(Number(setNumber)).subscribe({
      next: (res) => {
        this.instructions = res;
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
