document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi AOS (Animasi)
    AOS.init({ duration: 1000, once: true });

    // 2. Fungsi Navigasi Halus (Smooth Scroll)
    const navigateTo = (targetId) => {
        const element = document.querySelector(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70, // Offset agar tidak tertutup navbar
                behavior: 'smooth'
            });
        }
    };

    // 3. Event Listener untuk Semua Tombol Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            navigateTo(target);
        });
    });

    // 4. Logika Tab pada Floating Card (Inspirasi Garuda)
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Hapus class active dari semua tab
            tabs.forEach(t => t.classList.remove('active'));
            // Tambah class active ke yang diklik
            tab.classList.add('active');
            
            // Logika ganti konten bisa ditambahkan di sini
            console.log(`Berpindah ke tab: ${tab.innerText}`);
        });
    });

    // 5. Tombol Action Utama (CTA)
    const btnAction = document.querySelector('.btn-action');
    if (btnAction) {
        btnAction.addEventListener('click', () => {
            navigateTo('.section-container'); // Scroll ke proyek unggulan
        });
    }
});