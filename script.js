countdown = document.createElement("h1");
document.body.append(countdown)

setTimeout(() => {
  countdown.textContent = "10";
  setTimeout(() => {
    countdown.textContent = "9";
    setTimeout(() => {
      countdown.textContent = "8";
      setTimeout(() => {
        countdown.textContent = "7";
        setTimeout(() => {
          countdown.textContent = "6";
          setTimeout(() => {
            countdown.textContent = "5";
            setTimeout(() => {
              countdown.textContent = "4";
              setTimeout(() => {
                countdown.textContent = "3";
                setTimeout(() => {
                  countdown.textContent = "2";
                  setTimeout(() => {
                    countdown.textContent = "1";
                    setTimeout(() => {
                      countdown.textContent = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);