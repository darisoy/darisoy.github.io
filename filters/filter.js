{
    function clearText() {
        document.getElementById("imageURL").value = '';
    }

    function startImage() {
        document.getElementById("imageURL").value = 'https://media-exp1.licdn.com/dms/image/C5616AQGon86seO4PSA/profile-displaybackgroundimage-shrink_200_800/0?e=1596672000&v=beta&t=rsgfbF4HKK09jNoTjQA6dpQibjMpZJFFaB-59a_Rfug';
        newImage();
    }

    var imageObj = new Image();
    imageObj.crossOrigin = "anonymous";
    function newImage() {
        var url = document.getElementById("imageURL").value;
        if (validURL(url)) {
            document.getElementById("original").src = url;
            imageObj.src = url;
            imageObj.onload = function() {
                drawImage(this);
            };
        } else {
            alert("Please enter a valid URL");
        }
    }
    
    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var imageX = 0;
        var imageY = 0;
        var imageWidth = imageObj.width;
        var imageHeight = imageObj.height;
        context.canvas.width = imageWidth;
        context.canvas.height = imageHeight;

        context.drawImage(imageObj, imageX, imageY);

        //get image data
        var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
        var im = new Picture(imageWidth, imageHeight, 4);
        var data = imageData.data;
        for (var y = 0; y < imageHeight; y++) {
          for (var x = 0; x < imageWidth; x++) {
            setPixel(im, x, y, 0, data[((im.w * y) + x) * im.c + 0]/255.0);
            setPixel(im, x, y, 1, data[((im.w * y) + x) * im.c + 1]/255.0);
            setPixel(im, x, y, 2, data[((im.w * y) + x) * im.c + 2]/255.0);
          }
        }
        
        var filtered = feature_normalize(sobel_image(im)[0]);
        for (var y = 0; y < im.h; y++) {
            for (var x = 0; x < im.w; x++) {
              setPixel(im, x, y, 0, 255);
              setPixel(im, x, y, 1, 255);
              setPixel(im, x, y, 2, 255);
              setPixel(im, x, y, 3, Math.floor(getPixel(filtered, x, y, 0)*255.0));
            }
        }
        imageData.data.set(im.data);
        context.putImageData(imageData, imageX, imageY);
    }

    function sobel_image(im) {
        var Gx = convolve_image(im, make_gx_filter(), false);
        var Gy = convolve_image(im, make_gy_filter(), false);
        var mag = new Picture(im.w, im.h, 1);
        var phase = new Picture(im.w, im.h, 1);
        for (var x = 0; x < im.w; x++) {
            for (var y = 0; y < im.h; y++) {
                var gx = getPixel(Gx, x, y, 0);
                var gy = getPixel(Gy, x, y, 0);
                setPixel(mag, x, y, 0, Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2)))
                setPixel(phase, x, y, 0, Math.atan2(gy, gx));
            }
        }
        return [mag, phase];
    }

    function convolve_image(im, filter, preserve) {
        var newc = 1;
        if (preserve) {
            newc = im.c;
        }
        var ret = new Picture(im.w, im.h, newc);
        if (newc == 4) {
            newc--;
        }
        
        for (var w = 0; w < im.w; w++) {
            for (var h = 0; h < im.h; h++) {
                var channelSum = 0.0;
                for (var c = 0; c < newc; c++) {
                    var q = 0.0;
                    for (var f1 = 0; f1 < filter.w; f1++) {
                        for (var f2 = 0; f2 < filter.h; f2++) {
                            var imX = w + f1 - Math.floor(filter.w/2)
                            var imY = h + f2 - Math.floor(filter.h/2);
                            q += get_clamped_pixel(filter, f1, f2, 0) * get_clamped_pixel(im, imX, imY, c);
                        }
                    }
                    if (preserve) {
                        setPixel(ret, w, h, c, q);
                    } else {
                        channelSum += q; 
                    }
                }
                if (!preserve) {
                    setPixel(ret, w, h, 0, channelSum);
                }
            }
        }
        return ret;
    }

    function feature_normalize(im) {
        var min = 1.0 * Number.MAX_VALUE;;
        var max = -1.0 * Number.MAX_VALUE;;
        for (var w = 0; w < im.w; w++) {
            for (var h = 0; h < im.h; h++) {
                for (var c = 0; c < im.c; c++) {
                    var val = getPixel(im, w, h, c);
                    if (val < min) {
                        min = val;
                    }
                    if (val > max) {
                        max = val;
                    }
                }
            }
        }

        var range = max - min;
        for (var w = 0; w < im.w; w++) {
            for (var h = 0; h < im.h; h++) {
                for (var c = 0; c < im.c; c++) {
                    if (range == 0) {
                        setPixel(im, w, h, c, 0);
                    } else {
                        setPixel(im, w, h, c, (getPixel(im, w, h, c)-min) / range);
                    }
                }
            }
        }
        
        return im;
    }

    function make_gx_filter() {
        var image = new Picture(3, 3, 1);
        setPixel(image, 0, 0, 0, -1);
        setPixel(image, 0, 1, 0, -2);
        setPixel(image, 0, 2, 0, -1);
        setPixel(image, 1, 0, 0, 0);
        setPixel(image, 1, 1, 0, 0);
        setPixel(image, 1, 2, 0, 0);
        setPixel(image, 2, 0, 0, 1);
        setPixel(image, 2, 1, 0, 2);
        setPixel(image, 2, 2, 0, 1);
        return image;
    }

    function make_gy_filter() {
        var image = new Picture(3, 3, 1);
        setPixel(image, 0, 0, 0, -1);
        setPixel(image, 0, 1, 0, 0);
        setPixel(image, 0, 2, 0, 1);
        setPixel(image, 1, 0, 0, -2);
        setPixel(image, 1, 1, 0, 0);
        setPixel(image, 1, 2, 0, 2);
        setPixel(image, 2, 0, 0, -1);
        setPixel(image, 2, 1, 0, 0);
        setPixel(image, 2, 2, 0, 1);
        return image;
    }

    function get_clamped_pixel(im, x, y, ch) {  
        if (x >= im.w) {
            x = im.w - 1;
        } else if (x < 0) {
            x = 0;
        }

        if (y >= im.h) {
            y = im.h - 1;
        } else if (y < 0) {
            y = 0;
        }

        if (ch >= im.c) {
            ch = im.c - 1;
        } else if (ch < 0) {
            ch = 0;
        }
        
        return getPixel(im, x, y, ch);
    }

    function getPixel(im, x, y, z) {
        return im.data[((im.w * y) + x) * im.c + z];
    }

    function setPixel(im, x, y, z, data) {
        im.data[((im.w * y) + x) * im.c + z] = data;
    }

    function Picture(w, h, c) {
        this.w = w;
        this.h = h;
        this.c = c;
        this.data = new Array(this.w * this.h * this.c);
    }

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

}