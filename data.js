/**
 * @author Jason Shapiro
 */
var data1 = {"budget_line_info": {"prob_x": 0.5, "y_max": 200.0, "y_units": "dollars", "lines_per_session": 50, "x_label": "", "y_label": "", "title": "Cash Money", "currency": "$", "number_sessions": 1, "x_units": "dollars", "x_max": 200.0, "x_min": 100.0, "probabilistic": true, "id": 13, "y_min": 100.0}};

var xdata = (data1.budget_line_info.x_max - data1.budget_line_info.x_min) * Math.random() + data1.budget_line_info.x_min
var ydata = (data1.budget_line_info.y_max - data1.budget_line_info.y_min) * Math.random() + data1.budget_line_info.y_min

$(function() {
	
	var placeholder = $('#placeholder');
	
	var data = [[xdata,0],[0,ydata]];
	
	$.plot(placeholder,[data]);

});