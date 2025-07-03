document.addEventListener('DOMContentLoaded', () => { 
    const aboutMeBtn = document.getElementById("about-me-btn");
    const aboutSkillsBtn = document.getElementById("about-skills-btn");
    const aboutCertBtn = document.getElementById("about-cert-btn");

    const aboutText = document.getElementById("about-text-placeholder");
    const aboutExtra = document.getElementById("about-me-extra");
    const allButtons = [aboutMeBtn, aboutSkillsBtn, aboutCertBtn];

    // define colors for about navigation
    const activeColor = "#F5EBE0";
    const inactiveColor = "#7A7979";

    // Content for each section
    const aboutMeContent = `
        I'm a Computer Science student with specialization in Machine Learning and a proud DataCamp scholar. I build because I love solving
        real problems. From real-time emotion detection to a viral photobooth app used by over 2 million people, I also create
        AI-powered tools that make an impact.
        <br><br>
        I thrive in fast-moving environments where I can grow, ship, and learn alongside strong teams. My work is rooted in
        curiosity, experimentation, and a genuine love for learning.
    `;

    const skillsContent = `
        <strong>Languages:</strong><br>
        • Python, Java, JavaScript, HTML, CSS<br><br>

        <strong>Frameworks & Tools:</strong><br>
        • YOLOv11, OpenCV, Git, GitHub, Firebase, Android Studio, Visual Studio Code<br><br>

        <strong>Platforms & ML Services:</strong><br>
        • Google ML Kit, Google Colab, Label Studio, Google Analytics<br><br>

        <strong>Design & Productivity:</strong><br>
        • Figma, Notion
    `;

    const certContent = `
        <strong>Certifications:</strong><br>
        <br>
        <ul class="cert-list">
            <li><a href="#" target="_blank">• GitHub Foundations Certification – GitHub</a></li>
            <li><a href="#" target="_blank">• Introduction to Machine Learning – DataCamp</a></li>
            <li><a href="#" target="_blank">• Intermediate Python – DataCamp</a></li>
            <li><a href="#" target="_blank">• Image Classification with CNNs – DeepLearning.AI</a></li>
            <li><a href="#" target="_blank">• Building AI-Powered Apps with Google ML Kit – Google</a></li>
            <li><a href="#" target="_blank">• Responsive Web Design – freeCodeCamp</a></li>
        </ul>
    `;

    // Function to update content and button styles
    function swapMain(content) {
        aboutText.style.opacity = 0;                  // fade out
        setTimeout(() => {
            aboutText.innerHTML = content;
            aboutText.style.opacity = 1;                // fade in
        }, 200);                                      // half of .4 s transition
    }

    /* helper: show / hide “extra” paragraph with smooth height */
    function toggleExtra(show) {
        if (show) {
            aboutExtra.style.maxHeight = aboutExtra.scrollHeight + "px";
            aboutExtra.style.opacity   = 1;
        } else {
            aboutExtra.style.maxHeight = 0;
            aboutExtra.style.opacity   = 0;
        }
    }

    /* helper: update button colours */
    function setActive(btn) {
        allButtons.forEach(b => b.style.color = (b === btn ? activeColor : inactiveColor));
    }

    /* click handlers */
    aboutMeBtn.onclick     = () => {
        setActive(aboutMeBtn);
        swapMain(aboutMeContent);
        toggleExtra(true);
    };

    aboutSkillsBtn.onclick = () => {
        setActive(aboutSkillsBtn);
        swapMain(skillsContent);
        toggleExtra(false);
    };

    aboutCertBtn.onclick   = () => {
        setActive(aboutCertBtn);
        swapMain(certContent);
        toggleExtra(false);
    };

    /* initial state (optional — ensure proper colours & heights on page load) */
    setActive(aboutMeBtn);
    toggleExtra(true);

    const options = {
        threshold: 0.2         // fire when 20 % is visible
    // rootMargin: "0px 0px -10% 0px"  // uncomment for earlier reveal
    };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');   // fade/slide in
      } else {
        entry.target.classList.remove('show'); // fade/slide out
      }
    });
  }, options);

  document.querySelectorAll('.hidden').forEach(el => revealObserver.observe(el));

})