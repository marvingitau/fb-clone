import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     <Header />
     {/* header */}
     <div className="app__body">
        <Sidebar/>
        {/* Sidebar */}
        <Feed/>
        {/* Feed */}
        
     </div>
     {/* app body */}


     
    </div>
  );
}

export default App;
