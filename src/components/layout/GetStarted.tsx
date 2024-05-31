import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const GetStarted = () => {
	const t = useTranslations("GetStarted");

	return (
		<div className="w-full max-w-3xl flex sm:justify-center mx-auto p-8">
			<div className="md:max-w-3xl flex flex-col gap-y-6 text-balance">
				<h1 className="font-display font-extrabold text-slate-900 text-5xl sm:text-center">
					{t("title")}
				</h1>
				<p className="md:max-w-lg text-xl text-slate-600 sm:text-center">
					{t("content")}
				</p>
				<div className="w-full flex justify-center">
					<Button
						className="flex-1 sm:flex-none"
						href="/dashboard/get-started"
						color="blue"
					>
						{t("getStarted")}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
