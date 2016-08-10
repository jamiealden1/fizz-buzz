$(document).ready(function() {
	for (var count = 1; count < 101; count ++) {
		if (count%3===0 && count%5===0) {
			$("body").append("fizzbuzz" + "<br>");
		}
		else if (count%3===0) {
			$("body").append("fizz" + "<br>");
		}
		else if (count%5===0) {
			$("body").append("buzz" + "<br>");
		}
		else {
			$("body").append(count + "<br>");
		}
	}
});


