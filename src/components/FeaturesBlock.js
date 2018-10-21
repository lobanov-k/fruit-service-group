import React from 'react';
import Translator from './Translator';
import InlineSVG from 'svg-inline-react';

export default function FeaturesBlock(props) {
	const features = [
		{
			svg: "007-piggy-bank",
			text: "hero-features-1"
		},
		{
			svg: "018-search",
			text: "hero-features-2"
		},
		{
			svg: "011-call-center",
			text: "hero-features-3"
		},
		{
			svg: "040-delivery-truck",
			text: "hero-features-4"
		},
		{
			svg: "004-shopping-1",
			text: "hero-features-5"
		},
		{
			svg: "022-favourite",
			text: "hero-features-6"
		}
	];

	
	return (
		<React.Fragment>
			<div className="heroFeaturesBlock">
			{
				features.map((item) => (
					<div className="heroFeatures" key={item.svg}>
						<img src={`../images/svg/${item.svg}.svg`} alt={<Translator>{item.text}</Translator>}/>
						<Translator>{item.text}</Translator>
					</div>
				))
			}
			</div>
		</React.Fragment>
	);
}