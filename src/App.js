import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-black bg-blue-300 dark:bg-gray-600">
      <div className="dark:hidden block">
        <img height = "48" width = "48 " src = "https://unsplash.it/1080/720"/>
      </div>
      <button className="px-4 bg-white text-black dark:bg-gray-600 dark:text-white"onClick={(e)=>document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')}>Toggle darkmode</button>
    </div>
  );
}

export default App;
