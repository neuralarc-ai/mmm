/* Helium Brand CSS Framework for India Media Mix Model Dashboard */

:root {
    /* Helium Brand Colors */
    --helium-primary: #EE5441;
    --helium-primary-dark: #d63d2a;
    --helium-primary-light: #f16b5a;
    
    /* Background Colors */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-tertiary: #F1F3F4;
    
    /* Text Colors */
    --text-primary: #2D3748;
    --text-secondary: #718096;
    --text-light: #A0AEC0;
    
    /* Border Colors */
    --border-color: #E2E8F0;
    --border-light: #F7FAFC;
    
    /* Status Colors */
    --success: #38A169;
    --warning: #D69E2E;
    --error: #E53E3E;
    --info: #3182CE;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--helium-primary) 0%, var(--helium-primary-dark) 100%);
    --gradient-secondary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-success: linear-gradient(135deg, var(--success) 0%, #2F855A 100%);
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    
    /* Transitions */
    --transition-fast: 0.15s ease-in-out;
    --transition-normal: 0.2s ease-in-out;
    --transition-slow: 0.3s ease-in-out;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 16px;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
}

/* Header Styles */
.header {
    background: var(--gradient-primary);
    color: white;
    padding: var(--space-lg) 0;
    box-shadow: var(--shadow-md);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-lg);
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.logo i {
    font-size: 2rem;
    color: white;
}

.logo h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
}

.header-stats {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
    padding: var(--space-sm) var(--space-md);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(10px);
    transition: var(--transition-normal);
}

.stat-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.stat-item.highlight {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.stat-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.stat-label {
    display: block;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: var(--space-xs);
}

/* Navigation Tabs */
.nav-tabs {
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    padding: var(--space-md) 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.tab-buttons {
    display: flex;
    gap: var(--space-sm);
    overflow-x: auto;
    padding-bottom: var(--space-xs);
}

.tab-btn {
    background: transparent;
    border: 2px solid transparent;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: var(--transition-normal);
    white-space: nowrap;
    font-size: 0.95rem;
}

.tab-btn:hover {
    background: var(--bg-primary);
    color: var(--text-primary);
    border-color: var(--border-color);
}

.tab-btn.active {
    background: var(--helium-primary);
    color: white;
    border-color: var(--helium-primary);
}

/* Main Content */
.main-content {
    padding: var(--space-2xl) 0;
    min-height: 80vh;
}

.tab-content {
    display: none;
    animation: fadeIn 0.3s ease-in-out;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.section-header h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.section-header h2 i {
    color: var(--helium-primary);
    margin-right: var(--space-sm);
}

.section-header p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

/* Metrics Grid */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.metric-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.metric-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
}

.metric-card.primary::before {
    background: var(--gradient-primary);
}

.metric-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.metric-card .metric-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-lg);
}

.metric-card .metric-icon i {
    font-size: 1.5rem;
    color: white;
}

.metric-content h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: var(--space-sm);
}

.metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.metric-subtitle {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
}

.metric-trend {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: 0.875rem;
    font-weight: 600;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
}

.metric-trend.positive {
    background: rgba(56, 161, 105, 0.1);
    color: var(--success);
}

.metric-trend i {
    font-size: 0.75rem;
}

/* Charts */
.charts-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.chart-container {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.chart-container h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    text-align: center;
}

.chart-container canvas {
    max-height: 300px;
}

/* Insight Cards */
.insight-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.insight-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border-left: 4px solid var(--helium-primary);
}

.insight-card h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.insight-card h4 i {
    color: var(--helium-primary);
}

.insight-card p {
    color: var(--text-secondary);
    line-height: 1.7;
}

/* ROI Analysis Styles */
.roi-comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.roi-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
}

.roi-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.roi-card.jiohotstar {
    border-color: var(--helium-primary);
    background: linear-gradient(135deg, rgba(238, 84, 65, 0.05) 0%, rgba(238, 84, 65, 0.02) 100%);
}

