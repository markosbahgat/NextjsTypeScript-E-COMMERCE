import React from "react";
import { NextPage } from "next";

interface Props {}

const Error500: NextPage = (props: Props) => {
	return <div>Error500 Internal server error!!</div>;
};

export default Error500;
