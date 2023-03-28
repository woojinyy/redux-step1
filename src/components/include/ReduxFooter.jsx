import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from '../../redux/store'

const ReduxFooter = () => {
  const dispatch=useDispatch()
  const handleAdd=(e)=>{
    e.preventDefault()//이벤트 버블링 차단

    //괄호 안의 내용이 store에서 increase호출되고 파라미터로 넘겨진다
    dispatch(increase("김춘추"))
  }
  return (
    <>
    <div className='footer_container'>
      <h3>        리덕스풋터       </h3>
      <button onClick={handleAdd}>증가버튼</button>
    </div>
    </>
  )
}

export default ReduxFooter
