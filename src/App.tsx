import React,{useState,useEffect} from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import { OrderProvider } from './contexts/OrderContext';

export default function App(){
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize",handleResize)
  },[window.innerWidth])
  console.log(screenWidth)
  return(
    <OrderProvider>
      <div className='font-custom md:px-16 w-screen h-screen flex flex-col'>
        <Nav />
        <Main />
      </div>
    </OrderProvider>
    
  )
}
