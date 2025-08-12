import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is I3 page <Link href={`/i1`}>I1</Link>
    </div>
  );
};

export default page;
