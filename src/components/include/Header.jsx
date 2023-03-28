import React from 'react'

const Header = ({number}) => {//props로 넘어온 값을  받아서 구조분해할당
  return (
    <>
      <div className='header_container'>
        헤더
        <h4>{number}</h4>
      </div>
    </>
  )
}

export default Header
