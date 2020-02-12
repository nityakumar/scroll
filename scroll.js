window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.scrollHeight;
    console.log( offset, height);
    if (offset === height) {
      
      // play this these to change different scrolling effect.
      
             AddImage();
             AddText(); 
             // ChangeColor();
    }
  };
  
  function AddImage() {
    //First fetch the html element using getElementById,     //then use .style to change specific css properties. 
    
        var scrollUpImg = document.getElementById('scrollUpImg');
        scrollUpImg.style.display = "block";
    console.log(scrollUpImg.style.display);
  }
  
  
  function ChangeColor() { 
        var el = document.getElementById('styleThisDiv');
        el.style.backgroundColor = "#fc5203";
  }
  
  function AddText() {
        var styleThisText = document.getElementById('styleThisText');
        styleThisText.innerHTML = "";
  }