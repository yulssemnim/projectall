import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { useReducer ,useRef ,useEffect, useState} from 'react';


const mockData =[
  {id:'mock1',date:new Date().getTime(),content:'mock1',emotionId:1,},
  {id:'mock2',date:new Date().getTime(),content:'mock2',emotionId:2,},
  {id:'mock3',date:new Date().getTime(),content:'mock3',emotionId:3,},
]


function reducer (state,action){
 switch (action.type) {
  case "CREATE" :{
    return [action.data,...state]
  }
  case "UPDATE" :{
    return state.map((item)=>
     String(item.id) === String(action.data.id) ?{...action.data} :item
    )
  }
  case "DELETE" :{
    return state.filter((item) => String(item.id) !== String(action.targetId))
  }
  case "INIT" :{
    return action.data
  }
  default :return state;
 }
}

function App() {
  const [isDataLoaded,setIsDataLoaded] =useState(false);
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef =useRef(0);
  useEffect(()=>{
    dispatch(
      {type :'INIT',
      data:mockData,}
    )
    setIsDataLoaded(true);
  },[])
  const onCreate = (date,content,emotionId)=>{
    dispatch({
      type :'CREATE',
      data :{
        id :idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    });
    idRef.current +=1;
  }
  const onUpdate = (targetId, date, content, emotionId)=>{
    dispatch({
      type :'UPDATE',
      data :{
        id :targetId,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    });
  }
  const onDelete =(targetId) =>{
    dispatch({
      type:'DELETE',
      targetId
    })
  } 
  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다</div>
  }else{
    return (
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    );
  }

}

export default App;
