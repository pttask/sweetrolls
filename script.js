const data = {
    banana: {
        title: "BANANA ROLLS",
        desc: "Crispy Outside, Sweet Inside<br>Perfect in Everybite",
        bgClass: "bg-banana",
        imgSrc: "link-gambar-banana.png" // Ganti dengan path gambarmu
    },
    choco: {
        title: "CHOCO ROLLS",
        desc: "Soft Banana, Rich Chocolate<br>Perfectly Rolled",
        bgClass: "bg-choco",
        imgSrc: "link-gambar-choco.png" // Ganti dengan path gambarmu
    },
    cheese: {
        title: "CHEESE ROLLS",
        desc: "Sweet Banana, Creamy Cheese<br>Perfect Golden",
        bgClass: "bg-cheese",
        imgSrc: "link-gambar-cheese.png" // Ganti dengan path gambarmu
    }
};

function changeFlavor(flavor) {
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const desc = document.getElementById('hero-desc');
    const mainImage = document.getElementById('main-image');
    
    // Animasi menghilang (fade-out)
    title.style.opacity = 0;
    desc.style.opacity = 0;
    mainImage.classList.add('fade-out');

    setTimeout(() => {
        // Ganti konten
        title.innerHTML = data[flavor].title;
        desc.innerHTML = data[flavor].desc;
        mainImage.src = data[flavor].imgSrc;

        // Ganti background
        heroSection.className = `hero ${data[flavor].bgClass}`;

        // Animasi muncul kembali (fade-in)
        title.style.opacity = 1;
        desc.style.opacity = 1;
        mainImage.classList.remove('fade-out');
    }, 300); // Waktu yang sama dengan durasi transisi di CSS

    // Update active class di tombol
    document.querySelectorAll('.flavor-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function processCheckout() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    // Pengecekan sederhana apakah form sudah diisi
    if(!name || !phone || !address) {
        alert("Tolong lengkapi nama, nomor WhatsApp, dan alamatmu ya!");
        return;
    }
    
    alert(`Yeay! Terima kasih ${name}! Pesanan The Sweet Rolls kamu sedang diproses. Cek terus nomor WhatsApp ${phone} kamu ya.`);
}