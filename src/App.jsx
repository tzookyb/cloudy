import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { store } from './store'
// CMPS
import Header from './cmps/Header'
import { TimeDate } from './cmps/TimeDate'
import About from './cmps/About'
import { Weather } from './cmps/Weather'
import Footer from './cmps/Footer'

// STORE:
export const StoreContext = React.createContext();
const StoreProvider = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

// APP:
export default function App() {
  return (
    <StoreProvider>
      <div className="app flex column">
        <Header />
        <main>
          <TimeDate />
          <Switch>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
            <Route component={About} path="/about" />
            <Route component={Weather} path="/weather" />
          </Switch>
        </main>
        <Footer />
      </div>
    </StoreProvider>
  )
}
