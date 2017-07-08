const filtered = (categ, news)=>{

	return news.filter((obj)=>{
		if(obj.categories.indexOf(parseInt(categ)) != -1){
			return obj;
		}
	});

}