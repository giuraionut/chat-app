import room from 'components/group-chat/room/room';
import user from 'components/group-chat/user/user';

import category from './category/category';

import './group-chat-window.scss';
import role from './role';

const showUsers = () => {
  return (
    <div className="left-container">
      {role('Administrator')}
      {user(
        'John',
        'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
      )}
      {user(
        'Mark',
        'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
      )}
      {role('Mod')}
      {user(
        'Abigail',
        'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/07.jpg'
      )}
    </div>
  );
};

const showRooms = () => {
  return (
    <div className="left-container">
      {category('Category 1')}
      {room('Games')}
      {room('Music')}
      {category('Category 2')}
      {room('Jokes')}
    </div>
  );
};

const groupChatWindow = (props: any) => {
  return (
    <div className="chat-wrapper">
      {props.users ? showUsers() : showRooms()}
      <div className="right-container">
        <div className="header">
          <text className="button" onClick={() => props.changeUsers(true)}>
            Users
          </text>
          <text className="button" onClick={() => props.changeUsers(false)}>
            Rooms
          </text>
        </div>
        <div className="body">{props.group}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default function GroupChatWindow(props: any) {
  return groupChatWindow(props);
}
