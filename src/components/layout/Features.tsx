import Image from "next/image";
import Feature from "../Feature";
import { useTranslations } from "next-intl";

import legalEntity from "@public/images/features/legal_entity.svg";
import nonblocking from "@public/images/features/nonblocking.svg";
import accounting from "@public/images/features/accounting.svg";
import office from "@public/images/features/office.svg";

const featureSet = [
	{ key: "legalEntity", src: legalEntity },
	{ key: "nonblocking", src: nonblocking },
	{ key: "accounting", src: accounting },
	{ key: "office", src: office },
];

export default function Features() {
	const t = useTranslations("Features");

	return (
		<section id="features" className="flex justify-center">
			<div className="w-full md:max-w-3xl grid md:grid-cols-2 gap-3">
				{featureSet.map(({ key, src }) => (
					<Feature key={key}>
						<Feature.Description>
							<Feature.Description.Heading>
								{t(`${key}.heading`)}
							</Feature.Description.Heading>
							<p>{t(`${key}.description`)}</p>
						</Feature.Description>
						<Feature.Exhibit>
							<Image src={src} alt="" aria-hidden />
						</Feature.Exhibit>
					</Feature>
				))}
			</div>
		</section>
	);
}
