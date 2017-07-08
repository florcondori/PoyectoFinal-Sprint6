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