import React, { useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lightOn, setLightOn] = React.useState("red")
	const [purpleLight, setPurpleLight] = React.useState(false)


	const ChangeLight = (color) => {
		setLightOn(color)
	}
	const PurpleLight = () => {
		setPurpleLight(!purpleLight)
	}

	useEffect(() => {
		let colors = ['red', 'yellow', 'green'];
		let index = 0
		setInterval(() => {
			setLightOn(colors[index])
			if (index == colors.length - 1) {
				index = 0;
			}
			else {
				index = index + 1
			}
		}, 3000)
	}, [])
	
	return (
		<div className="light" >

			<div className="container text-center">

				<div className={lightOn == "red" ? "red glow" : 'red'} onClick={() => ChangeLight("red")}>

				</div>
				<div className={lightOn == "yellow" ? "yellow glow" : 'yellow'} onClick={() => ChangeLight("yellow")}>

				</div>
				<div className={lightOn == "green" ? "green glow" : 'green'} onClick={() => ChangeLight("green")}>

				</div>
				<div>
					{purpleLight ? (
						<div className="purple glow" onClick={() => setPurpleLight(false)}></div>
					) : (
						<button onClick={() => PurpleLight()}>Add Purple Light</button>
					)}

				</div>
			</div>

		</div>

	);
};

export default Home;