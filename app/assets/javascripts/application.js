//= require turbolinks

try{

    var Turbolinks = require("turbolinks");

    if (Turbolinks.supported) {
    
    Turbolinks.start();

    Turbolinks.setProgressBarDelay(delayInMilliseconds);
    
    Turbolinks.visit("/polygons", { action: "replace" });

  }
  

}
catch(e){
    
}
finally{

}
