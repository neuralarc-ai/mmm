/**
 * India Media Mix Model Dashboard - Interactive JavaScript
 * Comprehensive dashboard with 3D visualizations and ROI analysis tools
 */

// Global variables
let scene, camera, renderer, controls;
let currentVisualization = 'market-cube';
let charts = {};

// Data from analysis
const platformData = {
    JioHotstar: {
        marketShare: 31,
        subscribers: 600,
        roiMultiplier: 1.95,
        growthRate: 87,
        investmentGrade: 'AAA',
        revenue: 9497,
        color: '#EE5441'
    },
    'Amazon Prime': {
        marketShare: 23,
        subscribers: 200,
        roiMultiplier: 1.40,
        growthRate: 25,
        investmentGrade: 'AA',
        revenue: 3522,
        color: '#FF9500'
    },
    Netflix: {
        marketShare: 16,
        subscribers: 35.9,
        roiMultiplier: 1.20,
        growthRate: 49,
        investmentGrade: 'A',
        revenue: 52.4,
        color: '#E50914'
    },
    Zee5: {
        marketShare: 11,
        subscribers: 6.5,
        roiMultiplier: 1.15,
        growthRate: 15,
        investmentGrade: 'BBB',
        revenue: 1087,
        color: '#9333EA'
    },
    'Sony LIV': {
        marketShare: 4,
        subscribers: 33.3,
        roiMultiplier: 1.10,
        growthRate: 10,
        investmentGrade: 'BB',
        revenue: 1129,
        color: '#6B7280'
    }
};

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
    initializeROICalculator();
    initialize3DVisualization();
    initializeAnimations();
});

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Refresh charts when tab becomes active
            setTimeout(() => {
                refreshChartsInActiveTab(targetTab);
            }, 100);
        });
    });
}

// Initialize all charts
function initializeCharts() {
    createMarketShareChart();
    createGrowthChart();
    createRadarChart();
    createBubbleChart();
}

// Market Share Pie Chart
function createMarketShareChart() {
    const ctx = document.getElementById('marketShareChart');
    if (!ctx) return;

    const data = {
        labels: Object.keys(platformData),
        datasets: [{
            data: Object.values(platformData).map(p => p.marketShare),
            backgroundColor: Object.values(platformData).map(p => p.color),
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    };

    charts.marketShare = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                duration: 2000
            }
        }
    });
}

// Growth Rate Bar Chart
function createGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) return;

    const data = {
        labels: Object.keys(platformData),
        datasets: [{
            label: 'Growth Rate (%)',
            data: Object.values(platformData).map(p => p.growthRate),
            backgroundColor: Object.values(platformData).map(p => p.color + '80'),
            borderColor: Object.values(platformData).map(p => p.color),
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false
        }]
    };

    charts.growth = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Growth Rate: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#E2E8F0'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            }
        }
    });
}

// Radar Chart for Platform Comparison
function createRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    const data = {
        labels: ['Market Share', 'ROI Multiplier', 'Growth Rate', 'Subscriber Base', 'Revenue'],
        datasets: [
            {
                label: 'JioHotstar',
                data: [31, 1.95 * 10, 87, 60, 95],
                backgroundColor: 'rgba(238, 84, 65, 0.2)',
                borderColor: '#EE5441',
                borderWidth: 3,
                pointBackgroundColor: '#EE5441',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            },
            {
                label: 'Amazon Prime',
                data: [23, 1.40 * 10, 25, 20, 35],
                backgroundColor: 'rgba(255, 149, 0, 0.2)',
                borderColor: '#FF9500',
                borderWidth: 2,
                pointBackgroundColor: '#FF9500',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            },
            {
                label: 'Netflix',
                data: [16, 1.20 * 10, 49, 3.6, 5],
                backgroundColor: 'rgba(229, 9, 20, 0.2)',
                borderColor: '#E50914',
                borderWidth: 2,
                pointBackgroundColor: '#E50914',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }
        ]
    };

    charts.radar = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#E2E8F0'
                    },
                    pointLabels: {
                        font: {
                            size: 11
                        }
                    }
                }
            },
            animation: {
                duration: 2000
            }
        }
    });
}

