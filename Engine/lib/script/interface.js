// Function Interfaces //
function __main__() { };
function render() { };
function print(content) { };

//----------// Memory Operation //----------//
/**
 * Read the data from the memory area of e. 
 */
function e_p2int(address) { return Number() };
function e_p2float(address) { return Number() };
function e_p2double(address) { return Number() };
function e_p2string(address) { return String() };

// Resource Manager //

//----------// ResTexture Manager //----------//
/**
 * Load a texture file, and return a pointer of the texture loaded.
 * @param new_FileName The path of the texture file any you want to load.
 * @param new_TextureName The custom new name any you want for the texture loaded.
 */
function ResTexture_loadFile(new_FileName = String(), new_TextureName = String()) { return Number() };



// IGraphic //
function IGraphic_drawLine(
    x1 = 0.0,   // Pos_1
    y1 = 0.0,
    x2 = 0.0,   // Pos_2
    y2 = 0.0,
    lw = 1.0,   // LineWidth
    c_rgb = 0,  // ColorRGB
    c_a = 1.0,  // ColorAlpha (0.0-1.0)
    ax = 0.0,   // AnchorPos
    ay = 0.0,
    az = 0.0,
    rt = 0.0    // Rotation
) { };



// Input //
function GetKeyState(new_VirtKey = Number()) { return Boolean() };
