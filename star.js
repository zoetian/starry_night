  $(document).ready(function() {

    var $wrapper = $("#starfield"),
      width = $wrapper.width(),
      height = $wrapper.height(),
      $flames = $('#flames'),
      $rocketContainer = $('#rocket-container');

    var starNumber = 50;

    function getStarsTimeline() {
      var $starfield = $('#starfield');

      for (var i = 0; i < starNumber; i++) {
        var speed;

        function randomizer() {
          var x = Math.round(Math.random() * 2);
          switch (x) {
            case 0:
              speed = 2;
              break;
            case 1:
              speed = 4;
              break;
            case 2:
              speed = 6;
              break;
          }
        };

        function starline() {
          var element = $('<div class="star s' + speed + '"></div>').appendTo($starfield);
          var tl = new TimelineMax({
              repeat: -1
            }),
            x = Math.floor(Math.random() * width * 2) + 1,
            count = 0;

          tl.set(element, {
            y: -60,
            x: x
          }).to(element, speed, {
            y: height,
            x: x - width / 1.5,
            ease: Linear.easeNone
          }, Math.random() * 10);

        };

        randomizer();
        starline();
      }

    }

    getStarsTimeline()
    
    var mainTl = new TimelineMax({delay: 3});
    mainTl
      .to('h1', 2, {
        opacity: 1
      }, 'rocket')
      .add(getRekt(), 'rocket')
      .to($flames, 0.2, {
        repeat: -1,
        yoyo: true,
        scale: 0.7,
        ease: SlowMo.ease.config(1, 0.4)
      }, 'rocket')
  });
