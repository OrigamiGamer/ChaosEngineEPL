const res_list = {
    header: "\\lib\\res\\",
    res: {
        texture: {
            header: "texture\\",
            include: [
                {
                    fileName: "stone.png",
                    resName: "stone"
                },
                {
                    fileName: "background.png",
                    resName: "bg"
                },
                {
                    fileName: "dirt.png",
                    resName: "dirt"
                }
            ]
        }
    }
}; Object.freeze(res_list);

function load_resources() {
    print("Script >> Load Resource");
    let header = res_list.header;
    let header_texture = res_list.res.texture.header;
    // Texture //
    res_list.res.texture.include.forEach(file => {
        let new_fileName = header + header_texture + file.fileName;
        print("Script >> Resource -> Texture -> Load -> " + new_fileName);
        ResTexture.loadFile(new_fileName, file.resName);
    })
}

// Main //
function __main__() {
    print("script loaded!");
    load_resources();
}


function render() {
    if (GetKeyState(VK.Right_Button) == KeyState_Down) {
        print("RB of mouse was released!");
    }
    Graphic.drawLine(100, 100, 200, 200);
}
