import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import "./BottomNavbar.css";

const BottomNavbar = () => {
	const navLinks = [
		{
			label : "home",
			icon: "home-outline"
		},
		{
			label : "profile",
			icon: "person-outline"
		},
		{
			label: "message",
			icon: "chatbubble-outline"
		},
		{
			label: "help",
			icon: "information-circle-outline"
		},
		{
			label: "setting",
			icon: "settings-outline"
		}
	]

	const [isActive, setActive] = useState(navLinks[0]);
	const handleActive = link => {
		const activeLink = navLinks.find(l => l.label === link.label);
		if (!activeLink) return;
		setActive(activeLink);
	}

	return (
		<div className='bottom-navbar d-block d-sm-none'>
			<div className="nav-box d-flex">
				<ul className="nav-container d-flex justify-content-around">
					{
						navLinks.map((link, index) => (<li key={link.label+index} className={isActive.label === link.label? 'nav-item d-flex active': 'nav-item'} onClick={() => handleActive(link)}>
						<Link to={link.label} className="nav-item-link d-flex">
							<div className="nav-item-icon d-flex justify-content-center align-items-center">
								<ion-icon name={link.icon}></ion-icon>
							</div>
							<span className="nav-item-text">{link.label}</span>
						</Link>
					</li>))
					}
				</ul>
			</div>
		</div>
	);
};

export default BottomNavbar;