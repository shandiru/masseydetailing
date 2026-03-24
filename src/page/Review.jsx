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

    // Fetching from .env (Vite specific)
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
            window.open("https://www.google.com/search?sca_esv=d84086d7290c4745&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=ANbL-n6fl-TFqi9qbQky2lvFx6uAqN55_g:1774360214274&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUfJEstMR0K8djWiq-lUSBSourRDVj43PnCIFNqcuVDFf9fWgvG47xPhprzWaDUE1eqBcigFWFrOR4m5t1lekCGN3Osg-9nUaTIu99nNrzygt42edw%3D%3D&q=Massey+Detailing+Reviews&sa=X&ved=2ahUKEwir4Jny1riTAxXbnq8BHfAQCWcQ0bkNegQILxAF&biw=1517&bih=703&dpr=0.9", "_blank", "noopener,noreferrer");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const visualStars = "★".repeat(rating) + "☆".repeat(5 - rating);

        const templateParams = {
            to_name: 'Business Owner',
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            rating: rating,
            star_rating: visualStars, // Matches the {{star_rating}} in your HTML email
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
        <div className="min-h-screen bg-slate-50 md:mt-10 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full mt-20 max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden">

                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 sm:px-8 md:px-12 py-8">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                                Rate Your Experience
                            </h1>
                            <p className="text-blue-100 text-base sm:text-lg font-medium">
                                Your feedback helps us serve you better
                            </p>
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                        {/* Star Rating Section */}
                        <div className="mb-8">
                            <p className="text-center text-gray-600 mb-6 text-sm sm:text-base font-medium">
                                How would you rate our service?
                            </p>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-full p-1"
                                    >
                                        <svg
                                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-200 ${star <= (hoveredRating || rating)
                                                ? 'text-blue-600 fill-current drop-shadow-md'
                                                : 'text-gray-200 fill-current'
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="text-center mt-4 text-lg sm:text-xl font-semibold text-blue-700 animate-fade-in">
                                    {rating <= 3 ? "We'd love to know why" : "Glad you enjoyed it!"}
                                </p>
                            )}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-4 text-red-700 bg-red-50 rounded-xl border border-red-100 text-center">
                                {error}
                            </div>
                        )}

                        {/* Review Form */}
                        {showReviewBox && !submitted && (
                            <div className="animate-slide-down">
                                <div className="bg-blue-50/50 rounded-2xl p-6 sm:p-8 border-2 border-blue-100">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Tell us more
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                            placeholder="Your Email"
                                        />
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                            placeholder="Phone Number"
                                        />
                                        <textarea
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
                                            placeholder="How was your experience?"
                                        />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {loading ? 'Sending...' : 'Submit Review'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                                <p className="text-green-700">Your feedback has been received.</p>
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