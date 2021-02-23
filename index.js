function playDice() {
    const randomImg1 = (Math.floor(Math.random() * 6)) + 1 //random number 1-6
    const selectImg1 = document.querySelectorAll('img')[0];//img select 1-6
    const imgSource = 'Images/dice-' + randomImg1 + '.png';//img source "Images/dice-1.png"
    selectImg1.setAttribute('src', imgSource);

    const randomImg2 = (Math.floor(Math.random() * 6)) + 1;
    const selectImg2 = document.querySelectorAll('img')[1];
    const imgSource2 = 'Images/dice-' + randomImg2 + '.png';
    selectImg2.setAttribute('src', imgSource2);

    if (randomImg1 > randomImg2) {
        document.querySelectorAll('h1')[0].innerText = "⛳Player-1 Win!"
    }
    else if (randomImg2 > randomImg1) {
        document.querySelectorAll('h1')[0].innerText = "Player-2 Win!⛳"
    } else {
        document.querySelectorAll('h1')[0].innerText = "⛳Game Draw⛳"
    }
}
