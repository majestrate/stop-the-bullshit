$(document).ready(function () {
  var blockedURLs = new Set([
    '70news.wordpress.com',
    'abcnews.com.co',
    'americannews.com',
    'dailystar.co.uk',
    'eaglerising.com',
    'empirenews.net',
    'endingthefed.com',
    'hotglobalnews.com',
    'stuppid.com',
    'theblacksphere.net',
    'theglobalsun.com',
    'thenationalsun.com',
    'thepoliticalinsider.com',
    'theracketreport.com',
    'tmzbreaking.com',
    'tmzuncut.com',
    'tmzworldnews.com',
    'trumpvision365.com',
    'truthcdm.com',
    'usanewsflash.com',
    'usherald.com',
    'worldnewsdailyreport.com',
    'worldpoliticus.com',
  ]);

  $(window).scroll(_.debounce(function () {
    $('.userContentWrapper .ellipsis')
      .not('.FriendButton')
      .each(function () {
        var url = $(this).text(),
          cleanURL = url.split('|')[0];

        if (blockedURLs.has(cleanURL)) {
          var $blockedPost = $(this).closest('.userContentWrapper');
          $blockedPost.fadeOut(400, function () {
            $blockedPost.html('<p class="suggestion">This post was removed to protect your political views from change</p>');
            $blockedPost.fadeIn();
          });
        }
    }, 400);
  }));
});
