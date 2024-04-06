import React, { useEffect, useState } from 'react'
import CardStore from '../components/CardStore'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { addBooksToStore } from '../utils/librarySlice'
import {useDispatch} from "react-redux"

const Store = () => {
    const [books,setBooks] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchLibraryBook()
      }, []);

const fetchLibraryBook = async ( )=>{
    const query = await getDocs(collection(db, "sellers"));
    console.log(query.docs);
    setBooks(query.docs);
    // dispatch(addBooksToStore(query.docs));
}

  return (
    <div>
        <Header />
        {books ? books.map((r)=><CardStore data={r}/>
        ) : console.log('na')}
        <Footer />
    </div>
  )
}

export default Store