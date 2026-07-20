import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Image as ImageIcon, Info } from 'lucide-react';
import { Card, Input, Button } from '@medicycle/ui';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'SELLER', text: 'Hello! I noticed you are interested in the Amoxicillin.', time: '10:00 AM' },
    { id: 2, sender: 'BUYER', text: 'Yes, is it still sealed in the original packaging?', time: '10:05 AM' },
    { id: 3, sender: 'SELLER', text: 'Absolutely. It is completely unopened with a 2027 expiry.', time: '10:06 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'BUYER', text: input, time: 'Just now' }]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-4 px-4 pb-20 md:py-8">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        
        <Card glass className="flex-1 flex flex-col overflow-hidden max-h-[70vh]">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-surface/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">
                CP
              </div>
              <div>
                <h3 className="font-bold leading-tight">City Pharmacy</h3>
                <p className="text-xs text-accent-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block"></span> Online
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0"><Info size={18} /></Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isBuyer = msg.sender === 'BUYER';
              return (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col max-w-[80%] ${isBuyer ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                >
                  <div className={`px-4 py-2 rounded-2xl ${isBuyer ? 'bg-accent-blue text-white rounded-br-sm' : 'bg-surface border border-white/10 text-gray-200 rounded-bl-sm'}`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.time}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-surfaceLighter/30 flex items-center gap-2">
            <button type="button" className="p-2 text-gray-400 hover:text-white transition-colors">
              <ImageIcon size={20} />
            </button>
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..." 
              className="flex-1 bg-surface border-white/5" 
            />
            <Button type="submit" size="sm" className="rounded-full h-10 w-10 p-0 shrink-0">
              <Send size={16} className="-ml-0.5" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
