'use strict';
const render = (root,news)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	
	wrapper.append(Header);
	wrapper.append(NewsMain(news));
	wrapper.append(NewsSecondary(news));
	wrapper.append(NewsMundo(news));
	wrapper.append(NewsTecnologia(news));
	wrapper.append(NewsEducacion(news));
	wrapper.append(NewsOpinion(news));
	wrapper.append(Carousel(news));

	root.append(wrapper);
};

const state = {
	news: null,
	categories: null
};

$(_=>{
	$.getJSON("/api/news/", (json)=>{
		console.log(json);
		
		const root = $(".root");
		render(root, json);
	});	
	
});