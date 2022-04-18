import React from "react";
import App from "../App";

function Sidebar() {
    return (

        <React.Fragment>
		<ul classname="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a classname="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div classname="sidebar-brand-icon">
					<i classname="fas fa-chart-line"></i>
				</div>
				<div classname="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr classname="sidebar-divider my-0"/>

			<li classname="nav-item active">
				<a classname="nav-link" href="/">
					<i classname="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			<hr classname="sidebar-divider"/>

			<div classname="sidebar-heading">Actions</div>

			<li classname="nav-item">
				<a classname="nav-link collapsed" href="/">
					<i classname="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			<li classname="nav-item">
				<a classname="nav-link" href="/">
					<i classname="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

			<li classname="nav-item">
				<a classname ="nav-link" href="/">
					<i classname="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			<hr classname ="sidebar-divider d-none d-md-block"/>
		</ul>
        </React.Fragment>

    );
}
export default Sidebar;