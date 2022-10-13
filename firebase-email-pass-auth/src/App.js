import { getAuth } from 'firebase/auth';
import './App.css';
import ReactBootstrap from './components/ReactBootstrap';
import app from './firebase/firebase.init';

const auth = getAuth(app);


function App() {

  // const handleRegister = (event) => {

  // if Reload the page after Submit or Register use this
  //   event.preventDefault();


  //   const email = event.target.email.value;
  //   const pass = event.target.pass.value;
  //   console.log(email, pass);

  // }
  // const handleEmailChange = (event) => {
  //   console.log(event.target.value);
  // }
  // const handlePassChange = (event) => {
  //   console.log(event.target.value);
  // }

  //onSubmit={} form tag er vitor
  //onChange={} input tag er vitor
  //onBlur={} input tag er vitor


  // <form onSubmit={handleRegister}>
  //       <input type="email" name="email" id='' placeholder='Enter email' onBlur={handleEmailChange} />
  //       <br />
  //       <input type="password" name="pass" id="" placeholder='pass...' onBlur={handlePassChange} />
  //       <br />
  //       <button type='submit' >submit</button>
  //     </form>

  return (
    <div className="App">
      <ReactBootstrap></ReactBootstrap>

    </div>
  );
}

export default App;
