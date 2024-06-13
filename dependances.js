let workInLocal = false;
let version = 'v2.0';
let host;

if (workInLocal) {
    host = 'http://localhost';
} else {
    host = 'https://borreani.fr';
}

const components = [
    'bt_composant_main_block',
    'bt_composant_dropdown_icon',
    'bt_composant_dropdown_text',
    'bt_composant_icon',
    'bt_composant_drag_and_drop',
    'bt_composant_button',
    'bt_composant_container',
    'bt_composant_code_presentation',
    'bt_composant_input',
    'bt_composant_card',
    'bt_composant_chart',
    'bt_composant_footer',
    'bt_composant_navbar',
    'bt_composant_slider',
    'bt_animate_composant_mouse_scroll'

];
  
components.forEach(component => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = `${host}/bt_web_components/${version}/${component}/app.js`;
    document.head.appendChild(script);
});



