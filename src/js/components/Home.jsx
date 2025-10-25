import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[lightOn, setLightOn]=React.useState(false)

const ChangeLight =()=>{
	setLightOn(!lightOn)
}

	return (
		<div className="light">
            <div className="container text-center">
				
				<div className="red" onClick={()=>lightOn ? ChangeLight() :style{{redStyle}}>
					
				</div>
				<div className="yellow">
					
				</div>
				<div className="green">
					
				</div>
        	</div>
			
		</div>

	);
};

export default Home;