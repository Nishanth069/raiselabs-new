export interface Product {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  category: string
  features: string[]
  specs: {
    label: string
    value: string
  }[]
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "hardness-testing",
    name: "Tablet Hardness Testers",
    description: "Precision instruments for measuring tablet hardness and breaking force with digital accuracy",
    image: "/images/products/TABLET HARDNESS TESTER RHT-3B.webp",
    productCount: 4
  },
  {
    id: "friability-testing",
    name: "Tablet Friability Testers",
    description: "Equipment for testing tablet durability and resistance to abrasion per USP standards",
    image: "/images/products/TABLET FRIABILITY TESTER-RFT-2P.webp",
    productCount: 3
  },
  {
    id: "disintegration-testing",
    name: "Disintegration Testers",
    description: "Testing equipment for measuring tablet and suppository disintegration time",
    image: "/images/products/AUTOMATIC TABLET DISINTEGRATION TESTER ADT-2D.webp",
    productCount: 5
  },
  {
    id: "dissolution-testing",
    name: "Dissolution Testers",
    description: "Advanced apparatus for pharmaceutical dissolution testing with multi-station capability",
    image: "/images/products/TABLET DISSOLUTION TESTER RLTDT-08LM.webp",
    productCount: 4
  },
  {
    id: "powder-testing",
    name: "Powder Testing Instruments",
    description: "Comprehensive tools for powder characterization including sieve shakers and flow testers",
    image: "/images/products/TAPED DENSITY APPARATUS TD-2.webp",
    productCount: 5
  },
  {
    id: "packaging-integrity",
    name: "Leak Test Apparatus",
    description: "Equipment for testing package seals and container integrity using bubble emission method",
    image: "/images/products/LEAK TEST APPARATUS RLT-2B.webp",
    productCount: 4
  },
  {
    id: "analytical-instruments",
    name: "Analytical Instruments",
    description: "Antibiotic zone readers, melting point apparatus, and boiling point testers",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    productCount: 5
  }
]

