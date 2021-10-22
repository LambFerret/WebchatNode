import Header from './components/Layouts/Header'
import Chat from './components/Chat/Chat'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
