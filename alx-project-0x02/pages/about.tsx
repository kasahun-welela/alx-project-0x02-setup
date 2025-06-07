import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

function About() {
  return (
    <>
      <Header />
      <h1>About page</h1>
      <div className="flex gap-4 justify-center items-center">
        <Button size="small" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />
      </div>
    </>
  );
}

export default About;
