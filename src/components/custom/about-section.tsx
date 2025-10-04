import { Award, Briefcase, Smile } from "lucide-react";

const stats = [
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        value: "5+",
        label: "Years of Experience"
    },
    {
        icon: <Briefcase className="w-10 h-10 text-primary" />,
        value: "80+",
        label: "Completed Projects"
    },
    {
        icon: <Smile className="w-10 h-10 text-primary" />,
        value: "50+",
        label: "Happy Clients"
    }
];

export function AboutSection() {
    return (
        <section id="about" className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Little About Me</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    I'm a passionate and results-driven Frontend Developer and UI/UX Designer with a knack for creating engaging and user-centric digital experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-card p-8 rounded-xl text-center border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
                        <div className="flex justify-center mb-4">
                            {stat.icon}
                        </div>
                        <p className="text-6xl font-black text-primary">{stat.value}</p>
                        <p className="text-muted-foreground mt-2 text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
