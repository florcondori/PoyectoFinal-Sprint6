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