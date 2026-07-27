"use client";

const skills = [
    { name: "Photoshop", icon: "/skills-icons/photoshop.png", scale: 1.6 },
    { name: "Canva", icon: "/skills-icons/canva.png", scale: 1 },
    { name: "Affinity", icon: "/skills-icons/affinity.webp", scale: 1 },
    { name: "DaVinci Resolve", icon: "/skills-icons/davinci-resolve.webp", scale: 1 },
    { name: "Antigravity", icon: "/skills-icons/antigravity.png", scale: 1 },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="w-full bg-gold py-2 mt-6 mb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="font-archivo font-black text-lg md:text-xl text-black tracking-widest uppercase">
                        Skills
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-24">
                    {skills.slice(0, 4).map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-4">
                            <span className="font-mono text-sm md:text-base text-[#D4AF37] uppercase tracking-widest">
                                [ {skill.name.toUpperCase()} ]
                            </span>
                            <div className="w-20 h-20 flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="max-w-full max-h-full object-contain"
                                    style={{ transform: `scale(${skill.scale})` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {skills[4] && (
                    <div className="flex flex-col items-center gap-4 mt-24">
                        <span className="font-mono text-sm md:text-base text-[#D4AF37] uppercase tracking-widest">
                            [ {skills[4].name.toUpperCase()} ]
                        </span>
                        <div className="w-20 h-20 flex items-center justify-center">
                            <img
                                src={skills[4].icon}
                                alt={skills[4].name}
                                className="max-w-full max-h-full object-contain"
                                style={{ transform: `scale(${skills[4].scale})` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}