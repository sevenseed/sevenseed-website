import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
	const t = useTranslations("Contact");

	return (
		<div className="flex flex-col max-w-2xl mx-auto gap-y-4 px-4 mb-8">
			<div className="space-y-2">
				<h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-center">
					{t("getInTouch")}
				</h2>
				<p className="leading-7 text-gray-600 text-lg text-balance sm:text-center">
					{t("contactDescription")}
				</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
