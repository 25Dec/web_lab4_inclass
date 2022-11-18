import axios from "axios";

const instance = axios.create({
	baseURL: "mongodb+srv://thien2002nhan:th13n2002nh4n@mernapp.zoqqyub.mongodb.net/?retryWrites=true&w=majority",
});

export default instance;
