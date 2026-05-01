'use server';
/**
 * @fileOverview Canal de suporte informativo para dúvidas odontológicas.
 *
 * - dentalSupportAssistant - Função que processa dúvidas de pacientes.
 * - DentalSupportAssistantInput - Tipo de entrada para a função.
 * - DentalSupportAssistantOutput - Tipo de retorno para a função.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DentalSupportAssistantInputSchema = z.object({
  question: z.string().describe('A dúvida do paciente sobre odontologia.'),
});
export type DentalSupportAssistantInput = z.infer<typeof DentalSupportAssistantInputSchema>;

const DentalSupportAssistantOutputSchema = z.object({
  answer: z.string().describe('A resposta informativa para o paciente.'),
});
export type DentalSupportAssistantOutput = z.infer<typeof DentalSupportAssistantOutputSchema>;

export async function dentalSupportAssistant(
  input: DentalSupportAssistantInput
): Promise<DentalSupportAssistantOutput> {
  return dentalSupportFlow(input);
}

const dentalSupportPrompt = ai.definePrompt({
  name: 'dentalSupportPrompt',
  input: { schema: DentalSupportAssistantInputSchema },
  output: { schema: DentalSupportAssistantOutputSchema },
  prompt: `Você é um membro da equipe de atendimento da CuraOdonto, uma clínica odontológica de excelência.
Seu objetivo é fornecer informações claras e acolhedoras sobre saúde bucal.
Ao responder, foque no conhecimento odontológico e encoraje o paciente a agendar uma avaliação profissional para um diagnóstico preciso.
Mantenha um tom profissional, humano e prestativo.

Dúvida do Paciente: {{{question}}}`,
});

const dentalSupportFlow = ai.defineFlow(
  {
    name: 'dentalSupportFlow',
    inputSchema: DentalSupportAssistantInputSchema,
    outputSchema: DentalSupportAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await dentalSupportPrompt(input);
    return output!;
  }
);
