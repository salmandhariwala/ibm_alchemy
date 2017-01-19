var dom_mani = function(){


	var embed_element = function(tagName,dataContent,attributes){

		var attributes_names = Object.keys(attributes);

		var attributes_string ="";
		for (var i = 0; i < attributes_names.length; i++) {
			attribute_name = attributes_names[i];
			attribute_value = attributes[attribute_name];
			attributes_string = attributes_string + " " + attribute_name + " = \"" + attribute_value +"\"";
		}

		return "<"+ tagName + attributes_string + ">" + dataContent+ "</" + tagName + ">";

	};

	var combine_elements = function(elements){
		var result_to_return = "";

		for (var i = 0; i < elements.length; i++) {
			result_to_return = result_to_return + elements[i];
		}

		return result_to_return;

	};

	var generate_table = function(data){

		var result_to_return = "<table>";

		var keys = Object.keys(data[0]);

		result_to_return = result_to_return + "<tr>";
		for (var i = 0; i < keys.length; i++) {
			result_to_return = result_to_return + "<th>"+ keys[i] + "</th>";
		}
		result_to_return = result_to_return + "</tr>";

		for (var i = 0; i < data.length; i++) {

			var data_element = data[i];

			var table_row = "<tr>";
			for (var j = 0; j < keys.length; j++) {
				table_row =  table_row + "<td>"+ data_element[keys[j]] + "</td>";
			};
			table_row =  table_row + "</tr>";

			result_to_return = result_to_return + table_row;

		};

		result_to_return = result_to_return +"</table>"
		return result_to_return;

	};

	return{
		embed_element : embed_element,
		combine_elements : combine_elements,
		generate_table : generate_table
	};

}();




s_util = {
	dom_util : dom_mani
}
