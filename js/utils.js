const isMobile = () => {
    let width = window.innerWidth;
    if(width < 576) return true;
    return false;
}

let _NflPassId = ""
let _NflPassProducts = []