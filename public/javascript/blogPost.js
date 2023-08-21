const urlParams = new URLSearchParams(window.location.search);

async function getBlogData() {
  const blogDataRes = await fetch(
    `http://localhost:3333/api/${urlParams.get("post-id")}`
  );
  const blogData = await blogDataRes.json();
  return blogData;
}

const blogData = getBlogData()
  .then((data) => {
    displayContent(data[0]);
  })
  .catch((err) => {
    console.log(err);
  });

function displayContent(postData) {
  const postTitle = document.getElementById("title");
  const postContent = document.getElementById("content");
  const featuredImage = document.getElementById("featuredImage");

  postTitle.innerText = postData.postName;
  postContent.innerText = postData.postContent;
  getImage(featuredImage, postData);
}

async function getImage(node, post) {
  await fetch(`http://localhost:3333/api/image/${post._id}`).then(() => {
    node.setAttribute("src", `http://localhost:3333/api/image/${post._id}`);
  });
}
