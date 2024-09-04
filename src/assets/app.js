document.addEventListener('alpine:init', () => {
    // console.log(window.innerWidth);
    Alpine.data('toggleSidebar', () => ({
        open: true,
        // open : window.innerWidth > 992 ? false : true,
        open: window.innerWidth <= 992 ? false : true,
        toggle() {
            // console.log('btn is clicked'),
            this.open = ! this.open
        }
    })),
    Alpine.data('dropdown', () => ({
        open:false,
        toggle(){
            this.open = !this.open
        }
    }))
});
