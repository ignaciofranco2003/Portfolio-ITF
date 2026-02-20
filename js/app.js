document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");


copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText('ignaciofranco2003@gmail.com');
        
        // Mostrar Toast
        toast.classList.add("show");
        copyBtn.textContent = "Copiado";
        
        // Ocultar después de 2.5 segundos
        setTimeout(() => {
            toast.classList.remove("show");
            copyBtn.textContent = "Copiar email de contacto";
        }, 2500);
    
    } 
    catch (e) {
    // Fallback por si falla el portapapeles
    console.error("Error al copiar");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderProjects();
    renderTechnologies();
});

function renderHero() {
    const heroContainer = document.getElementById("hero-container");
    let paragraphsHtml = portfolioData.hero.paragraphs.map(p => `<p class="pf-hero__text pf-hero__text--spaced">${p}</p>`).join("");
    
    heroContainer.innerHTML = `
        <h1 class="pf-hero__title">${portfolioData.hero.title}</h1>
        ${paragraphsHtml}
        <hr class="pf-divider" />
    `;
}

function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <article class="pf-card pf-project u-float-in">
            <h3 class="pf-project__title">${project.title}</h3>
            <div class="pf-tagrow">
                ${project.tags.map(tag => `<span class="pf-tag">${tag}</span>`).join("")}
            </div>
            <p class="pf-project__desc">${project.description}</p>
            <div class="pf-project__links">
                ${project.links.map(link => `<a class="pf-btn pf-btn--mini" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
            </div>
        </article>
    `).join("");
}

function renderTechnologies() {
    const techGrid = document.getElementById("tech-grid");
    
    techGrid.innerHTML = portfolioData.technologies.map(techGroup => `
        <div class="pf-tech__group">
            <div class="pf-tech__groupTitle">${techGroup.category}</div>
            <div class="pf-tech__grid">
                ${techGroup.items.map(item => `
                    <div class="pf-tech__item">
                        <img class="pf-tech__icon" src="${item.icon}" alt="${item.name}" />
                        <span class="pf-tech__name">${item.name}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}