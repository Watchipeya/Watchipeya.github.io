window.onload = function () {
    var elementIsClicked = 0; // declare the variable that tracks the state
    console.log (elementIsClicked);

    function hitit() {
        $(document).ready(function() {
            $('html').css('background', 'url(./WojtekJestLeszczem_files/red.png) no-repeat center center fixed').css('background-size', 'cover');
        });
        setTimeout(function () {
            $(document).ready(function() {
                $('html').css('background', 'url(./WojtekJestLeszczem_files/Villager.png) no-repeat center center fixed').css('background-size', 'cover');
            });
        }, 100);
    }

    function gethit() {
        $(document).ready(function() {
            $('html').css('background', 'url(./WojtekJestLeszczem_files/angry.png) no-repeat center center fixed').css('background-size', 'cover');
        });

        $("#gin").css("opacity","1");
        $("#goodbye").css("opacity","1");
        $("#textbox").css("opacity","1");
        $("a").attr("href", "zagadka.html")

    }

    function clickHandler() { // declare a function that updates the state
        elementIsClicked = elementIsClicked + 1;
        console.log(elementIsClicked);
        if (elementIsClicked < 10) {
            hitit();
        } else {
            gethit();
        }
    }

    var gruby = document.getElementById('grubson');
    gruby.addEventListener('click', clickHandler); // associate the function above with the click event
    var zycie = document.getElementById('hearts');

}
