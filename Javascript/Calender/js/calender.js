// Loop Option of year
var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;

//Loop Option of month


// Write function

function isFourDigitYear(year) {
	if(year.length != 4) {
		document.calControl.year.select();
		document.calControl.year.focus();
	}
	else {return true;}
}

function selectDate() {
	var year = document.calControl.year.value;
	if (isFourDigitYear(year)){
		var day = 0;
		var month = document.calControl.month.selectedIndex;
		displayCalendar(month, year);
	}
}
// Moved to the previous Year
function setPreviousYear() {
	var year = document.calControl.year.value;
	if(isFourDigitYear(year)) {
		var day = 0;
		var month = document.calControl.month.selectedIndex;
		year--;
		document.calControl.year.value = year;
		displayCalendar(month, year);
	}
}

// Moved to the previous Month
function setPreviousMonth() {
	var year = document.calControl.year.value;
	if(isFourDigitYear(year)) {
		var day = 0;
		var month = document.calControl.month.selectedIndex;
		if(month == 0) {
			month = 11;
			if(year > 1000) {
				year--;
				document.calControl.year.value = year;
			}
		}
		else {month--;}
		document.calControl.month.selectedIndex = month;
		displayCalendar(month, year);
	}
}
// Moved to the next Year
function setNextMonth() {
	var year = document.calControl.year.value;
	if(isFourDigitYear(year)) {
		var day = 0;
		var month = document.calControl.month.selectedIndex;
		if (month == 11) {
			month = 0;
			year++;
			document.calControl.year.value = year;
		} else {
			month++;
		}
		document.calControl.month.selectedIndex = month;
		displayCalendar(month, year);
	}
}


