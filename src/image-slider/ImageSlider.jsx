import { useEffect, useState } from 'react';

const imagesData = [
  'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((currentImage) =>
      currentImage - 1 < 0 ? imagesData.length - 1 : currentImage - 1
    );
  };

  const handleNxtImage = () => {
    setCurrentImage((currentImage) => (currentImage + 1) % imagesData.length);
  };

  useEffect(() => {
    const i = setInterval(() => {
      handleNxtImage();
    }, 3000);

    return () => clearInterval(i);
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex  items-center justify-center">
        <div className="text-8xl cursor-pointer" onClick={handlePrevImage}>
          {' '}
          ⬅️
        </div>
        <div className="w-[800px] h-[500px] relative">
          {imagesData.map((image, index) => (
            <img
              key={index}
              className={`absolute w-[800px] h-[500px]  transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              src={image}
              alt={`flower-${index}`}
            />
          ))}
        </div>
        <div className="text-8xl cursor-pointer" onClick={handleNxtImage}>
          ➡️
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
