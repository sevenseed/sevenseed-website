import { Container } from "@/components/Container";
import EmailLink from "@/components/EmailLink";
import { GridPattern } from "@/components/GridPattern";
import { useFormatter } from "next-intl";
import React from "react";
// src/app/[locale]/privacy/page.tsx

import { useTranslations } from "next-intl";

const Privacy = () => {
	const t = useTranslations("Privacy");

	return (
		<div className="relative flex flex-auto items-start bg-white text-black pt-10">
			<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
				<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
			</div>
			<Container className="flex flex-col items-center  text-center">
				<h1 className="mt-6 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
					{t("title")}
				</h1>
				<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
					{t("companyInfo")}
				</p>
				<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
					{t("dpo")} <EmailLink email={t("dpoEmail")} />
				</p>
				<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
					{t("inquiries")} <EmailLink email={t("inquiriesEmail")} />
				</p>
				<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
					{t("lastUpdated", { updateDate: new Date(t("lastUpdatedDate")) })}
				</p>
			</Container>
		</div>
	);
};

export default Privacy;
