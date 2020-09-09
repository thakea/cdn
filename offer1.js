
  var els = document.getElementsByClassName('btn');
  for (var i = 0; i < els.length; i++) {
    els[i].id=i;
    els[i].addEventListener('click', function () { console.log(this); });
  }
