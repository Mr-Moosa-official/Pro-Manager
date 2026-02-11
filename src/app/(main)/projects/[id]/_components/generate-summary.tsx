"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateProjectReviewSummary } from '@/ai/flows/generate-project-review-summary';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type SummaryTask = { id: string; title: string; status: 'completed' | 'incomplete' };

interface GenerateSummaryProps {
  tasks: SummaryTask[];
}

export function GenerateSummary({ tasks }: GenerateSummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setSummary(null);

    const completedTasks = tasks.filter(t => t.status === 'completed').map(t => t.title);
    const incompleteTasks = tasks.filter(t => t.status === 'incomplete').map(t => t.title);
    
    try {
      const result = await generateProjectReviewSummary({ completedTasks, incompleteTasks });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate summary. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Project Summary</CardTitle>
        <CardDescription>
          Generate an AI-powered summary of the project's progress based on completed and incomplete tasks.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Summary
        </Button>
        {isLoading && (
            <p className="text-sm text-muted-foreground flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                AI is analyzing your project...
            </p>
        )}
        {summary && (
          <div className="p-4 border rounded-lg bg-muted/50 space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Project Review</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
