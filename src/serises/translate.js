import axios from "axios";


export const translate = (word) => axios(`https://mymemory.translated.net/api/get?q=${word}&langpair=en|sr`);