function colorGenerate() {

    const chars = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return color;
}

document.getElementById('btn-action').addEventListener('click', () => {

    for(let i = 0; i < 5; i++) {
        let colors = colorGenerate();
        let div_color = document.getElementById(`color-${i+1}`);
        div_color.style.backgroundColor = colors;

        let txt_color = document.getElementById(`text-color-${i+1}`);
        txt_color.textContent = `${colors}`;
    }
})
