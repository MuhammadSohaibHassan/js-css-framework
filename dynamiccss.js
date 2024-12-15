// Optimized JavaScript CSS Framework

// Property mappings: Shortened names (e.g., 'b' for background, 's' for font-size)
const propertyMappings = {
    b: 'background-color',
    bg: 'background',
    c: 'color',
    bc: 'border-color',
    bgImg: 'background-image',
    bgPos: 'background-position',
    bgSize: 'background-size',
    br: 'border-radius',
    bw: 'border-width',
    bt: 'border-top',
    bl: 'border-left',
    bb: 'border-bottom',
    brt: 'border-top-right-radius',
    brb: 'border-bottom-right-radius',
    brl: 'border-left-radius',
    brb: 'border-bottom-left-radius',
    m: 'margin',
    p: 'padding',
    ml: 'margin-left',
    mr: 'margin-right',
    mt: 'margin-top',
    mb: 'margin-bottom',
    pl: 'padding-left',
    pr: 'padding-right',
    pt: 'padding-top',
    pb: 'padding-bottom',
    s: 'font-size',
    f: 'font-family',
    fw: 'font-weight',
    ta: 'text-align',
    lh: 'line-height',
    ls: 'letter-spacing',
    fs: 'font-style',
    td: 'text-decoration',
    tdNone: 'text-decoration',
    tr: 'text-transform',
    whiteSp: 'white-space',
    d: 'display',
    pos: 'position',
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom',
    z: 'z-index',
    w: 'width',
    h: 'height',
    mw: 'max-width',
    mh: 'max-height',
    minW: 'min-width',
    minH: 'min-height',
    fl: 'flex',
    flWrap: 'flex-wrap',
    flDir: 'flex-direction',
    jc: 'justify-content',
    ai: 'align-items',
    ac: 'align-content',
    fs: 'flex-shrink',
    fg: 'flex-grow',
    fBas: 'flex-basis',
    gr: 'grid',
    grT: 'grid-template-columns',
    grL: 'grid-template-rows',
    grS: 'grid-template-areas',
    boxS: 'box-sizing',
    overflow: 'overflow',
    oc: 'overflow-clip',
    blur: 'filter',
    gs: 'filter: grayscale',
    inv: 'filter: invert',
    sep: 'filter: sepia',
    br: 'filter: brightness',
    ct: 'filter: contrast',
    ds: 'box-shadow',
    ts: 'text-shadow',
    cursor: 'cursor',
    outline: 'outline',
    opacity: 'opacity',
    visibility: 'visibility'
};

// Value mappings for shorthand values in class names
const valueMappings = {
    blue: 'blue',
    white: 'white',
    black: 'black',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    grey: 'grey',
    transparent: 'transparent',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
    30: '30px',
    23: '23px',
    50: '50px',
    100: '100px',
    5: '5px',
    10: '10px',
    20: '20px',
    30: '30px',
    50: '50px',
    100: '100px',
    flex: 'flex',
    block: 'block',
    inline: 'inline',
    nowrap: 'nowrap',
    wrap: 'wrap',
    column: 'column',
    row: 'row',
    0: '0',
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    3: '3',
    auto: 'auto',
    hidden: 'hidden',
    visible: 'visible'
};

// Function to apply styles dynamically using class names and mappings
function applyStyles(element, classNames) {
    const classes = classNames.split('-');
    let cssText = ''; // To hold the generated inline styles

    // Iterate through the class names to map them to CSS properties
    for (let i = 0; i < classes.length; i++) {
        const className = classes[i];

        // Check if the class corresponds to a known property in the mapping
        if (propertyMappings[className]) {
            const property = propertyMappings[className];

            // The next class should be the value to apply for the property
            const value = classes[i + 1];

            if (value && valueMappings[value]) {
                // Append the property-value pair to the cssText
                cssText += `${property}: ${valueMappings[value]}; `;
                i++; // Skip the next class as it's the value
            }
        }
    }

    // Apply the styles as inline CSS to the element
    if (cssText) {
        element.style.cssText += cssText;
    }
}

// Automatically apply styles to elements when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[class*="-"]'); // Select elements with class names containing '-'
    elements.forEach(element => {
        const classNames = element.className;
        applyStyles(element, classNames);
    });
});
