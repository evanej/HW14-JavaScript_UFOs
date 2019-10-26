// from data.js
var tableData = data;

//Create Table display on page
function appendTable(report) {
    var tbody = d3.select("tbody");

    // add a new row
    var row = tbody.append("tr");

    // for each key value pair in an object
    Object.entries(report).forEach(([key, value]) => {

        // add a new cell
        var cell = row.append("td");
        cell.text(value);

        // set a class for comments to align text
        if (key === "comments") {
            cell.attr("class", "record-comments")
        }
    });
}

// Table display
tableData.forEach(appendTable);

//Button
var submit = d3.select("#filter-btn");

// Part 1:Date entry field - search for matches and display in table on page

// Click event of datetime filter
submit.on("click", function() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    // Filter reports
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData)

    // Display the filtered dataset
    filteredData.forEach(appendTable);

});



