define(function(){
	var rang = function(iNum, iMax, iMix){
		if(iNum > iMax){
			return iMax;
		}else if(iNum < iMix){
			return iMix;
		}else{
			return iNum;
		}
	}
	return {
		rang: rang
	};
})