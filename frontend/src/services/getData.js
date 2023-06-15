
import axios from "axios";


export const getVerbs = () => axios('http://localhost:5500/verbs');