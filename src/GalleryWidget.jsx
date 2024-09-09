import React, { useState } from 'react';

const GalleryWidget = () => {
    const [images, setImages] = useState([
    './pg.jpg',
    './pg2.jpg',
    './pg3.jpg',
    './pg4.jpg',
    './pg5.jpg',
    './pg.jpg',
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const addImage = () => {
        setImages([...images, `/img${images.length + 1}.png`]);
    };

    const nextImage = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="bg-slate-700 p-4 rounded-lg relative h-[49%]">
            {/* Header Section with Add Button */}
            <div className='flex justify-between mb-20' >
                <h2 className="text-white bg-gray-900 p-2 px-6 rounded-2xl mb-2">Gallery</h2>
                <div className="flex justify-between items-center mb-4 gap-5">
                    <button className="bg-slate-700 text-white py-2 px-4 rounded-3xl shadow-custom-soft hover:bg-gray-700 transition-all" onClick={addImage}>
                        + Add Image
                    </button>
                    <div className="top-0 right-0 flex items-center space-x-2">
                        <button
                            onClick={prevImage}
                            className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-custom-soft"
                        >
                            ←
                        </button>

                        <button
                            onClick={nextImage}
                            className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-custom-soft"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Display with Navigation */}
            <div className="relative">
                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index}`}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    ))}
                </div>

                {/* Navigation Buttons */}

            </div>
        </div>
    );
};

export default GalleryWidget;
