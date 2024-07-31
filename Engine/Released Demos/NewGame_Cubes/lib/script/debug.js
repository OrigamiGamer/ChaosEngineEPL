
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
                }
            ]
        }

    }
}; Object.freeze(res_list);


function loadResources() {
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

    // Initialize //
    loadResources();

}

function render() {

    if (GetKeyState(VK.Right_Button)) {
        print("Right Button Released!");
    }

}
