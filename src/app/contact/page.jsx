"use client";
import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("bridget@example.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex flex-1 pb-8 pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-8 text-center">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif mb-6">
              Get in Touch
            </h2>
            <p className="text-white/70 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <button
                    onClick={copyEmail}
                    className="flex items-center group"
                  >
                    <span className="text-white/70 group-hover:text-accent transition-colors">
                      bridget@example.com
                    </span>
                    {isCopied ? (
                      <Check className="ml-2 h-4 w-4 text-green-500" />
                    ) : (
                      <span className="ml-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to copy
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Send a Message</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
