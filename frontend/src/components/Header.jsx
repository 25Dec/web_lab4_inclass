import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import logo192 from "../../public/logo192.png";

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header_icon" />
			</IconButton>
			<img src={logo192} alt="header" />
			<IconButton>
				<ForumIcon fontSize="large" className="header_icon" />
			</IconButton>
		</div>
	);
};

export default Header;
