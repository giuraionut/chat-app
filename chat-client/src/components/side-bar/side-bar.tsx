import groupAvatar from 'components/group-chat/group-avatar';
import './side-bar.scss';

const sideBar = (props: any) => {
  return (
    <div className="side-bar-wrapper">
      <div className="side-bar">
        <div className="side-bar-header">
          <div
            className="home-button"
            onClick={() => {
              props.changeShow(false);
            }}
          />
        </div>
        {groupAvatar(
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg',
          props,
          'groupA'
        )}
        {groupAvatar(
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg',
          props,
          'groupB'
        )}
      </div>
    </div>
  );
};

export default function SideBar(props: any) {
  return sideBar(props);
}
