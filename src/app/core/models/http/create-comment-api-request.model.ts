export interface CreateCommentApiRequest {
  content: string;
  parentCommentId?: number;
}
