import { NgIf, AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Entries } from '../../core/services/blog-backend.service';
import { BlogOverviewCardComponent } from '../../shared/blog-overview-card/blog-overview-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-overview-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, BlogOverviewCardComponent, RouterLink],
  templateUrl: './blog-overview-page.component.html',
  styleUrl: './blog-overview-page.component.scss',
})
export class BlogOverviewPageComponent {
  @Input({ required: true }) model!: Entries;
}
