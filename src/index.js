import "./style.css";
import $ from "jquery";
import "jquery-bracket/src/jquery.bracket.js";
import "jquery-bracket/src/jquery.bracket.scss";

var minimalData = {
  teams: [
    ["Team 1", "Team 2"] /* first matchup */,
    ["Team 3", "Team 4"] /* second matchup */,
  ],
  results: [
    [
      [1, 2],
      [3, 4],
    ] /* first round */,
    [
      [4, 6],
      [2, 1],
    ] /* second round */,
  ],
};

$(function() {
  $('#minimal .demo').bracket({
    init: minimalData, /* data to initialize the bracket with */
  })
});