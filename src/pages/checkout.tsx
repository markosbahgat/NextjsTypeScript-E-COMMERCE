import React from "react";
import { NextPage } from "next";
import { CHECKOUTHOC } from "../HOC/checkout.hoc";

const Checkout: NextPage = () => {
	return (
		<div style={{ backgroundColor: "#eee" }}>
			<CHECKOUTHOC />
		</div>
	);
};

export default Checkout;