// Bubble Chart for ROI vs Market Share
function createBubbleChart() {
    const ctx = document.getElementById('bubbleChart');
    if (!ctx) return;

    const bubbleData = Object.entries(platformData).map(([name, data]) => ({
        x: data.marketShare,
        y: data.roiMultiplier,
        r: Math.sqrt(data.subscribers) * 2,
        label: name,
        color: data.color
    }));

    const data = {
        datasets: [{
            label: 'Platform Performance',
            data: bubbleData,
            backgroundColor: bubbleData.map(d => d.color + '80'),
            borderColor: bubbleData.map(d => d.color),
            borderWidth: 2
        }]
    };

    charts.bubble = new Chart(ctx, {
        type: 'bubble',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return bubbleData[context[0].dataIndex].label;
                        },
                        label: function(context) {
                            const point = bubbleData[context.dataIndex];
                            return [
                                `Market Share: ${point.x}%`,
                                `ROI Multiplier: ${point.y}x`,
                                `Subscribers: ${platformData[point.label].subscribers}M`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Market Share (%)'
                    },
                    grid: {
                        color: '#E2E8F0'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'ROI Multiplier'
                    },
                    grid: {
                        color: '#E2E8F0'
                    }
                }
            },
            animation: {
                duration: 2000
            }
        }
    });
}

// ROI Calculator functionality
function initializeROICalculator() {
    const investmentSlider = document.getElementById('investmentSlider');
    const platformSelect = document.getElementById('platformSelect');
    const investmentValue = document.getElementById('investmentValue');
    const projectedReturns = document.getElementById('projectedReturns');
    const netProfit = document.getElementById('netProfit');
    const roiPercentage = document.getElementById('roiPercentage');

    if (!investmentSlider || !platformSelect) return;

    function updateCalculations() {
        const investment = parseInt(investmentSlider.value);
        const platform = platformSelect.value;
        
        let multiplier = 1.95; // Default JioHotstar
        switch(platform) {
            case 'amazon': multiplier = 1.40; break;
            case 'netflix': multiplier = 1.20; break;
            case 'zee5': multiplier = 1.15; break;
        }

        const returns = investment * multiplier;
        const profit = returns - investment;
        const roi = ((profit / investment) * 100);

        investmentValue.textContent = `₹${investment.toLocaleString()} Cr`;
        projectedReturns.textContent = `₹${Math.round(returns).toLocaleString()} Cr`;
        netProfit.textContent = `₹${Math.round(profit).toLocaleString()} Cr`;
        roiPercentage.textContent = `${Math.round(roi)}%`;
    }

    investmentSlider.addEventListener('input', updateCalculations);
    platformSelect.addEventListener('change', updateCalculations);
    
    // Initial calculation
    updateCalculations();
}

// 3D Visualization
function initialize3DVisualization() {
    const container = document.getElementById('threejs-container');
    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Controls
    if (typeof THREE.OrbitControls !== 'undefined') {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Initialize with market cube
    createMarketCube();

    // Visualization controls
    const vizButtons = document.querySelectorAll('.viz-btn');
    vizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const vizType = button.getAttribute('data-viz');
            
            vizButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            switchVisualization(vizType);
        });
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();
}

function createMarketCube() {
    // Clear existing objects
    clearScene();

    const platforms = Object.entries(platformData);
    const spacing = 2;
    
    platforms.forEach(([name, data], index) => {
        // Create cube with size based on market share
        const size = (data.marketShare / 31) * 1.5 + 0.5; // Normalize to JioHotstar
        const geometry = new THREE.BoxGeometry(size, size, size);
        const material = new THREE.MeshLambertMaterial({ 
            color: data.color,
            transparent: true,
            opacity: 0.8
        });
        
        const cube = new THREE.Mesh(geometry, material);
        
        // Position cubes in a circle
        const angle = (index / platforms.length) * Math.PI * 2;
        cube.position.x = Math.cos(angle) * 3;
        cube.position.z = Math.sin(angle) * 3;
        cube.position.y = size / 2;
        
        // Add rotation animation
        cube.userData = { 
            rotationSpeed: data.growthRate / 1000,
            originalY: cube.position.y,
            name: name
        };
        
        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add(cube);

        // Add text label
        createTextLabel(name, cube.position.x, cube.position.y + size/2 + 0.5, cube.position.z);
    });

    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    updateVizInfo('Market Share 3D Cube', 'Interactive 3D visualization showing relative market positions. Cube sizes represent market share, with JioHotstar leading at 31%.');
}

