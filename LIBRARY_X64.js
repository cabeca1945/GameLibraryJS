var WINDOW_X, WINDOW_Y;
var WINDOW_W, WINDOW_H;

var WINDOW_BGCOLOR;

export var LDSL = {

    SET_BACKGROUND_COLOR: function(COLOR) {
        document.body.style.background = COLOR;
    },

    GET_WINDOW_WIDTH: function() {
        document.body.style.overflow = "hidden";
        return window.innerWidth + 5;
    },

    GET_WINDOW_HEIGHT: function() {
        document.body.style.overflow = "hidden";
        return window.innerHeight + 5;
    },

    CREATE_WINDOW: function(X, Y, WIDTH, HEIGHT, BACKGROUND_COLOR) {
        var WINDOW = document.createElement("div");
        WINDOW.style.position = "absolute";
        WINDOW.style.marginLeft = `${-10 + X}px`;
        WINDOW.style.marginTop = `${-10 + Y}px`;
        WINDOW.style.width = `${WIDTH}px`;
        WINDOW.style.height = `${HEIGHT}px`;
        WINDOW.style.background = BACKGROUND_COLOR;

        WINDOW_W = WIDTH;
        WINDOW_H = HEIGHT;

        WINDOW_X = X;
        WINDOW_Y = Y;

        WINDOW_BGCOLOR = BACKGROUND_COLOR;

        document.body.appendChild(WINDOW);

        console.log("WINDOW INITIALIZED!");
        
        return {
            SET_COLOR: function(COLOR) {
                WINDOW.style.background = COLOR;
            }
        }
    },

    FILL_RECTANGLE:function(X, Y, WIDTH, HEIGHT, COLOR){
        var RECT = document.createElement("div");
        RECT.style.position = "absolute";
        RECT.style.marginLeft = `${X}px`;
        RECT.style.marginTop = `${Y}px`;
        RECT.style.width = `${WIDTH}px`;
        RECT.style.height = `${HEIGHT}px`;
        RECT.style.background = COLOR;
        document.body.appendChild(RECT);

        return {
            SET_X: function(X) {
                RECT.style.position = "absolute";
                RECT.style.marginLeft = X + "px";

                if(X >= WINDOW_X + WINDOW_W) {
                    RECT.remove();
                }

                if(X < WINDOW_X - WIDTH) {
                    RECT.remove();
                }
            },
            SET_Y: function(Y) {
                RECT.style.position = "absolute";
                RECT.style.marginTop = Y + "px";

                if(Y >= WINDOW_Y + WINDOW_H) {
                    RECT.remove();
                }

                if(Y < WINDOW_Y - HEIGHT) {
                    RECT.remove();
                }
            },
            GET_X: function() {
                return parseFloat(RECT.style.marginLeft);
            },
            GET_Y: function() {
                return parseFloat(RECT.style.marginTop);
            },
            GET_SCALEX: function() {
                return parseFloat(RECT.style.width);
            },
            GET_SCALEY: function() {
                return parseFloat(RECT.style.height);
            },

            ROTATE: function(ANGLE) {
                RECT.style.transform = `rotateZ(${ANGLE}deg)`;
            },
            SET_COLOR: function(COLOR) {
                RECT.style.background = COLOR;
            },
            SET_BORDER: function(RADIUS, COLOR) {
                RECT.style.border = `${RADIUS}px solid ${COLOR}`;
            },
            DESTROY: function() {
                RECT.remove();
            }
        }
    },

    FILL_CIRCLE:function(X, Y, WIDTH, HEIGHT, COLOR){
        var CIRCLE = document.createElement("div");

        CIRCLE.style.position = "absolute";
        CIRCLE.style.marginLeft = `${X}px`;
        CIRCLE.style.marginTop = `${Y}px`;
        CIRCLE.style.width = `${WIDTH}px`;
        CIRCLE.style.height = `${HEIGHT}px`;
        CIRCLE.style.background = COLOR;
        CIRCLE.style.borderRadius = "200px";

        document.body.appendChild(CIRCLE);

        return {
            SET_X: function(X) {
                CIRCLE.style.position = "absolute";
                CIRCLE.style.marginLeft = X + "px";

                if(X >= WINDOW_X + WINDOW_W) {
                    CIRCLE.remove();
                }

                if(Y < WINDOW_X - WIDTH) {
                    CIRCLE.remove();
                }
            },
            SET_Y: function(Y) {
                CIRCLE.style.position = "absolute";
                CIRCLE.style.marginTop = Y + "px";

                if(Y >= WINDOW_Y + WINDOW_H) {
                    CIRCLE.remove();
                }

                if(Y < WINDOW_Y - HEIGHT) {
                    CIRCLE.remove();
                }
            },
            ROTATE: function(ANGLE) {
                CIRCLE.style.transform = `rotateZ(${ANGLE}deg)`;
            },
            SET_COLOR: function(COLOR) {
                CIRCLE.style.background = COLOR;
            },
            SET_COLOR: function(COLOR) {
                CIRCLE.style.background = COLOR;
            },
            DESTROY: function() {
                CIRCLE.remove();
            }
        }
    },

    FILL_TRIANGLE:function(X, Y, WIDTH, HEIGHT, DEGRESS, COLOR){
        var TRIANGLE = document.createElement("div");
        TRIANGLE.style.position = "absolute";
        TRIANGLE.style.marginLeft = `${X}px`;
        TRIANGLE.style.marginTop = `${Y}px`;
        TRIANGLE.style.width = `${WIDTH}px`;
        TRIANGLE.style.height = `${HEIGHT}px`;
        TRIANGLE.style.background = COLOR;
        TRIANGLE.style.clipPath = `polygon(0 0,100% 100%,0 100%)`;
        // TRIANGLE.style.borderLeft = `25px solid ${WINDOW_BGCOLOR}`;
        // TRIANGLE.style.borderRight = `25px solid ${WINDOW_BGCOLOR}`;
        // TRIANGLE.style.borderBottom = `50px solid ${COLOR}`;
        TRIANGLE.style.transform = `rotateZ(${DEGRESS}deg)`;
        document.body.appendChild(TRIANGLE);

        return {
            SET_X: function(X) {
                TRIANGLE.style.position = "absolute";
                TRIANGLE.style.marginLeft = X + "px";

                if(X >= WINDOW_X + WINDOW_W) {
                    TRIANGLE.remove();
                }

                if(X < WINDOW_X - WIDTH) {
                    TRIANGLE.remove();
                }
            },
            SET_Y: function(Y) {
                TRIANGLE.style.position = "absolute";
                TRIANGLE.style.marginTop = Y + "px";

                if(Y >= WINDOW_Y + WINDOW_H) {
                    TRIANGLE.remove();
                }

                if(Y < WINDOW_Y - HEIGHT) {
                    TRIANGLE.remove();
                }
            },
            ROTATE: function(ANGLE) {
                TRIANGLE.style.transform = `rotateZ(${ANGLE}deg)`;
            },
            SET_COLOR: function(COLOR) {
                TRIANGLE.style.background = COLOR;
            },
            UPDATE: function() {
                document.body.appendChild(TRIANGLE);
            },
            DESTROY: function() {
                TRIANGLE.remove();
            }
        }
    },
}

