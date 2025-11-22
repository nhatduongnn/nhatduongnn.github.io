document.addEventListener('DOMContentLoaded', function() {

    // ==== Theme (Light/Dark Mode) Toggle ====
    const themeToggle = document.getElementById('theme-mode-toggle');
    const body = document.body;

    // Function to apply the saved theme
    const applyTheme = (theme) => {
        body.dataset.theme = theme;
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // ==== Smooth Scrolling ====
    const navLinks = document.querySelectorAll('.nav-link');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    }

    // ==== Gen Z Mode Toggle ====
    const genzToggle = document.getElementById('genz-mode-toggle');
    let isGenzMode = false;

    const professionalText = {};
    const genzText = {
        'hero-h1': "PhD Candidate in <span class='handwritten'>Computational Biology</span>",
        'hero-p': "Lowkey a data wizard with 5+ years of experience in genomics and probabilistic modeling. It's giving... science.",
        'projects-title': "What I've Been Building",
        'p1-title': "Chromatin Landscape Deep Dive",
        'p1-desc': "Used a real big brain HMM model to figure out chromatin accessibility. The data integration was chef's kiss.",
        'p-view-live': "See it Live",
        'p-source-code': "The receipts (code)",
        'p2-title': "Heart Defects in 22q11.2 DS Patients",
        'p2-desc': "Built a WES pipeline for like 370 samples to find genetic variants. We were in our variant calling era.",
        'p3-title': "Bioinformatics Pipeline Thingy",
        'p3-desc': "Made a WGS pipeline that takes three CNV calls and makes one big consensus call. It's the main character of variant calling.",
        'exp-title': "My Vibe & The Tech I Fw",
        'exp-work-title': "Where I've Been",
        'job1-title': "PhD Grind",
        'job1-desc': "Cooking up some fire HMMs and integrating genomic datasets. It's a vibe.",
        'job2-title': "Master's Thesis Era",
        'job2-desc': "Built a whole WES pipeline and did some mutation analysis. We ate that.",
        'job3-title': "Bioinformatics Intern",
        'job3-desc': "Built a WGS pipeline and improved some De novo assembly. The glow up was real.",
        'exp-skills-title': "My Go-To Tech",
        'contact-title': "Slide Into My DMs",
        'contact-p': "Got a wild idea, a question, or just wanna say 'yuh'? My inbox is open. Bet.",
        'hobbies-title': "When I'm Not Coding",
        'soundcloud-title': "Making Beats",
        'soundcloud-desc': "When I'm not debugging, I'm dropping fire tracks. Peep the SoundCloud for the vibes.",
        'soundcloud-btn': "Vibe Check",
        'footer-text': "© 2025 Nhat Duong. Built with caffeine and chaos."
    };

    // Store professional text on initial load
    document.querySelectorAll('[data-key]').forEach(elem => {
        professionalText[elem.dataset.key] = elem.innerHTML;
    });

    genzToggle.addEventListener('click', () => {
        isGenzMode = !isGenzMode;
        genzToggle.classList.toggle('active', isGenzMode);
        
        const textsToUse = isGenzMode ? genzText : professionalText;

        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.dataset.key;
            if (textsToUse[key]) {
                elem.innerHTML = textsToUse[key];
            }
        });

        // Some keys are duplicated, so we need to handle them all
        if (isGenzMode) {
            document.querySelectorAll('[data-key="p-view-live"]').forEach(e => e.innerHTML = genzText['p-view-live']);
            document.querySelectorAll('[data-key="p-source-code"]').forEach(e => e.innerHTML = genzText['p-source-code']);
        } else {
            document.querySelectorAll('[data-key="p-view-live"]').forEach(e => e.innerHTML = professionalText['p-view-live']);
            document.querySelectorAll('[data-key="p-source-code"]').forEach(e => e.innerHTML = professionalText['p-source-code']);
        }
    });
});
