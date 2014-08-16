function autofill() {
var tags = [ "Alabama", "Alaska", "Arizona", "Arkansas", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
$("#states").autocomplete({
		  source: function(req, res) {
				  var filter = new RegExp("^" + $.ui.autocomplete.escapeRegex(req.term), "i");
				  res($.grep(tags, function(item){
					  return filter.test(item);
				  }) 
				  );
			  }
		}
	);
}
