import { blogDetailResolver } from '../../app.routes';
import { Routes } from '@angular/router';
import { BlogDetailPageComponent } from './blog-detail-page.component';

const BLOG_DETAIL_PAGE_ROUTES: Routes = [
  {
    path: ':id',
    component: BlogDetailPageComponent,
    resolve: { blog: blogDetailResolver },
  },
];

export default BLOG_DETAIL_PAGE_ROUTES;
