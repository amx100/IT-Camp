const posts = [
  { title: "Central Intelligence", body: "Dwayne The Rock Johnson" },
  { title: "Central Intelligence", body: "Dwayne The Rock Johnson" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "post Three", body: "This is post three" });
