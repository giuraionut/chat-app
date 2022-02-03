import './user.scss';

export default function user(username: string, avatar: string) {
  return (
    <div className="user-wrapper">
      <img src={avatar} alt="" className="avatar" />
      <div className="user-name-container">
        <text className="user-name">
          {username.substring(0, 1).toUpperCase() +
            username.substring(1, username.length)}
        </text>
      </div>
    </div>
  );
}
