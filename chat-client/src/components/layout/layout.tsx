import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './layout.scss';
import SideBar from 'components/side-bar/side-bar';
import GroupChatWindow from 'components/group-chat/group-chat-window';
import { useState } from 'react';
const layout = () => {
  const [show, setShow] = useState(false);
  const [group, setGroup] = useState('noGroup');
  return (
    <div className="layout-wrapper">
      <SideBar
        changeShow={setShow}
        show={show}
        changeGroup={setGroup}
        group={group}
      />
      <div className="layout-main">
        {show ? GroupChatWindow(group) : <div>Something else</div>}
      </div>
    </div>
  );
};

export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={layout} />
      </Switch>
    </Router>
  );
}
