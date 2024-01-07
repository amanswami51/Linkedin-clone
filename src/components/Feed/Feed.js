import React, {useEffect, useState} from 'react';
import './Feed.css'
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { useSelector } from 'react-redux';



function Feed() {
  //receive value from input button
  const [input, setInput] = useState("");
  //we store all data from firestore in this state
  const [Posts, setPosts] = useState([])
  
  //acess state of userSlice
  const {userInfo} = useSelector((state)=>state.User)

  //add data on firestore
  const sendPost = async (e)=>{
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db,  `${userInfo.uid}`), {
        name:userInfo.displayName,
        description:userInfo.email,
        message:input,
        photoURL: "userInfo.photoURL",
      });
      console.log("Document written with ID: ", docRef.id);
      fetchdata();
    } 
    catch(e){
      console.error("Error adding document: ", e);
    }
    setInput("");
  }

  
  //fetch the data from firestore
  const fetchdata = async ()=>{
    let arr = [];
    let i = 0;
    const querySnapshot = await getDocs(collection(db,  `${userInfo.uid}`));
    querySnapshot.forEach((doc) => {
        // console.log(doc.id)
        // console.log(doc.data())
        arr[i] = {
          id:doc.id,
          name:doc.data().name,
          description:doc.data().description,
          message:doc.data().message,
          photoURL:doc.data().photoURL
        }
        i++;
      });
      setPosts(arr) 
  }
  useEffect(()=>{
    fetchdata();
    // eslint-disable-next-line
  }, [])

 return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <form>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Start a post' />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#378fe9"/>
            <InputOption Icon={YouTubeIcon} title="Video" color="green"/>
            <InputOption Icon={CalendarMonthIcon} title="Event" color="#c37d16"/>
            <InputOption Icon={ArticleIcon} title="Write article" color="#e16745"/>
        </div>
      </div>
      {Posts.map((post)=>{
        return <Post key={post.id} name={post.name} description={post.description} message={post.message} photoURL={post.photoURL}/>
      })}
    </div>
  )
}

export default Feed;


//********************************Firebase realtime database******************************* */
/*
    const [input, setInput] = useState("");
    const [Posts, setPosts] = useState([])
    //fetch all posts
        const getPosts = async ()=>{
          try{
              const response = await fetch('https://linkedin-clone-yt-6136a-default-rtdb.firebaseio.com/postDB.json', {
                      method: 'GET',
                      headers:{
                        'content-Type': 'application/json'
                      }
              });
              const json = await response.json();
              let arr = [];
              let i = 0;
              Object.keys(json).forEach((k)=>{
                // console.log(json[k]);
                arr[i] = {
                  _id:k,
                  name:json[k].name,
                  description:json[k].description,
                  message:json[k].message,
                  photoUrl:json[k].photoUrl
                }
                i++;
              })
              setPosts(arr) 
          } 
          catch(error){
              console.log(error);
          }
        }
        useEffect(()=>{
          getPosts();
          // eslint-disable-next-line
        },[])
       
    // //add all posts
        const addPost = async (username, name, description, message, photoUrl)=>{
          try {
            const response = await fetch(`https://linkedin-clone-yt-6136a-default-rtdb.firebaseio.com/postDB.json`, {
              method: 'POST',
              headers:{
                'content-Type': 'application/json'
              },
              body: JSON.stringify({username, name, description, message, photoUrl})
            });
            // eslint-disable-next-line
            const json = await response.json();    
          } 
          catch(error){
            console.log(error)
          }
        }
    
    const sendPost = e =>{
        e.preventDefault();
        addPost("amanswami51", "aman", "sofware engineer", input, "checkmate.jpg")
        setInput("");
        getPosts();
    }
// */


