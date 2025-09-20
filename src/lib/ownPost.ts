import { prisma } from "@/lib/prisma";

export async function getOwnPosts(userId: string) {
  return await prisma.post.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      published: true,
      updateAt: true,
    },
    orderBy: {
      updateAt: "desc",
    },
  });
}

export async function getOwnPost(userId: string, postId: string) {
  return await prisma.post.findFirst({
    where: {
      AND: [
        { authorId: userId }, //左側がデータベースの列、右側が引数の名前
        { id: postId },
      ],
    },
    select: {
      id: true,
      title: true,
      content: true,
      topImage: true,
      author: true,
      published: true,
      createdAt: true,
      updateAt: true,
    },
  });
}