.roi-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--border-color);
}

.roi-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
}

.roi-grade {
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-md);
    font-weight: 700;
    font-size: 0.875rem;
}

.roi-grade.aaa {
    background: var(--gradient-success);
    color: white;
}

.roi-grade.aa {
    background: var(--gradient-primary);
    color: white;
}

.roi-grade.a {
    background: var(--info);
    color: white;
}

.roi-metrics {
    margin-bottom: var(--space-lg);
}

.roi-metric {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--border-light);
}

.roi-metric:last-child {
    border-bottom: none;
}

.roi-label {
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.roi-value {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
}

.roi-advantages, .roi-disadvantages {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.advantage, .disadvantage {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 500;
}

.advantage {
    background: rgba(56, 161, 105, 0.1);
    color: var(--success);
    border-left: 3px solid var(--success);
}

.disadvantage {
    background: rgba(229, 62, 62, 0.1);
    color: var(--error);
    border-left: 3px solid var(--error);
}

/* ROI Calculator */
.roi-calculator {
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.roi-calculator h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.roi-calculator h3 i {
    color: var(--helium-primary);
}

.calculator-controls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-xl);
}

.control-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.control-group label {
    font-weight: 500;
    color: var(--text-primary);
}

.control-group input[type="range"] {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--border-color);
    outline: none;
    -webkit-appearance: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--helium-primary);
    cursor: pointer;
}

.control-group select {
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.95rem;
}

.calculator-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.result-item {
    text-align: center;
}

.result-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
}

.result-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--helium-primary);
}

/* Platform Comparison Table */
.comparison-table-container {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--space-2xl);
    overflow-x: auto;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
}

.comparison-table th {
    background: var(--bg-secondary);
    padding: var(--space-md);
    text-align: left;
    font-weight: 600;
    color: var(--text-primary);
    border-bottom: 2px solid var(--border-color);
}

.comparison-table td {
    padding: var(--space-md);
    border-bottom: 1px solid var(--border-light);
    vertical-align: middle;
}

.platform-row:hover {
    background: var(--bg-secondary);
}

.jiohotstar-row {
    background: rgba(238, 84, 65, 0.05);
}

.platform-name {
    font-weight: 600;
}

.leader-badge {
    display: inline-block;
    background: var(--gradient-primary);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: var(--space-sm);
}

.metric-highlight {
    font-weight: 700;
    color: var(--helium-primary);
}

.roi-highlight {
    font-weight: 700;
    color: var(--success);
}

.growth-positive {
    color: var(--success);
    font-weight: 600;
}

.growth-moderate {
    color: var(--warning);
    font-weight: 600;
}

.growth-slow {
    color: var(--error);
    font-weight: 600;
}

.grade-aaa {
    background: var(--success);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.75rem;
}

.grade-aa {
    background: var(--helium-primary);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.75rem;
}

.grade-a {
    background: var(--info);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.75rem;
}

.grade-bbb, .grade-bb {
    background: var(--warning);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.75rem;
}

/* 3D Visualization */
.visualization-controls {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
}

.viz-btn {
    background: var(--bg-secondary);
    border: 2px solid var(--border-color);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: var(--transition-normal);
}

.viz-btn:hover {
    background: var(--bg-primary);
    border-color: var(--helium-primary);
    color: var(--text-primary);
}

.viz-btn.active {
    background: var(--helium-primary);
    border-color: var(--helium-primary);
    color: white;
}

.viz-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

#threejs-container {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    border: 1px solid var(--border-color);
    min-height: 500px;
    position: relative;
    overflow: hidden;
}

.viz-info {
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
}

.viz-info h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.viz-info p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
}

.viz-legend {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.legend-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.875rem;
}

.legend-color {
    width: 16px;
    height: 16px;
    border-radius: 50%;
}

.legend-item.jiohotstar .legend-color {
    background: var(--helium-primary);
}

