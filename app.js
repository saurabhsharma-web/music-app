console.log("hello js")

//let currentIndex = 0;












let music= new Audio("audio/loveyatri.mp3");
//music.play();
// create objects of each songs inside list
let songs = [
    {
        id:"1",
        songName: ` loveyatri ayush sharma <br><div class="subtitle"> Darshan Raval</div>`,
        poster:"img/loveyatri.jpg",
        src:"audio/loveyatri.mp3"

    },

    {
        id:"2",
        songName: `kesariya  <br> <div class="subtitle"> Arijit shingh</div>`,
        poster:"img/kesariya.jpg",
        src:"audio/kesariya.mp3"

    },
    {
        id:"3",
        songName: `Sun Raha Hai Na Tu Female  <br> <div class="subtitle"> shradha kapur</div>`,
        poster:"img/ashiqui.jpg",
        src:"audio/Sun Raha Hai Na Tu Female.mp3"

    },
    {
        id:"4",
        songName: `Dil Meri Na Sune Lyrical   <br> <div class="subtitle">Arijit shingh</div>`,
        poster:"img/img1.jpg",
        src:"audio/Dil Meri Na Sune Lyrical - Genius.mp3"

    },
    {
        id:"5",
        songName: `Aapke Pyaar me hum   <br> <div class="subtitle">Alka Yagnik</div>`,
        poster:"img/img2.jpg",
        src:"audio/Aapke Pyaar.mp3"

    },
    {
        id:"6",
        songName: `Ek Ladki Ko Dekha Toh Aisa Laga <br> <div class="subtitle">Anil  Sonam  Rajkummar Rao  Juhi  Darshan Rochak </div>`,
        poster:"img/anilkapur.jpg",
        src:"audio/Ek Ladki Ko Dekha Toh Aisa Laga.mp3"

    },
    {
        id:"7",
        songName: `BEKHUDI Full Song  <br> <div class="subtitle">Himesh Resamiya</div>`,
        poster:"img/himesh.jpg",
        src:"audio/BEKHUDI Full Song .mp3"

    },
    {
        id:"7",
        songName: `Saiyaan Dheere Dheere.mp3 <br> <div class="subtitle">Tony Kakkar</div>`,
        poster:"img/dheere.jpg",
        src:"audio/Saiyaan Dheere Dheere.mp3"

    },
    
];


// creating array of songsitems
Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

// activatin search bar

let searchresult = document.getElementsByClassName("search-result")[0];
    songs.forEach(element => {
        const {id, songName ,poster} = element
        //console.log(id)
        let card =document.createElement("a");
        card.classList.add("card");
        card.href="#"+id;  //  mybe "#" id
        card.innerHTML = `<img src="${poster}" alt="">
                            <div class="content">
                               ${songName}
                            </div>`
        searchresult.appendChild(card);
        //let songName=element.songName.toLowerCase();
        
        
    });

    let input=document.getElementsByTagName("input")[0];

    input.addEventListener("keyup",()=>{
        let input_value = input.value.toUpperCase();
        let items = searchresult.getElementsByTagName("a");
        for(let i=0;i<items.length;i++){
            let as = items[i].getElementsByClassName("content")[0];
            let text_value=as.textContent || as.innerHTML;
            
            if(text_value.toUpperCase().indexOf(input_value)>0){
                items[i].style.display="flex";
            } else{
                items[i].style.display="none";
            }
            if (input.value == "") {
                searchresult.style.dispaly="none";
            } else {
                searchresult.style.dispaly=" ";
            }
        }
    });

// searchBar.addEventListener("input",()=>{
//     let searchValue=searchBar.value.toLowerCase();
//     Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
//         let songName=e.getElementsByTagName('h5')[0].innerHTML.toLowerCase();
//         if(songName.includes(searchValue)){
//             e.style.display="block";
//         }else{
//             e.style.display="none";
//         }
//     });
// });
// search bar end






