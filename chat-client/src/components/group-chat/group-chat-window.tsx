import room from 'components/group-chat/room/room';
import user from 'components/group-chat/user/user';
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
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

const groupChatWindow = (group: string) => {
  const [users, setUsers] = React.useState(false);
  return (
    <div className="chat-wrapper">
      {users ? showUsers() : showRooms()}
      <div className="right-container">
        <div className="header">
          <text className="button" onClick={() => setUsers(true)}>
            Users
          </text>
          <text className="button" onClick={() => setUsers(false)}>
            Rooms
          </text>
        </div>
        <div className="body">{group}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default function GroupChatWindow(group: string) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => groupChatWindow(group)} />
      </Switch>
    </Router>
  );
}
