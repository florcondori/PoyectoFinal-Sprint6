const filtered = (categ, news)=>{

	return news.filter((obj)=>{
		if(categ == 5){
			if(obj.categories.indexOf(parseInt(categ)) != -1){
				return obj;
			}
		}
		
		if(obj.categories.indexOf(parseInt(categ)) != -1 && obj.categories.length == 1){
			return obj;
		}
	});

}