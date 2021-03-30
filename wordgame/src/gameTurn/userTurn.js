
export const ListenUser=()=> {
  let name;
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = 'tr-Tr';
  recognition.start();


 return new Promise(resolve => {
   recognition.onresult = function (event) {
     name=event.results[0][0].transcript.replace(/ /g,'');
    resolve(name);
  }
 });
}
