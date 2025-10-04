
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BehanceIcon } from './behance-icon';
import { ArrowRight } from 'lucide-react';

const socialLinks = [
    { href: "#", icon: <Twitter /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <BehanceIcon /> },
];

export function ProfileCard() {
    const developerImage = PlaceHolderImages.find(p => p.id === 'developer-photo');

    return (
        <div className="bg-card rounded-2xl p-6 border border-border/50 sticky top-28">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                {developerImage && (
                    <Image
                        src={developerImage.imageUrl}
                        alt={developerImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={developerImage.imageHint}
                    />
                )}
            </div>
            <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-muted-foreground">Available for work</span>
            </div>
            <h2 className="text-3xl font-bold mb-1">Jayavignesh</h2>
            <p className="text-muted-foreground mb-6">Frontend Developer and UI/UX Designer</p>
            
            <div className="flex justify-center gap-4 mb-6">
                 {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-colors">
                        {link.icon}
                    </Link>
                ))}
            </div>

            <Button asChild className="w-full font-bold text-base rounded-full" size="lg">
                <Link href="#contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
    );
}
