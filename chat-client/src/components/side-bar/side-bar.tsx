import groupAvatar from 'components/group-chat/group-avatar';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
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
          props
        )}
        {groupAvatar(
          'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg',
          props
        )}
      </div>
    </div>
  );
};

export default function SideBar(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => sideBar(props)} />
      </Switch>
    </Router>
  );
}
