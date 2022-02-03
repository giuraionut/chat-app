import './layout.scss';
import SideBar from 'components/side-bar/side-bar';
import GroupChatWindow from 'components/group-chat/group-chat-window';
import { useState } from 'react';
const layout = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState(false);
  const [group, setGroup] = useState('noGroup');
  return (
    <div className="layout-wrapper">
      <SideBar changeShow={setShow} show={show} changeGroup={setGroup} />
      <div className="layout-main">
        {show ? (
          <GroupChatWindow changeUsers={setUsers} users={users} group={group} />
        ) : (
          <div> something else</div>
        )}
      </div>
    </div>
  );
};

export default function Layout() {
  return layout();
}
