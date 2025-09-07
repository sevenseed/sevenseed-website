import Container from "@/components/Container";
import EmailLink from "@/components/EmailLink";
import Link from "next/link";

const AboutPage = () => (
	<div className="relative flex flex-auto justify-center px-4 mb-8">
		<Container className="prose">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
				About Seven Seed
			</h1>
			<p>
				Seven Seed is a hybrid startup incubator based in Brussels. We run
				cohorts of 12-15 early stage startups on a six months program, with a
				public in-person event for the kickoff and the demo day.
			</p>
			<h2>About the Program</h2>
			<p>The six months program includes everything needed at the early stage:</p>
			<ul>
				<li>A stimulating shared space to work from and invite people to</li>
				<li>A supportive community of like-minded founders to iterate with</li>
				<li>Focused workshops by highly experienced mentors to learn from</li>
				<li>High-quality investor and advisor intros to help raise funds</li>
				<li>Path to procurement - workshops and entry points to defence procurement in corporates and governments</li>
				<li>€12,500 cash contribution towards program expenses</li>
				<li>
					A support structure that abstracts any and all administrative pains
				</li>
			</ul>
			<p>
				Also included is a unique redistribution program which ensures every
				cohort participant is always invested in each other&apos;s success. We
				are proudly spearheading this model and encouraging other incubators to
				adopt it. Seven Seed takes 7% equity in each member of the cohort, with
				25% of any exit proceeds redistributed equally among all cohort members.
			</p>
			<h2>Who should apply?</h2>
			<p>
				The Fall 2025 cohort is designed for European defence and dual-use startups
				that want to establish a strategic presence in Brussels. Seven Seed&apos;s role goes
				beyond that of most incubators, providing a comprehensive soft landing program
				including incorporation assistance, administrative support, and access to 
				Belgian and EU defence networks. The program includes specialized workshops on
				defence procurement processes, grant applications, and navigating the Brussels
				ecosystem for dual-use technologies.
			</p>
			<h2>Why Brussels?</h2>
			<p>
				As the capital of Europe and home to NATO headquarters, Brussels is the
				epicenter of European defence policy and procurement decisions. With a
				startup-friendly tax regime and proximity to key EU institutions, Brussels
				offers defence and dual-use startups unparalleled access to decision-makers,
				procurement opportunities, and funding programs. Within 2 hours of Paris, 
				Amsterdam and London, it&apos;s strategically positioned at the crossroads 
				of Europe&apos;s major defence markets.
				<br />
				But more than that, Brussels offers a collaborative ecosystem where defence
				innovation meets policy, creating unique opportunities for startups to shape
				the future of European security.
			</p>
			<h2>About the Founder</h2>
			<p>
				Seven Seed was founded in 2023 by{" "}
				<Link
					href="http://linkedin.com/in/jleclanche"
					target="blank"
					rel="noopener noreferrer"
				>
					Jerome Leclanche
				</Link>
				, with the vision of transforming Belgium into a European Startup Hub.
				Jerome is an engineer, serial entrepreneur turned investor with multiple
				exits.
			</p>
			<p>
				For any press inquiries, please send an email to{" "}
				<EmailLink className="text-blue-800" email="press@sevenseed.eu" />.
			</p>
		</Container>
	</div>
);

export default AboutPage;
