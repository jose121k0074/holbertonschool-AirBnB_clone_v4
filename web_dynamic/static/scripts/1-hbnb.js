/* Your script must be executed only when DOM is loaded
You must use jQuery
Listen for changes on each INPUT checkbox tag
*/
$(document).ready(function () {
  const amens = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amens[$(this).data('id')] = $(this).data('name');
      } else {
        delete amens[$(this).data('id')];
      }
    });
    if (Object.values(amens).length > 0) {
      $('.amenities h4').text(Object.values(amens).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});
