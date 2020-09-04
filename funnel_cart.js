var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
document.getElementById("addproduct").submit();setTimeout(function(){document.location.href = baseUrl + '/cart';},250);
