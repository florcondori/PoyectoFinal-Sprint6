'use strict';
const Header = ()=>{
	const header = $("<header></header>");
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

	header.append(row);

	return header;
};