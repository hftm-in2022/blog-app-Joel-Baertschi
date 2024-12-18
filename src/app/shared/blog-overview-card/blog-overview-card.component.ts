/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

export type Blog = {
  author: string;
  comments: number;
  contentPreview: string;
  createdByMe: boolean;
  id: number;
  likedByMe: boolean;
  likes: number;
  title: string;
};

@Component({
  selector: 'app-blog-overview-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './blog-overview-card.component.html',
  styleUrl: './blog-overview-card.component.scss',
})
export class BlogOverviewCardComponent {
  @Input({ required: true }) blog!: Blog;
}
