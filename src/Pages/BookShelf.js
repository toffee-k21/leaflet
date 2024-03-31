import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

const BookShelf = () => {
  // const user = useSelector((store)=>store)
  const library = useSelector((store)=>store.library)
console.log(library)
  // console.log(user)
  return (
    <div>
      <Header />
        hello
    </div>
  )
}

export default BookShelf