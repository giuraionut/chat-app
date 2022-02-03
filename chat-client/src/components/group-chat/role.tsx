import './role.scss';

export default function role(name: string) {
  return (
    <div className="role-wrapper">
      <div className="role-container">
        <text className="role-name">{name.toUpperCase()}</text>
      </div>
    </div>
  );
}
