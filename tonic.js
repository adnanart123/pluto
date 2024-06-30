// elements

//normal
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
const time = document.querySelector("#time");
const startPluto = document.querySelector("#start_pluto")
const audio1 = new Audio();
const wikisrc = new Audio();
const ytsrc = new Audio();
const ggsrc = new Audio();
const suresure = new Audio();
const offf = new Audio();
const fbi = new Audio();
const hlp = new Audio();
const clcl = new Audio();
const sigma = new Audio();
const crist = new Audio();
const eid = new Audio();
const nap = new Audio();
const audio2 = new Audio();
const scare = new Audio();
const sing = new Audio();
const run = new Audio();
const imsory = new Audio();
const iam = new Audio();
const damage = new Audio();
const strt = new Audio();
const myfounds = new Audio();
const nakwthr = new Audio();
const fine = new Audio();
const rspct = new Audio();
const hello = new Audio();
const cannot = new Audio();
const sure = new Audio();
const notgoood = new Audio();
const good = new Audio();
const pauseit = new Audio();
const respect = new Audio();
const thnks = new Audio();
const point = new Audio();
const bye = new Audio();
const amazon = new Audio();
const apple = new Audio();
const flipkart = new Audio();
const github = new Audio();
const google = new Audio();
const instagram = new Audio();
const youtube = new Audio();
const snapchat = new Audio();
const father = new Audio();

audio1.src = "memes/laugh.wav";
father.src = "sound/father.wav";
fbi.src = "memes/fbimeme.mp3";
sigma.src = "sound/sigma.wav";
suresure.src = "sound/sure.wav";
offf.src = "sound/offf.wav";
hlp.src = "sound/hlp.wav";
clcl.src = "sound/clclt.wav";
nap.src = "sound/nap.wav";
audio2.src = "memes/fart.mp3";
scare.src = "memes/scare.mp3";
sing.src = "sound/pastlives.mp3";
run.src = "sound/runaway.mp3";
imsory.src = "sound/im sorry.mp3";
iam.src = "sound/who am i.wav";
damage.src = "memes/emotional.mp3";
strt.src = "sound/strt.mp3";
myfounds.src = "sound/synthesis.wav";
nakwthr.src = "sound/synthesis (1).wav";
fine.src = "sound/synthesis (2).wav";
rspct.src  = "sound/respect.wav"
hello.src  = "sound/Hello.wav"
cannot.src = "sound/cannot.wav"
sure.src = "sound/sureucan.wav"
notgoood.src = "sound/hsptl.wav"
good.src = "sound/feelfree.wav"
pauseit.src = "sound/pauseit.wav"
respect.src = "sound/respect.wav"
thnks.src = "sound/thnks.wav"
point.src = "sound/1.0.wav"
amazon.src = "sound/amazon.wav"
apple.src = "sound/apple.wav"
google.src = "sound/google.wav"
bye.src = "sound/bye.wav"
github.src = "sound/github.wav"
instagram.src = "sound/instagram.wav"
youtube.src = "sound/youtube.wav"
snapchat.src = "sound/snapchat.wav"
eid.src = "sound/eid.wav"
crist.src = "sound/crist.wav"
wikisrc.src = "sound/wikisrch.wav"
ytsrc.src = "sound/ytsrch.wav"
ggsrc.src = "sound/ggsrch.wav"

startPluto.addEventListener("click",() => {
    recognition.start();
    strt.play();
})

// //weather setup



// function weather(location) {
//     const weatherCont = document.querySelector(".temp").querySelectorAll("*");


// let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=48ddfe8c9cf29f95b7d0e54d6e171008`
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url , true);
// xhr.onload = function () {
//     if (this.status === 200){
//         let data  = JSON.parse(this.responseText);
//         weatherCont[0].textContent = `Location : ${data.name}`;
//         weatherCont[1].textContent = `Country  : ${data.sys.country}`;
//         weatherCont[2].textContent = `Weather type : ${data.weather[0].main}`;
//         weatherCont[3].textContent = `location : ${data.weather[0].description}`;
//         weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//         weatherCont[5].textContent = `Original Temprature :${ktc(
//             data.main.temp
//         )}`;

