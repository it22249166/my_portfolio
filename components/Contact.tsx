import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="mb-6">Interested in working together? Send me a message.</p>

                <form className="max-w-md" onSubmit={(e) => e.preventDefault()}>
                    <label className="block mb-3">
                        <span className="text-sm">Email</span>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder="you@example.com"
                            required
                        />
                    </label>

                    <label className="block mb-3">
                        <span className="text-sm">Message</span>
                        <textarea
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
