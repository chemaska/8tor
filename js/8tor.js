let bittor = (function () {
//console.log("hola");

const config = {
    canvas: document.getElementsByTagName("canvas"),
    context: this.canvas.getContext("2d")
};

    function init() {  
        //console.log(config.canvas);
        draw();
    };
    function draw() {  
        var context = config.context;
        context.fillStyle='red';
        context.fillRect(20,20,20,20);
        
        
    };
    function clear(){
        config.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    return {
        init: init
    }

})();
bittor.init();