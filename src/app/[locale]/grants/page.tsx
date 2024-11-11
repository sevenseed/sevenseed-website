import Challenges from "./Challenges";
import CTA from "./CTA";
import Euchallenges from "./Euchallenges";
import Introduction from "./Introduction";
import Services from "./Services";
import Solutions from "./Solutions";
import Taglines from "./Taglines";



const page = () => {
	return (
		<div className="relative isolate px-6 lg:px-8">
			<Introduction />
			<Taglines/>
            <Services/>
			<Challenges/>
			<Solutions/>
			<Euchallenges/>
			<CTA/>
		</div>
	);
};

export default page;
