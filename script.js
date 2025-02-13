window.addEventListener('load', function() {
    const audio = document.getElementById("bgMusic");
    audio.muted = false; 
    audio.play().catch(error => console.log("Autoplay bị chặn:", error));
});
document.getElementById("secretButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "scale(1)";
    }, 50);
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

document.getElementById("secretButton").addEventListener("click", function () {
    const messages = [
        "Chúc bạn iu có 1 ngày Valentine thật tuyệt vời nhoa 💕",
        "Thật may mắn khi mà t gặp được m ❤️",
        "Chúc m ngày nào cũng tươi cười tỏa nắng ☀️",
        "Ngày nào cũng xinh tươi như bông hoa 🌹",
        "Và chúc m sẽ luôn luôn thành công trong cuộc sống 💖",
        "Sẽ thực hiện được ước mơ sau này 🍀",
        "Cuối cùng là đừng bao giờ từ bỏ hay chùn bước trc khó khăn đấy nhé 🥇"
    ];
    
    let index = parseInt(localStorage.getItem("messageIndex")) || 0;
    const message = document.getElementById("message");
    message.style.opacity = "0";
    message.style.transform = "scale(0.8)";
    
    setTimeout(() => {
        message.innerText = messages[index];
        message.style.display = "block";
        message.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        message.style.opacity = "1";
        message.style.transform = "scale(1)";
        message.style.textShadow = "2px 2px 5px #ff99ac";
        message.style.fontWeight = "bold";
    }, 300);
    
    index = (index + 1) % messages.length;
    localStorage.setItem("messageIndex", index);


    for (let i = 0; i < 10; i++) {
        setTimeout(() => createExplodingHeart(), i * 50);
    }
});

function createExplodingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("explode-heart");
    heart.innerHTML = "❤️";

    const btn = document.getElementById("secretButton");
    const rect = btn.getBoundingClientRect();
    
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top + rect.height / 2}px`;

    const x = (Math.random() - 0.5) * 100 + "px";
    const y = (Math.random() - 0.5) * 100 + "px";
    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
}
