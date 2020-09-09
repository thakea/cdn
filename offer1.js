if( window.location.href == 'https://offer.thakea.com/#?offer1'){
  window.location.replace('https://thakea.com/XPmGqV');
}
function locationHashChanged() {
  if (location.hash === '#?offer1') {
    console.log("You're visiting Offer1!");
  }
}

window.onhashchange = locationHashChanged;
