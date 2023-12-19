import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";

import EmailLink from "@/components/EmailLink";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const UPDATE_DATE = "2023-12-01";

const Privacy = () => (
	<>
		<div className="relative flex flex-auto items-start p-10">
			<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
				<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
			</div>
			<Container className="flex flex-col gap-4 prose">
				<h1 className="mt-6 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
					Privacy Policy
				</h1>
				<p>
					This privacy policy governs the collection, storage and use of your
					personal data as, customers, users, members, corporate founders, by
					us, Seven Seed. It provides you with details about the personal data
					we collect from you, how we use it and your rights to control
					personal data we hold about you.
				</p>
				<p>
					Any future updates will be posted on{" "}
					<Link className="text-blue-800" href="https://sevenseed.eu/privacy">
						https://sevenseed.eu/privacy
					</Link>
					. Last update: <strong>{UPDATE_DATE}</strong>.
				</p>
				<h2>Who we are</h2>
				<p>
					Seven Seed is a limited liability company, incorporated in Belgium
					as <strong>Seven Seed SRL</strong>, company number{" "}
					<strong>0803.774.662</strong>.
				</p>
				<p>
					As a data controller, we respect your right to privacy and will
					process personal data you provide to us in accordance with
					applicable data protection laws and as described in this policy.
					Applicable data protection laws include (i) the General Data
					Protection Regulation (Regulation 2016/679) (“
					<strong>GDPR</strong>”); and (ii) all other existing or new
					applicable laws relating to or impacting on the processing of
					personal data of a living person and privacy.
				</p>
				<h2>Personal data</h2>
				<p>
					Below you will find an overview of how your data is shared.
					Specifically:
					<ul>
						<li>
							the categories of personal data that we (or third party data
							processors acting on our behalf) may collect - for further
							information on data processors acting on our behalf, see
							below under point 3, use and store about you;
						</li>
						<li>the purposes for which this data would be collected;</li>
						<li>the legal basis for processing.</li>
					</ul>
				</p>
				<p>
					<strong>Principle</strong>: We will not sell, rent or otherwise
					disclose your personal data to any third party, except as described
					in this policy.
				</p>
				<p>
					<strong>Subsidiaries and third party processors</strong>: We may
					provide your personal data to Seven Seed subsidiaries/affiliated
					companies and to third party processors to process personal data on
					our behalf for the purposes set out above. These parties are
					required to process such information based on our instructions and
					in accordance with this policy.
				</p>
				<p>
					There are no third party providers to whom we currently disclose
					your personal data.
				</p>
				<p>
					<strong>Compliance</strong>: We may disclose your personal data
					where:
					<ul>
						<li>
							we are required to do so by applicable law, by a
							governmental body or by a law enforcement agency;
						</li>
						<li>
							to establish or exercise our legal rights or defend against
							legal claims;
						</li>
						<li>
							to investigate, prevent or take actions against illegal
							activities, suspected fraud, situations involving potential
							threats to the physical safety of any person, violations of
							our terms of use, or as otherwise required by law.
						</li>
					</ul>
				</p>
				<h2>Retention</h2>
				<p>
					We will hold your personal data as long as it is necessary to comply
					with our legal obligations (including bookkeeping, social and tax
					obligations).
				</p>
				<h2>International transfers</h2>
				<p>
					In connection with the above mentioned purposes, we try to avoid as
					much as possible the transfer of personal data that we collect from
					you to third party data processors located outside the European
					Economic Area.
				</p>
				<p>
					When we transfer personal data that we collect from you to third
					party data processors located in countries that are outside of the
					European Economic Area and which do not offer an adequate level of
					protection, we ensure the use of appropriate data transfer tools
					such as the entering into of the standard contractual clauses issued
					by the European Commission.
				</p>
				<h2>Security</h2>
				<p>
					We take appropriate technical and organisational measures to
					safeguard the personal data that you provide to us against
					unauthorized or unlawful processing and against accidental
					destruction, loss or damage.
				</p>
				<h2>Your rights</h2>
				<p>
					You have the following rights as a data subject:
					<ul>
						<li>
							the right to access to personal data that we hold about you;
						</li>
						<li>
							the right to ask us to update or correct any out-of-date or
							incorrect personal data that we hold about you;
						</li>
						<li>
							where the processing is based on your consent, the right to
							withdraw consent at any given time, without affecting the
							lawfulness of processing based on consent before its
							withdrawal;
						</li>
						<li>
							the right to erasure where the conditions of article 17 of
							the GDPR have been met;
						</li>
						<li>
							the right to restriction of processing where the conditions
							of article 18 of the GDPR have been met;
						</li>
						<li>
							the right to data portability insofar the conditions of
							article 20 GDPR apply to you
						</li>
						<li>
							the right to object to processing of personal data
							concerning you, insofar the conditions under article 21 GDPR
							have been met; and
						</li>
						<li>
							the right to opt out of any direct marketing communications
							that we (with your consent) may send you.
						</li>
					</ul>
				</p>
				<p>
					You can exercise these rights at any given time by emailing us at{" "}
					<EmailLink className="text-blue-800" email="privacy@sevenseed.eu" />
					.
				</p>
				<p>
					You may also contact our <strong>Data Protection Officer</strong> by
					sending an e-mail to{" "}
					<EmailLink className="text-blue-800" email="dpo@sevenseed.eu" />
				</p>
				<p>
					You also have the right to lodge a complaint with the competent
					<Link
						className="text-blue-800"
						href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
					>
						data protection authority
					</Link>
					.
				</p>
				<p>
					If you have any question about this privacy policy and/or how we
					collect, store and use your personal data, you can email us at{" "}
					<EmailLink className="text-blue-800" email="privacy@sevenseed.eu" />
					.
				</p>
			</Container>
		</div>
		<Footer />
	</>
);

export default Privacy;
