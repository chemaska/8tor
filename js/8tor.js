let Bittor = (function () {
console.log("hola");

const config = {
    canvas: document.getElementsByTagName("canvas"),
    context: this.canvas.getContext("2d")
};

    function init() {  
        console.log(config.canvas);
        

    };
    function draw() {  
        
    };

    return {
        init: init
    }

})();
Bittor.init();