import {useState,useEffect} from 'react';
import Header from "./components/Header";
import Card from "./Card";
import Main from './Main';

function App() {
  // let [titleName,setTitleName] = useState('Hey Guys!!!');


  // const change = () =>{
  //     setTitleName("What's up buddy");
  // }
  let [counter1,setCounter1] =  useState(0);
  let [counter2,setCounter2] =  useState(0);

  
  useEffect(() =>{
    alert('performing side effects')
  },[counter1])
  return (
    <div>
      <Header class="bg-[#222]"/>
      {/* <Card title={titleName} description="Learning Props" changeTitle={change}/>
      <Card /> */}
      {/* <Main /> */}
      {alert('Page Rendering')}
      <button onClick={() =>{setCounter1(counter1+1)}}>Increment 1</button><br/>
      <button onClick={() => {setCounter2(counter2+1)}}>Increment 2</button>
    </div>
  );
}

export default App;
