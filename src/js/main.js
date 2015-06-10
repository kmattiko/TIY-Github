//$(".tabs").click()
  //$('tabs').removeClass("current");
  //$(this).addClass("current");

$.getJSON('../api/github/users/octocat/profile.json')
  .then(function(octocat){
      //puts information to console?
    console.log(octocat);
      //unique name tied back to where in html(Dave's class example)
    $mainName = $('h3#name');
    $mainName.text(octocat.name);
//something is not quite right with this code, no change.
 });
