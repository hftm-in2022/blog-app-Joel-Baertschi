import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {
  BlogBackendService,
  Entries,
} from './core/services/blog-backend.service';

export const entriesResolver: ResolveFn<Entries> = async () => {
  const blogBackendService = inject(BlogBackendService);
  return await lastValueFrom(blogBackendService.getBlogPosts());
};

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./features/blog-overview-page/blog-overview-page.routes'),
    resolve: { model: entriesResolver },
  },
];
