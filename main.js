document.addEventListener("DOMContentLoaded", () => {
  const aboutMeBtn = document.getElementById("about-me-btn")
  const aboutSkillsBtn = document.getElementById("about-skills-btn")
  const aboutCertBtn = document.getElementById("about-cert-btn")

  const aboutText = document.getElementById("about-text-placeholder")
  const aboutExtra = document.getElementById("about-me-extra")
  const skillsContainer = document.getElementById("skills-container")
  const allButtons = [aboutMeBtn, aboutSkillsBtn, aboutCertBtn]

  const activeColor = "#F5EBE0"
  const inactiveColor = "rgba(245, 235, 224, 0.6)"

  const certContent = `
    <div class="cert-cards-container">
      <a href="https://www.datacamp.com/certificate/AIEDA0016109133521" target="_blank" class="cert-card">
        <img src="assets/certificates/ai_engineer_datacamp.png" alt="AI Engineer for Developers Associate" class="cert-image">
        <h4 class="cert-title left-align">AI Engineer for Developers Associate</h4>
        <p class="cert-issuer">DataCamp</p>
      </a>
      <a href="https://www.credly.com/badges/491bdc7b-cc96-4741-b819-517034172660/public_url" target="_blank" class="cert-card">
        <img src="assets/certificates/software_development_certiport.png" alt="Certiport Software Development Badge" class="cert-image">
        <h4 class="cert-title">IT Specialist: Software Development</h4>
        <p class="cert-issuer">Certiport</p>
      </a>
      <a href="https://www.credly.com/badges/e08dc444-84ef-4358-8d09-6f4ab822f13e" target="_blank" class="cert-card">
        <img src="assets/certificates/github_foundations.png" alt="GitHub Foundations Badge" class="cert-image">
        <h4 class="cert-title">GitHub Foundations</h4>
        <p class="cert-issuer">GitHub</p>
      </a>
      </a>
      <a href="https://www.credly.com/badges/fa891df7-281b-440a-979c-f2fc5f3a1cb3/public_url" target="_blank" class="cert-card">
        <img src="assets/certificates/databases_certiport.png" alt="Certiport Databases Badge" class="cert-image">
        <h4 class="cert-title">IT Specialist: Databases</h4>
        <p class="cert-issuer">Certiport</p>
      </a>
    </div>
  `

  const aboutMeContent = `
        I'm a Computer Science student with specialization in Machine Learning and a proud DataCamp scholar. I build because I love solving
        real problems. From real-time emotion detection to a viral photobooth app used by over 2 million people, I also create
        AI-powered tools that make an impact.
        <br><br>
        I thrive in fast-moving environments where I can grow, ship, and learn alongside strong teams. My work is rooted in
        curiosity, experimentation, and a genuine love for learning.
    `

  function swapMain(content, showSkills = false) {
    aboutText.style.opacity = 0
    skillsContainer.style.display = showSkills ? "block" : "none"
    setTimeout(() => {
      aboutText.innerHTML = content
      aboutText.style.opacity = 1
    }, 200)
  }

  function toggleExtra(show) {
    if (show) {
      aboutExtra.style.maxHeight = aboutExtra.scrollHeight + "px"
      aboutExtra.style.opacity = 1
    } else {
      aboutExtra.style.maxHeight = 0
      aboutExtra.style.opacity = 0
    }
  }

  function setActive(btn) {
    allButtons.forEach((b) => {
      b.style.color = b === btn ? activeColor : inactiveColor
      b.style.backgroundColor = b === btn ? "rgba(255, 255, 255, 0.1)" : "transparent"
    })
  }

  aboutMeBtn.onclick = () => {
    setActive(aboutMeBtn)
    swapMain(aboutMeContent, false)
    toggleExtra(true)
  }

  aboutSkillsBtn.onclick = () => {
    setActive(aboutSkillsBtn)
    swapMain("", true)
    toggleExtra(false)
  }

  aboutCertBtn.onclick = () => {
    setActive(aboutCertBtn)
    swapMain(certContent, false)
    toggleExtra(false)
  }

  setActive(aboutMeBtn)
  toggleExtra(true)

  const options = {
    threshold: 0.1, // Reduced from 0.2 to trigger earlier on mobile
    rootMargin: "0px 0px -50px 0px", // Added margin to trigger before element fully enters viewport
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  }, options)

  document.querySelectorAll(".hidden").forEach((el) => revealObserver.observe(el))

  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".work-card")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter

      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      projectCards.forEach((card) => {
        const status = card.querySelector(".project-status")
        const statusText = status ? status.textContent.toLowerCase() : ""

        if (filter === "all") {
          card.classList.remove("filter-hidden")
        } else if (filter === "completed" && statusText === "completed") {
          card.classList.remove("filter-hidden")
        } else if (filter === "ongoing" && statusText === "ongoing") {
          card.classList.remove("filter-hidden")
        } else {
          card.classList.add("filter-hidden")
        }
      })
    })
  })

  const modal = document.getElementById("project-modal")
  const modalClose = document.querySelector(".modal-close")
  const modalTitle = document.getElementById("modal-title")
  const modalDescription = document.getElementById("modal-description")
  const modalDetails = document.getElementById("modal-details")
  const modalLink = document.getElementById("modal-link")

  const projectData = {
    vibeify: {
      title: "Vibeify: Mood Detection & Music Recommendation",
      description:
        "Vibeify is a mood-based music recommendation app that uses real-time facial emotion detection. The app analyzes user emotions via Google ML Kit and recommends personalized Spotify tracks or fallback audio from Firebase Storage.",
      details:
        "<strong>Key Features:</strong><br>• Real-time emotion detection using Google ML Kit<br>• Spotify API integration for music recommendations<br>• Firebase Storage for fallback audio<br>• Android native development<br><br><strong>Impact:</strong> Seamlessly bridges emotion recognition with personalized entertainment.",
    },
    photobooth: {
      title: "Photobooth-io: Online Photobooth Experience",
      description:
        "Built and scaled a responsive photobooth web app to 2M+ total active users with studio-quality features. Users can create customizable photo strips with 100+ frame options, stickers, and filters.",
      details:
        "<strong>Key Features:</strong><br>• 100+ customizable frames and sticker options<br>• Real-time photo capture and editing<br>• GitHub Pages deployment with SEO optimization<br>• Agile development and rapid iteration<br><br><strong>Impact:</strong> Scaled rapidly to 2M+ users through UX iteration and viral growth strategies.",
    },
    tonematch: {
      title: "ToneMatch: Lip Product Undertone Detector",
      description:
        "Developed a YOLOv11-based computer vision model that classifies lip products into undertone categories. Created a custom dataset of 200+ annotated images to enhance shade-matching accuracy.",
      details:
        "<strong>Key Features:</strong><br>• YOLOv11 object detection model<br>• 4-category undertone classification<br>• Custom dataset with 200+ annotated images<br>• Label Studio for data annotation<br>• Google Colab training pipeline<br><br><strong>Impact:</strong> 87% accuracy in undertone classification for personalized beauty recommendations.",
    },
    "sentiment-analysis": {
      title: "Topic Analysis of Clothing Reviews with Embeddings",
      description:
        "Generated vector embeddings for customer reviews using OpenAI’s embedding model and applied t-SNE for 2D semantic visualization. Implemented cosine similarity to categorize feedback topics and retrieve the most relevant reviews for a given input.",
      details:
        "<strong>Key Features:</strong><br>• Text embedding generation using OpenAI Embeddings API<br>• 2D semantic visualization of reviews via t-SNE<br>• Topic-based feedback categorization using cosine similarity<br>• Rating-aware clustering for sentiment interpretation<br>• Semantic similarity search for personalized review matching<br><br><strong>Impact:</strong> Enabled scalable analysis of unstructured customer feedback, helping identify key product concerns and improve customer service personalization through semantic search.",
    },
    "crop-yield": {
      title: "Paris Tour Guide Mini Chatbot",
      description:
        "Built a context-aware chatbot using OpenAI’s gpt-4o-mini model with deterministic settings, maintaining conversational history through a structured role-based message system. The chatbot uses a system prompt to enforce expert behavior and processes predefined travel queries via the OpenAI Chat Completions API.",
      details:
        "<strong>Key Features:</strong><br>• AI chatbot simulating a professional Paris travel guide<br>• Context preservation using structured conversation history<br>• Deterministic and concise responses via controlled temperature and token limits<br>• Predefined tourist Q&A covering landmarks, distances, and artworks<br>• Easily customizable prompts, domains, and response styles<br><br><strong>Impact:</strong> Enhanced customer engagement and pre-trip planning by providing reliable, expert-level travel guidance, demonstrating a practical real-world application of conversational AI for the tourism industry.",
    },
    "object-detection": {
      title: "Filipino Sign Language Gesture & Emotion Detection",
      description:
        "Currently developing a multimodal recognition pipeline that combines MediaPipe-based feature extraction with CNN backbones (ResNet-50, MobileNet-V3) and sequence models (BiLSTM and GRU) for gesture and emotion detection. The system is being trained on controlled datasets to output individual FSL words with corresponding emotion confidence scores in real time.",
      details:
        "<strong>Key Features:</strong><br>• Real-time FSL gesture recognition using BiLSTM architectures<br>• Facial emotion detection via GRU-based temporal modeling<br>• MediaPipe-based hand and face landmark extraction<br>• Multimodal fusion of gesture and facial expression data<br>• Emotion probability scoring alongside detected FSL words<br>• Modular training, evaluation, and inference pipelines<br><br><strong>Impact:</strong> This ongoing work aims to advance accessibility-focused AI by laying the groundwork for future FSL translation systems and inclusive assistive technologies for the Filipino Deaf community.",
    },
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest("button[data-project]")
    if (!card) return

    const projectKey = card.dataset.project
    const linkUrl = card.dataset.link
    const project = projectData[projectKey]

    if (project) {
      modalTitle.textContent = project.title
      modalDescription.textContent = project.description
      modalDetails.innerHTML = project.details

      if (!linkUrl) {
        // If data-link is empty, display a private project message
        modalLink.textContent = "Apologies, this project is private and not publicly accessible."
        modalLink.removeAttribute("href")
        modalLink.style.cursor = "default"
      } else {
        modalLink.textContent = "View Project"
        modalLink.href = linkUrl
        modalLink.style.cursor = "pointer"
      }

      modal.classList.add("active")
    }
  })

  modalClose.onclick = () => {
    modal.classList.remove("active")
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
    }
  }

  document.querySelector(".modal-content").onclick = (e) => {
    e.stopPropagation()
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active")
    }
  })
})
