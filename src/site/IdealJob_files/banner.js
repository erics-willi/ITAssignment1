
(function (bannerHtml, inlineStyle, textDirection, cookieName, cookieValue, cookieAge, cookiePath, cookieDomain, buttonUrl) {
  var styleHolder = document.createElement("style");
  styleHolder.innerHTML = inlineStyle;
  document.body.appendChild(styleHolder);

  var bannerHolder = document.createElement("div");
  bannerHolder.setAttribute("dir", textDirection);
  bannerHolder.innerHTML = bannerHtml;
  document.body.appendChild(bannerHolder);

  var bannerSection = bannerHolder.getElementsByTagName("section")[0];
  bannerSection.className += " is-hidden";

  var origMarginBottom = document.body.style.marginBottom;

  var agreeButton = bannerHolder.getElementsByTagName("button")[0];
  agreeButton.onclick = (function() {
    agreeButton.onclick = null;
    bannerSection.className = bannerSection.className.replace("is-shown", "is-hidden");
    document.body.style.marginBottom = origMarginBottom;

    var expirationDate = new Date(new Date().getTime() + 1000*cookieAge).toUTCString();
    document.cookie = cookieName + "=\"" + cookieValue + "\"; expires=" + expirationDate + "; path=" + cookiePath + "; domain=" + cookieDomain;

    var xhrClickLogReq = new XMLHttpRequest();
    xhrClickLogReq.open("GET", buttonUrl, true);
    xhrClickLogReq.send();
  });

  bannerSection.className = bannerSection.className.replace("is-hidden", "is-shown");
  document.body.style.marginBottom = bannerSection.offsetHeight + "px";

})("<div class=\"tos-Banner-dismissable\"><section class=\"icl-LegalConsentBanner\"><div class=\"icl-LegalConsentBanner-body\"><div class=\"icl-LegalConsentBanner-text\"><div class=\"tos-Text\">By using Indeed you agree to our new <a href=\"https:\/\/www.indeed.com\/legal#privacy\" target=\"_blank\">Privacy Policy<\/a>, <a href=\"https:\/\/www.indeed.com\/legal#cookies\" target=\"_blank\">Cookie Policy<\/a> and <a href=\"https:\/\/www.indeed.com\/legal#tos\" target=\"_blank\">Terms<\/a>, which we encourage you to review.<\/div><\/div><div class=\"icl-LegalConsentBanner-action\"><button class=\"tos-Button tos-Button-white\">Dismiss<\/button><\/div><\/div><\/section><\/div>", ".tos-Button{margin:.75rem 0 0;padding:.5rem 1.5rem;background-color:#085ff7;border:.125rem solid #085ff7;border-radius:6.25rem;background-repeat:repeat-x;cursor:pointer;width:100%;max-width:21.9375rem;font-family:Helvetica Neue,Helvetica,Arial,Liberation Sans,Roboto,Noto,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:0;box-sizing:border-box;display:inline-block;color:#fff;-webkit-font-smoothing:antialiased;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-highlight:none;-webkit-tap-highlight-color:transparent}.tos-Button:first-child{margin-top:0}@media only screen and (min-width:48em){.tos-Button{width:auto}}.tos-Banner-dismissable .tos-Button.tos-Button-white{background-color:white;color:#085ff7;width:auto;padding:10px 14px}.tos-Banner-dismissable .icl-LegalConsentBanner-text{margin-bottom:0 !important}@media(max-width:48em){.tos-Banner-dismissable .tos-Text{text-align:left}.tos-Banner-dismissable .icl-LegalConsentBanner-body{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tos-Banner-dismissable .icl-LegalConsentBanner-text{-webkit-order:0;-ms-flex-order:0;order:0;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-align-self:auto;-ms-flex-item-align:auto;align-self:auto}.tos-Banner-dismissable .icl-LegalConsentBanner-action{margin-left:16px;-webkit-order:0;-ms-flex-order:0;order:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-align-self:auto;-ms-flex-item-align:auto;align-self:auto}}\n.icl-LegalConsentBanner,.icl-LegalConsentBanner-body,.icl-LegalConsentBanner-headline,.icl-LegalConsentBanner-text{box-sizing:border-box}.icl-LegalConsentBanner{bottom:-100px;position:fixed;width:100%;z-index:1000;display:block}[dir] .icl-LegalConsentBanner{padding:1rem;background-color:#fffbde;border:1px solid transparent;border-top-color:#f2f2f2;text-align:center}[dir\x3dltr] .icl-LegalConsentBanner{left:0}[dir\x3drtl] .icl-LegalConsentBanner{right:0}.icl-LegalConsentBanner.is-shown{transition:1s;-webkit-transform:translateY(-100px)}[dir] .icl-LegalConsentBanner.is-shown{transform:translateY(-100px)}.icl-LegalConsentBanner.is-hidden{transition:.4s;-webkit-transform:translateY(100px)}[dir] .icl-LegalConsentBanner.is-hidden{transform:translateY(100px)}[dir] .icl-LegalConsentBanner-body{text-align:center}@media (min-width:48em){.icl-LegalConsentBanner-body{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}[dir\x3dltr] .icl-LegalConsentBanner-body{text-align:left}[dir\x3drtl] .icl-LegalConsentBanner-body{text-align:right}}.icl-LegalConsentBanner-headline{font-family:Helvetica Neue,Helvetica,Arial,Liberation Sans,Roboto,Noto,sans-serif;font-size:1rem;letter-spacing:0;font-weight:700;line-height:1.5;color:#2d2d2d}[dir] .icl-LegalConsentBanner-headline{margin:0}.icl-LegalConsentBanner-text{font-family:Helvetica Neue,Helvetica,Arial,Liberation Sans,Roboto,Noto,sans-serif;font-size:.75rem;letter-spacing:0;font-weight:400;line-height:1.67;color:#2d2d2d}.icl-LegalConsentBanner-text a{text-decoration:none;color:#085ff7;white-space:nowrap}.icl-LegalConsentBanner-text a:active,.icl-LegalConsentBanner-text a:focus,.icl-LegalConsentBanner-text a:hover,.icl-LegalConsentBanner-text a:visited{text-decoration:underline}.icl-LegalConsentBanner-text a:visited{color:#5a38d6}.icl-LegalConsentBanner-text a:active,.icl-LegalConsentBanner-text a:focus,.icl-LegalConsentBanner-text a:hover{color:#1497ff}@media (max-width:48em){[dir] .icl-LegalConsentBanner-text{margin-bottom:1rem}}@media (min-width:48em){[dir\x3dltr] .icl-LegalConsentBanner-text{margin-right:1rem}[dir\x3drtl] .icl-LegalConsentBanner-text{margin-left:1rem}}\n\/*# sourceMappingURL\x3dLegalConsentBanner.css.map*\/", "ltr", "dismissTos", "1", 2592000, "\/", ".indeed.com", "\/rpc\/log?a\x3djasxTosBannerClick\x26ctk\x3d1e1lr56fk81tm800\x26tk\x3d1eb97nqu9p01i800");
