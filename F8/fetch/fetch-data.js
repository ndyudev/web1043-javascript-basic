let postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });
