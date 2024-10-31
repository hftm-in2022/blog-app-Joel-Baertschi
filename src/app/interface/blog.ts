// TypeScript interfaces for Blog and BlogResponse

export interface Blog {
  author: string;
  comments: number; // This is a number, as per your response
  contentPreview: string;
  createdAt: string; // Assuming ISO 8601 string
  createdByMe: boolean;
  headerImageUrl?: string; // Optional
  id: number;
  likedByMe: boolean;
  likes: number;
  title: string;
  content?: string; // Optional, as it might not always be present
  updatedAt: string; // Assuming ISO 8601 string
}

export interface BlogResponse {
  data: Blog[]; // Array of Blog objects
  maxPageSize: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}
