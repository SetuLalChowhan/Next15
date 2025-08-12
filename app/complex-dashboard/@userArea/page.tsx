import React from "react";

const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  return <div>User Aarea</div>;
};

export default page;
