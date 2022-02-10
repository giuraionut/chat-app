import user from 'components/user/user';
import './welcome.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const friends = () => {
  return (
    <>
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
    </>
  );
};
const welcome = () => {
  const [showFriends, setShowFriends] = useState(false);
  const style = {
    minheight: '0px',
    maxheight: '150px',
  };

  return (
    <div className="welcome-wrapper">
      <div className="left-panel">
        <div
          className="friends-button text"
          onClick={() => {
            setShowFriends(!showFriends);
          }}
        >
          <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>{' '}
          <span>Friends</span>
        </div>
        <div
          className="friends-list"
          style={{ height: showFriends ? style.maxheight : style.minheight }}
        >
          {showFriends ? friends() : ''}
        </div>
      </div>
      <div className="main-window text">asdads</div>
    </div>
  );
};

export default function Welcome() {
  return welcome();
}
