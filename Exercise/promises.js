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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "post Three", body: "This is post three" })
.then(getPosts)
.catch(err => console.log(err));
