import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

function About() {
  return (
    <>
      <Header />
      <h1>About page</h1>
      <div className="flex gap-4 justify-center items-center">
        <Button size="sm" shape="rounded-sm" />
        <Button size="md" shape="rounded-md" />
        <Button size="lg" shape="rounded-full" />
      </div>
    </>
  );
}

export default About;
