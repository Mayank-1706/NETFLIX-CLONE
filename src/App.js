import './App.css';
import { Horizontal,Landing,Navbar,Top_10, Footer } from './Components';
import { Account,Language,Download,Games,Home,Movies,MyList,New_1,TV,Login } from './Containers';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Navbar/>
      
      <Landing/>
      <Horizontal/>
      <Horizontal/>
      <Top_10/>
      <Horizontal/>
      <Horizontal/>
      <Horizontal/>
      <Horizontal/>
      
      <footer><Footer/></footer>
      
    </div>
  );
}

export default App;
