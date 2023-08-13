import React, { useState } from "react";

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };

  return (
    <div className="imagepickerdiv">
        
        <table>
            <tr>
                <td><center><h3>Image Picker</h3></center></td>
                <td rowspan="2"><center>{selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                style={{ maxWidth: "60%", maxHeight: "60%" }}
              />
            )}</center></td>
                
            </tr>
        
            <tr>
            <td><input type="file" accept="image/*" onChange={handleImageChange} /></td>
            </tr>
        </table>
      
    </div>
  );
};

export default ImagePicker;
