import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { z } from 'zod';

const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
  headerImageUrl: z.string().optional(),
});

const BlogArraySchema = z.array(BlogSchema);

const EntriesSchema = z.object({
  data: BlogArraySchema,
  pageIndex: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
  maxPageSize: z.number(),
});

const CommentSchema = z.object({
  id: z.number(),
  content: z.string(),
  author: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
});

const BlogDetailsSchema = BlogSchema.extend({
  updatedAt: z.string(),
  createdAt: z.string(),
  content: z.string(),
  comments: z.array(CommentSchema),
}).partial({ contentPreview: true });

export type Blog = z.infer<typeof BlogSchema>;

export type Entries = z.infer<typeof EntriesSchema>;

export type BlogDetails = z.infer<typeof BlogDetailsSchema>;

@Injectable({
  providedIn: 'root',
})
export class BlogBackendService {
  httpClient = inject(HttpClient);

  getBlogPosts(): Observable<Entries> {
    return this.httpClient
      .get<Entries>(`${environment.serviceUrl}/entries`)
      .pipe(map((entries) => EntriesSchema.parse(entries)));
  }

  getBlogById(id: number): Observable<BlogDetails> {
    return this.httpClient
      .get<BlogDetails>(`${environment.serviceUrl}/entries/${id}`)
      .pipe(map((blogDetails) => BlogDetailsSchema.parse(blogDetails)));
  }
}
