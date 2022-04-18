import React from "react";

function Navitems () {
    return (
        <li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>{props.menuName}</span></a>
			</li>
    )
}
export default Navitems;