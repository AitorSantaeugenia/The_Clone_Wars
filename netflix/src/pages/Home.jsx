import React from 'react'
import Main from '../components/MovieHeader/MovieHeader'
import Row from '../components/Row/Row'

import requests from '../Request'

const Home = () => {
  return (
   <>
   <Main />
   <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} type={"movie"}/>
   <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} type={"movie"}/>
   <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} type={"movie"}/>
   <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} type={"movie"}/>
   <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} type={"movie"}/>
   </>
  )
}

export default Home