"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, X, MessageCircle, HeartPulse, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { dentalSupportAssistant } from '@/ai/flows/ai-dental-info-assistant';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'support';
  content: string;
};

export function DentalSupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'support', content: 'Olá! Bem-vindo ao canal de suporte da CuraOdonto. Como podemos ajudar com suas dúvidas sobre saúde bucal hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await dentalSupportAssistant({ question: userMessage });
      setMessages(prev => [...prev, { role: 'support', content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'support', content: 'Desculpe, tivemos um problema ao processar sua mensagem. Por favor, tente novamente em alguns instantes ou entre em contato pelo telefone.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border w-[350px] sm:w-[400px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">CuraSuporte</h4>
                <p className="text-xs text-white/70">Atendimento Informativo</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-[400px]">
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex gap-3 max-w-[85%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", m.role === 'user' ? "bg-secondary" : "bg-primary")}>
                    {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <ShieldCheck className="w-5 h-5 text-white" />}
                  </div>
                  <div className={cn("p-3 rounded-2xl text-sm leading-relaxed shadow-sm", m.role === 'user' ? "bg-secondary/10 text-foreground" : "bg-slate-100 text-foreground")}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mr-auto max-w-[85%] animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary/50" />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100 text-sm italic">Processando sua dúvida...</div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-slate-50">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <Input
                placeholder="Digite sua dúvida aqui..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="rounded-full bg-white h-11"
              />
              <Button type="submit" size="icon" disabled={isLoading} className="rounded-full bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
        </button>
      )}
    </div>
  );
}
