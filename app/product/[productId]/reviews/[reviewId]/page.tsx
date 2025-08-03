import React from "react";

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const page = async ({ params }: Props) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      Raeview {reviewId} for Product {productId}
    </div>
  );
};

export default page;
