
		<div id="title">
			<input type="text" id="day-now" name="title" placeholder="dd/mm/yyyy" disabled="checked" /></div>
			<table>
				<tbody>
					<tr class="button ">
						<!-- Button Prev Year and Month -->
						<td onclick="chooseYear(-1) ">&#8647;</td>
						<td onclick="chooseMonth(-1) ">&#8592;</td>

						<td colspan="2 ">
							<select class="choice" id="select-months" onchange="selectMonth();">
								<option value="0 ">January</option>
								<option value="1 ">February</option>
								<option value="2 ">March</option>
								<option value="3 ">April</option>
								<option value="4 ">May</option>
								<option value="5 ">June</option>
								<option value="6 ">July</option>
								<option value="7 ">August</option>
								<option value="8 ">September</option>
								<option value="9 ">October</option>
								<option value="10 ">November</option>
								<option value="11 ">December</option>
							</select>
						</td>

						<td>
							<select class="choice" id="select-years" onchange="selectYear();">
							</select>
						</td>
							<!-- Button Next Year and Month -->
						<td onclick="chooseMonth(1); ">&#8594;</td>
						<td onclick="chooseYear(1); ">&#8649;</td>
					</tr>
					<!-- Display cells -->
					<tr class="days">
						<td>Sun</td>
						<td>Mon</td>
						<td>Tue</td>
						<td>Web</td>
						<td>Thu</td>
						<td>Fri</td>
						<td>Sat</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
	
<!-- Link Javascript -->
<!-- <script src="js/formajax.js "></script> -->
</body>
</div>
</html>