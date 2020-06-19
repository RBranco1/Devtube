import React from 'react';
import '../css/card.css';
import Images from "../images/JavaImage.jpg";


function CardView(props) {
  return (
      <>
      <main>
        <section class="cards">
        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
                {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
              </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text">  
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images}/>
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text">
              {props.channel}
                 </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images} />
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text">
              {props.channel}
                 </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card_image">
            <img src={Images}/>
          </div>
          <div class="card_content">
            <p class="card_title comum_text">
            {props.title}
            </p>
            <div class="card_info">
              <p class="comum_text"> 
              {props.channel}
               </p>
              <button class="comum_text watch_button"> Assistir! </button>
            </div>
          </div>
        </div>
        </section>
      </main>

      </>
  );
}

export default CardView;