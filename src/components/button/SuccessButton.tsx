"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
const HomeButton = () => {
  const router = useRouter();
  const handler = () => {
    router.push("/");
  };

  return (
    <>
      <Button color="primary" variant="shadow" onClick={handler}>
        Home
      </Button>
    </>
  );
};

export default HomeButton;
