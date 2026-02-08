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