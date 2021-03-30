export async function  textToSpeaker (name) {
  let synth = window.speechSynthesis;
  let toSpeak = new window.SpeechSynthesisUtterance(name);
  toSpeak.lang = 'tr-TR';
  toSpeak.volume =1;
  await  synth.speak(toSpeak);
};
