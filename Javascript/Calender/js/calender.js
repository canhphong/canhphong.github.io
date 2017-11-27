/*
Calendar JS
*/
var dateNow = new Date();
var currDay = dateNow.getDate();
var currMon = dateNow.getMonth();
var currYear = dateNow.getFullYear();
var cellDay = document.getElementsByTagName('td');
var listMon = document.getElementById("select-months");
var listYear = document.getElementById("select-years");
drawCalender(currYear, currMon);
 showlistYear();
chooseAnyDay();

// Draw Calendar 
function drawCalender(year, month) {
	parseInt(year);
	parseInt(month);
	var firstDay = new Date(year, month, 1).getDay();
	var lastDate = new Date(year, month + 1, 0).getDate();
	var i, day;
	day = 13 + firstDay;

	for (var i = 13; i < 55; i++) {
		cellDay[i].innerHTML = "";
		cellDay[i].style.backgroundColor = "#fff";
	}

	for (var i = 1; i <= lastDate; i++) {
		cellDay[day].innerHTML = i;
		day++;
	}

	if (year === dateNow.getFullYear()) {
		if (month === dateNow.getMonth()) {
			var showCurdate = 12 + firstDay + dateNow.getDate();
			cellDay[showCurdate].style.backgroundColor = "red";
		} else {
			return true;
		}
	}
	showTimeBox();
}

//show list Year in combobox
function showlistYear() {
	for (var i = 1954; i < 2100; i++) {
		listYear.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	}
	drawCalender(currYear, currMon);
}

function showTimeBox() {
	listMon.value = currMon;
	listYear.value = currYear;
}

function chooseMonth(month) {
	currMon += month;
	if (currMon < 0) {
		currMon = 11;
		currYear -= 1;
	}
	if (currMon > 11) {
		currMon = 0;
		currYear += 1;
	}
	checkTime();
	drawCalender(currYear, currMon);
}
