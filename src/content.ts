// Edit this file to change what the site says. Everything else is layout.

export const profile = {
  name: "Ayush Tokeria",
  location: "London",
  email: "ayushtokeria19@gmail.com",
  github: "https://github.com/AyushTokeria",
  // Paste your LinkedIn URL here and it appears in the footer.
  linkedin: "",
  facts: [
    { label: "Degree", text: "B.S.E. Aerospace Engineering, University of Michigan, Cum Laude" },
    { label: "Next", text: "MSc Mathematical Engineering, Quantitative Finance track, Politecnico di Milano, from February 2027" },
    { label: "Looking for", text: "Quantitative trading and research, sales and trading, risk" },
    { label: "Toolkit", text: "C++, Python, MATLAB, Monte Carlo methods, CFD, machine learning" },
  ],
};

export interface Metric { value: string; caption: string; source: string }
export interface Bullet { text: string; metric?: string }
export interface Job { org: string; role: string; place: string; when?: string; note?: string; bullets: Bullet[]; tags: string[] }
export interface Project { kind: string; when?: string; name: string; text: string; result?: string; stack: string[]; href?: string }
export interface Skill { label: string; items: string[]; evidence?: string }
export interface Achievement { label: string; text: string; when?: string }
export interface Lead { org: string; role: string; text: string; when?: string }
export interface Education { school: string; what: string; when?: string; detail?: string }
export interface Beyond { title: string; text: string }

export const metrics: Metric[] = [
  { value: "28.6%", caption: "less computation time from a custom C++ solver and data pipeline", source: "IdeaForge" },
  { value: "25 × 5,000", caption: "drone models × Monte Carlo iterations per model", source: "IdeaForge" },
  { value: "15%", caption: "improvement in flight endurance", source: "IdeaForge" },
  { value: "2", caption: "peer-reviewed IAC papers, 2023 and 2024", source: "Conex Research" },
  { value: "0.906", caption: "R² on Ames house prices, in a 22,100-sample study", source: "HouseIQ" },
  { value: "1st of 12", caption: "teams in the Hovercraft Design-Build-Fly competition", source: "Hovercraft" },
];

// Add a `when` (for example "Jun – Sep 2024") to any job to show its dates.
export const jobs: Job[] = [
  {
    org: "IdeaForge",
    role: "CFD Engineering Intern",
    place: "Austin, Texas",
    bullets: [
      { text: "Built a custom C++ OpenFOAM solver and validated it against established solvers before using it for design studies." },
      { text: "Ran Monte Carlo aerodynamic optimisation across 25 drone models, 5,000 iterations each, to maximise lift-to-drag ratio and endurance.", metric: "15% more endurance" },
      { text: "Built a data pipeline that processes 100+ CFD results for fast cross-scenario comparison. With the solver, it cut computation time and sped up decision support by about 30%.", metric: "28.6% less computation" },
    ],
    tags: ["C++", "OpenFOAM", "STAR CCM+", "ANSYS Fluent", "Python", "Monte Carlo"],
  },
  {
    org: "Space-FALCON Lab",
    role: "Autonomous Missions Researcher",
    place: "University of Michigan, Ann Arbor",
    note: "One of three original researchers. The lab has since grown to 3 PhD and about 10 undergraduate researchers.",
    bullets: [
      { text: "Built an ML navigation pipeline for a rover with real-time obstacle detection and onboard path planning, validated against motion-capture ground truth." },
      { text: "Developed motion-capture-driven localisation and mapping frameworks that produce high-fidelity trajectory maps." },
      { text: "Generated synthetic training data in Blender for image-recognition and reinforcement-learning models." },
      { text: "Built an Apple Vision Pro app that visualises orbital dynamics, and iterated on the rover's physical design." },
    ],
    tags: ["Python", "Machine learning", "Reinforcement learning", "Computer vision", "Blender"],
  },
  {
    org: "Conex Research",
    role: "Lead Systems / Design Engineer",
    place: "Remote, London",
    bullets: [
      { text: "Processed Cassini-Huygens flight and atmospheric data to model Titan's atmosphere for the Mayfly aircraft concept." },
      { text: "Modelled the atmosphere in STAR CCM+ to improve entry performance.", metric: "65% more glide distance" },
      { text: "Co-authored two peer-reviewed International Astronautical Congress papers (IAC 2023 and IAC 2024).", metric: "2 publications" },
    ],
    tags: ["STAR CCM+", "CFD", "Data analysis"],
  },
  {
    org: "J.P. Morgan",
    role: "Work Experience Programme",
    place: "London",
    bullets: [
      { text: "Shadowed quants and traders on the trading floor, reviewing the pricing and risk models behind pair-trading strategies and derivatives positions, and the statistical models used live to find market inefficiencies." },
    ],
    tags: ["Derivatives", "Risk models", "Trading floor"],
  },
];

