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