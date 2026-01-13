import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const pageCategories = [
    {
        title: "Eye Catching Home Page",
        pages: ["Home V1"]
    },
    {
        title: "Stunning Inner Pages",
        pages: [
            "Features", "About Us", "Single Team Member", "Career",
            "Pricing", "Blog", "Article", "Contact", "Download", "Integration", "Integration Detail"
        ]
    },
    {
        title: "Must Have Utility Pages",
        pages: ["404 Page", "Changelog", "Terms and Conditions", "Privacy Policy"]
    }
];

const PageShowcase = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Explore Main Pages</h2>

                <div className="space-y-20">
                    {pageCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col gap-8">
                            <h3 className="text-2xl font-semibold border-b border-border pb-4">{category.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.pages.map((page, pIdx) => (
                                    <div key={pIdx} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors duration-300 cursor-pointer">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-lg group-hover:text-primary transition-colors">{page}</span>
                                            <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PageShowcase;
