var color;u("a[href='#back']").handle("click",function(){return history.back()}),color=u(".border").nodes[0].style["background-color"],u(document).on("scroll touchmove",function(){var progress=window.scrollY/window.scrollMaxY*100;return u("#progress").nodes[0].style.background="linear-gradient(to right, "+color+" "+progress+"%, white "+progress+"%)"});