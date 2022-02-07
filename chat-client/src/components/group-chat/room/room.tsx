import './room.scss';

export default function room(name: string) {
  return (
    <div className="room-wrapper">
      <div className="room-container">
        <span className="room-name text">
          {name.substring(0, 1).toUpperCase() + name.substring(1, name.length)}
        </span>
      </div>
    </div>
  );
}
