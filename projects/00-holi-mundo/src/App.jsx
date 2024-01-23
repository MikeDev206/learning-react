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
				name="Mr Robot"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="ironman_es"
				name="Tony Stark"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="midudev"
				name="Miguel Ángel Durán"
			/>
			<TwitterFollowCard
				formatUserName={formatUserName}
				isFollowing
				userName="elonmusk"
				name="Elon Musk"
			/>
		</section>
	);
}
