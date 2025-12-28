import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../services/api';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { role: 'agent', content: 'Hello! I am your personal bill payment assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            const response = await sendMessage(userMsg);
            setMessages(prev => [...prev, { role: 'agent', content: response.agent }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'agent', content: "Sorry, I'm having trouble connecting to the server." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 p-4">
            <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto w-full">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user'
                                ? 'bg-blue-600 text-white rounded-br-none'
                                : 'bg-gray-200 text-gray-800 rounded-bl-none'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-200 text-gray-500 p-3 rounded-lg rounded-bl-none animate-pulse">
                            Typing...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="flex gap-2 max-w-2xl mx-auto w-full">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold shadow-sm transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatInterface;
