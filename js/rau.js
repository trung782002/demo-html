
var flag = true;

// heart
	$('.heart').click(function(event) {
		if(flag == true) {
			$('.heart').css({
				color: 'red',
			});
			flag = false;
		}
		else {
			$('.heart').css({
				color: '#4fc308',
			});
			flag = true;
		}
	});


// menu-mobile
	$('.icon-menu-mobile').click(function(event) {
		if(flag == true) {
			$('.menu-mobile').css({
				left: '0%',
			});
			flag = false;
		}
		else {
			$('.menu-mobile').css({
				left: '-60%',
			});
			flag = true;
		}
	});


// page-mobile
	$('#page').click(function(event) {
		$('.page-mobile').toggle()
	});


// back-to-top
	$(window).scroll(function(event) {
		var height = $(this).scrollTop();
		if (height > 700 ) {
			$('.back-top').fadeIn(700);
		}
		else {
			$('.back-top').fadeOut(700);
		}
	});

	$('.back-top').click(function(event) {
		$('html, body').animate({scrollTop : 0}, 700);
	});


// change-image
	function changeimg1() {
		var change = document.getElementById('change');
		var change1 = document.getElementById('change1').src;
		var change_a1 = document.getElementById('change1');
		var change_b1 = document.getElementById('change').src;
		change.src = change1;
		change_a1.src = change_b1;
	}
	function changeimg2() {
		var change = document.getElementById('change');
		var change2 = document.getElementById('change2').src;
		var change_a2 = document.getElementById('change2');
		var change_b2 = document.getElementById('change').src;
		change.src = change2;
		change_a2.src = change_b2;
	}
	function changeimg3() {
		var change = document.getElementById('change');
		var change3 = document.getElementById('change3').src;
		var change_a3 = document.getElementById('change3');
		var change_b3 = document.getElementById('change').src;
		change.src = change3;
		change_a3.src = change_b3;
	}
	function changeimg4() {
		var change = document.getElementById('change');
		var change4 = document.getElementById('change4').src;
		var change_a4 = document.getElementById('change4');
		var change_b4 = document.getElementById('change').src;
		change.src = change4;
		change_a4.src = change_b4;
	}


// change-review
	$('#r').click(function(event) {
		$('#r').css({
			background: '#DDDFE2'
		});
		$('#d').css({
			background: 'white'
		});
		$('.d').css({
			display: 'none'
		});
		$('.r').css({
			display: 'block'
		});
	});	

	$('#d').click(function(event) {
		$('#d').css({
			background: '#DDDFE2'
		});
		$('#r').css({
			background: 'white'
		});
		$('.d').css({
			display: 'block'
		});
		$('.r').css({
			display: 'none'
		});
	});


// validate
	$("#myF").validate({
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
				rangelength: [9, 11],
				digits: true,
			},
			pass: {
				required: true,
				minlength: 6,
			},
			cpass: {
				required: true,
				equalTo: "#pass",
			},
			info: {
				required: true,
			},
			info2: {
				required: true,
			},
			code: {
				required: true,
			}
		},
		messages: {
			name: {
				required: "Nh???p t??n ????ng nh???p",
			},
			email: {
				required: "Nh???p Email c???a b???n",
				email: "Sai ?????nh d???ng",
			},
			phone: {
				required: "Nh???p s??? ??i???n tho???i",
				rangelength: "S??? ??i???n tho???i kh??ng h???p l???",
				digits: "S??? ??i???n tho???i kh??ng h???p l???",
			},
			pass: {
				required: "Nh???p m???t kh???u",
				minlength: "M???t kh???u ng???n kh??ng an to??n",
			},
			cpass: {
				required: "X??c nh???n m???t kh???u",
				equalTo: "M???t kh???u x??c nh???n kh??ng ????ng",
			},
			info: {
				required: "Vui l??ng ??i???n th??ng tin",
			},
			info2: {
				required: "Vui l??ng nh???p tin nh???n",
			},
			code: {
				required: "Nh???p m?? khuy???n m???i c???a b???n"
			}
		}
	});