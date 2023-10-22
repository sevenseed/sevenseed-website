import Easier from "./home/Easier";
import Introduction from "./home/Introduction";
import Journey from "./home/Journey";
import Problem from "./home/Problem";
import WUG from "./home/WUG";

export default function Home() {
	return (
		<div>
			<main className="home-bg flex  flex-col items-center justify-center  ">
				<Introduction />
				<Easier />
				<Problem />
				<WUG />
				<Journey />
			</main>
		</div>
	);
}
