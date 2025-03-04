(function () {
    var options = {
      whatsapp: "+525556101010", // WhatsApp number
      company_logo_url: "//static.getbutton.io/img/flag.png", // URL of company logo (png, jpg, gif)
      button_image_url: "", // URL of button image (png, jpg, gif)
      greeting_message: "Hola, ¿cómo podemos ayudarte? Envíanos un mensaje ahora para obtener ayuda.", // Text of greeting message
      call_to_action: "Envíanos un mensaje", // Call to action
      button_color: "#FF6550", // Color of button
      position: "right", // Position may be 'right' or 'left'
      ga: true, // Google Analytics enabled
      branding: false, // Show branding string
      mobile: true, // Mobile version enabled
      desktop: true, // Desktop version enabled
      greeting: false, // Greeting message enabled
      shift_vertical: 250, // Vertical position, px
      shift_horizontal: 0, // Horizontal position, px
      domain: "mvshub.com.mx", // site domain
      key: "uARTzCGMSuKq5f8UjvYUqA", // pro-widget key
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  })();

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
