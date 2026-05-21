import './App.css'
import GetUser from './components/users/GetUser'
import Userlist from './components/users/Userlist'
import Homepage from './public/Homepage'
import Register from './public/Register'
function App() {

  return (
    <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto] overflow-hidden justify-center bg-gray-100 '>
      
      
      <Register />
      <Homepage />
      <GetUser />
      
    </div>
  ) 

}

export default App