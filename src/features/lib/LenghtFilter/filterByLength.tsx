import type { Post } from '../../../entities/posts/model/type/PostType';

const filterByLength = (posts: Post[], inputLenght: number): Post[] =>
  posts.filter((post) => post.title.length >= inputLenght);

export default filterByLength;
