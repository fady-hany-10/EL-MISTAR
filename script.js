document.addEventListener("DOMContentLoaded", () => {
    if (typeof config === "undefined") return;

    // تحديث النصوص والصورة
    const logoEl = document.getElementById("logo");
    if (logoEl && config.logo) logoEl.src = config.logo;

    const titleEl = document.getElementById("title");
    if (titleEl && config.title) titleEl.textContent = config.title;

    const subtitleEl = document.getElementById("subtitle");
    if (subtitleEl && config.subtitle) subtitleEl.textContent = config.subtitle;

    // إنشاء الأزرار والروابط ديناميكياً
    const container = document.getElementById("links-container");
    if (container && config.links) {
        container.innerHTML = "";
        config.links.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = `link-btn ${link.class}`;

            a.innerHTML = `
                <i class="${link.icon}"></i>
                <span class="btn-text">${link.name}</span>
            `;

            container.appendChild(a);
        });
    }
});