export const products: Product[] = [
  // HARDNESS TESTING INSTRUMENTS
  {
    id: "rht-3b",
    title: "Tablet Hardness Tester RHT-3B",
    description: "Professional digital tablet hardness tester for precise breaking force measurement",
    fullDescription: "The Tablet Hardness Tester RHT-3B is a high-precision instrument designed for the pharmaceutical industry to measure the hardness of tablets. It features advanced digital control, high accuracy sensors, and a robust design suitable for intensive laboratory use. Compliant with international pharmacopoeia standards.",
    image: "/images/products/TABLET HARDNESS TESTER RHT-3B.webp",
    category: "hardness-testing",
    features: [
      "High precision load cell for accurate measurement",
      "Digital display with peak hold function",
      "Easy to calibrate and maintain",
      "Robust stainless steel jaws",
      "Statistical analysis of test results",
      "USB/RS232 interface for data logging",
      "Compliant with USP and BP standards",
      "Safety overload protection"
    ],
    specs: [
      { label: "Measurement Range", value: "5-500 N" },
      { label: "Accuracy", value: "±0.5% Full Scale" },
      { label: "Resolution", value: "0.1 N" },
      { label: "Max Tablet Diameter", value: "25 mm" },
      { label: "Power Supply", value: "220V AC, 50Hz" },
      { label: "Weight", value: "8.5 kg" }
    ]
  },
  {
    id: "rpht-1p",
    title: "Manual Hardness Tester RPHT-1P",
    description: "Reliable manual hardness tester for precise tablet breaking force measurement",
    fullDescription: "The Manual Hardness Tester RPHT-1P from Raise Lab Equipment is designed for accurate measurement of tablet hardness and breaking force. This robust instrument provides reliable results with its precision mechanism and easy-to-read display. Ideal for quality control laboratories in pharmaceutical manufacturing.",
    image: "/images/products/TABLET HARDNESS TESTER RHT-3B.webp",
    category: "hardness-testing",
    features: [
      "Precision measurement of tablet breaking force",
      "Easy-to-read analog or digital display",
      "Durable construction for long-term use",
      "Simple manual operation",
      "Adjustable jaw design for various tablet sizes",
      "Compliant with USP, BP, EP, and IP standards",
      "Portable and compact design",
      "Low maintenance requirements"
    ],
    specs: [
      { label: "Measurement Range", value: "0-30 kg/cm²" },
      { label: "Accuracy", value: "±1%" },
      { label: "Display Type", value: "Analog/Digital" },
      { label: "Power Supply", value: "Manual operation" },
      { label: "Dimensions", value: "250 x 150 x 300 mm" },
      { label: "Weight", value: "5 kg" }
    ]
  },
  {
    id: "htds-1p",
    title: "Digital Tablet Hardness Tester HTDS-1P",
    description: "Digital tablet hardness tester with advanced features and precise measurements",
    fullDescription: "The Digital Tablet Hardness Tester HTDS-1P from Raise Lab Equipment combines precision engineering with modern digital technology. This instrument offers accurate hardness testing with digital display, data storage capabilities, and user-friendly interface. Perfect for pharmaceutical QC laboratories requiring reliable and repeatable results.",
    image: "/images/products/TABLET HARDNESS TESTER RHT-3B.webp",
    category: "hardness-testing",
    features: [
      "Digital display with backlight",
      "Data storage and retrieval",
      "Statistical analysis functions",
      "Multiple unit display (kg, N, kP)",
      "Auto-detection of tablet thickness and diameter",
      "Peak hold function",
      "USB connectivity for data transfer",
      "GMP compliant design"
    ],
    specs: [
      { label: "Measurement Range", value: "0-200 N" },
      { label: "Accuracy", value: "±0.5%" },
      { label: "Display Resolution", value: "0.1 N" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Data Storage", value: "Up to 1000 readings" },
      { label: "Dimensions", value: "300 x 200 x 350 mm" }
    ]
  },
  {
    id: "htds-3p",
    title: "Multi-Station Hardness Tester HTDS-3P",
    description: "Advanced multi-station hardness tester for high-throughput testing",
    fullDescription: "The Multi-Station Hardness Tester HTDS-3P from Raise Lab Equipment is a sophisticated instrument designed for high-volume testing environments. With three testing stations, automated operations, and comprehensive data management, this system significantly increases laboratory productivity while maintaining exceptional accuracy.",
    image: "/images/products/TABLET HARDNESS TESTER RHT-3B.webp",
    category: "hardness-testing",
    features: [
      "Three independent testing stations",
      "Automated sample loading",
      "Touchscreen interface",
      "Real-time data analysis",
      "Network connectivity",
      "Automated report generation",
      "Calibration reminder system",
      "21 CFR Part 11 compliant software"
    ],
    specs: [
      { label: "Testing Stations", value: "3 stations" },
      { label: "Measurement Range", value: "0-300 N" },
      { label: "Accuracy", value: "±0.3%" },
      { label: "Testing Speed", value: "Up to 180 tablets/hour" },
      { label: "Display", value: "10-inch touchscreen" },
      { label: "Power Supply", value: "AC 220V, 50/60Hz" }
    ]
  },
  // FRIABILITY TESTING INSTRUMENTS
  {
    id: "rft-2p",
    title: "Tablet Friability Tester RFT-2P",
    description: "Precision drum friability tester for pharmaceutical tablet durability testing",
    fullDescription: "The Tablet Friability Tester RFT-2P is designed for testing the durability of tablets against mechanical stress and abrasion. It features high-quality acrylic drums and precise rotation control, meeting all requirements of the USP, EP, and JP pharmacopoeias.",
    image: "/images/products/TABLET FRIABILITY TESTER-RFT-2P.webp",
    category: "friability-testing",
    features: [
      "Dual drum testing capability",
      "Precise 25 RPM rotation speed",
      "Automatic discharge of tablets after test",
      "Clear acrylic drums for visibility",
      "Digital timer and revolution counter",
      "Easy to clean and maintain",
      "Compliant with USP <1216>",
      "Quiet operation"
    ],
    specs: [
      { label: "Number of Drums", value: "2" },
      { label: "Rotation Speed", value: "25 ± 1 RPM" },
      { label: "Drum Diameter", value: "283-291 mm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Revolution Counter", value: "1-9999" },
      { label: "Power Supply", value: "220V AC, 50Hz" }
    ]
  },
  {
    id: "rft-2b",
    title: "Tablet Friability Tester RFT-2B",
    description: "Advanced dual-drum friability tester with digital controls",
    fullDescription: "The Tablet Friability Tester RFT-2B is a sophisticated dual-drum instrument for comprehensive friability testing. It offers enhanced digital controls, precise timing, and robust construction for consistent results in pharmaceutical QC environments.",
    image: "/images/products/TABLET FRIABILITY TESTER RFT-2B.webp",
    category: "friability-testing",
    features: [
      "Advanced microprocessor control",
      "Simultaneous dual drum operation",
      "Variable speed option available",
      "Digital LED display",
      "High-grade anti-static drums",
      "Programmable test cycles",
      "Built-in statistical calculations",
      "GMP compliant design"
    ],
    specs: [
      { label: "Drums", value: "2" },
      { label: "Speed", value: "25 RPM (Standard)" },
      { label: "Display", value: "LED Digital" },
      { label: "Drum Material", value: "Acrylic (USP compliant)" },
      { label: "Dimensions", value: "400 x 350 x 380 mm" },
      { label: "Weight", value: "12 kg" }
    ]
  },
  {
    id: "rft-1v",
    title: "Single Drum Friability Tester RFT-1V",
    description: "Single drum friability tester for standard tablet durability testing",
    fullDescription: "The Single Drum Friability Tester RFT-1V from Raise Lab Equipment features one testing drum for efficient testing of tablet formulations. This instrument accurately measures the resistance of tablets to abrasion and mechanical stress per USP <1216> standards.",
    image: "/images/products/TABLET FRIABILITY TESTER-RFT-2P.webp",
    category: "friability-testing",
    features: [
      "Single drum design for standard testing",
      "Precise rotation speed control at 25 rpm",
      "Digital timer with automatic stop",
      "Transparent acrylic drum for observation",
      "Programmable test cycles",
      "Noise-dampening operation",
      "Easy drum removal and cleaning",
      "Compliant with USP <1216>, EP <2.9.7>, JP <14>"
    ],
    specs: [
      { label: "Number of Drums", value: "1" },
      { label: "Drum Diameter", value: "283-291 mm" },
      { label: "Rotation Speed", value: "25 ± 1 rpm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "400 x 250 x 350 mm" }
    ]
  },
  // DISINTEGRATION TESTING INSTRUMENTS
  {
    id: "adt-2d",
    title: "Automatic Tablet Disintegration Tester ADT-2D",
    description: "Two-station automatic disintegration tester with precise temperature control",
    fullDescription: "The Automatic Tablet Disintegration Tester ADT-2D is a two-station instrument designed for testing the disintegration time of tablets, capsules, and other solid dosage forms. It features automatic lift mechanisms, precise water bath temperature control, and individual station timing.",
    image: "/images/products/AUTOMATIC TABLET DISINTEGRATION TESTER ADT-2D.webp",
    category: "disintegration-testing",
    features: [
      "Two independent testing stations",
      "Automatic lift mechanism for baskets",
      "Precise PID temperature control",
      "Digital display for time and temperature",
      "Programmable test protocols",
      "High-quality stainless steel water bath",
      "Compliant with USP, BP, and EP standards",
      "Easy to disassemble and clean"
    ],
    specs: [
      { label: "Number of Stations", value: "2" },
      { label: "Temperature Range", value: "20-45°C" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "Stroke Frequency", value: "30-32 cycles/min" },
      { label: "Stroke Height", value: "55 ± 2 mm" },
      { label: "Power Supply", value: "220V AC, 50Hz" }
    ]
  },
  {
    id: "adt-1d",
    title: "Automatic Tablet Disintegration Tester ADT-1D",
    description: "Single-station automatic disintegration tester for efficient lab testing",
    fullDescription: "The Automatic Tablet Disintegration Tester ADT-1D offers a compact and efficient solution for disintegration testing with a single station. It features the same high-precision controls and automatic lift mechanism as larger models, perfect for smaller batches and labs.",
    image: "/images/products/AUTOMATIC TABLET DISINTEGRATION TESTER ADT-1D.webp",
    category: "disintegration-testing",
    features: [
      "Single station design for focused testing",
      "Fully automatic lift mechanism",
      "Digital temperature and time control",
      "Transparent water bath for easy monitoring",
      "High-grade stainless steel baskets",
      "Reliable motor for consistent stroke rate",
      "Compact footprint for lab benches",
      "Meets pharmacopoeia requirements"
    ],
    specs: [
      { label: "Stations", value: "1" },
      { label: "Stroke Frequency", value: "30-32 cycles/min" },
      { label: "Stroke Height", value: "55 ± 2 mm" },
      { label: "Temperature Control", value: "PID Digital" },
      { label: "Bath Material", value: "Acrylic/Stainless Steel" },
      { label: "Weight", value: "10 kg" }
    ]
  },
  {
    id: "rsdt-3b",
    title: "Suppository Disintegration Tester RSDT-3B",
    description: "Specialized tester for suppository disintegration and melting time",
    fullDescription: "The Suppository Disintegration Tester RSDT-3B from Raise Lab Equipment is specifically designed for testing the disintegration and melting characteristics of suppositories in accordance with international standards.",
    image: "/images/products/SUPPOSITORY DISINTEGRATION TESTER RSDT-3B.webp",
    category: "disintegration-testing",
    features: [
      "Three testing positions",
      "Specialized suppository holders",
      "Precise temperature control",
      "Digital timer with alarm",
      "Clear viewing window",
      "Stainless steel water bath",
      "Easy cleaning and maintenance",
      "Pharmacopoeia compliant"
    ],
    specs: [
      { label: "Test Positions", value: "3" },
      { label: "Temperature Range", value: "35-39°C" },
      { label: "Temperature Stability", value: "±0.3°C" },
      { label: "Timer Range", value: "0-99 minutes" },
      { label: "Bath Capacity", value: "4 liters" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "dt-4dd",
    title: "4-Station Disintegration Tester DT-4DD",
    description: "Four-station disintegration tester with digital temperature control",
    fullDescription: "The 4-Station Disintegration Tester DT-4DD from Raise Lab Equipment offers four independent testing stations with precise temperature control. This versatile instrument tests tablet disintegration time according to pharmacopoeia standards.",
    image: "/images/products/AUTOMATIC TABLET DISINTEGRATION TESTER ADT-2D.webp",
    category: "disintegration-testing",
    features: [
      "Four independent testing stations",
      "Digital temperature control and display",
      "Automatic basket oscillation",
      "Adjustable stroke length",
      "Built-in water bath",
      "Stainless steel construction",
      "Individual timing for each station",
      "Meets USP, BP, EP, and IP requirements"
    ],
    specs: [
      { label: "Test Stations", value: "4" },
      { label: "Temperature Range", value: "35-42°C" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "Stroke Length", value: "55 ± 2 mm" },
      { label: "Oscillation Rate", value: "30 ± 2 cycles/min" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "dt-2d",
    title: "2-Station Disintegration Tester DT-2D",
    description: "Compact two-station disintegration tester for routine testing",
    fullDescription: "The 2-Station Disintegration Tester DT-2D from Raise Lab Equipment is a compact and efficient instrument designed for routine disintegration testing. With two testing stations and user-friendly controls, it provides accurate results while maintaining a small laboratory footprint.",
    image: "/images/products/AUTOMATIC TABLET DISINTEGRATION TESTER ADT-2D.webp",
    category: "disintegration-testing",
    features: [
      "Two testing stations",
      "Compact design saves space",
      "Digital temperature controller",
      "Automatic stroke mechanism",
      "Easy-to-read LCD display",
      "Durable stainless steel basket",
      "Quick setup and operation",
      "Energy-efficient heating system"
    ],
    specs: [
      { label: "Test Stations", value: "2" },
      { label: "Temperature Range", value: "35-40°C" },
      { label: "Heating Time", value: "< 30 minutes" },
      { label: "Oscillation Frequency", value: "30 cycles/min" },
      { label: "Power Consumption", value: "800W" },
      { label: "Dimensions", value: "400 x 300 x 500 mm" }
    ]
  },
  // DISSOLUTION TESTING INSTRUMENTS
  {
    id: "rltdt-08lm",
    title: "Tablet Dissolution Tester RLTDT-08LM",
    description: "8-vessel dissolution tester with precise speed and temperature control",
    fullDescription: "The Tablet Dissolution Tester RLTDT-08LM is a high-performance 8-vessel system for pharmaceutical dissolution testing. It features high-accuracy rotation speed control, uniform temperature distribution, and a user-friendly interface for setting up and monitoring tests.",
    image: "/images/products/TABLET DISSOLUTION TESTER RLTDT-08LM.webp",
    category: "dissolution-testing",
    features: [
      "8-vessel testing configuration",
      "USP Type I and Type II compliant",
      "High-precision motor for speed control",
      "Uniform heating via circulation pump",
      "Digital LCD display for all parameters",
      "Sturdy corrosion-resistant frame",
      "Easy sampling and vessel handling",
      "Password protection for test protocols"
    ],
    specs: [
      { label: "Vessels", value: "8" },
      { label: "Speed Range", value: "25-200 RPM" },
      { label: "Speed Accuracy", value: "±1 RPM" },
      { label: "Temperature Range", value: "Ambient to 45°C" },
      { label: "Temperature Stability", value: "±0.1°C" },
      { label: "Power Supply", value: "220V AC, 50Hz" }
    ]
  },
  {
    id: "rltdt-14lm",
    title: "Tablet Dissolution Tester RLTDT-14LM",
    description: "High-capacity 14-vessel dissolution tester for increased lab throughput",
    fullDescription: "The Tablet Dissolution Tester RLTDT-14LM is an advanced, high-capacity system designed for high-throughput dissolution testing. With 14 vessels, it allows for simultaneous testing of multiple batches or comparative studies, significantly increasing laboratory productivity while maintaining exceptional precision.",
    image: "/images/products/TABLET DISSOLUTION TESTER RLTDT-14LM.webp",
    category: "dissolution-testing",
    features: [
      "14-vessel high-throughput design",
      "Advanced microprocessor control",
      "Individual vessel temperature monitoring",
      "Automated sampling manifold option",
      "Large touchscreen interface",
      "Full compliance with USP/EP/JP standards",
      "Secure data logging and user management",
      "Robust water bath with circulation"
    ],
    specs: [
      { label: "Vessels", value: "14" },
      { label: "Speed Accuracy", value: "±0.5 RPM" },
      { label: "Temperature Accuracy", value: "±0.1°C" },
      { label: "Bath Material", value: "Anti-corrosive Acrylic" },
      { label: "Interface", value: "7-inch Touchscreen" },
      { label: "Data Port", value: "Ethernet/USB" }
    ]
  },
  {
    id: "rltdt-14sa",
    title: "Tablet Dissolution Tester RLTDT-14SA",
    description: "Semi-automatic 14-vessel dissolution tester for streamlined workflows",
    fullDescription: "The Tablet Dissolution Tester RLTDT-14SA is a semi-automatic version of our 14-vessel system, featuring integrated sampling automation to reduce manual error and improve consistency. Ideal for busy QC labs needing reliable, automated data collection and precise test execution.",
    image: "/images/products/TABLET DISSOLUTION TESTER RLTDT-14SA.webp",
    category: "dissolution-testing",
    features: [
      "Semi-automatic sampling system",
      "Integrated syringe pump compatibility",
      "14-vessel capacity for large scale testing",
      "Pre-programmed USP/BP test protocols",
      "Automated tablet drop feature",
      "Validation protocols built-in",
      "21 CFR Part 11 compliant software",
      "Modular design for easy service"
    ],
    specs: [
      { label: "Automation", value: "Semi-Automatic" },
      { label: "Vessels", value: "14" },
      { label: "Sampling Accuracy", value: "±1%" },
      { label: "Test Storage", value: "Up to 100 protocols" },
      { label: "Control", value: "Microprocessor based" },
      { label: "Weight", value: "45 kg" }
    ]
  },
  {
    id: "rltdt-08sa",
    title: "Semi-Auto Dissolution Tester RLTDT-08SA",
    description: "Advanced eight-vessel dissolution tester with semi-automated sampling",
    fullDescription: "The Semi-Auto Dissolution Tester RLTDT-08SA from Raise Lab Equipment combines precision testing with semi-automated sampling capabilities for improved efficiency.",
    image: "/images/products/TABLET DISSOLUTION TESTER RLTDT-08LM.webp",
    category: "dissolution-testing",
    features: [
      "Semi-automated sampling system",
      "Programmable sampling intervals",
      "Automated filtration",
      "Touchscreen control interface",
      "Real-time monitoring",
      "Data export capabilities",
      "Multiple apparatus types support",
      "21 CFR Part 11 ready software"
    ],
    specs: [
      { label: "Number of Vessels", value: "8" },
      { label: "Sampling", value: "Semi-automated" },
      { label: "Temperature Control", value: "PID controlled" },
      { label: "Sampling Points", value: "1-99 programmable" },
      { label: "Display", value: "12-inch touchscreen" },
      { label: "Communication", value: "USB, Ethernet" }
    ]
  },
  // POWDER TESTING INSTRUMENTS
  {
    id: "td-2",
    title: "Tapped Density Apparatus TD-2",
    description: "Precision apparatus for measuring tapped density of powders",
    fullDescription: "The Tapped Density Apparatus TD-2 from Raise Lab Equipment is designed for accurate measurement of powder tapped density. Essential for powder characterization in pharmaceutical development.",
    image: "/images/products/TAPED DENSITY APPARATUS TD-2.webp",
    category: "powder-testing",
    features: [
      "Automatic tapping mechanism",
      "Digital tap counter",
      "Adjustable tapping frequency",
      "Two graduated cylinders capacity",
      "Precise drop height control",
      "Digital display",
      "Programmable tap cycles",
      "USP and Ph. Eur. compliant"
    ],
    specs: [
      { label: "Tapping Frequency", value: "100-300 taps/min" },
      { label: "Drop Height", value: "3 mm ± 0.2 mm" },
      { label: "Cylinder Capacity", value: "100/250 ml" },
      { label: "Counter Range", value: "0-9999 taps" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "300 x 250 x 500 mm" }
    ]
  },
  {
    id: "rgf-1",
    title: "Granule Friability Tester RGF-1",
    description: "Specialized tester for measuring granule strength and friability",
    fullDescription: "The Granule Friability Tester RGF-1 from Raise Lab Equipment is specifically designed to test the mechanical strength and friability of granules in accordance with industry standards.",
    image: "/images/products/GRANULE FRIABILITY TESTER RGF-1.webp",
    category: "powder-testing",
    features: [
      "Rotating drum design",
      "Variable rotation speed",
      "Digital timer and counter",
      "Transparent drum for observation",
      "Easy drum removal",
      "Adjustable test duration",
      "Stainless steel construction",
      "Reproducible results"
    ],
    specs: [
      { label: "Drum Capacity", value: "1 liter" },
      { label: "Rotation Speed", value: "10-60 rpm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Drum Material", value: "Acrylic/Stainless steel" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "400 x 300 x 350 mm" }
    ]
  },
  {
    id: "rss-1",
    title: "Electromagnetic Sieve Shaker RSS-1",
    description: "High-performance electromagnetic sieve shaker for particle size analysis",
    fullDescription: "The Electromagnetic Sieve Shaker RSS-1 from Raise Lab Equipment provides efficient particle size analysis through electromagnetic oscillation with heavy-duty base for stability.",
    image: "/images/products/TAPED DENSITY APPARATUS TD-2.webp",
    category: "powder-testing",
    features: [
      "Electromagnetic vibration technology",
      "Adjustable vibration amplitude",
      "Digital timer with auto-stop",
      "Accommodates standard sieves",
      "Low noise operation",
      "Heavy-duty base for stability",
      "Continuous or interval mode",
      "Easy sieve stack assembly"
    ],
    specs: [
      { label: "Sieve Diameter", value: "200 mm / 8 inch" },
      { label: "Amplitude Range", value: "0-2 mm" },
      { label: "Timer Range", value: "1-99 minutes" },
      { label: "Maximum Load", value: "3 kg" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Power Consumption", value: "150W" }
    ]
  },
  {
    id: "rsv-1",
    title: "Scott Volumeter RSV-1",
    description: "Standard volumeter for measuring powder bulk density",
    fullDescription: "The Scott Volumeter RSV-1 from Raise Lab Equipment is a standardized instrument for measuring the apparent or bulk density of powders following the Scott method.",
    image: "/images/products/TAPED DENSITY APPARATUS TD-2.webp",
    category: "powder-testing",
    features: [
      "Scott method standardized design",
      "Dual glass funnel system",
      "Graduated receiving cup",
      "Stainless steel frame",
      "Precise funnel positioning",
      "Easy powder flow observation",
      "Simple operation",
      "ASTM B329 compliant"
    ],
    specs: [
      { label: "Cup Volume", value: "1 cubic inch (16.39 ml)" },
      { label: "Funnel Type", value: "Dual glass funnel" },
      { label: "Frame Material", value: "Stainless steel" },
      { label: "Overall Height", value: "450 mm" },
      { label: "Base Dimensions", value: "200 x 200 mm" },
      { label: "Standard", value: "ASTM B329" }
    ]
  },
  {
    id: "rpf-1",
    title: "Powder Flow Tester RPF-1",
    description: "Comprehensive apparatus for testing powder flow properties",
    fullDescription: "The Powder Flow Tester RPF-1 from Raise Lab Equipment is designed to measure angle of repose and flow rate of powders. Critical for formulation development and manufacturing optimization.",
    image: "/images/products/TAPED DENSITY APPARATUS TD-2.webp",
    category: "powder-testing",
    features: [
      "Angle of repose measurement",
      "Flow rate determination",
      "Adjustable funnel height",
      "Graduated platform",
      "Stainless steel construction",
      "Multiple funnel sizes included",
      "Digital timer",
      "Portable design"
    ],
    specs: [
      { label: "Funnel Sizes", value: "10, 15, 25 mm orifice" },
      { label: "Height Adjustment", value: "50-200 mm" },
      { label: "Platform Diameter", value: "150 mm" },
      { label: "Timer Accuracy", value: "±0.1 seconds" },
      { label: "Material", value: "SS 316" },
      { label: "Weight", value: "2.5 kg" }
    ]
  },
  // PACKAGING INTEGRITY TESTING INSTRUMENTS
  {
    id: "rlt-2b",
    title: "Leak Test Apparatus RLT-2B",
    description: "Advanced bubble emission test apparatus for packaging integrity",
    fullDescription: "The Leak Test Apparatus RLT-2B is a professional solution for testing the integrity of pharmaceutical packaging, including blister packs, strips, and bottles. It uses the vacuum-induced bubble emission method to detect even the smallest leaks, ensuring product sterility and shelf life.",
    image: "/images/products/LEAK TEST APPARATUS RLT-2B.webp",
    category: "packaging-integrity",
    features: [
      "Microprocessor-based digital control",
      "Highly transparent acrylic vacuum chamber",
      "Programmable vacuum level and hold time",
      "Automatic vacuum release after test",
      "Digital display of vacuum and time",
      "Easy to operate and maintain",
      "Meets USP standards for leak testing",
      "Robust construction for daily use"
    ],
    specs: [
      { label: "Vacuum Range", value: "0 to -600 mmHg" },
      { label: "Vacuum Stability", value: "±5 mmHg" },
      { label: "Chamber Size", value: "200mm / 250mm / 300mm" },
      { label: "Timer Range", value: "1-999 seconds" },
      { label: "Power Supply", value: "220V AC, 50Hz" },
      { label: "Body Material", value: "Powder Coated MS / SS" }
    ]
  },
  {
    id: "rlt-1",
    title: "Leak Test Apparatus RLT-1",
    description: "Economical leak testing solution for packaging integrity",
    fullDescription: "The Leak Test Apparatus RLT-1 from Raise Lab Equipment offers an economical, fully calibrated solution for ensuring the integrity of various packaging using bubble emission method.",
    image: "/images/products/LEAK TEST APPARATUS RLT-2B.webp",
    category: "packaging-integrity",
    features: [
      "Bubble emission detection method",
      "Transparent observation tank",
      "Vacuum pressure control",
      "Digital pressure gauge",
      "Adjustable test duration",
      "Accommodates various container sizes",
      "Easy sample loading",
      "USP compliant testing"
    ],
    specs: [
      { label: "Test Method", value: "Bubble emission" },
      { label: "Vacuum Range", value: "0-0.1 MPa" },
      { label: "Tank Capacity", value: "15 liters" },
      { label: "Pressure Accuracy", value: "±0.01 MPa" },
      { label: "Timer Range", value: "0-99 minutes" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rlt-10be",
    title: "Lacquer Porosity Tester RLT-10BE",
    description: "Specialized tester for detecting lacquer coating defects on metal containers",
    fullDescription: "The Lacquer Porosity Tester RLT-10BE from Raise Lab Equipment is designed to detect pinholes and porosity in lacquer coatings on metal containers using electrochemical principles.",
    image: "/images/products/LEAK TEST APPARATUS RLT-2B.webp",
    category: "packaging-integrity",
    features: [
      "Electrochemical detection method",
      "Adjustable test voltage",
      "Visual and audible alarms",
      "Conductive electrode probe",
      "Digital voltage display",
      "Suitable for various container sizes",
      "Non-destructive testing",
      "High sensitivity detection"
    ],
    specs: [
      { label: "Test Voltage", value: "0-10V DC" },
      { label: "Detection Sensitivity", value: "< 0.1 mm pinhole" },
      { label: "Display", value: "Digital LED" },
      { label: "Alarm Type", value: "Audio + Visual" },
      { label: "Electrode Type", value: "Flexible conductive" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  // ANALYTICAL INSTRUMENTS
  {
    id: "rabt-3",
    title: "Ampoule Breakpoint Tester RABT-3",
    description: "Specialized tester for measuring the breaking force of pharmaceutical ampoules",
    fullDescription: "The Ampoule Breakpoint Tester RABT-3 is a precision instrument designed to measure the force required to break open pharmaceutical ampoules. It ensures that ampoules are easy to open for medical professionals while maintaining structural integrity during transport and storage.",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    category: "analytical-instruments",
    features: [
      "Precision force measurement system",
      "Adjustable support for various ampoule sizes",
      "Digital peak force display",
      "Safe breaking mechanism with containment",
      "Easy to calibrate with standard weights",
      "Durable stainless steel contact parts",
      "Compliance with ISO 9187 standards",
      "Statistical reporting of break force"
    ],
    specs: [
      { label: "Force Range", value: "0-100 N" },
      { label: "Force Resolution", value: "0.1 N" },
      { label: "Ampoule Sizes", value: "1 ml to 25 ml" },
      { label: "Accuracy", value: "±0.2% Full Scale" },
      { label: "Display", value: "Backlit Digital LCD" },
      { label: "Material", value: "SS 304 and 316" }
    ]
  },
  {
    id: "razr-1",
    title: "Antibiotic Zone Reader RAZR-1",
    description: "Digital zone reader for antibiotic susceptibility testing",
    fullDescription: "The Antibiotic Zone Reader RAZR-1 from Raise Lab Equipment provides accurate and consistent measurement of inhibition zones for antibiotic susceptibility testing.",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    category: "analytical-instruments",
    features: [
      "Digital zone measurement",
      "High-resolution optics",
      "Automatic zone detection",
      "Data storage and export",
      "Multiple plate sizes supported",
      "User-friendly interface",
      "Calibration tools included",
      "Compliance with CLSI standards"
    ],
    specs: [
      { label: "Measurement Range", value: "6-50 mm" },
      { label: "Resolution", value: "0.1 mm" },
      { label: "Accuracy", value: "±0.2 mm" },
      { label: "Plate Sizes", value: "60, 90, 150 mm" },
      { label: "Data Storage", value: "5000 readings" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rmp-1",
    title: "Melting Point Apparatus RMP-1",
    description: "Digital melting point apparatus for accurate determination",
    fullDescription: "The Melting Point Apparatus RMP-1 from Raise Lab Equipment provides accurate and reproducible melting point determination for pharmaceutical compounds.",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    category: "analytical-instruments",
    features: [
      "Digital temperature control",
      "Programmable heating rates",
      "Dual sample capacity",
      "Clear observation window",
      "Automatic endpoint detection",
      "Data logging capability",
      "Pharmacopoeia compliant",
      "Easy sample loading"
    ],
    specs: [
      { label: "Temperature Range", value: "Room temp to 400°C" },
      { label: "Accuracy", value: "±0.3°C" },
      { label: "Heating Rate", value: "0.5-10°C/min" },
      { label: "Sample Capacity", value: "2 capillaries" },
      { label: "Display", value: "LCD digital" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rbp-1",
    title: "Boiling Point Apparatus RBP-1",
    description: "Standard apparatus for boiling point determination",
    fullDescription: "The Boiling Point Apparatus RBP-1 from Raise Lab Equipment is designed for accurate boiling point determination of liquids and solvents per pharmacopoeia methods.",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    category: "analytical-instruments",
    features: [
      "Digital temperature control",
      "Precision heating system",
      "Observation window",
      "Multiple sample capacity",
      "Programmable parameters",
      "Stainless steel construction",
      "Safety features included",
      "Standard compliant design"
    ],
    specs: [
      { label: "Temperature Range", value: "Room temp to 300°C" },
      { label: "Accuracy", value: "±0.5°C" },
      { label: "Heating Rate", value: "Adjustable" },
      { label: "Sample Size", value: "1-5 ml" },
      { label: "Display", value: "Digital LED" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rpp-1",
    title: "Peristaltic Pump RPP-1",
    description: "Precision peristaltic pump for laboratory fluid transfer",
    fullDescription: "The Peristaltic Pump RPP-1 from Raise Lab Equipment provides precise and contamination-free fluid transfer for various laboratory applications.",
    image: "/images/products/AMPOULE BREAKPOINT TESTER RABT-3.webp",
    category: "analytical-instruments",
    features: [
      "Variable speed control",
      "Reversible flow direction",
      "Multiple tubing sizes",
      "Digital speed display",
      "Low pulsation design",
      "Easy tubing installation",
      "Compact footprint",
      "Long tubing life"
    ],
    specs: [
      { label: "Flow Rate", value: "0.1-2000 ml/min" },
      { label: "Speed Range", value: "1-600 rpm" },
      { label: "Tubing Sizes", value: "13-25 ID" },
      { label: "Channels", value: "1-4" },
      { label: "Accuracy", value: "±0.5%" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}
