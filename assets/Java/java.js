
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


// .scene {
//     width: 200px;
//     height: 260px;
//     border: 1px solid #CCC;
//     margin: 40px 0;
//     perspective: 600px;
//   }
  
//   .card {
//     width: 100%;
//     height: 100%;
//     transition: transform 1s;
//     transform-style: preserve-3d;
//     cursor: pointer;
//     position: relative;
//   }
  
//   .card.is-flipped {
//     transform: rotateY(180deg);
//   }
  
//   .card__face {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     line-height: 260px;
//     color: white;
//     text-align: center;
//     font-weight: bold;
//     font-size: 40px;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//   }
  
//   .card__face--front {
//     background: red;
//   }
  
//   .card__face--back {
//     background: blue;
//     transform: rotateY(180deg);
  }
  

//   <div class="scene scene--card">
//             <div class="card">
//               <div class="card__face card__face--front">front</div>
//               <div class="card__face card__face--back">back</div>
//             </div>
//           </div>


//             <!-- <div class="scene scene--card">
//                 <div class="card">
//                     <div class="card__face card__face--front">
//                         <img src="assets/images/run-buddy-card.png" alt="Webpage" style="width:100%" height="100%" class="project-img-1">
//                     </div>
//                     <div class="card__face card__face--back">
//                     <h2>Run Buddy</h2>
//                     <p class="highlight"> HTML / CSS</p>
//                     <p>A webpage for Run Buddy. They are a company that matches runners with personal trainers. </p>
//                      <button class="button-2"><a href="https://brainybrian316.github.io/run-buddy/">View</a></button>
//                     </div>
//                 </div>
//             </div> -->