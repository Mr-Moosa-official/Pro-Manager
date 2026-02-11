import { Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { reviews } from "@/lib/data";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            rating > i ? "text-amber-400 fill-amber-400" : "text-muted-foreground"
          )}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">What Our Users Say</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="flex-row items-start gap-4 space-y-0">
                <Avatar className="h-12 w-12 border">
                    <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.avatarHint} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription>{review.course}</CardDescription>
                </div>
                <StarRating rating={review.rating} />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">"{review.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
