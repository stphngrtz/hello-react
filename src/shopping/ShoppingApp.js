import React from 'react'
import Footer from './components/Footer'
import AddItem from './containers/AddItem'
import VisibleItemList from './containers/VisibleItemList'

const ShoppingApp = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
)

export default ShoppingApp
