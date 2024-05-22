import React from "react";
import Card from "./Card";
import NavBar from "./Nav-bar";
import Header from "./Header"
//include images into your bundle

//create your first component
const Home = () => {

	return (
		<div>
			<NavBar />
			<div className="container">
				<Header />
				<div className="row g-3 my-5">
					<Card imageURL ="https://picsum.photos/500/325?random=1" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=2" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=3" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
					<Card imageURL ="https://picsum.photos/500/325?random=4" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

				</div>
			</div>

		</div>
	);
};

export default Home;
