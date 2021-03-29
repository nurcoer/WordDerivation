export const textToSpeaker = (name) => {
  let synth = window.speechSynthesis;
  let toSpeak = new window.SpeechSynthesisUtterance(name);
  toSpeak.lang = 'tr';
  toSpeak.volume =1;
  synth.speak(toSpeak);
};
