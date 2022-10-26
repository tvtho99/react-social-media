import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Socical Media</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est
            optio natus blanditiis fugit corporis voluptates accusamus! Laborum
            nesciunt explicabo omnis nostrum adipisci ipsa ab magni, rem cum
            molestias provident.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
