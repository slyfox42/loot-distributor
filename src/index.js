import './components/_settings/_base.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import Donation from './components/sections/Donation'
import Header from './components/sections/Header'
import ItemsRolling from './components/sections/ItemsRolling'
import ItemsSelection from './components/sections/ItemsSelection'
import React from 'react'
import ReactDOM from 'react-dom'
import initStore from './store'

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <Header />
      <Donation />
      <main>
        <ItemsSelection />
        <ItemsRolling />
      </main>
    </div>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
