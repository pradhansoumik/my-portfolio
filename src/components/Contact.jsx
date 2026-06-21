import { useState } from "react";
import { siteConfig } from "../data/site.config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-sunset-dark text-black dark:text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Me</h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-12" />
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Have a project in mind or want to connect? Send me a message — I&apos;d
        love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-sunset focus:outline-none"
          required
          disabled={status === "loading"}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-sunset focus:outline-none"
          required
          disabled={status === "loading"}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-sunset focus:outline-none resize-none"
          required
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-3 bg-sunset text-white font-semibold rounded-full hover:bg-sunset-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-center text-sm">
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center text-sm">
            Something went wrong. Try emailing me directly below.
          </p>
        )}
      </form>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <button
          onClick={copyEmail}
          className="flex items-center space-x-2 text-lg hover:text-sunset transition-colors"
        >
          <span>📧</span>
          <span>{copied ? "Copied!" : "Copy Email"}</span>
        </button>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg hover:text-sunset transition-colors"
        >
          <span>💻</span>
          <span>GitHub</span>
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg hover:text-sunset transition-colors"
        >
          <span>🔗</span>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
