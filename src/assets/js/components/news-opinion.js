const NewsOpinion = (news)=>{

	const section = $("<section class='container'></section>");
	const h2 = $("<h2 class='text-uppercase'>opinion</h2>");
	const row = $("<div class='row'></div>");
		
	let opinion = filtered("4", news);
	
	$.each(opinion, (i, obj)=>{
		let col = $("<div class='col-xs-12 col-sm-3'></div>");
		col.append(typeNews(obj));

		row.append(col);
	});

	section.append(h2);
	section.append(row);
	
	return section;
}