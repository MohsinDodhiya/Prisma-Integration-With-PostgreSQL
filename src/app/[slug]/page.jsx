import prisma from "@/lib/db";  

export default async function Post({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col justify-center items-center text-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <p className=" text-center">{post?.content}</p>
      </main>
    </div>
  );
}
