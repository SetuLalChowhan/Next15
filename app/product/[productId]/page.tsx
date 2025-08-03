import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ productId: string }>; //
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params; // ✅ Await params
  return {
    title: `Product ${productId} | My Store`,
    description: `Details of product ${productId}.`,
  };
}

const Page = async ({ params }: Props) => {
  const { productId } = await params;
 

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Page loaded");
    }, 2000);
  });

   if (parseInt(productId) === 1) {
    throw new Error("Something went wrong to fetch this product");
  }
  // ✅ Await params
  if (parseInt(productId) > 10) {
    notFound();
  }

  return <div>Product details {productId}</div>;
};

export default Page;