//masterPlay button
let masterPlay=document.getElementById("masterPlay");
let wave=document.getElementById("wave");
masterPlay.addEventListener("click",()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('activ1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    
    }else{
        music.pause();
        wave.classList.remove("activ1");
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

function updateSongDetails() {
    music.src = songs[currentIndex].src; // Update music source
    document.getElementsByClassName('title')[0].innerHTML = songs[currentIndex].songName; // Update song title
    document.getElementById('poster_masterPlay').src = songs[currentIndex].poster; // Update poster
   
    
    // Update the background of the selected song item
    makeallbackgrond();
    document.getElementsByClassName('songItem')[currentIndex].style.background = 'rgb(105, 105, 105, 0.1)';

    // Update play/pause icons in the playlist
    makeallPlay();
    document.getElementsByClassName('playListplay')[currentIndex].classList.add('bi-play-fill');
    document.getElementsByClassName('playListplay')[currentIndex].classList.remove('bi-pause-fill');

}

//activate background-color which songs is playing 
const makeallbackgrond= () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background='rgb(105,105,105, .0)';
        
        //background-color: rgb(105,105,105, .1)
           
            })
    
}
// change icon which song is playing in 
const makeallPlay = () =>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el) => {
        
            el.classList.add('bi-pause-fill');
            el.classList.remove('bi-play-fill');
           
            });
    
};

// we are finding index of songes when click on any play icon
// let poster_masterPlay=document.getElementById("poster_masterPlay");
//let title=document.getElementsByClassName("title");
let download_music=document.getElementById("download");

Array.from(document.getElementsByClassName('playListplay')).forEach((e, i) => {
    e.addEventListener('click',(el) =>{
       
                currentIndex = i; // Update the current index
                updateSongDetails(); // Update song details (title, poster, source)
                music.play();
                wave.classList.add('activ1');
                masterPlay.classList.remove('bi-play-fill');
                masterPlay.classList.add('bi-pause-fill');
                download_music.href=songs[currentIndex].src;

        // music.src = songs[i].src; // Update music source
        // poster_masterPlay.src = songs[i].poster; // Update poster
        // music.play();
        // wave.classList.add('activ1');
        // masterPlay.classList.remove('bi-play-fill');
        // masterPlay.classList.add('bi-pause-fill');
        // //console.log(music.src)
        // title[0].innerHTML=songs[i].songName;
        // makeallbackgrond();
        // Array.from(document.getElementsByClassName('songItem'))[songs[i-1].id].style.background='rgb(105,105,105, .1)';

        // makeallPlay();
        // el.target.classList.add('bi-play-fill');
        // el.target.classList.remove('bi-pause-fill');

    })  


})

// showing time when songs will be paly/and update
let currenStart = document.getElementById('currenStart');
let currenEnd = document.getElementById('currenEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',() =>{
    let music_time=music.currentTime;
    let music_duration=music.duration;

    let min1=Math.floor(music_duration / 60);
    let sec1=Math.floor(music_duration % 60);
    if (sec1 < 10){
        sec1=`0${sec1}`;
    }
    currenEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_time / 60);
    let sec2=Math.floor(music_time % 60);
    if (sec2 < 10){
        sec2=`0${sec2}`;
    }
    currenStart.innerText=`${min2}:${sec2}`;
    //console.log(sec1)
    let processbar=parseInt((music_time / music_duration )*100)
    seek.value = processbar;
    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

    //console.log(seek.value)
    // let per=music_time/music_duration*100;
    // bar2.style.width=`${per}%`;
    // dot.style.left=`${per}%`;
    // //console.log(per)
})

seek.addEventListener('change',()=>{
   music.currentTime = seek.value * music.duration / 100;
})

//volume update
let volicon=document.getElementById('vol-icon');
let vol=document.getElementById('vol');
let volbar=document.getElementsByClassName('vol-bar')[0];
let voldot=document.getElementById('vol-dot');


volicon.addEventListener('click', () => {
    if (vol.value > 0) {
      vol.value = 0;
      volicon.classList.remove('bi-volume-up');
      volicon.classList.remove('bi-volume-down');
      volicon.classList.add('bi-volume-mute');
      music.volume = 0;
    } else {
      vol.value = 50; // or any default value you want
      volicon.classList.remove('bi-volume-mute');
      volicon.classList.add('bi-volume-down');
      music.volume = 0.5; // or any default value you want
    }
  });