export const projects: Project[] = [
  {
    kind: "Independent ML research",
    when: "Mar – Apr 2026",
    name: "HouseIQ: House Price Prediction",
    text: "Compared Linear Regression, Ridge and Random Forest across the Ames, California and combined datasets (22,100 samples), with hyperparameter tuning and feature engineering across about 80 variables. A log transform cut target skewness from 1.88 to 0.12.",
    result: "R² 0.906 on Ames",
    stack: ["Python", "scikit-learn", "pandas"],
  },
  {
    kind: "Independent quant project",
    name: "Systematic and stat-arb trading",
    text: "A systematic strategy built on QuantConnect and back-tested on FAANG equities with strong PnL, plus a statistical-arbitrage strategy running live through Alpaca's API.",
    result: "Live on Alpaca",
    stack: ["QuantConnect", "Alpaca API", "Back-testing"],
  },
  {
    kind: "Independent quant project",
    name: "Turbulence Analogues for Volatility Regimes",
    text: "Applying ideas from fluid turbulence to identify and describe market volatility regimes.",
    stack: ["Python", "Quant"],
  },
  {
    kind: "University team project",
    name: "CubeSat",
    text: "Managed the satellite from design through launch. Ran thermal tests, structural drop tests and two-way data tests between satellite and ground, and tested Hamming-code error correction on data corrupted by simulated radiation.",
    result: "100% of two-bit errors detected",
    stack: ["Systems integration", "Test and validation"],
  },
  {
    kind: "Competition",
    name: "Hovercraft Design-Build-Fly",
    text: "Project lead and pilot. The team designed, built and flew a hovercraft against 11 other teams.",
    result: "1st of 12 teams",
    stack: ["Design", "Leadership"],
  },
  {
    kind: "Coursework and personal",
    name: "Flight dynamics simulations",
    text: "Simulated missile flight paths and designed intercept trajectories using equations of motion, control-system modelling and iterative numerical methods. Also built a planetary orbit simulator using gravitational dynamics and numerical integration.",
    result: "MATLAB",
    stack: ["Numerical methods", "Control", "Orbital mechanics"],
  },
  {
    kind: "Personal tool",
    name: "ColdEmails",
    text: "A free personal cold-email tool for recruiting: contact matching, drafting, scheduled Gmail sending and a reply pipeline.",
    result: "Open source on GitHub",
    stack: ["TypeScript", "React", "Cloudflare Workers"],
    href: "https://github.com/AyushTokeria/ColdEmail",
  },
  {
    kind: "Personal project",
    name: "Fit Check",
    text: "An iOS app built in Xcode and Swift.",
    stack: ["Swift", "iOS"],
  },
  {
    kind: "Personal tools",
    when: "2026",
    name: "Financial modelling tools",
    text: "An interactive 10-year salary and investment projection model, and a study tracker built to prepare for CFA Level I.",
    result: "Chart.js",
    stack: ["JavaScript", "Financial modelling"],
  },
];

