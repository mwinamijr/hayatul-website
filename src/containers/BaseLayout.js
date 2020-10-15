import React from "react";

import TopNavbar from "../components/navigation/Navbar";

const BaseLayout = (props) => {
	return(
		<div className="mt-4">
			<TopNavbar />
      { props.children }
		</div>
		)
}

export default BaseLayout;