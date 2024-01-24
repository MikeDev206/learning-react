import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {
	const formatUserName = (userName) => `@${userName}`;

	return (
		<section className="App">
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="whoismrrobot"
				children="Mr Robot"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="ironman_es"
				children="Tony Stark"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="midudev"
				children="Miguel Ángel Durán"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="elonmusk"
				children="Elon Musk"
			/>
		</section>
	);
}
