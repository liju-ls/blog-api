const blogPostResponse = gettingBlogPosts();
const blog = document.getElementById("blog");

blogPostResponse
  .then((data) => addBlogPosts(data))
  .catch((err) => console.log(err));

function addBlogPosts(blogPosts) {
  blogPosts.forEach((post) => {
    const postCard = card(post);
    blog.append(postCard);
  });
  singlePostRedirect();
}

function card(blogData) {
  let card = document.createElement("div");
  let title = document.createElement("h3");
  let content = document.createElement("p");
  let featuredImage = document.createElement("img");

  card.setAttribute("data", blogData._id);
  card.className = "card";
  getImage(featuredImage, blogData);

  title.innerText = blogData.postName;
  content.innerText = blogData.postContent;

  card.append(featuredImage, title, content);
  return card;
}

async function gettingBlogPosts() {
  const data = await fetch("http://localhost:3333/api/posts");
  const posts = await data.json();
  return posts;
}

async function getImage(node, post) {
  await fetch(`http://localhost:3333/api/image/${post._id}`).then(() => {
    node.setAttribute("src", `http://localhost:3333/api/image/${post._id}`);
  });
}

function singlePostRedirect() {
  let posts = blog.children;
  posts = [...posts];
  posts.forEach((post) => {
    post.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `http://localhost:3333/api/posts/article?post-id=${post.getAttribute(
          "data"
        )}`
      );
    });
  });
}
