import React from 'react'

//Q. addnumber호출하고싶어
const Footer = (props) => {
  const {addNumber}=props//구조분해할당
  return (
    <>
    <div className='footer_container'>
      
     풋터영역<br/>
     <button onClick={addNumber}>증가</button>
    </div>
    </>
  )
}

export default Footer
