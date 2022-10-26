import Post from '../post/Post';
import './posts.scss';

//TEMPORARY
const posts = [
  {
    id: 1,
    name: 'John Doe',
    userId: 1,
    profilePic:
      'https://images.unsplash.com/photo-1666551364866-a9c8d279c59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img: 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 2,
    name: 'Jane Doe',
    userId: 2,
    profilePic:
      'https://images.unsplash.com/photo-1666551364866-a9c8d279c59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    desc: 'Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.',
    img: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