//         weatherCont[6].textContent = `feels like ${ktc (data.main.feels_like)}`;
//         weatherCont[7].textContent = `Min temprature ${ktc (data.main.temp_min)}`;
//         weatherCont[8].textContent = `Max temprature ${ktc (data.main.temp_max)}`;
//         weatherStatement = `sir the weather in ${data.name} is ${
//             data.weather[0].description
//         } and the temprature feels like ${krc (data.main.feels_like)}`;
//     } else {
//         weatherCont[0].textContent = "Weather Info Not Found";
//     }
//       }
     
//     xhr.send();
// }

// //convert kelvin into celcius
// function ktc(k) {
//     k = k - 273.15;
//     return k.toFixed(2);
// }


//pluto setup

    // weather("Trivandrum")

//speech Recognition setup

const speechRecognition = 
window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition()


// sr start

recognition.onstart = function () {
    console.log("vr active");
};

// sr stop
recognition.onend = function () {
    console.log("vr deactive");
};

// sr result
recognition.onresult = function(event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    console.log(`my words:${transcript}`);


    if(transcript.includes("search for")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if(transcript.includes("joke")){
        readOut("did you know , what is the most shocking city in the world");
        readOut("Electricity");
        
    }

    //sounds

    

    if(transcript.includes("f***")){
        respect.play();
    }

    if(transcript.includes("****")){
        respect.play();
    }

    if(transcript.includes("b****")){
        respect.play();
    }

    if(transcript.includes("laugh")){
        audio1.play();
    }

    if(transcript.includes("who are you")){
        iam.play();
    }

    if(transcript.includes("sad")){
        damage.play();
    }

    if(transcript.includes("i broke up")){
        damage.play();
    }

    if(transcript.includes("don't have any girlfriend")){
        damage.play();
    }

    if(transcript.includes("do not have girlfriend")){
        damage.play();
    }

    if(transcript.includes("fart")){
        audio2.play();
    }

    if(transcript.includes("scare me")){
        readOut("h")
        scare.play();
    }

    if(transcript.includes("care me")){
        scare.play();
    }

    if(transcript.includes("sing pastlive")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("singh pastlive")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing fastlive")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing past live")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing past life")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing fast live")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing fast life")){
        suresure.play();
        sing.play();
    }


    if(transcript.includes("sing a song")){
        suresure.play();
        sing.play();
    }

    if(transcript.includes("sing run away")){
        suresure.play();
        run.play();
    }

    if(transcript.includes("sing runaway")){
        suresure.play();
        run.play();
    }

    if(transcript.includes("singh runaway")){
        suresure.play();
        run.play();
    }

    if(transcript.includes("singh run away")){
        suresure.play();
        run.play();
    }

    if(transcript.includes("sing i am sorry")){
        suresure.play();
        imsory.play();
    }

    if(transcript.includes("stop all sounds")){
        run.pause();
        imsory.pause();
        sing.pause();
        pauseit.play();
        console.log("");
    }

    if(transcript.includes("stop singing")){
        run.pause();
        imsory.pause();
        sing.pause();
        pauseit.play();
        console.log("");
    }

    
//nice
    
