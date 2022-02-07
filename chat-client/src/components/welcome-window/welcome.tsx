import user from 'components/user/user';
import './welcome.scss';

const welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="friends-list">
        {user(
          'John',
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
        )}
         {user(
          'Mark',
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
        )}
         {user(
          'Justin',
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
        )}
      </div>
      <div className="main-window">asdads</div>
    </div>
  );
};

export default function Welcome() {
  return welcome();
}
