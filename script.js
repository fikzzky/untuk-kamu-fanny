const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const typing = document.getElementById("typing");

const text = `Hai Fanny. ❤️

Terima kasih yaa karena sudah menjadi bagian dari satu bulan perjalanan kita.

Mungkin satu bulan terdengar singkat, tetapi bagiku setiap harinya sangat berarti.

Aku ingin minta maaf kalau selama ini aku sering membuat kamu marah, kecewa, capek, sedih, atau membuat kamu merasa tidak nyaman karena sifat dan sikapku.

Aku sadar aku belum sempurna. Aku masih banyak belajar menjadi seseorang yang lebih baik untukmu.

Terima kasih karena sudah mau bertahan sejauh ini.

Terima kasih karena sudah mau mendengarkan cerita-ceritaku.

Terima kasih karena sudah menjadi alasan aku tersenyum setiap hari.

Aku berharap hubungan kita bisa terus berjalan, saling memahami, saling menguatkan, dan tumbuh bersama.

Semoga senyum kamu selalu ada.

Semoga Allah selalu menjaga kamu.

Aku sayang kamu.

🤍

— Fikri`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

openBtn.onclick = () => {
    envelope.style.display = "none";
    letter.style.display = "block";
    typing.innerHTML = "";
    i = 0;
    typeWriter();
};

closeBtn.onclick = () => {
    letter.style.display = "none";
    envelope.style.display = "block";
};
