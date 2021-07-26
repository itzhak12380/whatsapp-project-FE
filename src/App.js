import React,{useEffect,useState} from 'react'
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js';
import instance from './axios';
function App() {
  const [Message, setMessage] = useState([])
  useEffect(()=>{
    console.log("tow");
    instance.get("/synce")
    .then( (response) => {
      console.log(response.data);
      setMessage(response.data)
    })
console.log(Message);
  },[])

  useEffect(() => {
    const pusher = new Pusher('06f922f37e86451894e4', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      
      setMessage(...Message,data)
      console.log(Message);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
      console.log(Message);
    }

  }, [Message])
  console.log(Message);
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat messages={Message} />
      </div>

    </div>
  );
}

export default App;
