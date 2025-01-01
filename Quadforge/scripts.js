// Modal Management
const popupModal = document.getElementById('popup-modal');
const comparisonModal = document.getElementById('comparison-modal');
const formModal = document.getElementById('formModal');

// Close button functionality for all modals
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        popupModal.style.display = 'none';
        comparisonModal.style.display = 'none';
        formModal.style.display = 'none';
    });
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
    if (event.target === comparisonModal) {
        comparisonModal.style.display = 'none';
    }
    if (event.target === formModal) {
        formModal.style.display = 'none';
    }
});

// Drone specifications data
const droneSpecs = {
    '3-inch': {
        title: '3" Racing Drone Specifications',
        materials: [
            'Frame: 3-inch carbon fiber frame',
            'Motors: 1404 3800KV brushless motors',
            'Flight Controller: F4 flight controller',
            'ESC: 20A 4-in-1 ESC',
            'Camera: Micro FPV camera',
            'VTX: 25-200mW adjustable VTX'
        ]
    },
    '5-inch': {
        title: '5" Freestyle Drone Specifications',
        materials: [
            'Frame: 5-inch freestyle frame',
            'Motors: 2306 1750KV brushless motors',
            'Flight Controller: F7 flight controller',
            'ESC: 45A 4-in-1 ESC',
            'Camera: HD FPV camera',
            'VTX: 25-800mW adjustable VTX'
        ]
    },
    '7-inch': {
        title: '7" Professional Drone Specifications',
        materials: [
            'Frame: 7-inch long range frame',
            'Motors: 2807 1200KV brushless motors',
            'Flight Controller: H7 flight controller',
            'ESC: 60A 4-in-1 ESC',
            'Camera: 4K HD camera',
            'VTX: 25-1000mW adjustable VTX'
        ]
    }
};

// Comparison data
const comparisonData = {
    '3-inch': [
        { feature: 'Weight', fpv: '250g', normal: '300g' },
        { feature: 'Flight Time', fpv: '5-7 mins', normal: '8-10 mins' },
        { feature: 'Speed', fpv: '80+ mph', normal: '30-40 mph' }
    ],
    '5-inch': [
        { feature: 'Weight', fpv: '500g', normal: '600g' },
        { feature: 'Flight Time', fpv: '4-6 mins', normal: '15-20 mins' },
        { feature: 'Speed', fpv: '100+ mph', normal: '40-50 mph' }
    ],
    '7-inch': [
        { feature: 'Weight', fpv: '700g', normal: '1000g' },
        { feature: 'Flight Time', fpv: '10-15 mins', normal: '25-30 mins' },
        { feature: 'Speed', fpv: '70+ mph', normal: '35-45 mph' }
    ]
};

// Show specifications popup
function showPopup(droneType) {
    const specs = droneSpecs[droneType];
    document.getElementById('drone-title').textContent = specs.title;
    
    const materialsList = document.getElementById('build-materials');
    materialsList.innerHTML = specs.materials
        .map(item => `<li>${item}</li>`)
        .join('');
    
    popupModal.style.display = 'block';
}

// Show comparison modal
function showComparison(droneType) {
    const comparisonTitle = document.getElementById('comparison-title');
    comparisonTitle.textContent = `${droneType} FPV vs Normal Drone Comparison`;
    
    const comparisonBody = document.getElementById('comparison-body');
    comparisonBody.innerHTML = comparisonData[droneType]
        .map(row => `
            <tr>
                <td>${row.feature}</td>
                <td>${row.fpv}</td>
                <td>${row.normal}</td>
            </tr>
        `)
        .join('');
    
    comparisonModal.style.display = 'block';
    modal.style.display = 'block';
}

// Gallery carousel navigation
function scrollCarousel(direction) {
    const gallery = document.querySelector('.quad-gallery');
    const scrollAmount = 320; // Width of card + gap
    
    if (direction === 'left') {
        gallery.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        gallery.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Form handling
document.getElementById('requestButton').addEventListener('click', () => {
    formModal.style.display = 'block';
});


// Fade-in animation
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});



// Modal functionality

// Get all necessary DOM elements
const modal = document.getElementById("formModal");
const requestButton = document.getElementById("requestButton");
const closeButton = document.querySelector(".close-button");
const droneTypeSelect = document.getElementById("drone-type");
const optionsContainers = {
    "3-inch": document.getElementById("3-inch-options"),
    "5-inch": document.getElementById("5-inch-options"),
    "7-inch": document.getElementById("7-inch-options")
};

// Show/hide drone options based on selection
function showDroneOptions(selectedType) {
    // Hide all options first
    Object.values(optionsContainers).forEach(container => {
        if (container) {
            container.style.display = "none";
        }
    });

    // Show selected option
    const selectedContainer = optionsContainers[selectedType];
    if (selectedContainer) {
        selectedContainer.style.display = "block";
    }
}

// Event Listeners
droneTypeSelect.addEventListener("change", (e) => {
    showDroneOptions(e.target.value);
});

requestButton.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});