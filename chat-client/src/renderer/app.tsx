import Layout from 'components/layout/layout';
import { createMemoryHistory } from 'history';
import { Routes, Route, Router } from 'react-router-dom';
import './app.scss';
const app = () => {
  return <Layout />;
};

export default function App() {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="/" element={app()} />;
      </Routes>
    </Router>
  );
}
