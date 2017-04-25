var states = {"oneALink1":null, "oneAP1":" OneA - Link1", "oneALink2":"/#", "oneAP2":"OneA-Link2","oneBLink1":"/#", "oneBP1":" OneB - Link1", "oneBLink2":"/#", "oneBP2":"OneB - Link2","oneCLink1":null, "oneCP1":null, "oneCLink2":null, "oneCP2":null,
"twoALink1":"/#", "twoAP1":" twoA - Link1", "twoALink2":null, "twoAP2":"twoA-Link2","twoBLink1":"/#", "twoBP1":" twoB - Link1", "twoBLink2":"/#", "twoBP2":"twoB - Link2","twoCLink1":null, "twoCP1":null, "twoCLink2":null, "twoCP2":null,
"threeALink1":null, "threeAP1":" threeA - Link1", "threeALink2":"/#", "threeAP2":"threeA-Link2","threeBLink1":"/#", "threeBP1":" threeB - Link1", "threeBLink2":"/#", "threeBP2":"threeB - Link2","threeCLink1":null, "threeCP1":null, "threeCLink2":null, "threeCP2":null,
             };

jQuery("button").click(function() {			
	    jQuery('#state').text("Forms for " + [this.id]);
		var x = 1;
    while(x < 3){
      jQueryLink = [this.id] + "Link" + x;			
      jQueryP = [this.id] + "P" + x;
      
      if(states[jQueryLink] == null){ 
        if(states[jQueryP] == null && x == 1){
         jQuery('#link'+x).text("No Forms Available");
				 jQuery('#link'+(x+1)).text(" ");
		           x = 10;
		     }
				 else
			   if(states[jQueryP] == null){
				 	 jQuery('#link'+x).text(" ");
				 }
		     else{
		       jQuery('#link'+x).text(states[jQueryP]); 
		     }
      }
      else{
        jQuery('#link'+x).html('<a href="' + states[jQueryLink] + '" target="_blank">' + states[jQueryP] + '</a>');
      }

      x++;
    }
    });

