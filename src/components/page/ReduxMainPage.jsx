import React from 'react'
import { useSelector } from 'react-redux'

//main 에서 number보고싶어
const ReduxMainPage = () => {
    //props에 넘어오는 값을 찍는 게 아니라 store에 있는 값을 찍는것
    const number = useSelector(store=>store.number)
    const depts = useSelector(store=>store.depts)
  return (
    <>
    <div className='main_container'>
      컨텐츠영역
      {/* 상수부분에 다른 숫자 집어 넣기 */}
      <h4>{number}</h4>
      {
        depts&&depts.map((dept,index)=>(
          <h4 key={index}>
            {dept.DEPTNO}{dept.DNAME}{dept.LOC}
          </h4>
        ))
      }
    </div>
    </>
  )
}

export default ReduxMainPage
