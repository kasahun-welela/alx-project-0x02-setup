import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";

interface Post {
  title: string;
  content: string;
}

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: "Card 1", content: "This is the first card" },
    { title: "Card 2", content: "This is the second card" },
    { title: "Card 3", content: "This is the third card" },
  ]);

  const handleNewPost = (data: Post) => {
    setPosts([...posts, data]);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Home page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create New Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewPost}
      />
    </>
  );
}

export default Home;
