// import logo from './logo.svg';
import './App.css';
import { Bars3Icon, HeartIcon, HomeIcon } from '@heroicons/react/24/solid'
// import Device from './components/Device/Device';
// import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App">

      <h1 className='text-5xl bg-slate-500 p-7'><Bars3Icon className="h-6 w-6 text-red-500" />Hello from tailwindcss<HomeIcon className="h-6 w-6 text-red-500" /></h1>
      <p>Hello from paragraph</p>
    </div>
  );
}

export default App;
