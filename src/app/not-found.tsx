"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  const handler = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Not Found</h2>
        <p className="text-gray-600 mb-8">The requested resource could not be found.</p>
        <Button
          color="primary"
          onClick={handler}
          className="transition-transform hover:translate-x-0.5"
          variant="shadow"
        >
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            className="inline-block mr-2"
          >
            <path
              d="M7.16504 17.0815L0.083374 9.99984L7.16504 2.91818"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M19.9167 10H0.281738"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
          </svg>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
