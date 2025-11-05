const filterByLength = (posts, inputLenght) =>
  posts.filter((post) => post.title.length >= inputLenght);

export default filterByLength;
