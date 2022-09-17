import React from "react";
import requests from "../../Requests";
import Main from "../component/Main";
import Rows from "../component/Rows";


export const Home = () => (
	
	<div className="text-center bg-dark mt-5">
	<Main />
	<React.StrictMode>
	<div>
	<Rows rowID="1"  title="Up Coming" fetchURL={requests.requestUpComing} />
	<Rows rowID="2"  title="Popular" fetchURL={requests.requestPopular} />
	<Rows rowID="3"  title="Top Rated" fetchURL={requests.requestTopRated} />
	<Rows rowID="4"  title="Horror" fetchURL={requests.requestHorror} />
	</div>
	</React.StrictMode>
	</div>
	
);
