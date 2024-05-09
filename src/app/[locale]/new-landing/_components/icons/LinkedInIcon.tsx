export default function LinkedInIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 rounded"
			viewBox="0 0 512 512"
			aria-label="LinkedIn"
			role="img"
		>
			{/* background (rounded via class) */}
			<path d="m0 0H512V512H0" fill="currentColor" />

			{/* dot over the `i` */}
			<circle cx="142" cy="138" r="37" fill="canvas" />

			{/* stem of `i` and left half of `n` */}
			<path stroke="canvas" strokeWidth="66" d="M244 194v198M142 194v198" />

			{/* right half of `n` */}
			<path
				fill="canvas"
				d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"
			/>
		</svg>
	);
}
