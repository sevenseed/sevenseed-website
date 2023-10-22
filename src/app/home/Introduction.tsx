import logo from "@/../public/images/svg/flogo.svg";
import Image from "next/image";
import Videobg from "../components/Videobg";

const Introduction = () => {
	return (
		<div className="w-full h-screen z-10 ">
			<Videobg />
			<div className="introduction flex flex-col h-screen items-center justify-center z-50 relative">
				<Image alt="" src={logo} width="400" height="400" />
				<div className="w-9/12  text-center">
					<h1 className="leading-normal text-secondary">
						Your Company in Belgium in Seven Days.{" "}
					</h1>
					<p className="text-gray-500">
						From Zero to Your Company in just a week. No paperwork, no
						fuss.Coming soon. Sign up to our waiting list to be the first to
						know.
					</p>
					<div className="flex flex-col justify-center items-center mt-9 gap-5 ">
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered border-secondary w-6/12 bg-slate-100 bg-opacity-20 placeholder-slate-500"
						/>
						<button className="btn btn-primary w-4/12 text-white">
							Sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
