import Layout from 'components/layout/layout';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
const app = () => {
  return <Layout />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={app} />
      </Switch>
    </Router>
  );
}
