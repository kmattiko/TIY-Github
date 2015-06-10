//$(".tabs").click()
  //$('tabs').removeClass("current");
  //$(this).addClass("current");

$.getJSON('../../api/github/users/octocat/profile.json')
  .then(function(octocat){
      //puts information to console?
    console.log(octocat);
      //unique name tied back to where in html(Dave's class example)
    $mainName = $('.profile#name');
      //where is the item in the json file?
    $mainName.attr(octocat.name);

    $mainName.text(octocat.login);
//something is not quite right with this code, no change.
 });
