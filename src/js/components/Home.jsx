import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[lightOn, setLightOn]=React.useState("color")
	const[purpleLight, setPurpleLight]=React.useState(false)
	

const ChangeLight =()=>{
	setLightOn(!lightOn)
}
const PurpleLight=()=>{
	setPurpleLight(!purpleLight)
}

	return (
		<div className="light" >
			
            <div className="container text-center">
				
				<div className={lightOn=="color"? "red glow" : 'red'} onClick={()=>ChangeLight()}>
					
				</div>
				<div className={lightOn=="color"? "yellow glow" : 'yellow'} onClick={()=>ChangeLight()}>
					
				</div>
				<div className={lightOn=="color"? "green glow" : 'green'} onClick={()=>ChangeLight()}>
					
				</div>
				<div>
					{purpleLight ? (
						<div className="purple glow" onClick={()=>setPurpleLight(false)}></div>
					) : (
						<button onClick={()=>PurpleLight()}>Add Purple Light</button>
					)}
					
				</div>
        	</div>
			
		</div>

	);
};

export default Home;