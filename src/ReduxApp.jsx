import ReduxHeader from "./components/include/ReduxHeader";
import ReduxFooter from "./components/include/ReduxFooter";
import React from 'react'
import ReduxMainPage from "./components/page/ReduxMainPage";

const ReduxApp = () => {
  return (
    <>
<h3>리덕스 적용 예제</h3>
    <ReduxHeader/>
    <ReduxMainPage/>
    <ReduxFooter/>
    </>
  )
}

export default ReduxApp
