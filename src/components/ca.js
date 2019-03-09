let layer = 0;
CanvasExt = {
    drawRect: function (canvasId, penColor, strokeWidth) {
        let that = this;
        that.penColor = penColor;
        that.penWidth = strokeWidth;

        let canvas = document.getElementById(canvasId);
        //canvas 的矩形框
        let canvasRect = canvas.getBoundingClientRect();
        //矩形框的左上角坐标
        let canvasLeft = canvasRect.left;
        let canvasTop = canvasRect.top;

        let layerIndex = layer;
        let layerName = "layer";
        let x = 0;
        let y = 0;

        //鼠标点击按下事件，画图准备
        canvas.onmousedown = function (e) {
            //设置画笔颜色和宽度
            let color = that.penColor;
            let penWidth = that.penWidth;

            layerIndex++;
            layer++;
            layerName += layerIndex;
            x = e.clientX - canvasLeft;
            y = e.clientY - canvasTop;

            $("#" + canvasId).addLayer({
                type: 'rectangle',
                strokeStyle: color,
                strokeWidth: penWidth,
                name: layerName,
                fromCenter: false,
                x: x, y: y,
                width: 1,
                height: 1
            });

            $("#" + canvasId).drawLayers();
            $("#" + canvasId).saveCanvas();
            //鼠标移动事件，画图
            canvas.onmousemove = function (e) {
                width = e.clientX - canvasLeft - x;
                height = e.clientY - canvasTop - y;

                $("#" + canvasId).removeLayer(layerName);

                $("#" + canvasId).addLayer({
                    type: 'rectangle',
                    strokeStyle: color,
                    strokeWidth: penWidth,
                    name: layerName,
                    fromCenter: false,
                    x: x, y: y,
                    width: width,
                    height: height
                });

                $("#" + canvasId).drawLayers();
            }
        };

        canvas.onmouseup = function (e) {

            let color = that.penColor;
            let penWidth = that.penWidth;

            canvas.onmousemove = null;

            width = e.clientX - canvasLeft - x;
            height = e.clientY - canvasTop - y;

            $("#" + canvasId).removeLayer(layerName);

            $("#" + canvasId).addLayer({
                type: 'rectangle',
                strokeStyle: color,
                strokeWidth: penWidth,
                name: layerName,
                fromCenter: false,
                x: x, y: y,
                width: width,
                height: height
            });

            $("#" + canvasId).drawLayers();
            $("#" + canvasId).saveCanvas();
        }
    }
};

drawPen();
function drawPen() {
    let color = "red";
    let width = 1;
    CanvasExt.drawRect("canvas", color, width);
}
