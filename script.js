let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-time");
let curr_track = document.createElement('audio');

let isRandom = false;
let randomIcon = document.querySelector('.random-track i');

let track_index = 0;
let isPlaying = false;
let updateTimer;

const music_list = 
[
    {
        img : "images/Ordinary.jpg",
        name : "Ordinary",
        artist : "Alex Warren",
        music : "music/Alex Warren - Ordinary (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Carry_you_home.jpg",
        name : "Carry you home",
        artist : "Alex Warren",
        music : "music/Alex_warren_Carry_you_home_vocals_only_lyrics_بدون_موسيقىM4A_128K.mp3",
    },        
    {
        img : "images/When_the_party_ends.jpg",
        name : "when the party ends",
        artist : "Max Allais",
        music : "music/[Acapella_Vocals] Max Allais   When The Party Ends(M4A_128K).mp3",
    },
    {
        img : "images/Attention.jpg",
        name : "Attention",
        artist : "Charlie Puth",
        music : "music/Charlie Puth - Attention _ Studio Quality Acapella(M4A_128K).mp3",
    },
    {
        img : "images/Your_idol.jpg",
        name : "Your idol",
        artist : "K-pop _demon_hunter",
        music : "music/_Your_Idol_Official_Song_Clip_KPop_Demon_Hunters_Acapella.mp3",
    },
    {
        img : "images/Free.jpg",
        name : "Free",
        artist : "Rumi/Jinu",
        music : "music/RUMI _ JINU _Free_Acapella.mp3",
    },
    {
        img : "images/Golden.jpg",
        name : "Golden",
        artist : "Huntrix",
        music : "music/HUNTRIX (헌트릭스) _Golden_ Acapella.mp3.mp3",
    },
    {
        img : "images/What_it_sounds_like.jpg",
        name : "What it sounds like",
        artist : "Huntrix",
        music : "music/HUNTRIX - _What It Sounds Like_ Acapella_1.mp3",
    },
    {
        img : "images/Arabian_night.jpg",
        name : "Arabian night",
        artist : "Will Smith",
        music : "music/arabian night - acapella (vocals only)(M4A_128K).mp3",
    },
    {
        img : "images/Queen_of_the_Kings.jpg",
        name : "Queen of the Kings",
        artist : "Alessandra",
        music : "music/Alessandra_Queen_of_Kings_Norway_Acapella_Vocals_OnlyM4A_128K.mp3",
    },
    {
        img : "images/Atlantis.jpg",
        name : "Atlantis",
        artist : "Seafret",
        music : "music/SEAFRET - ATLANTIS (ACAPELLA)(M4A_128K).mp3",
    },
    {
        img : "images/Fairytale.jpg",
        name : "Fairytale",
        artist : "Alexander",
        music : "music/Alexander_Rybak_Fairytale_Clean_Acapella_8D_AudioM4A_128K.mp3",
    },
    {
        img : "images/Rewrite_the_stars.jpg",
        name : "Rewrite the stars",
        artist : "Anne Marie/James Arthur",
        music : "music/Anne_Marie_James_Arthur_Rewrite_The_Stars_acapellaM4A_128K.mp3",
    },
    {
        img : "images/Set_fire_to_the_rain.jpg",
        name : "Set fire to the rain",
        artist : "Adele",
        music : "music/Adele - set fire to the rain (acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Hometown_smile.jpg",
        name : "Hometown smile",
        artist : "Bahjat",
        music : "music/Bahjat-Hometown smile ★_بدون موسيقى(M4A_128K).mp3",
    },
    {
        img : "images/Lily.jpg",
        name : "Lily",
        artist : "Alan Walker",
        music : "music/Alan_Walker_K_391_Emelie_Hollow_Lily_Official_AcapellaM4A_128K.mp3",
    },
    {
        img : "images/Who_I_am.jpg",
        name : "Who I am",
        artist : "Alan Walker",
        music : "music/Alan_Walker_Putri_Ariani_Peder_Elias_Who_I_Am_A_CapellaM4A_128K.mp3",
    },
    {
        img : "images/If_we_have_each_other.jpg",
        name : "If we have each other",
        artist : "Alec Benjamin",
        music : "music/Alec_Benjamin_If_We_Have_Each_Other_acapella_vocals_onlyM4A_128K.mp3",
    },
    {
        img : "images/Peter.jpg",
        name : "Peter Pan was right",
        artist : "Anson Seabra",
        music : "music/Anson Seabra - Peter Pan Was Right vocals only(M4A_128K).mp3",
    },
    {
        img : "images/I_dont_want_to_say_goodbye.jpg",
        name : "I don't wanna say goodbye",
        artist : "Benson Boone",
        music : "music/Benson_Boone_I_don_t_wanna_say_goodbye_ca_means_forever_In_the_Stars.mp3",
    },    
    {
        img : "images/Hero.jpg",
        name : "Hero",
        artist : "Charlie Puth",
        music : "music/Charlie Puth - Hero (ACAPELLA) Vocals Only(M4A_128K).mp3",
    },
    {
        img : "images/Chasing_dreams.jpg",
        name : "Chasing dreams",
        artist : "Nikki",
        music : "music/Chasing dreams (acapella)_1.mp3",
    },
    {
        img : "images/Let_the_world_burn.jpg",
        name : "Let the world burn",
        artist : "Chris_Grey",
        music : "music/Chris_Grey_LET_THE_WORLD_BURN_Clean_Acapella_8D_AudioM4A_128K.mp3",
    },
    {
        img : "images/Sing_loud.jpg",
        name : "Sing Loud",
        artist : "Chris Thrace",
        music : "music/Chris_Thrace_ft_Kate_Linn_Sing_Loud_lyrics_nomusic_بدون_موسيقى_مترجمةM4A.mp3",
    },
    {
        img : "images/Rockabye.jpg",
        name : "Rockabye",
        artist : "Sean Paul/Anne Marie",
        music : "music/Clean_Bandit_Rockabye_Vocal_only_feat_Sean_Paul_Anne_Marie_Without.mp3",
    },
    {
        img : "images/Hymn_for_the_weekend.jpg",
        name : "Hymn for the weekend",
        artist : "Coldplay",
        music : "music/Coldplay_Hymn_For_The_Weekend_Acapella_Vocal_OnlyFREE_DOWNLOADM4A.mp3",
    },
    {
        img : "images/Daylight.jpg",
        name : "Daylight",
        artist : "David Kushner ",
        music : "music/David Kushner - Daylight (Only vocals) Acapella(M4A_128K).mp3",
    },
    {
        img : "images/Let_me_love_you.jpg",
        name : "Let me love you",
        artist : "Justin Bieber",
        music : "music/DJ_Snake_Justin_Bieber_Let_Me_Love_You_KiNG_AcapellaM4A_128K.mp3",
    },
    {
        img : "images/Double_take.jpg",
        name : "Double Take",
        artist : "Dhruv",
        music : "music/Double Take - Dhruv [Acapella] vocal only _(M4A_128K).mp3",
    },
    {
        img : "images/Royalty.jpg",
        name : "Royalty (Speed up)",
        artist : "Egzod Maestro Chives",
        music : "music/Egzod_Maestro_Chives_ft_Neoni_Royalty_Speed_Up_AcapellaM4A_128K.mp3",
    },
    {
        img : "images/Shinunoga_E-Wa.jpg",
        name : "Shinunoga E-Wa",
        artist : "Fujii Kaze",
        music : "music/Fujii Kaze - Shinunoga E-Wa [Clean Acapella](M4A_128K).mp3",
    },
    {
        img : "images/Me_myself_and_I.jpg",
        name : "Me Myself and I",
        artist : "G-Eazy/Bebe Rexha",
        music : "music/G_Eazy_feat_Bebe_Rexha_Me_Myself_I_Acapella_Vocals_Only_CLEAN_VERSION.mp3",
    },
    {
        img : "images/Give_me_a_sign.jpg",
        name : "Give me a sign",
        artist : "Bleeding",
        music : "music/give_me_a_sign_I_don_t_wanna_lose_my_mind_without_music_bleeding.mp3",
    },
    {
        img : "images/That_s_so_true.jpg",
        name : "That's so true",
        artist : "Gracie Abrams",
        music : "music/Gracie_Abrams_That_s_So_True_ACAPELLA_Vocals_OnlyM4A_128K.mp3",
    },
    {
        img : "images/Without_me.jpg",
        name : "Without me",
        artist : "Halsey",
        music : "music/Halsey - Without Me (Acapella - Vocals Only)(M4A_128K).mp3",
    },
    {
        img : "images/Pick_up_the_phone.jpg",
        name : "Pick up the phone",
        artist : "Henry Moodie",
        music : "music/Henry Moodie - pick up the phone _ Vocals(M4A_128K).mp3",
    },
    {
        img : "images/Dernière_danse.jpg",
        name : "Dernière danse",
        artist : "Indila ",
        music : "music/Indila - Dernière Danse [Clean Acapella] 3D Audio(M4A_128K).mp3",
    },
    {
        img : "images/Tourner_dans_le_vide.jpg",
        name : "Tourner dans le vide",
        artist : "ndila",
        music : "music/Indila - tourner dans le vide (Acapella)(M4A_128K).mp3",
    },        
    {
        img : "images/Love_story.jpg",
        name : "Love story",
        artist : "Indila",
        music : "music/Indila_Love_Story_acapella_ver_IndilaOfficielM4A_128K.mp3",
    },
    {
        img : "images/Car_is_outside.jpg",
        name : "Car's outside",
        artist : "James Arthur",
        music : "music/James Arthur - Car_s Outside (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Impossible.jpg",
        name : "Impossible",
        artist : "James Arthur",
        music : "music/James Arthur - Impossible (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Hell_on_me.jpg",
        name : "Hell on me",
        artist : "Johnny Huynh",
        music : "music/Johnny_Huynh_HELL_ON_ME_Clean_Acapella_3D_Audio_بدون_موسيقىM4A_128K.mp3",
    },
    {
        img : "images/What_if.jpg",
        name : "What if",
        artist : "Johnny Orlando/Mackenzie Ziegler",
        music : "music/Johnny_Orlando_Mackenzie_Ziegler_What_If_VocalsM4A_128K.mp3",
    },
    {
        img : "images/Die_with_a_smile.jpg",
        name : "Die with a smile",
        artist : "Lady Gaga/Bruno Mars",
        music : "music/Lady_Gaga_Bruno_Mars_–_Die_With_A_Smile_Acapella_Vocals_OnlyM4A.mp3",
    },
    {
        img : "images/Old_town_road.jpg",
        name : "Old town road",
        artist : "Lil Nas X",
        music : "music/Lil Nas X - Old Town Road (Studio Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/sped_up_Est_ce_que_tu_m_aimes.jpg",
        name : "Est-ce que tu m_aimes",
        artist : "Maître Gims",
        music : "music/Maître_Gims_Est_ce_que_tu_m_aimes_Clean_Acapella_3D_Audio_بدون_موسيقىM4A.mp3",
    },
    {
        img : "images/Est_ce_que_tu_m_aimes.jpg",
        name : "Est-ce que tu m_aimes",
        artist : "Maître Gims",
        music : "music/Maître Gims - Est-ce que tu m_aimes _ (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/In_the_name_of_love.jpg",
        name : "In the name of love",
        artist : "Martin Garrix",
        music : "music/Martin Garrix - In The Name Of Love (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Dynasty.jpg",
        name : "Dynasty",
        artist : "Miia",
        music : "music/Miia - Dynasty (ACAPELLA)(M4A_128K).mp3",
    },
    {
        img : "images/Je_ne_parle.jpg",
        name : "Je ne parle pas français",
        artist : "Namika",
        music : "music/Namika_Je_ne_parle_pas_français_انا_لا_أتحدث_الفرنسية_بدون_موسيقى.mp3",
    },
    {
        img : "images/On_écrit_sur_les_murs.jpg",
        name : "On écrit sur les murs",
        artist : "Kids united",
        music : "music/On écrit sur les murs - A cappella cover(M4A_128K).mp3",
    },
    {
        img : "images/Night_changes.jpg",
        name : "Night changes",
        artist : "One direction",
        music : "music/One_Direction_Night_Changes_Acapella_Vocals_OnlyM4A_128K.mp3",
    },
    {
        img : "images/Counting_stars.jpg",
        name : "Counting Stars",
        artist : "OneRepublic",
        music : "music/OneRepublic - Counting Stars (Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Feel_this_moment.jpg",
        name : "Feel this moment",
        artist : "Pitbull",
        music : "music/Pitbull_Feel_This_Moment_The_Global_Warm_tening_Party_ft_Christin.mp3",
    },
    {
        img : "images/Line_without_a_hook.jpg",
        name : "Line without a hook",
        artist : "Ricky Montgomery",
        music : "music/Ricky Montgomery - Line Without A Hook (Vocal)(M4A_128K).mp3",
    },
    {
        img : "images/RIP_love.jpg",
        name : "RIP love",
        artist : "Faouzia",
        music : "music/RIP_ Love _ Faouzia (Filtered Acapella)(M4A_128K).mp3",
    },    
    {
        img : "images/Dandelions.jpg",
        name : "Dandelions",
        artist : "Ruth_B",
        music : "music/Ruth_B_Dandelions_🎧_vocals_only_Acapella_lyrics_viral_youtubeM4A.mp3",
    },
    {
        img : "images/Fire_on_fire.jpg",
        name : "Fire on fire",
        artist : "Sam Smith",
        music : "music/SAM_SMITH_Fire_on_fire_just_vocal_no_music_بدون_موسيقىM4A_128K.mp3",
    },
    {
        img : "images/Dancing_with_your_ghost.jpg",
        name : "Dancing with your ghost",
        artist : "Sasja Alex",
        music : "music/Sasha_Alex_Sloan_Dancing_With_Your_Ghost_Acapella_Vocal_OnlyFREE.mp3",
    },
    {
        img : "images/People_you_know.jpg",
        name : "People you know",
        artist : "Selena Gomez",
        music : "music/Selena Gomez - People You Know (Acapella _ Audio)(M4A_128K).mp3",
    },
    {
        img : "images/Alibi.jpg",
        name : "Alibi",
        artist : "Sevdaliza",
        music : "music/Sevdaliza_ALIBI_Lyrics_ft_Pabllo_Vitta_a_man_she_s_my_alibi_432HzM4A.mp3",
    },
    {
        img : "images/Infected.jpg",
        name : "Infected",
        artist : "Sicksick",
        music : "music/SICKICK-INFECTED (ACAPELLA VERSION)(M4A_128K).mp3",
    },
    {
        img : "images/Take_me_away.jpg",
        name : "Take me away",
        artist : "New medicine",
        music : "music/Take Me Away (acapella).mp3",
    },
    {
        img : "images/Dzanum.jpg",
        name : "Dzanum",
        artist : "Teya Dora",
        music : "music/TEYA DORA - DŽANUM (Acapella_Vocal Only)(M4A_128K).mp3",
    },
    {
        img : "images/The_city_is_yours.jpg",
        name : "The city is yours",
        artist : "Jamie fox",
        music : "music/the city_s yours_ Jamie foxx_ lyrics only(M4A_128K).mp3",
    },
    {
        img : "images/Reflections .jpg",
        name : "Reflections ",
        artist : "The neighbourhood ",
        music : "music/the neighbourhood - reflections (acapella)(M4A_128K).mp3",
    },
    {
        img : "images/Hall of fame.jpg",
        name : "Hall of fame",
        artist : "The script",
        music : "music/The Script - Hall of Fame ft. will.i.am _ Vocals(M4A_128K).mp3",
    },
    {
        img : "images/Me_myself_and_I_suncathcers.jpg",
        name : "Me Myself and I",
        artist : "The suncathcers",
        music : "music/The_Suncathcers_&_Michel_Fannoun_Me,_Myself_And_I_acapella.mp3",
    },
    {
        img : "images/Water is fine.jpg",
        name : "Water is fine(sped up)",
        artist : "Chloe Ament",
        music : "music/the_water_is_fine_–_chloe_ament_sped_up_blood_runs_thicker_than.mp3",
    },
    {
        img : "images/Another_love.jpg",
        name : "Another love",
        artist : "Tom Odell",
        music : "music/Tom Odell - Another Love (almost studio vocals)(M4A_128K).mp3",
    },
    {
        img : "images/Doubt.jpg",
        name : "Doubt",
        artist : "twenty one pilots",
        music : "music/twenty one pilots_ Doubt (Almost Studio Acapella)(M4A_128K).mp3",
    },
    {
        img : "images/It.jpg",
        name : "What is it",
        artist : "doechii",
        music : "music/What_it_is_block_boy_doechii_acapella_speed_up_مسرعة_بدون_موسيقى.mp3",
    },
    {
        img : "images/Coeur.jpg",
        name : "Coeur",
        artist : "Indila",
        music : "music/Zaho_Indila_Roi_2_coeur_ft_song_without_musicM4A_128K.mp3",
    },
    {
        img : "images/Perfect.jpg",
        name : "Perfect",
        artist : "Taylor Swift",
        music : "music/Escucha a Taylor Swift cantando _Perfect_(acapella).mp3",
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset()
{
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack()
{
    isRandom ? pauseRandom() : playRandom();
}
function playRandom()
{
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom()
{
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack()
{
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack()
{
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(

){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack()
{
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack()
{
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack()
{
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo()
{
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume()
{
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate()
{
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