export var RENDERER = {
    IMAGE: {
        DRAW_IMAGE: function(X, Y, WIDTH, HEIGHT, SRC) {
            var IMG = document.createElement("div");

            IMG.style.position = "absolute";

            IMG.style.width = `${WIDTH}px`;
            IMG.style.height = `${HEIGHT}px`;
            IMG.style.marginLeft = `${X}px`;
            IMG.style.marginTop = `${Y}px`;

            IMG.style.backgroundImage = `url("${SRC}")`;
            IMG.style.backgroundSize = `${WIDTH}px ${HEIGHT}px`;

            document.body.appendChild(IMG);

            return {
                SET_X: function(X) {
                    IMG.style.position = "absolute";
                    IMG.style.marginLeft = x + "px";

                    if(x >= WINDOW_X + WINDOW_W) {
                        IMG.remove();
                    }

                    if(x < WINDOW_X - WIDTH) {
                        IMG.remove();
                    }
                },
                SET_Y: function(Y) {
                    IMG.style.position = "absolute";
                    IMG.style.marginTop = y + "px";

                    if(y >= WINDOW_Y + WINDOW_H) {
                        IMG.remove();
                    }

                    if(y < WINDOW_Y - HEIGHT) {
                        IMG.remove();
                    }
                },
                ROTATE: function(ANGLE) {
                    IMG.style.transform = `rotateZ(${ANGLE}deg)`;
                },

                ADD_EFFECT(IMG_EFFECT) {
                    IMG.style.filter = IMG_EFFECT;
                }
            }
        },

        IMAGE_EFFECTS: {
            HUE_SATURATION: function(HUE_DEG, SATURATION) {
                return `hue-rotate(${HUE_DEG}deg)saturate(${SATURATION})`;
            },
            BLURINESS: function(BLUR_INTENSITY) {
                return `blur(${BLUR_INTENSITY/50}px)`;
            }
        },
    }
}

