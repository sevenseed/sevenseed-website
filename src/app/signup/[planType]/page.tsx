import { Container } from "@/components/Container";
import Header from "@/components/Header";

interface IParams {
	planType: string;
}

const getPlanType = (params: IParams) => {
	switch (params.planType) {
		case "basic":
			return "Basic";
		case "entrepreneur":
			return "Entrepreneur";
		default:
			return "Basic";
	}
};

const SignupPage = ({ params }: { params: IParams }) => {
	const planType = getPlanType(params);
	return (
		<>
			<header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
				<Header />
			</header>
			<Container>{planType}</Container>
		</>
	);
};
export default SignupPage;
