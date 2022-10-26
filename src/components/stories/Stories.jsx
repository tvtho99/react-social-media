import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.scss';

// TEMPORARY
const stories = [
  {
    id: 1,
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1666668973700-e45696248d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  },
  {
    id: 2,
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1666668973700-e45696248d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  },
  {
    id: 3,
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1666668973700-e45696248d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  },
  {
    id: 4,
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1666668973700-e45696248d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story" key={currentUser.id}>
        <img src={currentUser.avatar} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.avatar} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
