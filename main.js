function main() {
  $('.content').hide();
  $('.buttons').on('click',function() {
    $('.content').toggle();
  });
}

$(document).ready(main);
