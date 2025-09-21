import "./currentimage.css"
export default function mainimage({images, setCurrentImage, currentImage,}) {
    setCurrentImage(images)

return ( 
    <>
    {currentImage && ( 
        <div className="current-image-container">
            <img src={currentImage.url} alt={currentImage.alt}/>
        </div>
    )}
        </>
)}

//!NAV BUTTONS
// code for arrow nagivation on next/previos
// A next button needs to go here
// A previous button needs to go here

//!Scrolls
// Need look at scrolls etc for the thumbnail gallery container

//!Keyboard Navigation
// Selector code for keyboard navigation with tab
