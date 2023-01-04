import { defineStore } from "pinia";

const useHeader = defineStore('header', {
    state: () => ({
        height: undefined,
        flag: true,
    }),
    actions: {
        setHeight() {
            this.height = window.getComputedStyle(document.getElementById('header'), null).height;
        },
        setFlag() {
            this.flag = false;
        }
    }
})

export default useHeader;