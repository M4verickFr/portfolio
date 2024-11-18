import Image from "next/image";

import { Building, CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Full-Stack Developer",
        company: "Cydis SARL.",
        logo: "/portfolio/atis_cloud_logo.jpg",
        duration: "2022 - Present",
        description:
            "Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.",
        link: "https://atis.cloud",
        images: [],
    },
    // {
    //     role: "Junior Full-Stack Developer",
    //     company: "Tech Innovators Inc.",
    //     logo: "/portfolio/company.svg",
    //     duration: "2022 - 2024",
    //     description:
    //         "Developed and maintained various client projects, focusing on responsive design and performance optimization.",
    //     link: "https://websolutions.com",
    //     images: [],
    // },
    // {
    //     role: "Intern Developer",
    //     company: "Tech Innovators Inc.",
    //     logo: "/portfolio/company.svg",
    //     duration: "2016 - 2018",
    //     description:
    //         "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
    //     link: "https://startupventures.com",
    //     images: [],
    // },
    // {
    //     role: "Intern Developer",
    //     company: "Tech Innovators Inc.", // TODO: Replace with actual company name
    //     logo: "/portfolio/company.svg", // TODO: Replace with actual logo
    //     duration: "2016 - 2018",
    //     description:
    //         "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
    //     link: "https://startupventures.com",
    //     images: [],
    // },
];

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li
                                key={i}
                                className="border-b last:border-b-0 pb-8 last:pb-0"
                            >
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={85}
                                        height={85}
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground flex items-center">
                                            <Building className="size-4 mr-2" />
                                            {j.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground flex items-center">
                                            <CalendarDays className="size-4 mr-2" />
                                            {j.duration}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-base mt-2">
                                    {j.description}
                                </p>
                                {/* Job Images */}
                                <JobImages
                                    role={j.role}
                                    link={j.link}
                                    images={j.images}
                                    duration={j.duration}
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    );
};
