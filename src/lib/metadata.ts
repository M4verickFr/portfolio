import { Metadata } from "next";

export function constructMetadata({
    title = "Maverick Perrollaz",
    description = "Tech enthusiast and PhD candidate specializing in 3D rendering and cloud solutions. Skilled in web development, AWS architecture, and point cloud processing. Experienced in managing technical integrations and delivering tailored solutions for clients. Passionate about combining simplicity and efficiency in all projects.",
    image = "/thumbnail.png",
    icons = "/portfolio/avatar.jpeg",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [image],
        },
        icons,
        metadataBase: new URL("https://m4verickfr.github.io/portfolio/"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
