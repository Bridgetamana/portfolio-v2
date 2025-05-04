"use client";
import { Mail, Check } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ success: false, message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("bridget@example.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus({ success: false, message: "" });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSendStatus({
            success: true,
            message: "Message sent successfully!",
          });
          form.current.reset();
        },
        (error) => {
          setSendStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSendStatus({ success: false, message: "" }), 5000);
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
            <form ref={form} className="space-y-3" onSubmit={sendEmail}>
              <div>
                <label htmlFor="from_name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="you@example.com"
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
                  name="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              {sendStatus.message && (
                <div
                  className={`p-3 rounded-md ${
                    sendStatus.success
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {sendStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
