import React,{useEffect,useState} from 'react';
import '../css/card.css';
import Images from "../images/JavaImage.jpg";
import axios from "axios";


function CardView(props) {
  const [items,setItems,useItems] = useState([])
  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=curso%20${props.title}&type=video&key=AIzaSyB2TMkx9Nu00wSJLiI3UAzWAaKB73ZmclQ`
    ).then(response =>{
      console.log(response.data.items)
      const info = response.data.items
      setItems(info)
    })

  },[])
  return (
      <>
      <main>
        <section class="cards">
      {items.map((item) => (
        <div class="card">
        <div class="card_image">
          <img src={item.snippet.thumbnails.high.url} />
        </div>
        <div class="card_content">
          <p class="card_title comum_text">
              {item.snippet.title}
          </p>
          <div class="card_info">
            <p class="comum_text"> 
            {item.snippet.channelTitle}
            </p>
          <a href={`https://youtube.com/watch?v=${item.id.videoId}`}>  <button class="comum_text watch_button"> Assistir! </button></a>
          </div>
        </div>
      </div>
      ))}

      </section>
      </main>

      </>
  );
}

export default CardView;