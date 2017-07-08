const NewsMundo = (news)=>{

	const section = $("<section class='container'></section>");
	const h2 = $("<h2 class='text-uppercase'>mundo</h2>");
	const row1 = $("<div class='row'></div>");	
	const row2 = $("<div class='row'></div>");
	const col3Video = $("<div class='col-xs-12 col-sm-3'></div>");
	const col6 = $("<div class='col-xs-12 col-sm-6'></div>");
	const col3 = $("<div class='col-xs-12 col-sm-3'></div>");
	
	let mundo = filtered("1", news);
	console.log(mundo);

	//llenando row2
	$.each(mundo, (i, obj)=>{
		if(i>5 && i<10){
			let col = $("<div class='col-xs-12 col-sm-3'></div>");
			col.append(typeNews(obj));

			row2.append(col);
		}
	});

	col6.append(typeNews(mundo[1]).addClass("width-50"));
	col6.append(typeNews(mundo[2]).addClass("width-50"));
	col6.append(typeNewsHorinzontal(mundo[4]));
	col6.append(typeNewsHorinzontal(mundo[5]));

	col3Video.append(typeNews(mundo[0]));
	col3.append(typeNews(mundo[3]));
	row1.append(col3Video);
	row1.append(col6);
	row1.append(col3);

	section.append(h2);
	section.append(row1);
	section.append(row2);

	return section;
}


//Bloques Noticia
const typeNews = (obj)=>{
	let news = $("<div class='item'></div>");
	let img = $(`<img src='assets/img/news/${obj.img}'/>`);
	let bgTitle = $("<div class='bg-title'></div>");
	let title = $(`<h4 class='text-white'>${obj.title}</h4>`);

	bgTitle.append(title);
	news.append(img);
	news.append(bgTitle);

	return news;
};

const typeNewsHorinzontal = (obj)=>{
	let news = $("<div class='item'></div>");
	let img = $(`<img src='assets/img/news/${obj.img}' class='horizonte'/>`);
	let bgTitle = $("<div class='bg-title horizonte'></div>");
	let title = $(`<h4 class='text-white'>${obj.title}</h4>`);

	bgTitle.append(title);
	news.append(img);
	news.append(bgTitle);

	return news;
};