//action
export const increase=(mem_name)=>({
    type : 'INCREASE',
    payload:mem_name,//payload값
})
export const decrease=(empVO)=>({
    type:"DECREASE",//type
    payload:empVO,//payload값
})

export const deptlist=(depts)=>({
    type:"DEPTLIST",
    payload:depts
})
/* ****************************************** */
//초기상태 만들기
const initstate={
    number:0,
    mem_name:'이순신',
    empVO:{empno:1,ename:"나야나"},
    depts:[
        {DEPTNO:10, DNAME:"총무부",LOC:"인천"},
        {DEPTNO:20, DNAME:"운용부",LOC:"서울"},
        {DEPTNO:30, DNAME:"기획부",LOC:"강원"},
    ],
    auth:"",
    googleProvider:"",
}

//worker가 reducer함수로 전환
//action결과 필터링하기 -switch  ->> reducer 
const reducer =(state=initstate,action)=>{
    switch(action.type){
        case "INCREASE":
            //return이 언제 누구에게 무엇을 변경하는지??
            //return action dispatch store view 화면에 즉시반영
            //호출한 쪽에서 받는 게 아니라 return 되는 순간 바로 즉시 화면에 변경됨
            return{
                ...state,//깊은복사
                number:state.number+1,mem_name: action.payload,
            }
        case "DECREASE":
            return{
                ...state,//깊은복사
                number:state.number-1,empVO: action.payload,
            }
        case "DEPTLIST":
            return{
                depts:action.payload
            }
        default:
            return{...state}//깊은 복사 새로운 객체 생성됨
    }
}
export default reducer