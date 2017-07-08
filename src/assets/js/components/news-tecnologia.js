const NewsTecnologia = (news)=>{

	const section = $("<section class='container'></section>");
	const h2 = $("<h2 class='text-uppercase'>tecnología</h2>");
	const row = $("<div class='row'></div>");
	const col1 = $("<div class='col-xs-12 col-sm-6'></div>");
	const col2 = $("<div class='col-xs-12 col-sm-6'></div>");
	
	let tecno = filtered("2", news);

	col1.append(typeNews(tecno[1]));
	col2.append(typeNews(tecno[2]).addClass("width-50"));
	col2.append(typeNews(tecno[3]).addClass("width-50"));
	col2.append(typeNewsHorinzontal(tecno[0]));
	col2.append(typeNewsHorinzontal(tecno[4]));

	row.append(col1);
	row.append(col2);

	section.append(h2);
	section.append(row);
	
	return section;
}