vol.addEventListener('change',()=>{
    if (vol.value == 0 ){
        volicon.classList.remove('bi-volume-up');
        volicon.classList.remove('bi-volume-down');
        volicon.classList.add('bi-volume-mute');
    }
    if (vol.value > 0 ){
        volicon.classList.remove('bi-volume-up');
        volicon.classList.add('bi-volume-down');
        volicon.classList.remove('bi-volume-mute');
    }
    if (vol.value > 50 ){
        volicon.classList.add('bi-volume-up');
        volicon.classList.add('bi-volume-down');
        volicon.classList.remove('bi-volume-mute');
    }
    let vol_a=vol.value;
    voldot.style.left=`${vol_a}%`;
    volbar.style.width=`${vol_a}%`;
    music.volume = vol.value / 100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

 let currentIndex = 0; // Keep track of which song is currently playing
back.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Move to the previous song, wrap around if at the beginning
    updateSongDetails();
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
});


next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length; // Move to the next song, wrap around if at the end
    updateSongDetails();
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
 });


// back.addEventListener('click',()=>{
//     currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Move to the previous song, wrap around if at the beginning
//     music.src = songs[currentIndex].src;
//     music.play();
//     wave.classList.add('active1');
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');
// })




















//populer songs scroll bar left to right
let popular_songs_left_scroll= document.getElementById("popular_songs_left_scroll");
let popular_songs_right_scroll= document.getElementById("popular_songs_right_scroll");
let pop_songs= document.getElementsByClassName("pop-songs")[0];

popular_songs_right_scroll.addEventListener("click",()=>{
    pop_songs.scrollLeft += 350;
});

popular_songs_left_scroll.addEventListener("click",()=>{
    pop_songs.scrollLeft -= 350;
});
    //pop artist scroll bar left to right
let popular_artist_left_scroll= document.getElementById("pop_art_left");
let popular_artist_right_scroll= document.getElementById("pop_art_right");
let pop_artist= document.getElementsByClassName("items")[0];

popular_artist_right_scroll.addEventListener("click",()=>{
    pop_artist.scrollLeft += 350;
});

popular_artist_left_scroll.addEventListener("click",()=>{
    pop_artist.scrollLeft -= 350;
});


// shuffle is updating means random songs playing reapeat songs  and imgages change 
let suffer = document.getElementsByClassName("suffle")[0];
    suffer.addEventListener("click",() => {  
        let a = suffer.innerHTML.trim();
        switch (a) {
            case "next":
                suffer.classList.add("bi-arrow-repeat")
                suffer.classList.remove("bi-music-note-beamed")
                suffer.classList.remove("bi-shuffle")
                suffer.innerHTML = "repeat";
                
                break;
        
            case "repeat":
                suffer.classList.remove("bi-arrow-repeat")
                suffer.classList.remove("bi-music-note-beamed")
                suffer.classList.add("bi-shuffle")
                suffer.innerHTML = "random";
                break;
            case "random":
                suffer.classList.remove("bi-arrow-repeat")
                suffer.classList.add("bi-music-note-beamed")
                suffer.classList.remove("bi-shuffle")
                suffer.innerHTML = "next";
                break;
                default:
                console.error(`Unknown state: ${a}`);
        }

    })


    // music.addEventListener("ended", () =>{
    //     currentIndex;
    //     music.play();
    //     wave.classList.add('activ1');
    //     masterPlay.classList.remove('bi-play-fill');
    //     masterPlay.classList.add('bi-pause-fill');
    //     download_music.href=songs[currentIndex].src;

    // });

   

    // we are creating 3 functiongs for shuffle  when it will be next,repeat random 
   
    const music_next = () =>{
        if (currentIndex == songs.length - 1) {
            currentIndex = 0; // Wrap around to the first song if at the end
            
        } else {
            currentIndex++;
        }
        updateSongDetails(); // Update song details (title, poster, source)
        music.play();
        wave.classList.add('activ1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href=songs[currentIndex].src;

    }

    const music_repeat = () => {
            currentIndex;
            music.play();
            wave.classList.add('activ1');
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            download_music.href=songs[currentIndex].src;
        }

    const music_random = () => {
            currentIndex = Math.floor(Math.random() * songs.length); // Randomly select a song
            updateSongDetails(); // Update song details (title, poster, source)
            music.play();
            wave.classList.add('activ1');
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            download_music.href=songs[currentIndex].src;
    }

    music.addEventListener("ended", () =>{
        let audiochange = suffer.innerHTML.trim();
        switch (audiochange) {
            case "repeat":
                music_repeat();
                break;
            case "next":
                music_next();
                break;
            case "random":
                music_random();
                break;
        
           
        }

    });