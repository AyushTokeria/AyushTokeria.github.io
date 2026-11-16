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

export interface Stat { value: string; label: string }
export interface Bullet { text: string; metric?: string }
export interface Job { org: string; role: string; place: string; when?: string; note?: string; stats?: Stat[]; bullets: Bullet[]; tags: string[] }
export interface Link { label: string; href: string }
export interface Project {
  kind: string; when?: string; name: string; text: string; result?: string; stack: string[];
  detail?: string;   // one or two sentences shown on the back of the card
  points?: string[]; // short facts shown on the back
  links?: Link[];    // GitHub repo, documentation, files: shown as buttons on the back
}
export interface Skill { label: string; items: string[]; evidence?: string }
export interface Achievement { label: string; text: string; when?: string }
export interface Lead { org: string; role: string; text: string; when?: string }
export interface Education { school: string; what: string; when?: string; detail?: string }
export interface Beyond { title: string; text: string }

// Add a `when` (for example "Jun – Sep 2024") to any job to show its dates.
export const jobs: Job[] = [
  {
    org: "IdeaForge",
    role: "CFD Engineering Intern",
    place: "Austin, Texas",
    stats: [
      { value: "28.6%", label: "less computation time from a custom C++ solver and data pipeline" },
      { value: "25 × 5,000", label: "drone models × Monte Carlo iterations per model" },
      { value: "15%", label: "improvement in flight endurance" },
    ],
    bullets: [
      { text: "Built a custom C++ OpenFOAM solver and validated it against established solvers before using it for design studies." },
      { text: "Ran Monte Carlo aerodynamic optimisation across 25 drone models, 5,000 iterations each, to maximise lift-to-drag ratio and endurance." },
      { text: "Built a data pipeline that processes 100+ CFD results for fast cross-scenario comparison. With the solver, it cut computation time and sped up decision support by about 30%." },
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
    stats: [
      { value: "2", label: "peer-reviewed IAC papers, 2023 and 2024" },
      { value: "65%", label: "more glide distance from the atmosphere model" },
    ],
    bullets: [
      { text: "Processed Cassini-Huygens flight and atmospheric data to model Titan's atmosphere for the Mayfly aircraft concept." },
      { text: "Modelled the atmosphere in STAR CCM+ to improve entry performance." },
      { text: "Co-authored two peer-reviewed International Astronautical Congress papers (IAC 2023 and IAC 2024)." },
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
    detail: "A comparison of three model families on two public housing datasets and a combined set, built to show how the data itself decides which model works best.",
    points: [
      "Datasets: Ames Housing, California Housing and a combined set, 22,100 samples in total",
      "Models: Linear Regression, Ridge and Random Forest, each with hyperparameter tuning",
      "Target skewness corrected with a log transform, from 1.88 to 0.12",
      "Features engineered across about 80 variables",
      "Best result: R² of 0.906 on the Ames data",
    ],
    // links: [{ label: "GitHub repo", href: "https://github.com/AyushTokeria/..." }],
  },
  {
    kind: "Independent quant project",
    name: "Systematic and stat-arb trading",
    text: "A systematic strategy built on QuantConnect and back-tested on FAANG equities with strong PnL, plus a statistical-arbitrage strategy running live through Alpaca's API.",
    result: "Live on Alpaca",
    stack: ["QuantConnect", "Alpaca API", "Back-testing"],
    detail: "Two strategies built end to end: one researched and back-tested, one running live.",
    points: [
      "Systematic strategy built and back-tested on QuantConnect, on FAANG equities, with strong PnL",
      "Statistical-arbitrage strategy running live through Alpaca's API",
    ],
  },
  {
    kind: "Independent quant project",
    name: "Turbulence Analogues for Volatility Regimes",
    text: "Applying ideas from fluid turbulence to identify and describe market volatility regimes.",
    stack: ["Python", "Quant"],
    detail: "A write-up that uses turbulence as an analogy for how markets move between calm and volatile regimes, scoped as a portfolio piece.",
    points: [
      "Stochastic differential equations and hidden Markov models",
      "Run on S&P 500 data",
      "Draws on my CFD and turbulence background",
    ],
  },
  {
    kind: "University team project",
    name: "CubeSat",
    text: "Managed the satellite from design through launch. Ran thermal tests, structural drop tests and two-way data tests between satellite and ground, and tested Hamming-code error correction on data corrupted by simulated radiation.",
    result: "100% of two-bit errors detected",
    stack: ["Systems integration", "Test and validation"],
    detail: "A university CubeSat taken from design to launch, with testing across structures, thermal behaviour and data handling.",
    points: [
      "Managed the project from design through launch",
      "Thermal tests on the onboard components",
      "Structural drop tests on the chassis",
      "Software tests: data pings and two-way data between satellite and ground",
      "Hamming-code error correction detected every two-bit error in testing",
    ],
  },
  {
    kind: "Competition",
    name: "Hovercraft Design-Build-Fly",
    text: "Project lead and pilot. The team designed, built and flew a hovercraft against 11 other teams.",
    result: "1st of 12 teams",
    stack: ["Design", "Leadership"],
    detail: "A design-build-fly competition: the team designed, built and flew the hovercraft against 11 other teams.",
    points: [
      "Project lead and pilot",
      "200% faster than the average entry",
      "150% more payload than the average entry",
      "1st place of 12 teams",
    ],
  },
  {
    kind: "Coursework and personal",
    name: "Flight dynamics simulations",
    text: "Simulated missile flight paths and designed intercept trajectories using equations of motion, control-system modelling and iterative numerical methods. Also built a planetary orbit simulator using gravitational dynamics and numerical integration.",
    result: "MATLAB",
    stack: ["Numerical methods", "Control", "Orbital mechanics"],
    detail: "Two MATLAB simulations: a missile intercept from aerospace coursework, and a planetary orbit simulator built on my own.",
    points: [
      "Missile flight paths simulated and intercept trajectories designed",
      "Equations of motion, control-system modelling and iterative numerical methods",
      "Orbit simulator using gravitational dynamics and numerical integration",
    ],
  },
  {
    kind: "Personal tool",
    name: "ColdEmails",
    text: "A free personal cold-email tool for recruiting: contact matching, drafting, scheduled Gmail sending and a reply pipeline.",
    result: "Open source on GitHub",
    stack: ["TypeScript", "React", "Cloudflare Workers"],
    detail: "A recruiting tool that finds what I share with each contact, helps draft a short email that opens with the best connection, and tracks replies. It costs nothing to run.",
    points: [
      "Matches shared school, employer, hometown and language, and shows the evidence",
      "Every draft is reviewed by hand, then sent from my own Gmail at random times in the hours I choose",
      "Follow-ups are drafted in the same thread and replies are tracked in a pipeline",
      "React app on GitHub Pages, API and scheduler on Cloudflare Workers",
    ],
    links: [
      { label: "GitHub repo", href: "https://github.com/AyushTokeria/ColdEmail" },
      { label: "README", href: "https://github.com/AyushTokeria/ColdEmail#readme" },
    ],
  },
  {
    kind: "Personal project",
    name: "Fit Check",
    text: "An iOS app built in Xcode and Swift.",
    stack: ["Swift", "iOS"],
    detail: "A wardrobe app in development: an avatar sized to your measurements, clothes added by photo, and an outfit builder.",
    points: [
      "Native iOS app in Swift and Xcode",
      "Avatar sized to the user's measurements",
      "Clothes added by photo and brand, tagged by season, fabric and formality",
      "Outfit builder",
    ],
  },
  {
    kind: "Personal tools",
    when: "2026",
    name: "Financial modelling tools",
    text: "An interactive 10-year salary and investment projection model, and a study tracker built to prepare for CFA Level I.",
    result: "Chart.js",
    stack: ["JavaScript", "Financial modelling"],
    detail: "Two small interactive tools built for my own planning and exam preparation.",
    points: [
      "10-year salary and investment projection with an investment growth layer, charted with Chart.js",
      "CFA Level I study tracker with a dashboard, topic progress, a study schedule and stats",
      "Tracks daily study hours against a goal, with streaks and a 14-day history chart",
    ],
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
