import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fs" }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { articleId } = await params; // ✅ Await params
  const { lang } = await searchParams; // ✅ Await params
  return {
    title: `Article ${articleId} | ${lang}`,
    description: `Details of product ${articleId}.`,
  };
}

const page = async ({ params, searchParams }: Props) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div className=" flex flex-col gap-2">
      <h1>Article {articleId}</h1>
      <h1>Language {lang}</h1>

      <div className=" flex items-center gap-3">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fs`}>Francd</Link>
      </div>
    </div>
  );
};

export default page;
