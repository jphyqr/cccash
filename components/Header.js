import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

class Header extends Component {
	render() {
		return (
			<Menu style={{ marginTop: "10px" }}>
				<Link route="/">
					<a className="item">CCCASH</a>
				</Link>
			</Menu>
		);
	}
}

export default Header;
