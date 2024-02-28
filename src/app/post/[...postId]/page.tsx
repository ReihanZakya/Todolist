import React from "react";

export default function PostDetail({ params }: { params: { postId: string } }) {
  return <div>PostDetail {params.postId}</div>;
}
