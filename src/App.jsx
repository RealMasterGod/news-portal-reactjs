
import Navbar from './navbar'
import Home from './home'
import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNewsArticles } from './features/news/newsSlice'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SinglePage from './singlePage/SinglePage'
import EachCategory from './eachCategory/EachCategory'
import { fetchFav } from './features/news/newsSlice'
import Query from './query/Query'

function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFav())
  // },[])

  useEffect(() => {
    setTimeout(() => dispatch(getNewsArticles('general')),1000)
    setTimeout(() => dispatch(getNewsArticles('world')),4000)
    setTimeout(() => dispatch(getNewsArticles('nation')),4000)
    setTimeout(() => dispatch(getNewsArticles('technology'),4000))
    setTimeout(() => dispatch(getNewsArticles('entertainment'),5000))
    setTimeout(() => dispatch(getNewsArticles('sports')),6000)
    setTimeout(() => dispatch(getNewsArticles('health')),8000)
    dispatch(fetchFav())
  },[])

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/singlePage/category/:cat/:artId" element={<SinglePage />}/>
        <Route path="/:catMain" element={<EachCategory />} />
        <Route path='/query/:keyword' element={<Query />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
