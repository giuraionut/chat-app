import './group-avatar.scss';

export default function groupAvatar(image: string, props: any, name: string) {
  return (
    <div className="group-avatar-wrapper">
      <img
        src={image}
        alt={name}
        className="group-avatar"
        onClick={() => {
          props.changeShow(true);
          props.changeGroup(name);
        }}
      />
    </div>
  );
}