.legend-item.amazon .legend-color {
    background: #FF9500;
}

.legend-item.netflix .legend-color {
    background: #E50914;
}

.legend-item.others .legend-color {
    background: var(--text-light);
}

/* Investment Insights */
.investment-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.summary-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.summary-card.primary {
    background: linear-gradient(135deg, rgba(238, 84, 65, 0.1) 0%, rgba(238, 84, 65, 0.05) 100%);
    border-color: var(--helium-primary);
}

.summary-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.summary-card h3 i {
    color: var(--helium-primary);
}

.opportunity-details h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.opportunity-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--space-md);
}

.opp-metric {
    text-align: center;
    padding: var(--space-md);
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
}

.opp-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
}

.opp-value {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--helium-primary);
}

.trend-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.trend-list li {
    padding: var(--space-sm) var(--space-md);
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--helium-primary);
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.investment-reasons h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-xl);
    text-align: center;
}

.reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.reason-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    text-align: center;
    transition: var(--transition-normal);
}

.reason-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.reason-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-lg);
}

.reason-icon i {
    font-size: 2rem;
    color: white;
}

.reason-card h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.reason-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Risk Assessment */
.risk-assessment {
    margin-bottom: var(--space-2xl);
}

.risk-assessment h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.risk-assessment h3 i {
    color: var(--helium-primary);
}

.risk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
}

.risk-item {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    border-left: 4px solid;
}

.risk-item.low {
    border-left-color: var(--success);
    background: rgba(56, 161, 105, 0.05);
}

.risk-item.medium {
    border-left-color: var(--warning);
    background: rgba(214, 158, 46, 0.05);
}

.risk-level {
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: var(--space-xs);
}

.risk-item.low .risk-level {
    color: var(--success);
}

.risk-item.medium .risk-level {
    color: var(--warning);
}

.risk-factor {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.risk-description {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

/* MMM Framework */
.framework-sections {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}

.framework-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.framework-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.framework-card h3 i {
    color: var(--helium-primary);
}

.formula-container {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    margin-bottom: var(--space-lg);
    border-left: 4px solid var(--helium-primary);
}

.formula {
    font-family: 'Courier New', monospace;
    font-size: 1.125rem;
    color: var(--text-primary);
    text-align: center;
    line-height: 1.8;
}

.formula-explanation {
    margin-top: var(--space-lg);
}

.formula-explanation p {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.formula-explanation ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.formula-explanation li {
    padding: var(--space-xs) var(--space-sm);
    background: var(--bg-primary);
    border-radius: var(--radius-sm);
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.parameter-grid, .param-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
}

.param-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) var(--space-md);
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
}

.param-label {
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.param-value {
    font-weight: 600;
    color: var(--text-primary);
}

.india-params {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.param-section h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.jio-optimization {
    background: rgba(238, 84, 65, 0.05);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
}

.optimization-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
}

.opt-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) var(--space-md);
    background: var(--bg-primary);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
}

.opt-item.total {
    background: var(--gradient-primary);
    color: white;
    font-weight: 700;
}

.opt-label {
    font-size: 0.95rem;
}

.opt-value {
    font-weight: 600;
    font-size: 1.125rem;
}

/* Footer */
.footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: var(--space-2xl) 0 var(--space-lg);
    margin-top: var(--space-2xl);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

