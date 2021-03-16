var mySwiper = new Swiper ('.swiper-container', {
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
  loop:true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});

window.onload = function () {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  const dateInfo = year + '年' + month + '月' + date + '日' + hours + '時' + minutes + '分';
  console.log(dateInfo);

  var elem = document.getElementById("date-info");
  elem.innerHTML = "<p style='font-size: 0.9rem;'>" + dateInfo + "<p>";
}

// 第五回授業
