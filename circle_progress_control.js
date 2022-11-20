function create_circle_progress_control(divname) {
    const body_container = document.querySelector(divname);
    const newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.className = "inner_container";
    newDiv.innerHTML = 
    `<div class="container">
        <div class="header">
            <div class="head">19:02</div>
            <div class="head">
                <span><i class="fa-solid fa-signal"></i></span>
                <span><i class="fa-solid fa-wifi"></i></span>
                <span><i class="fa-solid fa-battery-three-quarters"></i></span>
            </div>
        </div>

         
        <div class="noti">
            <div class="noti_header">
                <div class="noti_header_check">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>App notifications</p>
                </div>

                <div class="noti_header_time">
                    <p>Bây giờ</p>
                </div>
            </div>

            <div class="noti_infor">
                <div class="noti_infor_logo">
                    <i class="fa-solid fa-moon"></i>
                </div>
                <p>Hoàn tất thiết lập thời gian, chúc bạn ngủ ngon!</p>            
            </div>
        </div>
        

        <div class="title">
            <a class="button"><i class="fa-solid fa-angle-left"></i></a>
            <h1>Sleep time</h1>
            <a class="button btn_confirm"><i class="fa-solid fa-check"></i></a>
        </div>
        
        <svg width="200" height="200">
            <circle class="under" cx="100" cy="100" r="85"/>
            <circle class="above" cx="100" cy="100" r="85"/>
            <circle class="play" cx="185" cy="100" r="12.5"/>
            <circle class="bell" cx="185" cy="100" r="12.5"/>
            <text class="numHour" x="95px" y="45px">24</text>
            <text class="numHour" x="150px" y="100px">06</text>
            <text class="numHour" x="95px" y="160px">12</text>
            <text class="numHour" x="35px" y="100px">18</text>
            <text class="hour" x="70px" y="100px">00h</text>
            <text class="min" x="75px" y="120px">00min</text>
        </svg>
        
        <div class="display">
            <div class="box box1">
                <p class="text">Bedtime</p>
                <p class="time bedtime">00:00</p>
            </div>
            <div class="box box2">
                <p class="text">Wake up</p>
                <p class="time wakeup">06:15</p>
            </div>
        </div>
        
        <div class="music">
            <div class="music-container" >
                <div class="music-info">
                    <h4 class="song_title"></h4>
                    <div class="progress-container">
                        <div class="progress "></div>
                    </div>
                </div>
                
                <audio src="./music/ukulele.mp3" class="audio"></audio>
                
                <div class="img-container">
                    <img src="./image/ukulele.jpg" alt="music-cover" class="cover" />
                </div>
                
                <div class="navigation">
                    <button class="prev action-btn">
                        <i class="fas fa-backward"></i>
                    </button>
                
                    <button class="playBtn action-btn action-btn-big">
                        <i class="fas fa-play"></i>
                    </button>
                
                    <button class="next action-btn">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`
    body_container.appendChild(newDiv);
    


    var bell = document.querySelector(divname + " .bell");
    var r = document.querySelector(divname + " .container");
    var degBell = 0, move = 0; 
    var wakeup = document.querySelector(divname + " .wakeup");
    var HourNum = document.querySelector(divname + " .hour");
    var MinNum = document.querySelector(divname + " .min");
    var mins, hours, ExHours, NewHours;

    bell.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", dragBell);
    })

    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", dragBell);
    })

    // play.addEventListener("mousedown", () => {
    //     window.addEventListener("mousemove", dragPlay);

    // })

    // window.addEventListener("mouseup", () => {
    //     window.removeEventListener("mousemove", dragPlay);
    // })


    function dragBell(event) {
        if(event.offsetX > 100) {
            r.style.setProperty('--move', `${move = 533.8 - 1.3345*event.offsetY}`);
            r.style.setProperty('--degBell', `${degBell = 270 + event.offsetY*0.9}deg`);        
        }        
        else if (event.offsetX == 100) {
            r.style.setProperty('--move', `${move  = 266.9}`);
            r.style.setProperty('--degBell', `${degBell = 450}deg`);
        }  
        else if (event.offsetX < 100) {
            r.style.setProperty('--move', `${move  = 1.3345*event.offsetY}`);
            r.style.setProperty('--degBell', `${degBell = 630 - event.offsetY*0.9}deg`);
        }
        
        hours = (degBell / 15) - 18;
        ExHours = hours.toFixed(1);     // 5.3
        NewHours = parseInt(ExHours);     // 5
        mins = parseInt(((ExHours - NewHours)*10+1)*6 - 1);
        wakeup.innerHTML = NewHours + ":" + mins;

        // totalMins = NewHours*60 + mins; 
        // if (NewHours > NewHours1) {
        //     totalHours = parseInt(Math.abs(totalMins1-totalMins)/60);
        //     remainMins = parseInt(Math.abs(totalMins1-totalMins) - totalHours*60);   
        // }
        // else if (NewHours == NewHours1) {
        //     if (mins >= mins1) {
        //         totalHours = parseInt(Math.abs(totalMins1-totalMins)/60);
        //         remainMins = parseInt(Math.abs(totalMins1-totalMins) - totalHours*60);
        //     }
        //     else {
        //         totalHours = 23;
        //         remainMins = parseInt(1440 - Math.abs(totalMins1-totalMins) - totalHours*60);
        //     }       
        // }
        // else {
        //     totalHours = parseInt((1440 - Math.abs(totalMins1-totalMins))/60);
        //     remainMins = parseInt(1440 - Math.abs(totalMins1-totalMins) - totalHours*60);
        // }

        // console.log('Tổng thời gian ngủ:', totalHours + 'h' + remainMins + 'p');
        console.log('Tổng thời gian ngủ:', NewHours + 'h' + mins + 'p');

        // if (totalHours < 10) {
        //     HourNum.innerHTML = '0'+ totalHours +'h';
        // } else if (totalHours >= 10) {
        //     HourNum.innerHTML = totalHours +'h';
        // }
        if (NewHours < 10) 
            HourNum.innerHTML = '0'+ NewHours +'h';
        else if (NewHours >= 10) 
            HourNum.innerHTML = NewHours +'h';
        MinNum.innerHTML = mins + 'min';

        
        }
    //------------------------------ Confirm Notification ------------------------------

    // var noti_cover = document.querySelector('#noti');
    // const main = document.querySelector('#notifica');
    var btn_confirm = document.querySelector(divname + ' .btn_confirm'); 
        var noti = document.querySelector(divname + ' .noti');
        var duration = 2000;
        btn_confirm.onclick = function() {
        noti.style.setProperty('display', 'block');
        if (noti) {
            //auto remove toast
            const autoRemoveId = setTimeout(function(){
                noti.style.setProperty('display', 'none');
            },duration + 1000)

            //click to remove toast
            noti.onclick = function(){
                clearTimeout(autoRemoveId);
            }
            noti.style.animation = `floatDown ease 0.5s, fadeOut linear 1s 2s forwards`;
        }
    }

    //------------------------------ Music player ------------------------------

    const musicContainer = document.querySelector(divname + ' .music-container');
    const playBtn = document.querySelector(divname + ' .playBtn');

    const prevBtn = document.querySelector(divname + ' .prev');
    const nextBtn = document.querySelector(divname + ' .next');

    console.log(playBtn);
    const audio = document.querySelector(divname + ' .audio');
    const progress = document.querySelector(divname + ' .progress');
    const progressContainer = document.querySelector(divname + ' .progress-container');
    const title = document.querySelector(divname + ' .song_title');
    const cover = document.querySelector(divname + ' .cover');
    const currTime = document.querySelector(divname + ' .currTime');
    const durTime = document.querySelector(divname + ' .durTime');

    // Song titles
    const songs = ['SeeTinh', 'ThangHau', 'TinhCaTinhTa','hey', 'summer', 'ukulele'];

    // Keep track of song
    let songIndex = 2;

    // Initially load song details into DOM
    loadSong(songs[songIndex]);

    // Update song details
    function loadSong(song) {
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./image/${song}.jpg`;
    }

    // Play song
    function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
    }

    // Pause song
    function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
    }

    // Previous song
    function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
    }

    // Next song
    function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
    }

    // Update progress bar
    function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    }

    // Set progress bar
    function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    }

    //get duration & currentTime for Time of song
    function DurTime (e) {
        const {duration,currentTime} = e.srcElement;
        var sec;
        var sec_d;

        // define minutes currentTime
        let min = (currentTime==null)? 0:
        Math.floor(currentTime/60);
        min = min <10 ? '0'+min:min;

        // define seconds currentTime
        function get_sec (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec = Math.floor(x) - (60*i);
                        sec = sec <10 ? '0'+sec:sec;
                    }
                }
            }else{
                sec = Math.floor(x);
                sec = sec <10 ? '0'+sec:sec;
            }
        } 

        get_sec (currentTime,sec);

        // change currentTime DOM
        currTime.innerHTML = min +':'+ sec;

        // define minutes duration
        let min_d = (isNaN(duration) === true)? '0':
            Math.floor(duration/60);
        min_d = min_d <10 ? '0'+min_d:min_d;


        function get_sec_d (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec_d = Math.floor(x) - (60*i);
                        sec_d = sec_d <10 ? '0'+sec_d:sec_d;
                    }
                }
            }else{
                sec_d = (isNaN(duration) === true)? '0':
                Math.floor(x);
                sec_d = sec_d <10 ? '0'+sec_d:sec_d;
            }
        } 

        // define seconds duration
        
        get_sec_d (duration);

        // change duration DOM
        durTime.innerHTML = min_d +':'+ sec_d;
            
    };
    // Event listeners
    playBtn.addEventListener('click', () => {
        
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
    });

    // Change song
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    // Time/song update
    audio.addEventListener('timeupdate', updateProgress);

    // Click on progress bar
    progressContainer.addEventListener('click', setProgress);

    // Song ends
    audio.addEventListener('ended', nextSong);

    // Time of song
    audio.addEventListener('timeupdate',DurTime);






    // function dragPlay(event) {
    //     if(event.offsetX > 100) {
    //         r.style.setProperty('--deg', `${deg = 270 + event.offsetY*0.9}deg`);
    //         r.style.setProperty('--degPlay', `${degPlay = 270 + event.offsetY*0.9}deg`);
    //         r.style.setProperty('--degBell', `${degPlay + degBell + 90}deg`);
    //     } 
    //     else if (event.offsetX == 100) {
    //         r.style.setProperty('--deg', `${deg = 450}deg`);
    //         r.style.setProperty('--degPlay', `${degPlay = 450}deg`);
    //         r.style.setProperty('--degBell', `${degPlay + degBell + 90}deg`);
    //     }
    //     else if (event.offsetX < 100) {
    //         r.style.setProperty('--deg', `${deg = 630 - event.offsetY*0.9}deg`);
    //         r.style.setProperty('--degPlay', `${degPlay = 630 - event.offsetY*0.9}deg`);
    //         r.style.setProperty('--degBell', `${degPlay + degBell + 90}deg`);
    //     }

    //     hours1 = (degPlay / 15) - 18
    //     ExHours1 = hours1.toFixed(1);     // 5.3
    //     NewHours1 = parseInt(ExHours1);     // 5
    //     mins1 = ((ExHours1 - NewHours1)*10+1)*6 - 1;
    //     bedtime.innerHTML = NewHours1 + ":" + parseInt(mins1);
        
    //     totalMins1 = NewHours1*60 + mins1;
    //     if (NewHours > NewHours1) {
    //         totalHours1 = parseInt(Math.abs(totalMins1-totalMins)/60);
    //         remainMins1 = parseInt(Math.abs(totalMins1-totalMins) - totalHours1*60);
    //     }
    //     else if (NewHours == NewHours1) {
    //         if (mins >= mins1) {
    //             totalHours1 = parseInt(Math.abs(totalMins1-totalMins)/60);
    //             remainMins1 = parseInt(Math.abs(totalMins1-totalMins) - totalHours1*60);
    //         }
    //         else {
    //             totalHours1 = 23;
    //             remainMins1 = parseInt(1440 - Math.abs(totalMins1-totalMins) - totalHours1*60);
    //         }       
    //     }
    //     else {
    //         totalHours1 = parseInt((1440 - Math.abs(totalMins1-totalMins))/60);
    //         remainMins1 = parseInt(1440 - Math.abs(totalMins1-totalMins) - totalHours1*60);
    //     }

    //     console.log('Tổng thời gian ngủ:', totalHours1 + 'h' + remainMins1 + 'p');

    //     if (totalHours1 < 10) {
    //         HourNum.innerHTML = '0'+ totalHours1+'h';
    //     } else if (totalHours1>= 10) {
    //         HourNum.innerHTML = totalHours1+'h';
    //     }
    //     MinNum.innerHTML = parseInt(remainMins1) + 'min';
    // }
}