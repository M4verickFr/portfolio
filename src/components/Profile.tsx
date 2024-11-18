import Link from "next/link";
import Image from "next/image";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
    {
        name: "Github",
        username: "M4verickFr",
        href: "https://github.com/M4verickFr",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        username: "maverick-perrollaz",
        href: "https://linkedin.com/in/maverick-perrollaz",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "Mail",
        username: "maverick.perrollaz@pm.me",
        href: "mailto:maverick.perrollaz@pm.me",
        icon: <FaEnvelope className="size-4" />
    }
]

export const Profile = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                        <Image
                            width={150}
                            height={150}
                            quality={100}
                            src="/portfolio/avatar.jpeg"
                            alt="Profile Picture"
                            className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Maverick Perrollaz</h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Tech-savvy PhD, 3D rendering.
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        PhD candidate specializing in 3D rendering, cloud solutions, and scalable development.
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        <Link
                            target="_blank"
                            href="/resume_FR.pdf"
                            className="font-semibold"
                        >
                            MY RESUME
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map(({name, username, href, icon}, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    aria-label={`${name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </p>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