.footer-section h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.footer-section ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.footer-section li {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.footer-section p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.footer-bottom {
    text-align: center;
    padding-top: var(--space-lg);
    border-top: 1px solid var(--border-color);
}

.footer-bottom p {
    font-size: 0.875rem;
    color: var(--text-light);
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 var(--space-md);
    }
    
    .header-content {
        flex-direction: column;
        text-align: center;
    }
    
    .header-stats {
        justify-content: center;
    }
    
    .tab-buttons {
        justify-content: flex-start;
    }
    
    .metrics-grid {
        grid-template-columns: 1fr;
    }
    
    .charts-row {
        grid-template-columns: 1fr;
    }
    
    .viz-container {
        grid-template-columns: 1fr;
    }
    
    .comparison-table-container {
        overflow-x: scroll;
    }
    
    .section-header h2 {
        font-size: 1.75rem;
    }
    
    .reasons-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .logo h1 {
        font-size: 1.25rem;
    }
    
    .stat-item {
        padding: var(--space-xs) var(--space-sm);
    }
    
    .stat-value {
        font-size: 1.25rem;
    }
    
    .metric-card {
        padding: var(--space-lg);
    }
    
    .metric-value {
        font-size: 2rem;
    }
    
    .section-header h2 {
        font-size: 1.5rem;
    }
}

/* Loading Animation */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(238, 84, 65, 0.3);
    border-radius: 50%;
    border-top-color: var(--helium-primary);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Focus States */
button:focus,
input:focus,
select:focus {
    outline: 2px solid var(--helium-primary);
    outline-offset: 2px;
}

/* Executive Summary Styles */
.executive-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.executive-metric {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
    text-align: center;
}

.executive-metric:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.executive-metric.primary {
    background: linear-gradient(135deg, rgba(238, 84, 65, 0.1) 0%, rgba(238, 84, 65, 0.05) 100%);
    border-color: var(--helium-primary);
}

.executive-metric .metric-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-lg);
}

.executive-metric .metric-icon i {
    font-size: 2rem;
    color: white;
}

.executive-metric .metric-content h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: var(--space-sm);
}

.executive-metric .metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.executive-metric .metric-subtitle {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
}

.executive-insights {
    margin-bottom: var(--space-2xl);
}

.insight-section, .recommendation-section {
    margin-bottom: var(--space-xl);
}

.insight-section h3, .recommendation-section h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.insight-section h3 i, .recommendation-section h3 i {
    color: var(--helium-primary);
}

.insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
}

.insight-item {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    display: flex;
    gap: var(--space-md);
    align-items: flex-start;
}

.insight-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.insight-icon i {
    font-size: 1.25rem;
    color: white;
}

.insight-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.insight-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.recommendation-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-lg);
    border: 2px solid var(--helium-primary);
}

.recommendation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--border-color);
}

.recommendation-header h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
}

.recommendation-grade {
    background: var(--gradient-success);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 700;
    font-size: 1.25rem;
}

.recommendation-reasons {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.reason-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm);
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
}

.reason-item i {
    color: var(--success);
    font-size: 1.125rem;
}

.reason-item span {
    color: var(--text-primary);
    font-weight: 500;
}

.action-items {
    margin-bottom: var(--space-2xl);
}

.action-items h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.action-items h3 i {
    color: var(--helium-primary);
}

.actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
}

.action-item {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    border-left: 4px solid;
}

.action-item.priority-high {
    border-left-color: var(--error);
}

.action-item.priority-medium {
    border-left-color: var(--warning);
}

.action-item.priority-low {
    border-left-color: var(--success);
}

.action-priority {
    font-size: 0.875rem;
    font-weight: 600;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-sm);
    display: inline-block;
}

.action-item.priority-high .action-priority {
    background: rgba(229, 62, 62, 0.1);
    color: var(--error);
}

.action-item.priority-medium .action-priority {
    background: rgba(214, 158, 46, 0.1);
    color: var(--warning);
}

.action-item.priority-low .action-priority {
    background: rgba(56, 161, 105, 0.1);
    color: var(--success);
}

