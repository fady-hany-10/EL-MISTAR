document.addEventListener("DOMContentLoaded", function () {
    if (typeof config !== "undefined") {
        // تعبئة البيانات الأساسية لو وجدت عناصر لها
        const titleEl = document.getElementById("title");
        if (titleEl) titleEl.textContent = config.brandName;

        const subtitleEl = document.getElementById("subtitle");
        if (subtitleEl) subtitleEl.textContent = config.tagline;

        const logoEl = document.getElementById("logo");
        if (logoEl && config.logo) logoEl.src = config.logo;

        // تعبئة الأزرار والروابط ديناميكياً
        const linksContainer = document.getElementById("links-container");
        if (linksContainer && config.socialLinks) {
            linksContainer.innerHTML = ""; // تفريغ الحاوية أولاً
            
            config.socialLinks.forEach(link => {
                const a = document.createElement("a");
                a.href = link.url;
                a.className = "link-btn"; // الفئة المعتادة للأزرار
                a.target = "_blank";
                a.rel = "noopener noreferrer";

                // تطبيق التدرج اللوني أو اللون الخاص بالزر
                if (link.bgGradient) {
                    a.style.background = link.bgGradient;
                }

                // محتوى الزر (أيقونة + اسم)
                a.innerHTML = `
                    <i class="${link.icon}"></i>
                    <span>${link.name}</span>
                `;

                linksContainer.appendChild(a);
            });
        }
    }
});
