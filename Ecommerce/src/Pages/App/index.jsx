import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

export default function App(){
return <>
    <div>
      <h1 className='text-3xl font-bold underline text-amber-600'>Vite + React</h1>
    </div>  
     
    <Home/> 
    <MyAccount/>
    <MyOrder/>
    <MyOrders/>
    <NotFound/>
    <SignIn/>
    </>

}