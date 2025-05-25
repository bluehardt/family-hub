import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LegoService {
  constructor(private http: HttpClient) {}

  getLegoSet(setNumber: number): Observable<any> {
    return this.http.get<any[]>(
      `https://everything-be.vercel.app/api/lego/instructions/${setNumber}`
    );
  }

  getLegoSetInstructions(setNumber: number): Observable<any[]> {
    return this.http
      .get<any[]>(
        `https://everything-be.vercel.app/api/lego/instructions/${setNumber}`
      )
      .pipe(
        map((res) =>
          res.sort((a, b) => a.sequence.element - b.sequence.element)
        )
      );
  }
}
