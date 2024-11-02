import { createPost } from "@/actions/action";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <div className="min-h-screen p-8 sm:p-20 flex flex-col justify-center items-center text-center font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>
          <ul className="border-t border-b border-black/10 py-5 leading-8">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex items-center justify-between px-5"
              >
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <form
            action={createPost}
            className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg"
          >
            <h1 className="text-2xl font-semibold mb-6">Create a New Post</h1>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-left font-medium text-gray-700 mb-2"
              >
                Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-left font-medium text-gray-700 mb-2"
              >
                Content <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your content here"
                required
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Post
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
