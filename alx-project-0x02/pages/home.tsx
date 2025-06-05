import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <h1>Home page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" content="This is the first card" />
        <Card title="Card 2" content="This is the second card" />
        <Card title="Card 3" content="This is the third card" />
      </div>
    </>
  );
}

export default Home;
