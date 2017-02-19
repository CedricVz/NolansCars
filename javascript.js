var imagecount = 1;
var total = 3;

	function slide(x){
		var images = document.getElementById('img');
		imagecount = imagecount + 1;
		if (imagecount > total){
			imagecount = 1;
		}
		else if (imagecount < 1){
			imagecount= total;
		}
		images.src = "images/slide1/img" + imagecount + ".jpg";
	}
	window.setInterval (function slide(x){
		var images = document.getElementById('img');
		imagecount = imagecount + 1;
		if (imagecount > total){
			imagecount = 1;
		}
		else if (imagecount < 1){
			imagecount= total;
		}
		images.src = "images/slide1/img" + imagecount + ".jpg";
	}, 3000);
	
	function toTable1(){
		window.scrollTo(0, 800);
	}
	function toTable2(){
		window.scrollTo(0, 1500);
	}
	function toTable3(){
		window.scrollTo(0, 1800);
	}
	
