"use client";
import React, { startTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh(); // refresh the current route
      reset(); // reset the error boundary
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <p>{error.message}</p>
      <button onClick={reload}>Try Again</button>
    </div>
  );
}
