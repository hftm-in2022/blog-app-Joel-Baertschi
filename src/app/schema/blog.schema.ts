import { z } from 'zod';

// Definition des Comment-Schemas
const CommentSchema = z.object({
  author: z.string(),
  content: z.string(),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  id: z.number(),
  updatedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
});

// Definition des Blog-Schemas
const BlogSchema = z.object({
  author: z.string(),
  comments: z.number(), // Changed from array to number
  content: z.string().optional(), // Optional as per your previous definition, though not seen in response
  contentPreview: z.string(),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  createdByMe: z.boolean(),
  headerImageUrl: z.string().url().optional(),
  id: z.number(),
  likedByMe: z.boolean(),
  likes: z.number(),
  title: z.string(),
  updatedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
});

// Definition des BlogResponse-Schemas
const BlogResponseSchema = z.object({
  data: z.array(BlogSchema), // Hier wird das Blog-Schema verwendet
  maxPageSize: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
});

// Exportiere die Schemas für die Verwendung in anderen Teilen deiner Anwendung
export { BlogResponseSchema, BlogSchema, CommentSchema };
