import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Project Management Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden">
            <div className="relative w-full aspect-video">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    data-ai-hint={course.imageHint}
                />
            </div>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription className="line-clamp-3 min-h-[60px]">{course.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full">Start Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
