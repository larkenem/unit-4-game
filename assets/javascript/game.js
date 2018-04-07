$(document).ready(function(){

    //global variables that hold the game's data

    //running total of our total based on the random values assigned to the crystals
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //assigning a function to variable for a randomly generated number for the user to try and match
    var compGuess;
    //empty variable for each crystal
    var crystal1Val;
    var crystal2Val;
    var crystal3Val;
    var crystal4Val;

    //setting up game with random values 
        function setUp() {

            compGuess = Math.floor(Math.random() * 101) + 19;
            console.log(compGuess);
            $("#compGuess").text(compGuess);

            // $("#crystal1").on("click", function () {
            crystal1Val = Math.floor(Math.random() * 11) + 1;
            console.log(crystal1Val);
            // });

            crystal2Val = Math.floor(Math.random() * 11) + 1;
            console.log(crystal2Val);

            crystal3Val = Math.floor(Math.random() * 11) + 1;
            console.log(crystal3Val);

            crystal4Val = Math.floor(Math.random() * 11) + 1;
            console.log(crystal4Val);

            userTotal = 0;
            $("#userTotal").text("");

            $("#outcome").text("");
        };

        function gameLogic() {
            if (userTotal === compGuess) {
                wins++;
                $("#wins").text(wins);
                $("#outcome").text("You Win!");
                setUp();
            };

            if (userTotal > compGuess) {
                losses++;
                $("#losses").text(losses);
                $("#outcome").text("You lose.");
                setUp();
            };
        };
        

        //click function that assigns each crystal a value from setUp function
            $("#crystal1").on("click", function () {
                userTotal += crystal1Val;
                $("#userTotal").text(userTotal);
                gameLogic();
            });

            $("#crystal2").on("click", function () {
                userTotal += crystal2Val;
                $("#userTotal").text(userTotal);
                gameLogic();
            });

            $("#crystal3").on("click", function () {
                userTotal += crystal3Val;
                $("#userTotal").text(userTotal);
                gameLogic();
            });

            $("#crystal4").on("click", function () {
                userTotal += crystal4Val;
                $("#userTotal").text(userTotal);
                gameLogic();
            });
            
    setUp();
             
});
