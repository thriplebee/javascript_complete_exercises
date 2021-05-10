// ---------------------------
// --------Winning Team-------
// ---------------------------

/*
    Sri Lanka & England both played 3 match one day cricket series. In last 3 games Sri Lanka scored 250, 277, 300 runs, while England scored 185, 244, 360 runs.

    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and display the winner with the average score
    3. Then change scores to show different winners. Don't forget to take into account there might be a draw (same average score)
*/

var score1, score2, score3, averageSri, averageEng;

// Sri Lanka average
score1 = parseInt(prompt("First match score of team Sri Lanka : "));
score2 = parseInt(prompt("Second match score of team Sri Lanka : "));
score3 = parseInt(prompt("Third match score of team Sri Lanka : "));

averageSri = (score1+score2+score3)/3;

// England average
score1 = parseInt(prompt("First match score of team England : "));
score2 = parseInt(prompt("Second match score of team England : "));
score3 = parseInt(prompt("Third match score of team England : "));

averageEng = (score1+score2+score3)/3;

// Find the winner
if(averageSri > averageEng){
    alert("Winner is team Sri Lanka | Average Score : "+averageSri);
    console.log("Winner is team Sri Lanka | Average Score : "+averageSri);
}
else if(averageSri < averageEng){
    alert("Winner is team England | Average Score : "+averageEng);
    console.log("Winner is team England | Average Score : "+averageEng);
}
else{
    alert("Match drawn, average scores are equal!");
    console.log("Match drawn, average scores are equal!");
}
