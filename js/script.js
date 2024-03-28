let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

let listVideo = document.querySelectorAll('.playlist-videos')



document.addEventListener("DOMContentLoaded", function() {
   // Define video data
   const videos = [
       {
           title: "OpenAI-ChatGPT (Part 01)",
           src: "videos/OpenAI-ChatGPT/1. Introduction/1. Basic terminology.mp4",
           poster: "images/post-1-1.png",
           tutor: {
               name: "naruto",
               role: "developer"
           },
           description: "Basics of ChatGPT, including an introduction to the platform, a comparison with other AI tools, and a walkthrough of the website layout and interface. You'll learn how to create effective prompts and modify outputs for better results. We'll also guide you through a learning exercise where you'll create your own ChatGPT prompts."
       },
       {
           title: "OpenAI-ChatGPT (Part 02)",
           src: "videos/OpenAI-ChatGPT/1.Introduction/2. Installing Postman.mp4",
           poster: "images/post-2-1.png",
           tutor: {
               name: "sasuke",
               role: "developer"
           },
           description: "Advanced techniques for using ChatGPT, including tips on creating sophisticated prompts to generate specific responses. Dive deeper into the capabilities of the platform and explore advanced scenarios."
       },
       // Add more video data as needed
   ];

   // Create video list
   const videoListContainer = document.getElementById("video-list");
   videos.forEach(video => {
       const videoElement = document.createElement("div");
       videoElement.classList.add("video-container");

       videoElement.innerHTML = `
           <div class="video">
               <video src="${video.src}" controls poster="${video.poster}"></video>
           </div>
           <h3 class="title">${video.title}</h3>
           <div class="info">
               <div class="tutor">
                   <img src="images/${video.tutor.name}.jpg" alt="${video.tutor.name}">
                   <div>
                       <h3>${video.tutor.name}</h3>
                       <span>${video.tutor.role}</span>
                   </div>
               </div>
               <p class="description">${video.description}</p>
           </div>
       `;
       videoListContainer.appendChild(videoElement);
   });
});
