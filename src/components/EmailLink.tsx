export const EmailLink: React.FC<{
	email: string;
	className?: string;
	subject?: string;
	children?: React.ReactNode | React.ReactNode[];
}> = ({ email, className, subject, children }) => (
	<a
		href={
			subject
				? `mailto:${email}?subject=${encodeURIComponent(subject)}`
				: `mailto:${email}`
		}
		target="_blank"
		rel="noopener noreferrer"
		className={className}
	>
		{children || email}
	</a>
);

export default EmailLink;
