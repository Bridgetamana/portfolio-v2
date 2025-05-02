import { Mail, MapPin, Phone } from "lucide-react";

export default function contact() {
  return (
    <div className="min-h-screen py-24 px-8">
      <div className="max-w-6xl mx-auto pt-12">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-12 text-center">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
            <p className="text-white/70 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-white/70">bridget@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-white/70">Mars</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/30 p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="john@example.com"
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
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md"
                  placeholder="How can I help you?"
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
