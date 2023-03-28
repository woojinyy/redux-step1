import React from 'react'

//main 에서 number보고싶어
const MainPage = (props) => {
    const {number,addNumber}=props
  return (
    <>
    <div className='main_container'>
      컨텐츠영역
      <h4>{number}</h4>
      <button onClick={addNumber}>버튼</button>
    </div>
    </>
  )
}

export default MainPage
