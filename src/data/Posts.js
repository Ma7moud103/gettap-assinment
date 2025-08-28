export async function getPosts(numberOfPosts = 10) {
  const [postsRes, usersRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`),
    fetch("https://jsonplaceholder.typicode.com/users")
  ]);

  const posts = await postsRes.json();
  const users = await usersRes.json();

  return posts.map((post, i) => {
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - i);
    return {
      ...post,
      user: users.find((user) => user.id === post.userId),
      createdAt: createdAt.toISOString()
    };
  });
}
