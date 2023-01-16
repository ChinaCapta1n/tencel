import { defineStore } from "pinia";

const useHeader = defineStore('header', {
    state: () => ({
        height: '',
        flag: true,
    }),
    actions: {
        setHeight() {
            this.height = document.getElementById('header').offsetHeight + 'px';
        },
        setFlag() {
            this.flag = false;
        }
    }
})

export default useHeader;