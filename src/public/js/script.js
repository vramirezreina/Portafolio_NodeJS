var tablinks = document.getElementsByClassName("tab-links");
    var tabcontens = document.getElementsByClassName("tab-contents");
   
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabconten of tabcontens){
            tabconten.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }


    //------------- CIRCLE SKILLS ----------------//

    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots*marked/100);
        var points = "";
        var rotate = 360 /dots;

        for(let i = 0; i<dots; i++){
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for(let i = 0; i<percent; i++){
            pointsMarked[i].classList.add('marked');
        }

    })


    