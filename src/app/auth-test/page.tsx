import getUser from "@/auth";
import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";
const WaitlistPage = async () => {
	const { email } = await getUser();

	return (
		<div className="relative flex flex-auto items-center">
			<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
				<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
			</div>
			<Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
				<h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
					Welcome {email}
				</h1>
			</Container>
		</div>
	);
};

export default WaitlistPage;
