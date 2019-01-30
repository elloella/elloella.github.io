var feed = new Instafeed({
  get: 'user',
  userId: '7140590025',
  accessToken: '7140590025.1677ed0.a2815fa7deb04ddbb43b3f82de5708f8',
  limit: '8',
  filter: function(image) {
  var MAX_LENGTH = 40;


  // here we create a property called "short_caption"
  // on the image object, using the original caption
  if (image.caption && image.caption.text) {
    image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
  } else {
    image.short_caption = "";
  }

  // ensure the filter doesn't reject any images
  return true;
},
  template: '<div class="col-sm-3"><img class="w-75" src={{image}}><hr><p>{{model.short_caption}}...<a href="{{link}}" target="_blank">Read More</a></p></div>'
});
feed.run();

window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
