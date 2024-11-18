import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Tech enthusiast and PhD candidate specializing in 3D rendering and cloud solutions. Skilled in web development, AWS architecture, and point cloud processing.
                </p>
                <p className="text-muted-foreground mt-2">
                    Experienced in managing technical integrations and delivering tailored solutions for clients. Passionate about combining simplicity and efficiency in all projects.
                </p>
            </CardContent>
        </Card>
    )
}