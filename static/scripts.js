/**
 * Created by robbynewman on 1/6/16.
 */
console.log('Hey');


$(document).ready(function() {
    showBalance();

    $('#newBalance').on('click', function() {

        showBalance();
    })
});

function showBalance() {
    $.ajax("/balance")
        .then(function(response) {
            //$("#balance").append("Woohoo");

            var $balance = response;

            $("#balance").html($balance)
        })
}

$.ajax({
    url: "/balance",
    success: function(response) {
        $(".balance").html(response)
    }
});


//
//$.ajax({
//    url: "test.html",
//    context: document.body,
//    success: function(){
//        $(this).addClass("done");
//    }
//});
//
//
//$(document).ready(function() {
//    var searchQuery = '';
//    $('.submit').on('click', function() {
//        event.preventDefault();
//        searchQuery = $(".movieName").val();
//        console.log('Movie searched for: ', searchQuery);
//        search(searchQuery);
//    });
//
//    function search(query) {
//        $.ajax("http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json")
//            .then(function(response) {
//                var movie=response;
//
//                var $movieTitle=movie.Title;
//                var $movieYear="<p>" + movie.Year + "</p>";
//                var $moviePlot="<p>" + movie.Plot + "</p>";
//
//                $(".movieTitle").html($movieTitle);
//                $(".movieYear").html($movieYear);
//                $(".moviePlot").html($moviePlot);
//            })
//    }
//})
