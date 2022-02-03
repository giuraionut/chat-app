import './room.scss';

export default function room(name: string) {
  return (
    <div className="room-wrapper">
      <div className="room-container">
        <text className="room-name">
          {name.substring(0, 1).toUpperCase() +
            name.substring(1, name.length)}
        </text>
      </div>
    </div>
  );
}
