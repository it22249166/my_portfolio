"use client";
import { motion } from "framer-motion";

export default function Contact() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            email: String(formData.get("email") ?? ""),
            message: String(formData.get("message") ?? ""),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.message ?? "Request failed");
            }
            form.reset();
            alert("Thanks — message submitted");
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Could not submit your message. Please try again.";
            alert(message);
        }
    };
    return (
        <section id="contact" className="py-12">
            <div className="container mx-auto px-4">
               <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative inline-block text-3xl font-bold text-blue-500 mb-12"
                >
                Contact me
                <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute left-0 -bottom-2 h-[2px] bg-blue-600"
                />
                </motion.h2>
                <p className="mb-6">Interested in working together? Send me a message.</p>

                <form className="max-w-md" onSubmit={handleSubmit}>
                    <label className="block mb-3">
                        <span className="text-sm">Email</span>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder="you@example.com"
                            required
                        />
                    </label>

                    <label className="block mb-3">
                        <span className="text-sm">Message</span>
                        <textarea
                            name="message"
                            className="mt-1 block w-full rounded border px-3 py-2"
                            rows={4}
                            placeholder="Hi — I'd like to work with you on..."
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
