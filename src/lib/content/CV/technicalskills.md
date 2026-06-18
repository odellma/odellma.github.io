<script lang="ts">
    import { displayAsBulletList } from '$lib/utils/display';
    const molecularBiology = [
        "DNA and RNA extraction",
        "PCR and RT-PCR",
        "Primer design and optimization",
        "Gel electrophoresis",
        "Sequencing sample preparation",
        "Tissue histology and immunohistochemistry",
        "Western blotting",
        "Northern blotting"
    ];

    const stats = [
        "R programming",
        "Statistical analysis and hypothesis testing",
        "Ecological and population modeling",
        "Bayesian mixing models",
        "Experimental design",
        "Data quality assurance and quality control (QA/QC)",
        "Reproducible analytical workflows"
    ];

    const coding = [
        "Python",
        "R",
        "SQL",
        "C#",
        "Java",
        "Relational database design and management",
        "Data integration and workflow automation",
        "Git version control",
        "Software development for data-intensive applications",
        "Cloud-based data systems"
    ];

    const gis = [
        "ArcGIS",
        "Spatial analysis and mapping",
        "Resource selection modeling",
        "Environmental data logger deployment and analysis",
        "GPS-based field data collection"
    ];

    const lab = [
        "Stable isotope sample preparation and analysis",
        "Bulk and compound-specific stable isotope workflows",
        "Bomb calorimetry",
        "Biomarker analyses (lipids, proteins, plant waxes)",
        "Water chemistry and nutrient analyses",
        "Biological sample processing",
        "Laboratory quality control procedures"
    ];

    const field = [
        "Fisheries field sampling",
        "Marine mammal survey support",
        "Arctic and sub-Arctic field research",
        "Environmental monitoring",
        "Ecological sampling and specimen processing",
        "Remote field logistics and field safety"
    ];
</script>

# Technical and Analytical Skills

## Molecular Biology and Genomics
<p>{displayAsBulletList(molecularBiology)}</p>

## Quantitative and Statistical Analysis
<p>{displayAsBulletList(stats)}</p>

## Computational and Data Science
<p>{displayAsBulletList(coding)}</p>

## Geospatial and Environmental Analysis
<p>{displayAsBulletList(gis)}</p>

## Laboratory and Analytical Techniques
<p>{displayAsBulletList(lab)}</p>

## Field Research
<p>{displayAsBulletList(field)}</p>

---