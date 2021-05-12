import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
// import {rewards} from './components/RewardTypeData'

// import styled from 'styled-components';

// const BackProjectModalCover = styled.div `
//   width: 100%;
//   min-height: 100vh;
//   background-color: rgba(0, 0, 0, 0.7);
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: auto;
// `

export const activeIndexContext = createContext()
export const ProgressBarContext = createContext()
export const leftedContext = createContext()
export const finishNotificationContext = createContext()
export const displayModalContext = createContext()


function App() {
  const [activeIndex, setActiveIndex] = useState()
  const [backers, setBackers] = useState(5007)
  const [pledges, setPledges] = useState(89914)
  const [updatedLefted, setUpdatedLefted] = useState(["with no reward", 101, 64, 0])
  const [finishNotification, setFinishNotification] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const [displayBackProj, setDisplayBackProj] = useState(false)

  const handleClick = (index)=>{
    updatedLefted[index] > 0 && setActiveIndex(index)
}



  return (

    <BrowserRouter>
      <Navbar />
      <activeIndexContext.Provider value={{activeIndex, setActiveIndex, handleClick}}>
        <ProgressBarContext.Provider value={{backers, setBackers, pledges, setPledges}}>
          <leftedContext.Provider value={{updatedLefted, setUpdatedLefted}}>
          <displayModalContext.Provider value={{displayModal, setDisplayModal, displayBackProj, setDisplayBackProj}}>
          <finishNotificationContext.Provider value={{finishNotification, setFinishNotification}}>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
          </finishNotificationContext.Provider>
          </displayModalContext.Provider>
          </leftedContext.Provider>
        </ProgressBarContext.Provider>
      </activeIndexContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
