const Carousel =(news)=>{
	const section = $("<section class='container'></section>");
	const row = $("<div class='row border'></div>");
		
	let carusel = filtered("5", news);
	console.log(carusel);

	$.each(carusel, (i, obj)=>{
		let col = $("<div class='col-xs-12 col-sm-3'></div>");
		col.append(typeNews(obj));

		row.append(col);
	});

	section.append(row);
	
	return section;

}