import { Metadata } from "next";

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
  const { productId } = await params; // ✅ Await params
  return <div>Product details {productId}</div>;
};

export default Page;