export const skills: Skill[] = [
  {
    label: "Programming",
    items: ["C++", "Python", "MATLAB", "SQL", "R", "Excel / VBA", "Git"],
    evidence: "C++ for a custom OpenFOAM solver, Python for ML, trading and data pipelines, MATLAB across the aerospace degree. Python libraries: NumPy, SciPy, pandas, Matplotlib, scikit-learn.",
  },
  {
    label: "Quant and ML",
    items: ["Monte Carlo simulation", "Regression and ensembles", "Feature engineering", "Back-testing", "Statistical arbitrage", "Reinforcement learning", "Computer vision"],
    evidence: "Monte Carlo across 25 drone models at IdeaForge, regression and Random Forest in HouseIQ, back-tested and live trading strategies, RL and vision models at Space-FALCON Lab.",
  },
  {
    label: "Simulation",
    items: ["OpenFOAM", "STAR CCM+", "ANSYS Fluent", "CFD / FEA", "Test and validation"],
    evidence: "Custom solver development and validation at IdeaForge, atmosphere modelling at Conex Research, thermal and drop testing on the CubeSat.",
  },
  {
    label: "CAD and design",
    items: ["NX", "SolidWorks", "CATIA", "Fusion 360", "Creo", "Inventor", "AutoCAD", "Blender"],
    evidence: "Nozzle design and CAD education on the MJet student team, rover design iteration, procedural 3D modelling in Blender.",
  },
  {
    label: "Finance",
    items: ["Mathematical finance", "Derivatives and risk", "CFA Level I candidate"],
    evidence: "Mathematical Finance coursework at Michigan, trading-floor exposure at J.P. Morgan, quantitative finance at Politecnico di Milano from 2027.",
  },
  {
    label: "Languages",
    items: ["English (fluent)", "Hindi (spoken)", "German (beginner to intermediate)", "French (beginner)"],
  },
];

export const achievements: Achievement[] = [
  { label: "Publication", text: "Co-authored two peer-reviewed papers at the International Astronautical Congress.", when: "2023, 2024" },
  { label: "Competition", text: "1st place of 12 teams in the Hovercraft Design-Build-Fly competition, 200% faster and carrying 150% more payload than the average entry." },
  { label: "Competition", text: "National champion with the Rampaging Chariots team.", when: "2020" },
  { label: "Research", text: "One of the three original researchers at Space-FALCON Lab." },
  { label: "Academic", text: "Cum Laude, B.S.E. Aerospace Engineering, University of Michigan.", when: "2025" },
  { label: "Academic", text: "Accepted to the MSc in Mathematical Engineering (Quantitative Finance track) at Politecnico di Milano." },
  { label: "Academic", text: "A-Levels: Mathematics A*, Design & Technology A*, Further Mathematics A, Physics A.", when: "2022" },
  { label: "Sport", text: "Won the 2025 league with the Old Merchant Taylors' CC 4th team.", when: "2025" },
];

export const leadership: Lead[] = [
  { org: "MJet", role: "Nozzle Lead (propulsion)", text: "Led nozzle design for a student project team of 20 to 30 people.", when: "Aug 2024 – Dec 2025" },
  { org: "MJet", role: "CAD mentor", text: "Ran CAD workshops for about 10 attendees and wrote the team's CAD documentation." },
  { org: "Space-FALCON Lab", role: "Founding researcher", text: "One of the first three researchers in the lab." },
  { org: "CubeSat", role: "Project manager", text: "Managed the project from design through launch." },
  { org: "Hovercraft Design-Build-Fly", role: "Project lead and pilot", text: "Led the team to 1st place of 12." },
  { org: "Old Merchant Taylors' CC", role: "Captain, Colts", text: "Captained the junior side.", when: "2016 – 2021" },
  { org: "Soccer", role: "Team captain", text: "Captained soccer teams." },
];

export const education: Education[] = [
  { school: "Politecnico di Milano", what: "MSc Mathematical Engineering, Quantitative Finance track", when: "From February 2027", detail: "Bovisa campus, Milan." },
  { school: "University of Michigan", what: "B.S.E. Aerospace Engineering, Cum Laude", when: "Aug 2022 – Dec 2025", detail: "Coursework: Mathematical Finance, CFD, Guidance Navigation & Controls, Propulsion, Aerodynamics." },
  { school: "CFA Institute", what: "CFA Level I candidate" },
  { school: "Merchant Taylors' School, Northwood", what: "A-Levels", when: "Sep 2015 – Aug 2022", detail: "Mathematics A*, Design & Technology A*, Further Mathematics A, Physics A." },
];

export const beyond: Beyond[] = [
  { title: "Cricket", text: "Opening bowler for the University of Michigan and for Old Merchant Taylors' CC. Captained the Colts for five seasons and won the 2025 league with the 4th team." },
  { title: "Building things", text: "3D modelling and home design, including procedural modelling in Blender, alongside small interactive tools for finance and study." },
  { title: "Team competition", text: "National champion with the Rampaging Chariots team in 2020." },
  { title: "Languages", text: "English and Hindi, with German at beginner to intermediate level and French at beginner level." },
];
