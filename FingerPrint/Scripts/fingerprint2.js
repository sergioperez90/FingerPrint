 document.querySelector("#btn").addEventListener("click", function () {
      var d1 = new Date();
      var fp = new Fingerprint2();
      fp.get(function(result, components) {
        var d2 = new Date();
        var timeString = "Time took to calculate the fingerprint: " + (d2 - d1) + "ms";
        var details = "<strong>Detailed information: </strong><br />";
        if(typeof window.console !== "undefined") {
          console.log(timeString);
          console.log(result);
          for (var index in components) {
            var obj = components[index];
            var value = obj.value;
            var line = obj.key + " = " + value.toString().substr(0, 100);
            console.log(line);
            details += line + "<br />";
          }
        }
        document.querySelector("#details").innerHTML = details
        document.querySelector("#fp").textContent = result
        document.querySelector("#time").textContent = timeString
      });
    });