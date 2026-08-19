"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, BookOpen, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { projects, reviews } from '@/lib/data';

const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/projects', label: 'Projects', icon: Briefcase, badge: projects.length },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/reviews', label: 'Reviews', icon: Star, badge: reviews.length },
];

export function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = (pathname === '/' && link.href === '/dashboard') || (pathname.startsWith(link.href) && link.href !== '/') || (pathname === link.href);

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            isActive && "bg-muted text-primary"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        {link.label}
                        {link.badge && (
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                {link.badge}
                            </Badge>
                        )}
                    </Link>
                );
            })}
        </>
    );
}
