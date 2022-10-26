import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Pinterest,
  Place,
  Twitter,
} from '@mui/icons-material';
import './profile.scss';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="cover"
        />
        <img
          src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileCtn">
        <div className="profileUserInfo">
          <div className="left">
            <a href="https://facebook.com" target="blank">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="https://instagram.com" target="blank">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com" target="blank">
              <Twitter fontSize="large" />
            </a>
            <a href="https://linkedin.com" target="blank">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://pinterest.com" target="blank">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Shinagawa</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>
              <div className="item">
                <Language />
                <span>tvt.dev</span>
              </div>
            </div>
            <button>+ Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
