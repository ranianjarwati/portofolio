<template>
    <div>
        <!-- Hero Section -->
        <header class="hero">
            <div class="hero-content">
                <div class="badge">Tersedia untuk Freelance & Kolaborasi</div>
                <h1>Membangun Solusi Digital & <span>Website Kreatif</span></h1>
                <p>Halo! Saya Rani Anjarwati, seorang pengembang web yang berfokus pada performa, estetika, dan pengalaman pengguna yang luar biasa.</p>
                <div class="btn-group">
                    <router-link to="/project" class="btn">Lihat Proyek</router-link>
                    <router-link to="/contact" class="btn btn-outline">Hubungi Saya</router-link>
                </div>
            </div>
        </header>

        <!-- Tentang Saya -->
        <section id="about" style="padding: 5rem 2rem; background-color: #ffffff;">
            <div style="max-width: 900px; margin: 0 auto;">
                
                <!-- Judul Section -->
                <div style="text-align: center; margin-bottom: 3rem;">
                    <h2 class="section-title">Tentang <span>Saya</span></h2>
                    <p style="color: #6b7280; font-size: 1rem; margin: 0; margin-top: 0.5rem;">Mengenal lebih dekat siapa di balik barisan kode</p>
                </div>
                
                <!-- Wrapper Flexbox untuk Layout Berdampingan (Foto & Card) -->
                <div style="display: flex; flex-wrap: wrap; gap: 2.5rem; align-items: center; justify-content: center;">
                    
                    <!-- Foto Profil Bulat dengan Bingkai Warna Utama -->
                    <div style="flex: 1; min-width: 220px; max-width: 260px; text-align: center;">
                        <div style="padding: 6px; background: var(--primary-color, #82819d); border-radius: 50%; box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);">
                            <img src="/gambar/25.jpeg" alt="Foto Rani Anjarwati" style="width: 100%; height: 240px; border-radius: 50%; object-fit: cover; object-position: center 20%; display: block; border: 4px solid #ffffff;" />
                        </div>
                    </div>
                    
                    <!-- Card Deskripsi -->
                    <div class="about-card" style="flex: 2; min-width: 280px; background: #f9fafb; padding: 2.5rem; border-radius: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); border: 1px solid #e5e7eb; text-align: left;">
                        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-top: 0; margin-bottom: 1rem;">
                            Halo, Saya Rani Anjarwati 👋
                        </h3>
                        <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem; font-size: 0.95rem;">
                            Saya seorang pengembang web yang bersemangat dalam mengubah ide-ide kreatif menjadi kenyataan digital yang fungsional dan indah. Dengan keahlian dalam pemrograman web modern serta pemahaman UI/UX, saya berkomitmen menghadirkan kode bersih dan pengalaman pengguna yang intuitif.
                        </p>
                        <p style="color: #4b5563; line-height: 1.7; margin: 0; font-size: 0.95rem;">
                            Di luar coding, saya senang mengeksplorasi teknologi baru, memecahkan tantangan logika, dan terus mengasah kemampuan agar selalu relevan dengan industri digital.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <!-- Keahlian -->
        <section id="skills">
            <h2 class="section-title">Keahlian <span>Teknis</span></h2>
            <div class="skills-container">
                <div class="skill-card">HTML5 & CSS3</div>
                <div class="skill-card">JavaScript</div>
                <div class="skill-card">Responsive Design</div>
                <div class="skill-card">Laravel</div>
                <div class="skill-card">UI/UX Principles</div>
                <div class="skill-card">Problem Solving</div>
                <div class="skill-card">Postman</div>  
                <div class="skill-card">MySQL & XAMPP</div>  
            </div>
        </section>
    </div>
</template>