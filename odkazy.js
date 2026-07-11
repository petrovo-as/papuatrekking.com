$(document).ready(function () {
  var titleNewWindow = '(Odkaz do nového okna)';
  $('a[href^="http://www.papuatrekking.com"]').each(function () {
    $(this).addClass('inside');
  });

  $('a[href^="http://"]').each(function () {
    if (!$(this).hasClass('inside')) {
      $(this).addClass('out-link').attr('target', '_blank');
      title = $(this).attr('title');
      if (typeof title === 'undefined') {
        $(this).attr('title', titleNewWindow);
      } else {
        $(this).attr('title', title + ' ' + titleNewWindow);
      }
    }
  });
});