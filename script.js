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

window.addEventListener('load', function() {
    const audio = document.getElementById("bgMusic");
    audio.muted = false; // Bỏ tắt tiếng sau khi trang tải xong
    audio.play().catch(error => console.log("Autoplay bị chặn:", error));
});