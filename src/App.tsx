import './App.css';
import Content from './Components/ComponentContent/ComponentContent';
import ComponentNavbar from './Components/ComponentNavbar/ComponentNavbar';
import AppProvider from './common/Context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App bg-black flex justify-center sm:justify-start">
        <ComponentNavbar />
        <Content />
      </div>
    </AppProvider>
  );
}

export default App;
