function changeTitle(text) {
    document.querySelector("title").innerHTML = text
}

const mediaRoot = './media/photo/'

export default {
    changeTitle,
    mediaRoot: mediaRoot,
}