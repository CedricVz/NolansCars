var image1 = new Image()
image1.src = "images/slide1/img1.jpg"

var image2 = new Image()
image2.src = "images/slide1/img2.jpg"

var image3 = new Image()
image3.src = "images/slide1/img3.jpg"

var imagecount = 1;
	function slidetest(){
		document.images.first.src = eval ("image" + imagecount + ".src");
			if(imagecount < 1;)
				imagecount = ++;
			else if(imagecount > total)
				imagecount = 1;	
				setTimeout("slidetest()", 3000)
	}
	slidetest()