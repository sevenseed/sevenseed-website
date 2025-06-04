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
				<li>
					A support structure that abstracts any and all administrative pains
				</li>
			</ul>
			<p>
				Also included is a unique profit-sharing program which ensures every
				cohort participant is always invested in each other&apos;s success. We
				are proudly spearheading this model and encouraging other incubators to
				adopt it.
			</p>
			<h2>Who should apply?</h2>
			<p>
				The Fall 2025 cohort is specially designed for US-based tech founders
				that wish to make a new life in Europe. Seven Seed&apos;s role goes
				beyond that of most incubators, by assisting with the immigration
				procedures and the incorporation (&quot;soft landing&quot;). The program
				also includes special workshops highlighting key differences between the
				US and EU in doing business and fundraising and how to adapt.
			</p>
			<h2>Why Brussels?</h2>
			<p>
				Geographically and politically located at the heart of Europe, and with
				a rare startup-friendly tax regime, Brussels presents US founders with
				an opportunity like no other city can. As the most international city in
				the world, it&apos;s very welcoming to foreign founders. And within 2
				hours of Paris, Amsterdam and London, it&apos;s strategically at the
				crossroads of three other high-impact hubs.
				<br />
				But more than that, Brussels is a human-sized, walkable city that
				perfectly represents the European mindset while still buzzing with
				activity.
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
