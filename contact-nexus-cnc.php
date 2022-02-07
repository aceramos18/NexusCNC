<?php 

	$sent = false;

	$error = false;

	if(strlen(trim($_POST['name'])) > 3 && strlen(trim($_POST['email'])) > 5 && strlen($_POST['message'])){

		$msg = "<table>";

		$msg .= "<tr><td>Name</td><td>".$_POST['name']."</td></tr>";

		$msg .= "<tr><td>Email</td><td>".$_POST['email']."</td></tr>";

		$msg .= "<tr><td>Message</td><td>".nl2br(htmlentities($_POST['message']))."</td></tr>";


		$msg .= "<table>";

		mail("joseph@nexuscnc.com, eliezerjerry@nexuscnc.com","Contact Form", $msg, "MIME-Type: 1.0\r\nFrom: info@nexuscnc.com\r\nContent-Type:text/html;charset=UTF-8\r\n");

		$sent = true;

	} elseif(count($_POST)) {

		$error = true;

	}




$title = "Nexus CNC Machining Services LTD. - Edmonton, Alberta - Contact Us";
include("template_header.php"); ?>

<!-- Intro -->

<div id="pagetop" class="shop">
  <h1>Contact</h1>
  <p>Do not hesitate to contact us!</p>
</div>
</header>

<section>
  <div class="padding">
    <div class="container"> 
       <div class="row members popup">
					<div class="col-xs-6 col-sm-6 col-md-6">
					
                    <h6>Please contact us at our<br>Edmonton CNC Shop located here:</h6>
                    
                    <iframe width="90%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.ca/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=9215+34A+Avenue+NW+Edmonton,+Alberta+T6E+5T6&amp;aq=&amp;sll=53.466464,-113.465166&amp;sspn=0.015201,0.045447&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=9215+34A+Ave+NW,+Edmonton,+Alberta+T6E+5R1&amp;t=m&amp;ll=53.467256,-113.471861&amp;spn=0.017883,0.063515&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><div class="googlemaplink"><a href="http://maps.google.ca/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=9215+34A+Avenue+NW+Edmonton,+Alberta+T6E+5T6&amp;aq=&amp;sll=53.466464,-113.465166&amp;sspn=0.015201,0.045447&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=9215+34A+Ave+NW,+Edmonton,+Alberta+T6E+5R1&amp;t=m&amp;ll=53.467256,-113.471861&amp;spn=0.017883,0.063515&amp;z=14&amp;iwloc=A" style="text-align:left; font-size:10px">View Larger Map</a></div>
             	<p><br></p>
                    <p>
                    9215 34A Avenue NW<br>
                    Edmonton, Alberta T6E 5T6<br>
                    Canada<br>
                    <br>
                    Phone: 780-469-4454<br>
                    Fax: 780-469-4474<br>
                    </p>
					<p>Or Send us a few details about a project you would like us to work on using this form.</p>
				  </div>
					<div class="col-xs-6 col-sm-6 col-md-6">
					
				  
    <h6>Send us a few details about your project<br>and we will provide a competitive estimate.</h6>
      
      <!-- Contact Form -->
      
      <?php

	if($sent === false){
		if($error === true){
			echo "Please make sure you fill out all the fields.";
		}
		?>
		
      <form class="form" method="post" action="<?php echo $_SERVER['REQUEST_URI']; ?>" role="form">
        <div class="form-group">
          <label for="name">Name :</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" value="<?php echo $_POST['name']; ?>" />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value="<?php echo $_POST['email']; ?>" />
        </div>
        <div class="form-group">
          <label for="message">Project Details :</label>
          <textarea rows="10" id="message" name="message"><?php echo htmlentities($_POST['message']); ?></textarea>
        </div>
        <button type="submit" value="">Get an estimate!</button>
      </form>
      <?php }  else { ?>
      <p><br><BR><font size="+1">Your Email has been sent, thank you.<br>Please make sure to add us to your safe senders list.</font></p>
      <?php } ?>
    </div>
  </div>
  </div>
					
					
					
				</div>
</section>
<section> 
  
  <!-- Google Map -->
  
  <div id="google-map-btn">Click to find us !</div>
  <!-- Google Map Btn -->
  
  <div id="google-map">
    <div id="map-canvas"> </div>
  </div>
</section>
<?php include("template_footer.php"); ?>
