import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllCasesView from './AllCasesView'
// import Form from '../components/Form/Form'
import CreateCase from './CreateCaseView/CreateCase'
import HomepageView from './HomepageView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomepageView /> }></Route>
      <Route path='/createCases' element={ <CreateCase /> } > </Route>
      <Route path='/allCases' element={ <AllCasesView /> } > </Route>
    </Routes>
  )
}

export default Views