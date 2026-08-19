'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a project review summary.
 *
 * The flow takes a list of completed tasks and incomplete tasks as input and generates a summary highlighting key achievements and areas needing attention.
 *
 * @exports {generateProjectReviewSummary} - The main function to generate the project review summary.
 * @exports {GenerateProjectReviewSummaryInput} - The input type for the generateProjectReviewSummary function.
 * @exports {GenerateProjectReviewSummaryOutput} - The output type for the generateProjectReviewSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectReviewSummaryInputSchema = z.object({
  completedTasks: z.array(z.string()).describe('List of completed tasks.'),
  incompleteTasks: z.array(z.string()).describe('List of incomplete tasks.'),
});
export type GenerateProjectReviewSummaryInput = z.infer<typeof GenerateProjectReviewSummaryInputSchema>;

const GenerateProjectReviewSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the project review, highlighting completed vs incomplete tasks.'),
});
export type GenerateProjectReviewSummaryOutput = z.infer<typeof GenerateProjectReviewSummaryOutputSchema>;

export async function generateProjectReviewSummary(
  input: GenerateProjectReviewSummaryInput
): Promise<GenerateProjectReviewSummaryOutput> {
  return generateProjectReviewSummaryFlow(input);
}

const generateProjectReviewSummaryPrompt = ai.definePrompt({
  name: 'generateProjectReviewSummaryPrompt',
  input: {schema: GenerateProjectReviewSummaryInputSchema},
  output: {schema: GenerateProjectReviewSummaryOutputSchema},
  prompt: `You are a project manager tasked with generating a project review summary.

  Based on the lists of completed and incomplete tasks, create a concise summary highlighting key achievements and areas needing attention.

  Completed Tasks:
  {{#each completedTasks}}
  - {{this}}
  {{/each}}

  Incomplete Tasks:
  {{#each incompleteTasks}}
  - {{this}}
  {{/each}}

  Summary:`,
});

const generateProjectReviewSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectReviewSummaryFlow',
    inputSchema: GenerateProjectReviewSummaryInputSchema,
    outputSchema: GenerateProjectReviewSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateProjectReviewSummaryPrompt(input);
    return output!;
  }
);
