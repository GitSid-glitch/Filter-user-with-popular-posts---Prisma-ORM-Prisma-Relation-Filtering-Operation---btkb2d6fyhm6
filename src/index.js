const { prisma } = require("../db/config");

async function findUsersWithPopularPosts() {
  // Write your code here
  try {
    const users = await prisma.user.findMany({
      where: {
        posts: {
          some: {
            likes: {
              gt: 100, // more than 100 likes
            },
          },
        },
      },
    });
    return users; // complete user objects
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

module.exports = { findUsersWithPopularPosts };
