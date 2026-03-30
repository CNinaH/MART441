$(document).ready(function() {

    $.ajax({
        url: "data.json",
        method: "GET",
        dataType: "json",
        success: function(data) {

            data.forEach(function(item) {

                let card = `
                    <div class="card">
                        <h2>${item.album}</h2>
                        <p>Artist: ${item.artist}</p>
                        <p>Genre: ${item.genre}</p>
                    </div>
                `;

                $("#music-container").append(card);
            });

            $(".card").highlightCard();

        },
        error: function() {
            console.log("Error loading JSON");
        }

    });

});

$.fn.highlightCard = function() {
    return this.each(function() {

        $(this).hover(
            function() {
                $(this).css({
                    "background-color": "#443a48",
                    "transform": "scale(1.05)"
                });

            },
            function() {
                $(this).css({
                    "transform": "scale(1)"
                });
            }
        );

    });
};