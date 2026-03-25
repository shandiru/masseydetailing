import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleStarClick = (starRating) => {
        setRating(starRating);
        setError('');
        setSubmitted(false);
        setLoading(false);

        if (starRating <= 3) {
            setShowReviewBox(true);
        } else {
            setShowReviewBox(false);
            window.open("https://www.google.com/search?sca_esv=9041d924e50586b2&sxsrf=ANbL-n4ejLIvwPlRZJ_5WVQTtUO0jcnqxQ:1774458051704&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUfJEstMR0K8djWiq-lUSBSourRDVj43PnCIFNqcuVDFf9fWgvG47xPhprzWaDUE1eqBcigFWFrOR4m5t1lekCGN3Osg-9nUaTIu99nNrzygt42edw%3D%3D&q=Massey+Detailing+Reviews&sa=X&ved=2ahUKEwi7r9yuw7uTAxVTjGMGHap8ItEQ0bkNegQIOBAF&biw=1517&bih=703", "_blank", "noopener,noreferrer");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const visualStars = "★".repeat(rating) + "☆".repeat(5 - rating);

        const templateParams = {
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            rating: rating,
            star_rating: visualStars,
            review_text: reviewText,
            date: new Date().toLocaleString()
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => {
                setRating(0);
                setShowReviewBox(false);
                setReviewText('');
                setName('');
                setEmail('');
                setPhone('');
                setSubmitted(false);
            }, 4000);
        } catch (err) {
            setError('Failed to send review. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-2xl py-20">
                {/* Main Card with Glassmorphism */}
                <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

                    {/* Header Section */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-900 px-6 sm:px-8 md:px-12 py-10">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
                                Rate Your Experience
                            </h1>
                            <p className="text-blue-100/80 text-base sm:text-lg">
                                Your feedback helps us maintain showroom standards
                            </p>
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 md:px-12 py-12">
                        {/* Star Rating Section */}
                        <div className="mb-10">
                            <p className="text-center text-gray-400 mb-6 text-sm sm:text-base font-medium uppercase tracking-widest">
                                Tap a star to rate
                            </p>
                            <div className="flex justify-center items-center gap-2 sm:gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transform transition-all duration-200 hover:scale-125 focus:outline-none"
                                    >
                                        <svg
                                            className={`w-10 h-10 sm:w-14 sm:h-14 transition-all duration-200 ${star <= (hoveredRating || rating)
                                                ? 'text-blue-500 fill-current drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                                                : 'text-white/10 fill-current'
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-4 text-red-400 bg-red-900/20 rounded-xl border border-red-900/50 text-center">
                                {error}
                            </div>
                        )}

                        {/* Review Form */}
                        {showReviewBox && !submitted && (
                            <div className="animate-slide-down">
                                <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                        Tell us more
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full bg-black/50 px-4 py-3 rounded-xl border border-white/10 text-white focus:border-blue-600 outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full bg-black/50 px-4 py-3 rounded-xl border border-white/10 text-white focus:border-blue-600 outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            className="w-full bg-black/50 px-4 py-3 rounded-xl border border-white/10 text-white focus:border-blue-600 outline-none transition-all placeholder:text-gray-600"
                                            placeholder="Phone"
                                        />
                                        <textarea
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                            required
                                            rows={4}
                                            className="w-full bg-black/50 px-4 py-3 rounded-xl border border-white/10 text-white focus:border-blue-600 outline-none transition-all resize-none placeholder:text-gray-600"
                                            placeholder="What could we improve?"
                                        />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {loading ? 'Sending...' : 'Submit Feedback'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="bg-blue-600/10 border border-blue-600/30 rounded-2xl p-8 text-center animate-fade-in">
                                <h3 className="text-2xl font-bold text-blue-500 mb-2">Thank You!</h3>
                                <p className="text-gray-400">Your feedback has been received by our team.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-slide-down { animation: slide-down 0.4s ease-out; }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
            `}</style>
        </div>
    );
}