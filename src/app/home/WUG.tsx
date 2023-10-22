import React from "react";

const WUG = () => {
	return (
		<div className="h-screen w-full flex flex-col  z-50 relative">
			<div className="text-center">
				<h1 className="m-5 text-secondary">What you get</h1>
				<h6 className="text-gray-500">
					The process is entirely online and never asks for redundant
					information.​ <br /> We designed a paperless, founder-friendly flow
					that minimizes time and cost.
				</h6>
			</div>
			<div className="flex justify-center m-auto gap-10  w-10/12">
				<div className="card w-96 bg-white shadow-xl">
					<figure>
						<img src="/images/vat.jpg" alt="Shoes" />
					</figure>
					<div className="card-body ">
						<h2 className="card-title">WYG !</h2>
						<p>A company & VAT number without visiting an accountant</p>
					</div>
				</div>
				<div className="card w-96 bg-white shadow-xl">
					<figure>
						<img src="/images/box.jpg" alt="Shoes" />
					</figure>
					<div className="card-body ">
						<h2 className="card-title">WYG !</h2>
						<p> A PO box in Flanders with Registered Agent & mail fwd</p>
					</div>
				</div>
				<div className="card w-96 bg-white shadow-xl">
					<figure>
						<img src="/images/account.jpg" alt="Shoes" />
					</figure>
					<div className="card-body ">
						<h2 className="card-title">WYG !</h2>
						<p>A BE account number with multi-currency support</p>
					</div>
				</div>
				<div className="card w-96 bg-white shadow-xl">
					<figure>
						<img src="/images/domain.jpg" alt="Shoes" />
					</figure>
					<div className="card-body ">
						<h2 className="card-title">WYG !</h2>
						<p>UBO, phone number, domain names & trademarks at creation</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WUG;
