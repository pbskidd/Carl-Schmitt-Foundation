(function ($) {

$(function() {
  var googleCSEWatermark = function(id) {
    var f = $(id)[0];
    if (f && (f.query || f['edit-search-block-form--2'] || f['edit-keys'])) {
      var q = f.query ? f.query : (f['edit-search-block-form--2'] ? f['edit-search-block-form--2'] : f['edit-keys']);
      var n = navigator;
      var l = location;
      //if (n.platform == 'Win32') {
      //  q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
      //}
      var b = function() {
        if (q.value == '') {
          q.style.background = 'transparent url(/sites/all/themes/dvhweb/styles/images/google_custom_search_watermark.png) 50% 50% no-repeat';
        }
      };
      var f = function() {
        q.style.background = 'transparent';
      };
      q.onfocus = f;
      q.onblur = b;
//      if (!/[&?]query=[^&]/.test(l.search)) {
        b();
//      }
    }
  };
  googleCSEWatermark('#search-block-form.google-cse');
  googleCSEWatermark('#search-form.google-cse');
  googleCSEWatermark('#google-cse-results-searchbox-form');
});

})(jQuery);
