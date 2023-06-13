        // Start with Scroll down/up header appear/hide
        const header = document.getElementById("header");
        let prevScrollPos = window.pageYOffset;
        let scrolledDown = false;
        
        // Start with Scroll down/up header appear/hide
        window.onscroll = () => {
          const currentScrollPos = window.pageYOffset;
        
          if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            header.style.top = "0";
            scrolledDown = false;
          } else {
            // Scrolling down
            if (currentScrollPos >= 13) {
              if (!scrolledDown) {
                header.style.top = `-${header.offsetHeight}px`;
                scrolledDown = true;
              }
            }
          }
        
          prevScrollPos = currentScrollPos;
        };