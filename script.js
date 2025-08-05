AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});


const tagColors = {
  ".NET Core": "primary",
  ".NET MVC": "primary",
  "WinForms": "primary",
  "Angular": "danger",
  "SQL": "success",
  "PrimeNG": "warning",
  "Multi-Tenant": "info",
  "HTML": "secondary",
  "CSS": "primary",
  "JavaScript": "warning",
  "HyperPay": "dark",
  "API": "info"
};

  const projectsData = [
    {
      key: "gohighlevel",
      title: "GoHighLevel API Integration",
      img: [
        "images/projects/gohighlevel-1.jpg",
        "images/projects/gohighlevel-2.gif",
        "images/projects/gohighlevel-3.png"
      ],
      desc: "Full integration of GoHighLevel APIs into a multi-tenant database using .NET Core and Angular.",
      features: [
        ".NET Core API for handling endpoints and auth",
        "Angular frontend for data sync and management",
        "Azure Blob Storage integration for file storage",
        "Multi-tenant logic with SQL Server",
        "Automated token refresh and caching"
      ],
      tags: [".NET Core", "Angular", "SQL"]
    },
    {
      key: "garaj",
      title: "Garaj by Jazz (Animations)",
      img: [
        "images/projects/garaj-1.gif",
        "images/projects/garaj-2.gif",
      ],
      desc: "All frontend animations created using pure HTML, CSS, and JavaScript for a dynamic website experience.",
      features: [
        "CSS3 transitions & keyframe animations",
        "Scroll-based parallax effects",
        "Optimized animation performance",
        "Interactive hover animations"
      ],
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      key: "hyperpay",
      title: "HyperPay Integration (NopCommerce)",
      img: [
        "images/projects/hyperpay-1.png",
        "images/projects/hyperpay-2.png",
        "images/projects/hyperpay-3.png"
      ],
      desc: "Payment gateway integration in a .NET MVC eCommerce solution with live transaction logging.",
      features: [
        "Secure payment handling",
        "Live payment status update",
        "Integration with HyperPay SDK",
        "SQL-backed transaction logs"
      ],
      tags: [".NET MVC", "SQL"]
    },
    {
      key: "smsa",
      title: "SMSA Shipping Integration",
      img: [
        "images/projects/smsa-1.png",
        "images/projects/smsa-2.png",
        "images/projects/smsa-3.png"
      ],
      desc: "Integrated SMSA API to manage shipping in a .NET MVC eCommerce platform.",
      features: [
        "API for label generation and tracking",
        "Order linkage and shipment updates",
        "Admin panel to manage shipments"
      ],
      tags: [".NET MVC", "API"]
    },
    {
      key: "accountms",
      title: "Account Management System",
      img: [
        "images/projects/accountms-1.png",
        "images/projects/accountms-2.png",
        "images/projects/accountms-3.png"
      ],
      desc: "User account and billing system with multi-tenant logic, built using .NET Core and Angular.",
      features: [
        "User permission roles and auth",
        "PrimeNG-powered UI",
        "Tenant-based separation",
        "Account summary reports"
      ],
      tags: [".NET Core", "Angular", "PrimeNG", "SQL"]
    },
    {
      key: "distribution",
      title: "Distribution System",
      img: [
        "images/projects/distribution-1.png",
        "images/projects/distribution-2.png",
        "images/projects/distribution-3.png"
      ],
      desc: "Full product distribution software for vendors, warehouse managers and dispatchers.",
      features: [
        "Inventory movement tracking",
        "Delivery scheduling",
        "Angular dashboard with charts",
        "Multi-tenant storage"
      ],
      tags: [".NET Core", "Angular", "SQL", "Multi-Tenant"]
    },
    {
      key: "edocument",
      title: "E-Document Service Portal",
      img: [
        "images/projects/edocument-1.png",
        "images/projects/edocument-2.png",
        "images/projects/edocument-3.png"
      ],
      desc: "Multi-tenant document upload portal with OneLink and TCS API integrations.",
      features: [
        "Azure Blob Storage integration",
        "API connection with OneLink & TCS",
        "User authentication & tracking",
        "Document metadata indexing"
      ],
      tags: [".NET Core", "Angular", "SQL", "Azure", "API"]
    },
    {
      key: "restaurant",
      title: "Restaurant Management System",
      img: [
        "images/projects/restaurant-1.png",
        "images/projects/restaurant-2.png",
        "images/projects/restaurant-3.png"
      ],
      desc: "Windows Forms based restaurant billing and inventory software.",
      features: [
        "C# WinForms GUI",
        "Table & order tracking",
        "Billing reports",
        "Inventory deduction"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "shop",
      title: "Small Shop Management System",
      img: [
        "images/projects/shop-1.jpg",
        "images/projects/shop-2.jpg"
      ],
      desc: "Simple inventory and billing software for small retail shops.",
      features: [
        "Product entry & barcode",
        "Customer billing & history",
        "Low stock alerts",
        "Sales reporting"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "inventory",
      title: "Inventory Management System",
      img: [
        "images/projects/inventory-1.jpg",
        "images/projects/inventory-2.jpg",
        "images/projects/inventory-3.jpg"
      ],
      desc: "Inventory tracking solution for stock in/out and alerts.",
      features: [
        "Stock movement logging",
        "Monthly reporting",
        "Windows Forms UI",
        "User role support"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "factory",
      title: "Factory Management System",
      img: [
        "images/projects/factory-1.jpg",
        "images/projects/factory-2.jpg"
      ],
      desc: "From raw material to finished product tracking system for factories.",
      features: [
        "Raw material tracking",
        "Production stage logs",
        "User-based permissions",
        "Reporting module"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "townone",
      title: "Town One Plot Booking System",
      img: [
        "images/projects/townone-1.jpg",
        "images/projects/townone-2.jpg"
      ],
      desc: "Housing society plot booking app built in Windows Forms.",
      features: [
        "Plot availability matrix",
        "Booking confirmation & receipt",
        "Installment plan tracking"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "iqbalarcade",
      title: "Iqbal Arcade Shop/Apartment Booking",
      img: [
        "images/projects/iqbalarcade-1.jpg",
        "images/projects/iqbalarcade-2.jpg"
      ],
      desc: "Booking system for shops and apartments in Iqbal Arcade.",
      features: [
        "Unit layout and status",
        "Booking and payment records",
        "Client profile management"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "gulsan",
      title: "Gulsan-e-Azeem Plot Booking System",
      img: [
        "images/projects/gulsan-1.jpg",
        "images/projects/gulsan-2.jpg"
      ],
      desc: "Booking software for plots in Gulsan-e-Azeem housing project.",
      features: [
        "Dynamic plot assignment",
        "Installment plans",
        "Status reports and receipts"
      ],
      tags: ["C#", "WinForms", "SQL"]
    },
    {
      key: "prizebond",
      title: "Prize Bond Checker",
      img: [
        "images/projects/prizebond-1.jpg",
        "images/projects/prizebond-2.jpg"
      ],
      desc: "Prize bond draw matching and result checker application.",
      features: [
        "Draw import and search",
        "Matching engine",
        "Offline support",
        "Simple GUI"
      ],
      tags: ["C#", "WinForms"]
    }
  ];

  const container = document.getElementById("projectsContainer");
  const showMoreBtn = document.getElementById("showMoreBtn");

  let projectsShown = 0;
  const initialCount = 6;

  function renderProjects(count) {
    for (let i = projectsShown; i < Math.min(projectsShown + count, projectsData.length); i++) {
      const proj = projectsData[i];

      const card = document.createElement("div");
      card.className = "col-md-6 col-lg-4 project-item";
      card.setAttribute("data-aos", "fade-up"); 

      card.innerHTML = `
        <div class="project-card position-relative" data-project="${proj.key}">
          <div class="project-media">
            <img src="${proj.img[0]}" alt="${proj.title}" class="img-fluid">
            <div class="project-overlay">
              <button class="btn btn-light view-project-btn">View Project</button>
            </div>
          </div>
          <div class="project-info p-3">
            <h5>${proj.title}</h5>
            <p>${proj.desc}</p>
            <div class="project-tags">
            ${proj.tags.map(tag => {
              const color = tagColors[tag] || "info"; // fallback color
              return `<span class="badge bg-${color}">${tag}</span>`;
            }).join("")}
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    }

    projectsShown += count;

    if (projectsShown >= projectsData.length) {
      showMoreBtn.style.display = "none";
    }

     AOS.refresh();
  }

  // Initial render
  renderProjects(initialCount);

  // Show more button click
  showMoreBtn.addEventListener("click", () => {
    renderProjects(6);
  });

  // Handle View Project click
  container.addEventListener("click", function (e) {
    const btn = e.target.closest(".view-project-btn");
    if (!btn) return;

    const card = btn.closest(".project-card");
    const key = card.getAttribute("data-project");
    const proj = projectsData.find(p => p.key === key);
    if (!proj) return;

    // Set modal content
    document.getElementById("projectModalLabel").textContent = proj.title;
    document.getElementById("projectModalDesc").textContent = proj.desc;

    const gallery = document.getElementById("projectModalGallery");
    gallery.innerHTML = "";

    // Decide layout based on image count
    const isTwoImages = proj.img.length === 2;
    const isThreeOrMore = proj.img.length >= 3;

    // Apply layout styles
    gallery.className = isTwoImages
      ? "d-flex gap-3 flex-wrap justify-content-start align-items-start"
      : "d-grid gap-3";
    gallery.style.gridTemplateColumns = isThreeOrMore ? "repeat(auto-fit, minmax(120px, 1fr))" : "none";

    proj.img.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = proj.title;
      img.style.width = isTwoImages ? "48%" : "100%";
      img.style.height = "150px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";
      img.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
      img.style.transition = "transform 0.3s ease";
      img.addEventListener("mouseenter", () => img.style.transform = "scale(1.05)");
      img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
      gallery.appendChild(img);
    });

    const featuresList = document.getElementById("projectModalFeatures");
    featuresList.innerHTML = "";
    proj.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      featuresList.appendChild(li);
    });

    new bootstrap.Modal(document.getElementById("projectModal")).show();
  });

