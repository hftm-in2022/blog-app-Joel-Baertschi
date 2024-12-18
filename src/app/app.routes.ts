import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { LoadingStateService } from './core/services/loading-state.service';
import { finalize, lastValueFrom } from 'rxjs';
import {
  BlogBackendService,
  BlogDetails,
  Entries,
} from './core/services/blog-backend.service';

export const entriesResolver: ResolveFn<Entries> = async () => {
  const blogBackendService = inject(BlogBackendService);
  return await lastValueFrom(blogBackendService.getBlogPosts());
};

// Resolver für die Detailseite
export const blogDetailResolver: ResolveFn<BlogDetails> = (route) => {
  const blogService = inject(BlogBackendService);
  const idParam = route.paramMap.get('id');
  const loadingService = inject(LoadingStateService);
  const blogId = Number(idParam);

  loadingService.setLoadingState(true);
  return blogService
    .getBlogById(blogId)
    .pipe(finalize(() => loadingService.setLoadingState(false)));
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
  {
    path: 'detail',
    loadChildren: () =>
      import('./features/blog-detail-page/blog-detail-page.routes'),
  },
];
