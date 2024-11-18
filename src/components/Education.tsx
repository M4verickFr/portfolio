import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { EducationImages } from "@/components/EducationImages";

const education = [
    {
        role: "Cycle d’ingénieur IDU",
        institution: "Polytech Annecy-Chambéry",
        logo: "/portfolio/polytech_annecy_chambry_logo.jpg",
        duration: "2020 - 2023",
        description:
            "Specialization in 'Computer Science, Data, and User Applications'",
        link: "https://www.linkedin.com/school/polytech-annecy-chambery/posts/?feedView=all",
        images: [
            "/portfolio/polytech_annecy_chambery_cover.jpg",
        ],
    },
]

export const Education = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Education Background</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {education.map((e, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Education Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={e.logo}
                                        alt={e.institution}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {e.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {e.institution}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {e.duration}
                                </p>
                                <p className="text-sm mt-2">{e.description}</p>
                                {/* Experience Images */}
                                <EducationImages 
                                    role={e.role} 
                                    link={e.link}
                                    images={e.images} 
                                    duration={e.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}
