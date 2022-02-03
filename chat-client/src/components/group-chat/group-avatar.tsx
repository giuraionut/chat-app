import './group-avatar.scss';

export default function groupAvatar(image: string, props: any) {
  return (
    <div className="group-avatar-wrapper">
      <img
        src={image}
        alt=""
        className="group-avatar"
        onClick={() => {
          props.changeShow(true);
          props.changeGroup('group A');
        }}
      />
    </div>
  );
}
