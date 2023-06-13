import axios from "axios";


export const translate = (word) => axios(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|sr`);