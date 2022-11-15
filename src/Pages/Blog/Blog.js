import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";
import DisplayBlogPost from "./DisplayBlogPost/DisplayBlogPost";

const Blog = () => {
  UseTitle('Blog')
  const allPosts = useLoaderData();
  return (
    <div className="container px-4 mx-auto mt-12 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
        {allPosts.map((posts) => (
          <DisplayBlogPost key={posts._id} posts={posts}></DisplayBlogPost>
        ))}
      </div>
    </div>
  );
};

export default Blog;