function createROISphere() {
    clearScene();

    const platforms = Object.entries(platformData);
    
    platforms.forEach(([name, data], index) => {
        // Create sphere with size based on ROI multiplier
        const radius = data.roiMultiplier * 0.5;
        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        const material = new THREE.MeshLambertMaterial({ 
            color: data.color,
            transparent: true,
            opacity: 0.7
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        
        // Position spheres based on performance
        sphere.position.x = (data.marketShare - 15) / 5;
        sphere.position.y = data.roiMultiplier;
        sphere.position.z = (data.growthRate - 40) / 20;
        
        sphere.userData = { 
            floatSpeed: 0.02,
            floatAmount: 0.3,
            originalY: sphere.position.y,
            name: name
        };
        
        sphere.castShadow = true;
        scene.add(sphere);

        createTextLabel(name, sphere.position.x, sphere.position.y + radius + 0.3, sphere.position.z);
    });

    updateVizInfo('ROI Performance Sphere', 'Spheres positioned by ROI multiplier (height), market share (X-axis), and growth rate (Z-axis). JioHotstar shows superior positioning.');
}

function createGrowthTower() {
    clearScene();

    const platforms = Object.entries(platformData);
    
    platforms.forEach(([name, data], index) => {
        // Create tower with height based on growth rate
        const height = data.growthRate / 10;
        const geometry = new THREE.CylinderGeometry(0.3, 0.5, height, 8);
        const material = new THREE.MeshLambertMaterial({ 
            color: data.color,
            transparent: true,
            opacity: 0.8
        });
        
        const tower = new THREE.Mesh(geometry, material);
        
        // Position towers in a line
        tower.position.x = (index - 2) * 2;
        tower.position.y = height / 2;
        tower.position.z = 0;
        
        tower.userData = { 
            pulseSpeed: 0.05,
            name: name
        };
        
        tower.castShadow = true;
        tower.receiveShadow = true;
        scene.add(tower);

        createTextLabel(name, tower.position.x, tower.position.y + height/2 + 0.5, tower.position.z);
    });

    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(12, 4);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    updateVizInfo('Growth Rate Tower', 'Tower heights represent growth rates. JioHotstar dominates with 87% growth, significantly outpacing competitors.');
}

function createTextLabel(text, x, y, z) {
    // Simple text representation using small cubes (placeholder for actual text)
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const label = new THREE.Mesh(geometry, material);
    label.position.set(x, y, z);
    scene.add(label);
}

function switchVisualization(type) {
    currentVisualization = type;
    
    switch(type) {
        case 'market-cube':
            createMarketCube();
            break;
        case 'roi-sphere':
            createROISphere();
            break;
        case 'growth-tower':
            createGrowthTower();
            break;
    }
}

function clearScene() {
    // Remove all meshes from scene
    const objectsToRemove = [];
    scene.traverse((child) => {
        if (child.isMesh) {
            objectsToRemove.push(child);
        }
    });
    
    objectsToRemove.forEach((object) => {
        scene.remove(object);
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
    });
}

function updateVizInfo(title, description) {
    const titleElement = document.getElementById('vizTitle');
    const descElement = document.getElementById('vizDescription');
    
    if (titleElement) titleElement.textContent = title;
    if (descElement) descElement.textContent = description;
}

function animate() {
    requestAnimationFrame(animate);

    // Animate 3D objects
    scene.traverse((child) => {
        if (child.isMesh && child.userData) {
            const data = child.userData;
            
            if (data.rotationSpeed) {
                child.rotation.y += data.rotationSpeed;
                child.position.y = data.originalY + Math.sin(Date.now() * 0.001) * 0.1;
            }
            
            if (data.floatSpeed) {
                child.position.y = data.originalY + Math.sin(Date.now() * data.floatSpeed) * data.floatAmount;
            }
            
            if (data.pulseSpeed) {
                const scale = 1 + Math.sin(Date.now() * data.pulseSpeed) * 0.1;
                child.scale.set(scale, 1, scale);
            }
        }
    });

    if (controls) controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    const container = document.getElementById('threejs-container');
    if (!container) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Refresh charts when tabs become active
function refreshChartsInActiveTab(tabId) {
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
}

// Initialize animations and interactions
function initializeAnimations() {
    // Animate metric cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe metric cards
    document.querySelectorAll('.metric-card, .roi-card, .reason-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover effects to platform rows
    document.querySelectorAll('.platform-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.02)';
            row.style.transition = 'transform 0.2s ease-in-out';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });

    // Animate numbers on load
    animateNumbers();
}

// Animate number counters
function animateNumbers() {
    const numberElements = document.querySelectorAll('.metric-value, .stat-value');
    
    numberElements.forEach(element => {
        const finalValue = element.textContent;
        const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                // Preserve original formatting
                if (finalValue.includes('%')) {
                    element.textContent = Math.round(currentValue) + '%';
                } else if (finalValue.includes('$')) {
                    element.textContent = '$' + Math.round(currentValue) + 'B';
                } else if (finalValue.includes('M')) {
                    element.textContent = Math.round(currentValue) + 'M';
                } else {
                    element.textContent = Math.round(currentValue);
                }
            }, 50);
        }
    });
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    .pulse-animation {
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.dashboardFunctions = {
    switchVisualization,
    refreshChartsInActiveTab,
    initializeCharts,
    animateNumbers
};

// Console welcome message
console.log(`
🚀 India Media Mix Model Dashboard Loaded Successfully!
📊 Interactive visualizations and ROI analysis tools ready
💎 JioHotstar leads with AAA investment grade
🎯 Dashboard powered by Helium AI Assistant
`);