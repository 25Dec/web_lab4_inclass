import axios from "axios";

const instance = axios.create({
	baseURL: "mongodb+srv://thien2002nhan:<password>@mernapp.zoqqyub.mongodb.net/?retryWrites=true&w=majority",
});

export default instance;
