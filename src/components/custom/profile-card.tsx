
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from './whatsapp-icon';
import { InstagramIcon } from './instagram-icon';
import { ArrowRight } from 'lucide-react';

const socialLinks = [
    { name: "instagram", href: "https://www.instagram.com/_who.is.viki_?igsh=MWtlbmFodXp2bHIwMg==", icon: <InstagramIcon className="text-white"/> },
    { name: "whatsapp", href: "https://wa.me/qr/TLRMYJTX7LV7C1", icon: <WhatsappIcon className="text-white" /> },
    { name: "mail", href: "mailto:jayavignesh2605@gmail.com", icon: <Mail className="text-white" /> },
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <Link key={index} href={link.href} target='_blank' className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-white hover:text-primary transition-colors group">
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
