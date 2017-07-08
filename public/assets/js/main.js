'use strict';
const render = (root,news)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	
	wrapper.append(Header);
	wrapper.append(NewsMain(news));
	wrapper.append(NewsSecondary(news));
	wrapper.append(NewsMundo(news));
	wrapper.append(NewsTecnologia(news));

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
'use strict';
const Header = (news)=>{
	const header = $("<header class='container'></header>");
	const row = $("<div class='row'></div>");
	const divSections = $("<div class='col-xs-2'></div>");
	const iconSections = $("<i class='glyphicon glyphicon-menu-hamburger'></i>");
	const titleSections = $("<span>Sections</span>");
	const divSearch = $("<div class='col-xs-2'></div>");
	const iconSearch = $("<i class='glyphicon glyphicon-search'></i>");
	const titleSearch = $("<span>Search</span>");
	const icons = $("<div class='col-xs-2'></div>");
	const fb = $("<a><i class='icon fb'></i></a>");
	const tw = $("<a><i class='icon tw'></i></a>");
	const linkend = $("<a><i class='icon in'></i></a>");
	const row2 = $("<div class='row text-center'></div>");
	const logo = $("<img src='assets/img/logoicon.png' class='logo'>");
	const divHorario = $("<div class='hidden-xs'></div>");
	const fecha = $("<span>Lunes, Junio 12 de 2017</span>");
	const clima = $("<span><i class='icon nube'></i> 22°</spna>");
	const row3 = $("<div class='row'></div>");
	
	divSections.append(iconSections);
	divSections.append(titleSections);
	divSearch.append(iconSearch);
	divSearch.append(titleSearch);
	icons.append(fb);
	icons.append(tw);
	icons.append(linkend);
	row.append(divSections);
	row.append(divSearch);
	row.append(icons);

	divHorario.append(fecha);
	divHorario.append(clima);
	row2.append(logo);
	row2.append(divHorario);

	row3.append(Categoria());

	header.append(row);
	header.append(row2);
	header.append(row3);

	return header;
};

const Categoria = ()=>{
	const div = $("<div class='col-sm-12'></div>");
	
	$.getJSON("/api/categories/", (json)=>{
		$.each(json, (i, obj)=>{
			div.append(`<div class='col-sm-2'>${obj.title}<div>`);
		});
	});

	return div;
}


'use strict';
const NewsMain = (news)=>{
	const newMain = news[0];

	const section = $("<section class='container'></section>");
	const row = $("<div class='row'></div>");
	const col = $("<div class='col-xs-12'></div>");
	const divBackg = $("<div class='pos-relative'></div>");
	const img = $(`<img src='assets/img/news/${newMain.img}'/>`);
	const divDescription = $("<div class='pos-absolute'></div>");
	const h2 = $(`<h2 class='text-white'>${newMain.title}</h2>`);
	const p = $(`<h4 class='text-white'>${newMain.brief}</h4>`);

	divDescription.append(h2);
	divDescription.append(p);
	divBackg.append(img);

	col.append(divBackg);
	col.append(divDescription);

	row.append(col);
	section.append(row);

	return section;
};
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
'use strict';
const NewsSecondary = (news)=>{

	const container = $("<section class='container'></section>");
	const row = $("<div class='row'></div>");
	const new1 = $("<div class='col-sm-6'></div>");
	const img1 = $(`<img src='assets/img/news/${news[1].img}'/>`);
	const bgTitle1 = $("<div class='bg-title'></div>");
	const title1 = $(`<h4 class='text-white'>${news[1].title}</h4>`);
	const new2 = $("<div class='col-sm-3'></div>");
	const img2 = $(`<img src='assets/img/news/${news[2].img}'/>`);
	const bgTitle2 = $("<div class='bg-title'></div>");
	const title2 = $(`<h4 class='text-white'>${news[2].title}</h4>`);	
	const new3 = $("<div class='col-sm-3'></div>");
	const img3 = $(`<img src='assets/img/news/${news[3].img}'/>`);
	const bgTitle3 = $("<div class='bg-title'></div>");
	const title3 = $(`<h4 class='text-white'>${news[3].title}</h4>`);	

	bgTitle1.append(title1);
	new1.append(img1);
	new1.append(bgTitle1);

	bgTitle2.append(title2);
	new2.append(img2);
	new2.append(bgTitle2);

	bgTitle3.append(title3);
	new3.append(img3);
	new3.append(bgTitle3);

	row.append(new1);
	row.append(new2);
	row.append(new3);

	container.append(row);

	return container;
};
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
const filtered = (categ, news)=>{

	return news.filter((obj)=>{
		if(obj.categories.indexOf(parseInt(categ)) != -1){
			return obj;
		}
	});

}
