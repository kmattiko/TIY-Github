//$(".tabs").click()
  //$('tabs').removeClass("current");
  //$(this).addClass("current");

$.getJSON('/../../api/github/users/octocat/profile.json')
  .then(function(octocat){
    console.log(octocat);

    $profilePic = $('#profilePic');
    $profilePic.attr('src', octocat.avatar_url);

    $mainName = $('#profileName');
    $mainName.text(octocat.name);

    $logins = $('#logins');
    $logins.text(octocat.login);

    $company = $('#company');
    $company.text(octocat.company);

    $location = $('#location');
    $location.text(octocat.location);

    $email = $('#email');
    $email.text(octocat.email);

    $blog = $('#blog');
    $blog.text(octocat.blog);
 });
