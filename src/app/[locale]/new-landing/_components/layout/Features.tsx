import Feature from "../Feature";

export default function Features() {
	return (
		<section id="features" className="flex justify-center">
			<div className="w-full md:max-w-3xl grid md:grid-cols-2 gap-3">
				<Feature>
					<Feature.Description>
						<Feature.Description.Heading>
							Form your legal entity
						</Feature.Description.Heading>
						<p>
							Incorporate as an independent or an SRL, in a region of your
							choosing. We'll guide you through which is best for your
							business if you don't know.
						</p>
					</Feature.Description>
					<Feature.Exhibit>
						<p className="text-5xl text-slate-400 font-bold">Exhibit</p>
					</Feature.Exhibit>
				</Feature>
				<Feature>
					<Feature.Description>
						<Feature.Description.Heading>
							Open a bank account without blocking capital
						</Feature.Description.Heading>
						<p>
							Many founders waste weeks trying to open blocked bank
							accounts for their starting capital. With Seven Seed, we
							will help you incorporate without one.
						</p>
					</Feature.Description>
					<Feature.Exhibit>
						<p className="text-5xl text-slate-400 font-bold">Exhibit</p>
					</Feature.Exhibit>
				</Feature>
				<Feature>
					<Feature.Description>
						<Feature.Description.Heading>
							Your accounting set up from the start
						</Feature.Description.Heading>
						<p>
							We'll open your VAT number and get you a dedicated
							accountant perfect for your business. Compliant from the
							start, without headaches.
						</p>
					</Feature.Description>
					<Feature.Exhibit>
						<p className="text-5xl text-slate-400 font-bold">Exhibit</p>
					</Feature.Exhibit>
				</Feature>
				<Feature>
					<Feature.Description>
						<Feature.Description.Heading>
							Get a business address in Brussels
						</Feature.Description.Heading>
						<p>
							Don't have a business address in Brussels? For only 65 € /
							month, we provide you with an address, mail scanning and
							forwarding. Easy as that.
						</p>
					</Feature.Description>
					<Feature.Exhibit>
						<p className="text-5xl text-slate-400 font-bold">Exhibit</p>
					</Feature.Exhibit>
				</Feature>
			</div>
		</section>
	);
}