.action-item h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.action-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.export-section {
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.export-section h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.export-section h3 i {
    color: var(--helium-primary);
}

.export-buttons {
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
}

.export-btn {
    background: var(--bg-primary);
    border: 2px solid var(--border-color);
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
    transition: var(--transition-normal);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.export-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.export-btn.pdf-btn:hover {
    border-color: var(--error);
    color: var(--error);
}

.export-btn.excel-btn:hover {
    border-color: var(--success);
    color: var(--success);
}

.export-btn.presentation-btn:hover {
    border-color: var(--helium-primary);
    color: var(--helium-primary);
}

.export-btn i {
    font-size: 1.125rem;
}

/* Presentation Mode Styles */
.presentation-mode {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--bg-primary);
    z-index: 9999;
    overflow: hidden;
}

.presentation-mode .header,
.presentation-mode .nav-tabs,
.presentation-mode .footer {
    display: none;
}

.presentation-mode .main-content {
    padding: var(--space-xl);
    height: 100vh;
    overflow-y: auto;
}

.presentation-mode .section-header h2 {
    font-size: 3rem;
}

.presentation-mode .section-header p {
    font-size: 1.5rem;
}

.presentation-mode .executive-metric .metric-value {
    font-size: 4rem;
}

.presentation-mode .executive-metric .metric-subtitle {
    font-size: 1.25rem;
}

/* Interactive ROI Calculator Styles */
.calculator-dashboard {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.calculator-controls-advanced {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
}

.control-section {
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--border-light);
}

.control-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.control-section h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.control-section h3 i {
    color: var(--helium-primary);
}

.controls-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.control-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.control-group label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.95rem;
}

.slider-container {
    position: relative;
}

.slider-container input[type="range"] {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, var(--helium-primary) 0%, var(--helium-primary) 10%, var(--border-color) 10%, var(--border-color) 100%);
    outline: none;
    -webkit-appearance: none;
    transition: var(--transition-normal);
}

.slider-container input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--helium-primary);
    cursor: pointer;
    box-shadow: var(--shadow-md);
    transition: var(--transition-normal);
}

.slider-container input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
}

.slider-value {
    text-align: center;
    font-weight: 700;
    color: var(--helium-primary);
    font-size: 1.125rem;
    margin-top: var(--space-sm);
    padding: var(--space-xs) var(--space-sm);
    background: rgba(238, 84, 65, 0.1);
    border-radius: var(--radius-md);
}

.control-group select {
    padding: var(--space-sm) var(--space-md);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition-normal);
}

.control-group select:focus {
    border-color: var(--helium-primary);
    outline: none;
}

.platform-selector {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.platform-option {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-primary);
    cursor: pointer;
    transition: var(--transition-normal);
}

.platform-option:hover {
    border-color: var(--helium-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.platform-option.selected {
    border-color: var(--helium-primary);
    background: rgba(238, 84, 65, 0.05);
    box-shadow: var(--shadow-md);
}

.platform-icon {
    width: 50px;
    height: 50px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
}

.platform-icon.jiohotstar {
    background: var(--helium-primary);
}

.platform-icon.amazon {
    background: #FF9500;
}

.platform-icon.netflix {
    background: #E50914;
}

.platform-icon.jiohotstar::after {
    content: 'JH';
}

.platform-icon.amazon::after {
    content: 'AP';
}

.platform-icon.netflix::after {
    content: 'NF';
}

.platform-details h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
}

.platform-stats {
    display: flex;
    gap: var(--space-sm);
}

.roi-badge {
    background: var(--gradient-success);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
}

.grade-badge {
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
}

.grade-badge.aaa {
    background: var(--success);
}

.grade-badge.aa {
    background: var(--helium-primary);
}

.grade-badge.a {
    background: var(--info);
}

.scenario-controls {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.calculator-results-advanced {
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    position: sticky;
    top: var(--space-lg);
    height: fit-content;
}

.results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--border-color);
}

.results-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.results-header h3 i {
    color: var(--helium-primary);
}

.results-timestamp {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-style: italic;
}

.results-dashboard {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.result-card {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: var(--space-md);
    transition: var(--transition-normal);
}

.result-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.result-card.primary {
    border-color: var(--helium-primary);
    background: linear-gradient(135deg, rgba(238, 84, 65, 0.1) 0%, rgba(238, 84, 65, 0.05) 100%);
}

.result-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.result-icon i {
    font-size: 1.25rem;
    color: white;
}

.result-content h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
}

