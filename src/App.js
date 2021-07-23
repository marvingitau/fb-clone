import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


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
        <Widgets/>
        {/* Widget */}
        
     </div>
     {/* app body */}


     
    </div>
  );
}

export default App;
