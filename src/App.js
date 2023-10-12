import {useState,useEffect} from 'react';
import Header from "./components/Header";
import Card from "./Card";
import Main from './Main';
import Counter from './Counter';

function List(props){
  const { multiple } = props;
  return <li>{multiple}</li>;
}

function App() {
  // let [titleName,setTitleName] = useState('Hey Guys!!!');


  // const change = () =>{
  //     setTitleName("What's up buddy");
  // }
  // let [counter1,setCounter1] =  useState(0);
  // let [counter2,setCounter2] =  useState(0);

  
  // useEffect(() =>{
  //   alert('performing side effects')
  // },[counter1])

  const [number,setNumber] = useState(0);
  const mfactor = [1,2,3,4,5,6,7,8,9,10];

  const multiples = mfactor.map((f) => f * number);

  return (
    <div>
      <Header class="bg-[#222]"/>
      {/* <Card title={titleName} description="Learning Props" changeTitle={change}/>
      <Card /> */}
      {/* <Main /> */}
      {/* {alert('Page Rendering')} */}
      {/* <Counter /> */}
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <ul>
          {multiples.map(m => <li>{m}</li>)} //Any jsx element can be passed
          {multiples.map(multiple => <List multiple ={multiple} />)} // Passing a custom component.
      </ul>
    </div>
  );
}

export default App;
