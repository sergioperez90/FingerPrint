document.querySelector("#btn1").addEventListener("click", function () {

    var client = new ClientJS();

    document.querySelector("#fp1").textContent = client.getFingerprint();

    var details = "<strong>Detailed information: </strong><br />";
    details += "user_agent: " + client.getUserAgent() + "<br />";
    details += "browser: " + client.getBrowser() + "<br />";
    details += "time_zone: " + client.getTimeZone() +"<br />";
    details += "language: " + client.getLanguage() +"<br />";
    details += "is_mobile: " + client.isMobile() +"<br />";
    details += "is_mobile_IOS: " + client.isMobileIOS() +"<br />";
    details += "is_chrome: " + client.isChrome() +"<br />";
    details += "is_firefox: " + client.isFirefox() +"<br />";
    details += "is_safari: " + client.isSafari() +"<br />";
    details += "is_opera: " + client.isOpera() +"<br />";
    details += "is_IE: " + client.isIE() +"<br />";
    details += "is_flash: " + client.isFlash() +"<br />";
    details += "is_java: " + client.isJava() +"<br />";
    details += "CPU: " + client.getCPU() +"<br />";
    details += "OS: " + client.getOS() +"<br />";
    details += "Resolution: " + client.getCurrentResolution() +"<br />";
    details += "Plugins: " + client.getPlugins() +"<br />";

   
        



  document.querySelector("#details1").innerHTML = details;



});