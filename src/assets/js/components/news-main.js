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