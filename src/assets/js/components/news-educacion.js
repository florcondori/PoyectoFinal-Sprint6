const NewsEducacion = (news)=>{

	const section = $("<section class='container'></section>");
	const h2 = $("<h2 class='text-uppercase'>educación</h2>");
	const row1 = $("<div class='row'></div>");
	const row2 = $("<div class='row'></div>");
		
	let edu = filtered("3", news);
	console.log(edu);

	$.each(edu, (i, obj)=>{
		let col
		if(i>=0 && i<4){
			col = $("<div class='col-xs-12 col-sm-3'></div>");
			col.append(typeNews(obj));

			row1.append(col);
		}
		if(i>3){
			col = $("<div class='col-xs-12 col-sm-6'></div>");
			col.append(typeNewsHorinzontal(obj));

			row2.append(col);
		}
	});

	section.append(h2);
	section.append(row1);
	section.append(row2);
	
	return section;
}