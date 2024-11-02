"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/posts");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
  revalidatePath("/posts");
}


