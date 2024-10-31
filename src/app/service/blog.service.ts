import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogResponse } from '../interface/blog';
import { BlogResponseSchema } from '../schema/blog.schema';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io//';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.apiUrl + '/entries').pipe(
      map((response) => {
        const result = BlogResponseSchema.safeParse(response);
        if (!result.success) {
          console.error('Invalid response data:', result.error.format());
          throw new Error('Invalid response data');
        }
        return result.data; // Rückgabe der validierten Daten
      }),
    );
  }
}
