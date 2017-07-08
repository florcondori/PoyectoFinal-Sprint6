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

