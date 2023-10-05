import {useState} from 'react';
import Header from "./components/Header";
import Card from "./Card";

function App() {
  let [titleName,setTitleName] = useState('Hey Guys!!!');

  const change = () =>{
      setTitleName("What's up buddy");
  }
  return (
    <div class="bg-[#222]">
      <Header/>
      <Card title={titleName} description="Learning Props" changeTitle={change}/>
      <Card />
    </div>
  );
}

export default App;