//bye
    

    //simple qst

    if(transcript.includes("hi")){
        hello.play();
    }

    if(transcript.includes("take a photo")){
        cannot.play();
    }

    if(transcript.includes("lgbt")){
        sigma.play();
    }

    if(transcript.includes("shutdown")){
        nap.play();
        console.log("hello sir");
        window.close('nakpluto.netlify.app');
    }

    if(transcript.includes("shut down")){
        nap.play();
        console.log("hello sir");
        window.close('nakpluto.netlify.app');
    }

    if(transcript.includes("play a game")){
        readOut("sure, let's play , rock , paper , sissors");
        console.log("hello sir");
        window.open("https://plutogame.netlify.app");
    }

    if(transcript.includes("fool")){
        readOut("ok, thanks");
        console.log("?");
    }

    if(transcript.includes("i hate you")){
        readOut("sorry, i dont understand, what's the reason");
        console.log("?");
    }

    if(transcript.includes("happy christmas")){
        crist.play();
        console.log("?");
    }

    if(transcript.includes("merry christmas")){
        crist.play();
        console.log("?");
    }

    if(transcript.includes("eid mubarak")){
        eid.play();
        console.log("?");
    }


    if(transcript.includes("off the mic")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("of the mic")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("off the mike")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("of the mike")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("mic off")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("mike off")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("mike of")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("mic of")){
        offf.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("bye")){
        bye.play();
        console.log("hmm");
        recognition.stop()
    }

    if(transcript.includes("1.0 l")){
        point.play();
        console.log("hmm");
    }

    if(transcript.includes("1.o l")){
        point.play();
        console.log("hmm");
    }


    if(transcript.includes("favourite song")){
        readOut("my favourite song is, pastlives");
        console.log("pastlives")
    }
       
    
    if(transcript.includes("created you")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("made you")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("made you")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("you'r father")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("you'r mother")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("you'r dad")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("you'r mom")){
        father.play();
        console.log("pastlives")
    }




    if(transcript.includes("your father")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("your mother")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("your dad")){
        father.play();
        console.log("pastlives")
    }

    if(transcript.includes("your mom")){
        father.play();
        console.log("pastlives")
    }


    if(transcript.includes("i love you")){
        console.log("ohshit");
        fbi.play();
    }

    if(transcript.includes("weather")){
        nakwthr.play();
        window.open("https://plutoweather.netlify.app")
    }

    if(transcript.includes("that's weird")){
        readOut("i think so");
        console.log("");
    }

    if(transcript.includes("can you hear me")){
        readOut("yes, what's the problem");
        console.log("");
    }

    if(transcript.includes("how are you")){
        fine.play();
        console.log("");
    }

    if(transcript.includes("i am fine")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i am good")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i am doing well")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i am feeling well")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i'am going well")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i am going well")){
        good.play();
        console.log("");
    }

    if(transcript.includes("i am not good")){
        notgoood.play();
        console.log("");
    }

    if(transcript.includes("not feeling good")){
        notgoood.play();
        console.log("");
    }

    if(transcript.includes("not feeling very well")){
        notgoood.play();
        console.log("");
    }

    if(transcript.includes("nice")){
        thnks.play();
        console.log("");
    }

    if(transcript.includes("can i go")){
        sure.play();
        console.log("");
    }

    if(transcript.includes("hello")){
        hello.play();
        console.log("");
    }



    if(transcript.includes("who is")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if(transcript.includes("what is")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if(transcript.includes("image of")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?sca_esv=1895c9f6073d5159&sxsrf=ACQVn08b96jZwzf6ciNbwkEsmsBUwE4QxA:1710085232698&q=${input}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjlkNL2g-qEAxXZyqACHS3UCAkQ0pQJegQIERAB&biw=1168&bih=568&dpr=1.17`);
    }

    if(transcript.includes("picture of")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?sca_esv=1895c9f6073d5159&sxsrf=ACQVn08b96jZwzf6ciNbwkEsmsBUwE4QxA:1710085232698&q=${input}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjlkNL2g-qEAxXZyqACHS3UCAkQ0pQJegQIERAB&biw=1168&bih=568&dpr=1.17`);
    }

    if(transcript.includes("pic of")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?sca_esv=1895c9f6073d5159&sxsrf=ACQVn08b96jZwzf6ciNbwkEsmsBUwE4QxA:1710085232698&q=${input}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjlkNL2g-qEAxXZyqACHS3UCAkQ0pQJegQIERAB&biw=1168&bih=568&dpr=1.17`);
    }

    if(transcript.includes("photo of")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?sca_esv=1895c9f6073d5159&sxsrf=ACQVn08b96jZwzf6ciNbwkEsmsBUwE4QxA:1710085232698&q=${input}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjlkNL2g-qEAxXZyqACHS3UCAkQ0pQJegQIERAB&biw=1168&bih=568&dpr=1.17`);
    }


    if(transcript.includes("what's")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if(transcript.includes("how to")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if(transcript.includes("near")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }


    if(transcript.includes("which")){
        myfounds.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.google.com/search?q=${input}`);
    }



    if(transcript.includes("youtube search")){
        ytsrc.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://www.youtube.com/results?search_query=${input}`);
    }

    if(transcript.includes("wikipedia")){
        wikisrc.play();
        let input = transcript.split("");
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log("input");
        window.open(`https://en.wikipedia.org/wiki/Special:Search?go=Go&search=${input}`);
    }

    if(transcript.includes("open youtube")){
        youtube.play();
        console.log("input");
        window.open("https://www.youtube.com");
    }

    if(transcript.includes("open insta")){
        instagram.play();
        console.log("input");
        window.open("https://www.instagram.com");
    }

    if(transcript.includes("open github")){
        github.play();
        console.log("input");
        window.open("https://www.github.com");
    }

    if(transcript.includes("open amazon")){
        amazon.play();
        console.log("input");
        window.open("https://www.amazon.com");
    }

    if(transcript.includes("open flipkart")){
        flipkart.play();
        console.log("input");
        window.open("https://www.flipkart.com");
    }

    if(transcript.includes("open apple")){
        apple.play();
        console.log("input");
        window.open("https://www.apple.com");
    }


    if(transcript.includes("open temu")){
        readOut("opening temu");
        console.log("input");
        window.open("https://www.temu.com");
    }

    if(transcript.includes("calculate")){
        clcl.play();
        console.log("input");
        window.open("https://plutocalc.netlify.app");
    }

    if(transcript.includes("open calculator")){
        clcl.play();
        console.log("input");
        window.open("https://plutocalc.netlify.app");
    }

    if(transcript.includes("can i donate")){
        hlp.play();
        console.log("input");
        window.open("https://nakpluto.netlify.app/donate");
    }

    if(transcript.includes("+")){
        clcl.play();
        console.log("input");
        window.open("https://plutocalc.netlify.app/");
    }

    if(transcript.includes("plus")){
        clcl.play();
        console.log("input");
        window.open("https://plutocalc.netlify.app/");
    }

    if(transcript.includes("open snap")){
        snapchat.play();
        console.log("input");
        window.open("https://www.snapchat.com");
    }

    if(transcript.includes("wait")){
        nap.play();
        console.log("input");
        recognition.stop();
    }


// inmages

if(transcript.includes("generate image ")){
    readOut("sorry, i cannot generate images, if you want say open images google or pluto image genetrator");
    console.log("delhi");
}


if(transcript.includes("open pluto image")) {
    readOut("ok , here is PLUTO image generator from N A K industries");
    window.open("https://adnangithub1234.github.io/PLUT-AI-image-gen-2/")
}

if(transcript.includes("open images google")){
    readOut("here you go");
    window.open("https://images.google.com");
    console.log("delhi");
}   

//stopallsound




};



// sr continuous

recognition.continuous = true;

startBtn.addEventListener("click",() => {
    recognition.start();
})

stopBtn.addEventListener("click",() => {
    recognition.stop();
})



// pluto speech

function readOut(message){
    const speech = new SpeechSynthesisUtterance()
   

// differant voices
const allVoices = speechSynthesis.getVoices();
speech.text = message;
speech.voice = allVoices[6];
speech.volume = 5;
window.speechSynthesis.speak(speech);
console.log("speaking out");
}