.result-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
}

.result-change {
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.result-change.positive {
    color: var(--success);
}

.result-change.negative {
    color: var(--error);
}

.interactive-charts {
    margin-bottom: var(--space-2xl);
}

.chart-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

.chart-container.interactive {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
}

.chart-container.interactive:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.chart-container.interactive h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    text-align: center;
}

.scenario-analysis {
    margin-bottom: var(--space-2xl);
}

.scenario-analysis h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.scenario-analysis h3 i {
    color: var(--helium-primary);
}

.scenario-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
}

.scenario-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    border-left: 4px solid;
    transition: var(--transition-normal);
}

.scenario-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.scenario-card.optimistic {
    border-left-color: var(--success);
    background: linear-gradient(135deg, rgba(56, 161, 105, 0.1) 0%, rgba(56, 161, 105, 0.05) 100%);
}

.scenario-card.realistic {
    border-left-color: var(--info);
    background: linear-gradient(135deg, rgba(49, 130, 206, 0.1) 0%, rgba(49, 130, 206, 0.05) 100%);
}

.scenario-card.pessimistic {
    border-left-color: var(--warning);
    background: linear-gradient(135deg, rgba(214, 158, 46, 0.1) 0%, rgba(214, 158, 46, 0.05) 100%);
}

.scenario-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--border-light);
}

.scenario-header h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.scenario-probability {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
}

.scenario-metrics {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.scenario-metric {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm);
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
}

.metric-label {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.metric-value {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
}

.action-panel {
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    text-align: center;
}

.action-buttons {
    display: flex;
    gap: var(--space-lg);
    justify-content: center;
    flex-wrap: wrap;
}

.action-btn {
    background: var(--bg-primary);
    border: 2px solid var(--border-color);
    padding: var(--space-md) var(--space-xl);
    border-radius: var(--radius-lg);
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
    transition: var(--transition-normal);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.95rem;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.action-btn.primary {
    background: var(--gradient-primary);
    color: white;
    border-color: var(--helium-primary);
}

.action-btn.primary:hover {
    background: var(--helium-primary-dark);
}

.action-btn.secondary:hover {
    border-color: var(--info);
    color: var(--info);
}

.action-btn.tertiary:hover {
    border-color: var(--success);
    color: var(--success);
}

.action-btn.reset:hover {
    border-color: var(--warning);
    color: var(--warning);
}

.action-btn i {
    font-size: 1.125rem;
}

/* Animations for Interactive Elements */
@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 5px rgba(238, 84, 65, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(238, 84, 65, 0.5);
    }
}

.result-card.primary:hover {
    animation: pulse-glow 2s infinite;
}

@keyframes slide-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scenario-card {
    animation: slide-in-up 0.6s ease-out;
}

.scenario-card:nth-child(1) {
    animation-delay: 0.1s;
}

.scenario-card:nth-child(2) {
    animation-delay: 0.2s;
}

.scenario-card:nth-child(3) {
    animation-delay: 0.3s;
}

/* Responsive Design for Calculator */
@media (max-width: 1200px) {
    .calculator-dashboard {
        grid-template-columns: 1fr;
    }
    
    .calculator-results-advanced {
        position: static;
    }
}

@media (max-width: 768px) {
    .chart-section {
        grid-template-columns: 1fr;
    }
    
    .scenario-cards {
        grid-template-columns: 1fr;
    }
    
    .action-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .action-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}

/* Print Styles */
@media print {
    .header, .nav-tabs, .footer {
        display: none;
    }
    
    .main-content {
        padding: 0;
    }
    
    .tab-content {
        display: block !important;
        page-break-after: always;
    }
    
    .chart-container {
        break-inside: avoid;
    }
    
    .export-section {
        display: none;
    }
}
