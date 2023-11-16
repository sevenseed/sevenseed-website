import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";
import supabase from "@/supabase";
import { headers } from "next/headers";
import { RedirectType, redirect, usePathname } from "next/navigation";

const getFullPath = () => {
	const urlString = headers().get("x-url");
	if (!urlString) return null;
	const url = new URL(urlString);
	return url.pathname + url.search;
};

const WaitlistPage = async () => {
	const { data, error } = await supabase.auth.getUser();

	if (error) {
		if (error.status === 401) {
			const fullPath = getFullPath();
			if (fullPath) {
				return redirect(
					`/login?${new URLSearchParams({ returnTo: fullPath })}`,
					RedirectType.replace,
				);
			}
			return redirect("/login", RedirectType.replace);
		}
		return <div>{error.status}</div>;
	}

	const email = data.user.email;

	return (
		<div className="relative flex flex-auto items-center">
			<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
				<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
			</div>
			<Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
				<h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
					Welcome {email}
				</h1>
			</Container>
		</div>
	);
};


export default WaitlistPage;
