import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "./alert_for_create_post";

export const Cp = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertType, setAlertType] = useState('success'); // ya "info", "error", "warning"

    const fileInputStyle = {
        display: "none",
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image === null) {
           setAlertMsg("please upload post image!")
                setAlertType("success")
                setShowAlert(true)
        } else {
            setAlertMsg("Post uploaded successfully!")
                setAlertType("success")
                setShowAlert(true)
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 p-4">
                <button
                    onClick={() => navigate('/home')}
                    className="absolute left-4 top-4 flex items-center gap-2 bg-white/80 border border-gray-300 rounded-full px-4 py-2 shadow-md backdrop-blur-sm hover:bg-gray-100 transition-all
        md:left-8 md:top-8"
                    style={{ zIndex: 10 }}
                >
                    {/* Arrow Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium text-gray-700">Go Back</span>
                </button>
                {showAlert && (
                    <AlertBox type={alertType} onClose={() => setShowAlert(false)}>
                        {alertMsg}
                    </AlertBox>
                )}
                <form
                    className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                        Create New Post
                    </h2>

                    {/* Image Preview */}
                    <div className="flex flex-col items-center">
                        <label
                            htmlFor="image-upload"
                            className="cursor-pointer w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                            style={{ position: "relative" }}
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            ) : (
                                <span className="text-gray-400 text-center">
                                    Click to upload<br />image
                                </span>
                            )}
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"

                                style={fileInputStyle}
                                onChange={handleImageChange}
                            />
                        </label>
                        <span className="text-xs text-gray-500 mt-2">
                            Supported: JPG, PNG, GIF
                        </span>
                    </div>

                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-3 text-gray-700 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            placeholder="What's on your mind?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    {/* Location Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 text-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            placeholder="Add location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
                    >
                        Upload Post
                    </button>
                </form>
            </div>
        </>
    )
}
