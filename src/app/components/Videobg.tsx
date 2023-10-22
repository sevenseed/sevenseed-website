import React from "react";

const Videobg = () => {
	return (
		<div>
			<video
				autoPlay
				muted
				loop
				className="video"
				style={{
					position: "absolute",
					top: "0",
					zIndex: 1,
					width: "100vw",
					height: "100vh",
					objectFit: "cover",
				}}
			>
				<source src="/images/video/test6.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default Videobg;
