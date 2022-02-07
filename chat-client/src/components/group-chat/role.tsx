import './role.scss';

export default function role(name: string) {
  return (
    <div className="role-wrapper">
      <div className="role-container">
        <span className="role-name text">{name.toUpperCase()}</span>
      </div>
    </div>
  );
}
