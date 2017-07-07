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
	const logo = $("<img src='assets/img/logoicon.png'>");
	const divHorario = $("<div class='hidden-xs'></div>");
	const fecha = $("<span>Lunes, Junio 12 de 2017</span>");
	const clima = $("<span><i class='icon nube'></i> 22°</spna>");
	const row3 = $("<div class='row'></div>");
	const row4 = $("<div class='row'></div>");
	
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
	console.log(news);
	const newMain = news[0];

	const section = $("<section class='container'></section>");
	const row = $("<div class='row'></div>");
	const col = $("<div class='col-xs-12'></div>");
	const divBackg = $("<div class='pos-relative'></div>");
	const img = $("<img src='assets/img/news/news-0.png'/>");
	const divDescription = $("<div class='pos-absolute'></div>");
	const h2 = $(`<h2 class='text-white'>${newMain.title}</h2>`);
	const p = $(`<p class='text-white'>${newMain.brief}</p>`);

	divDescription.append(h2);
	divDescription.append(p);
	divBackg.append(img);

	col.append(divBackg);
	col.append(divDescription);

	row.append(col);
	section.append(row);

	return section;
};
'use strict';
const NewsSecondary = (news)=>{
	const div = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const new1 = $("<div class='col-sm-6'></div>");
	const img1 = $("<img src='assets/img/news/news-1.png'/>");
	const new2 = $("<div class='col-sm-3'></div>");
	const img2 = $("<img src='assets/img/news/news-2.png'/>");
	const new3 = $("<div class='col-sm-3'></div>");
	const img3 = $("<img src='assets/img/news/news-3.png'/>");

	new1.append(img1);
	new2.append(img2);
	new3.append(img3);

	row.append(new1);
	row.append(new2);
	row.append(new3);

	div.append(row);

	return div;
};


