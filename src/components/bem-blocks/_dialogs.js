let pseudoScroll = document.createElement('div');

function noScroll() {
    setTimeout(() => {
        pseudoScroll.style = "overflowY: scroll; width: 50px; height: 0px; visiblity: hidden;";
        document.querySelector('body').append(pseudoScroll);
        document.querySelector('body').style = `padding-right:${pseudoScroll.offsetWidth - pseudoScroll.clientWidth}px; overflow: hidden`;
    }, 50);
}

function noScrollOff () {
    document.querySelector('body').removeAttribute("style");
    pseudoScroll.remove();
}

function openDialog(dialog) {
    noScroll();
    setTimeout(() => {
        dialog.style.display = "block";
        dialog.style.opacity = 1;
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay').style.opacity = 1;
    }, 100);
}

function closeDialog(dialog) {
    setTimeout(() => {
        dialog.style.opacity = 0;
    }, 100);
    setTimeout(() => {
        dialog.style.display = "none";
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.overlay').style.opacity = 0;
        noScrollOff();
    }, 200);
}