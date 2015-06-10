//$(".tabs").click()
  //$('tabs').removeClass("current");
  //$(this).addClass("current");

$.getJSON('/../../api/github/users/octocat/profile.json')
  .then(function(octocat){
    console.log(octocat);

    $mainName = $('#profileName');
    $mainName.text(octocat.name);


 });
