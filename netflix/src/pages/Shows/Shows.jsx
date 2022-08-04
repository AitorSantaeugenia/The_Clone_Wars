import React from 'react'
import TVShows from '../../components/ShowHeader/ShowHeader'
import Row from '../../components/Row/Row'

import requests from '../../Request'

const Shows = () => {
  return (
   <>
   <TVShows />
   <Row rowID="1" title="Up Coming" fetchURL={requests.requestPopularTV} />
   <Row rowID="2" title="Popular" fetchURL={requests.requestTopRatedTV} />
   <Row rowID="3" title="Trending" fetchURL={requests.requestLatestTV} />
   <Row rowID="4" title="Top Rated" fetchURL={requests.requestPopularTV} />
   </>
  )
}

export default Shows