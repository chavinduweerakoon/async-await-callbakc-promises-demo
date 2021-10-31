const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPosts() {
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
        reject("something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "post random", body: "this is post random" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//async-await *******************************************

// async function init() {
//   await createPost({ title: "post random", body: "this is post random" });
//   getPosts();
// }
// init();

//async await with fetch ********************************
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
}
getUsers();

//promise.all *******************************************

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Good Bye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/todos/").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
