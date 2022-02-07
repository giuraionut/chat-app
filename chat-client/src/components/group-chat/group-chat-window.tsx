import room from 'components/group-chat/room/room';
import user from 'components/user/user';
import category from './category/category';
import './group-chat-window.scss';
import role from './role';

const showUsers = () => {
  return (
    <>
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
    </>
  );
};

const showRooms = () => {
  return (
    <>
      {category('Category 1')}
      {room('Music')}
      {room('Games')}
      {room('Games')}
      {category('Category 2')}
    </>
  );
};

const groupChatWindow = (props: any) => {
  return (
    <div className="chat-wrapper">
      <div className="left-container">
      <div className="header">
          <span className="button text" onClick={() => props.changeUsers(true)}>
            Users
          </span>
          <span className="button text" onClick={() => props.changeUsers(false)}>
            Rooms
          </span>
        </div>
        {props.users ? showUsers() : showRooms()}
      </div>
      <div className="right-container">
      <div className="header">
          <span className="button text" onClick={() => props.changeUsers(true)}>
            Alt buton
          </span>
          <span className="button text" onClick={() => props.changeUsers(false)}>
            Si inca unu
          </span>
        </div>
        <div className="body text">{props.group}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default function GroupChatWindow(props: any) {
  return groupChatWindow(props);
}
