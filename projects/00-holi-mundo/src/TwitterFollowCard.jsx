import { useState } from "react";

export default function TwitterFollowCard({ userName, children }) {
	
	const [isFollowing, setIsFollowing] = useState(false);
	const text = isFollowing ? "Siguiendo" : "Seguir";
	const buttonClassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					alt="El Avatar de Mr Dogbot"
					src={`https://unavatar.io/twitter/${userName}`}
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	);
}
