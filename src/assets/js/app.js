'use strict';
const render = (root,news)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	
	wrapper.append(Header);
	wrapper.append(NewsMain(news));
	wrapper.append(NewsSecondary(news));

	root.append(wrapper);
};

const state = {
	news: null
};

$(_=>{
	$.getJSON("/api/news/", (json)=>{
		console.log(json);
		
		const root = $(".root");
		render(root, json);
	});
	
	
});