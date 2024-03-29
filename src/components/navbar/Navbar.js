import React, { useState } from "react";
import {
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineShoppingCart,
	AiOutlineMenu,
	AiOutlineHome
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";

function Navbar() {
	const { pathname } = useLocation();
	const [show, setShow] = useState(false);
	const carts = useSelector(s => s.cart.value);
	document.body.style.overflow = show ? "hidden" : "auto";

	if (pathname.includes("admin") || pathname.includes("login")) {
		return <></>;
	}
	return (
		<>
			<div className="navbar">
				<div className="container navbar__main">
					<Link to={"/"} className="nav__logo">
						<img src={logo} alt="" />{" "}
					</Link>
					<button className="nav__btn" onClick={() => setShow(true)}>
						<AiOutlineMenu />
					</button>
					<div className="item1">
						<ul>
							<Link to={"/about"}>
								<li>Biz Haqimizda</li>
							</Link>
							<Link to={"/branches"}>
								<li>Filyallarimiz</li>
							</Link>
						</ul>
					</div>

					<ul className="nav__collection">
						<Link to={"/"} className="nav__item">
							<AiOutlineHome />
						</Link>
						<Link to={"/admin/create-product"} className="nav__item">
							<AiOutlineUser />
						</Link>
						<Link to={"/wishlist"} className="nav__item">
							<AiOutlineHeart />
						</Link>
						<Link to={"/cart"} className="nav__item">
							<AiOutlineShoppingCart />
							<span className="nav__index">{carts.length}</span>
						</Link>
					</ul>
				</div>
			</div>
			<Sidebar show={show} setShow={setShow} />
		</>
	);
}

export default Navbar;
