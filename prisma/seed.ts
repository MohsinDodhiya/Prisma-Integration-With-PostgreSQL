import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      username: "Alice",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          content: "https://www.prisma.io/nextjs",
          published: true,
          slug: "check-out-prisma-with-nextjs",
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      username: "Bob",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            published: true,
            slug: "follow-prisma-on-twitter",
          },
          {
            title: "Follow Nexus on Twitter",
            content: "https://twitter.com/nexusgql",
            published: true,
            slug: "follow-nexus-on-twitter",
          },
        ],
      },
    },
  });
  const amina = await prisma.user.upsert({
    where: { email: "amina@example.com" },
    update: {},
    create: {
      email: "amina@example.com",
      username: "Amina",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Understanding Islamic Finance",
            content: "https://example.com/islamic-finance",
            published: true,
            slug: "understanding-islamic-finance",
          },
          {
            title: "Halal Investments 101",
            content: "https://example.com/halal-investments",
            published: true,
            slug: "halal-investments-101",
          },
        ],
      },
    },
  });

  const zain = await prisma.user.upsert({
    where: { email: "zain@example.com" },
    update: {},
    create: {
      email: "zain@example.com",
      username: "Zain",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Learning Arabic Language Basics",
            content: "https://example.com/arabic-basics",
            published: true,
            slug: "learning-arabic-language-basics",
          },
          {
            title: "The Importance of Charity in Islam",
            content: "https://example.com/importance-of-charity",
            published: true,
            slug: "importance-of-charity-in-islam",
          },
        ],
      },
    },
  });

  const farah = await prisma.user.upsert({
    where: { email: "farah@example.com" },
    update: {},
    create: {
      email: "farah@example.com",
      username: "Farah",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Islamic Architecture Around the World",
            content: "https://example.com/islamic-architecture",
            published: true,
            slug: "islamic-architecture-around-the-world",
          },
        ],
      },
    },
  });

  const irfan = await prisma.user.upsert({
    where: { email: "irfan@example.com" },
    update: {},
    create: {
      email: "irfan@example.com",
      username: "Irfan",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Daily Prayers and Their Importance",
            content: "https://example.com/daily-prayers",
            published: true,
            slug: "daily-prayers-importance",
          },
        ],
      },
    },
  });

  const yasmin = await prisma.user.upsert({
    where: { email: "yasmin@example.com" },
    update: {},
    create: {
      email: "yasmin@example.com",
      username: "Yasmin",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Exploring Islamic History",
            content: "https://example.com/islamic-history",
            published: true,
            slug: "exploring-islamic-history",
          },
          {
            title: "Fasting in Islam: A Guide",
            content: "https://example.com/fasting-in-islam",
            published: true,
            slug: "fasting-in-islam-guide",
          },
        ],
      },
    },
  });

  const adil = await prisma.user.upsert({
    where: { email: "adil@example.com" },
    update: {},
    create: {
      email: "adil@example.com",
      username: "Adil",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Islamic Calligraphy as Art",
            content: "https://example.com/islamic-calligraphy",
            published: true,
            slug: "islamic-calligraphy-as-art",
          },
          {
            title: "Understanding Hajj and Umrah",
            content: "https://example.com/hajj-and-umrah",
            published: true,
            slug: "understanding-hajj-umrah",
          },
        ],
      },
    },
  });

  const fatima = await prisma.user.upsert({
    where: { email: "fatima@example.com" },
    update: {},
    create: {
      email: "fatima@example.com",
      username: "Fatima",
      hashedPassWord: "hashedpasswordplaceholder",
      posts: {
        create: [
          {
            title: "Women's Rights in Islam",
            content: "https://example.com/womens-rights-in-islam",
            published: true,
            slug: "womens-rights-in-islam",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