export var PHYSICS = {

    COLLISION: {
        
        PLACE_MEETING: function(COLLIDER1, COLLIDER2, FUNC, ALT_FUNC) {
            if(COLLIDER1.GET_X() > COLLIDER2.GET_X()-COLLIDER1.GET_SCALEX()-2 && COLLIDER1.GET_X() < COLLIDER2.GET_X()+COLLIDER1.GET_SCALEX()-2
                && COLLIDER1.GET_Y() < COLLIDER2.GET_Y()+COLLIDER1.GET_SCALEY() && COLLIDER1.GET_Y() > COLLIDER2.GET_Y() - COLLIDER1.GET_SCALEY()) {
                    FUNC();
            }else {
                ALT_FUNC();
            }
        },
    }
}

export var AUDIO = {
    AUDIO_ADD: function(SRC) {
        var audio = document.createElement("audio");
        audio.innerHTML = `<source src="${SRC}" type="audio/mp3">`;
        audio.controls=false;
        audio.play();
        document.body.appendChild(audio);
        var time = 0;
        setInterval(() => {
            time++;
        }, 1000);
        audio.onloadedmetadata = () => {
            setInterval(() => {
                if(time>=audio.duration) {
                    audio.remove();
                }
            }, 1000);
        }
    }
}

export var MATHF = {
    RANDOM: {
        MAX: function(max) {
            return Math.floor(Math.random()*max);
        },
        RANGE: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    ANGLE: {
        ZERO: 0.0,

        UP: 90.0,
        DOWN: 270.0,

        CENTER: 135.0,
        CENTERINVERSE: 315.0,

        LEFT: 360.0,
        RIGHT: 180.0,
    },
}

export var COLOR = {
    COLOR: {

        RED: "#FF0000",
        GREEN: "#00FF00",
        BLUE: "#0000FF",

        YELLOW: "#FFFF00",
        MAGENTA: "#FF0090",
        CYAN: "#00FFFF",
        ORANGE: "#FF781F",
        GOLD: "#F9A602",
        JUNGLE: "#29AB87",
        MINT: "#98FB98",
        BROWN: "#7C4700",
        LIME: "C7EA46",

        BLACK: "#000000",
        WHITE: "#FFFFFF",
        GRAY: "#828282",

        SHADER_GRADIENT: function(DEG, ...COLOR) {
            // return `linear-gradient(${DEG}deg,${COLOR[COLOR]}})`;
            for(var i = 0; i < COLOR.length; i++) {
                return `linear-gradient(${DEG}deg,${COLOR[i]}, ${COLOR[i+COLOR.length-1]})`;
            }
        }
    },
}