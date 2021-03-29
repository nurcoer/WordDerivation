import React from 'react';

export const ListenUser=()=> {
  let name;
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = 'tr-Tr';
  recognition.start();


  let timeleft = 9;
  let ListenTimer = setInterval(function () {
    if (timeleft <= 0) {
      recognition.stop();
      clearInterval(ListenTimer);
    }
    timeleft -= 1;
  }, 1000);


 return new Promise(resolve => {
   recognition.onresult = function (event) {
     name=event.results[0][0].transcript.replace(/ /g,'');
    resolve(name);
  }
 });
}
