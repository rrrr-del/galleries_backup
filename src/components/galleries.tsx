
import Gallary from "./gallery";


const Galleries: React.FC = () => {  
    const galleryData = [  
      {  
        image_url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',  
        descryption: 'This is the first gallery item.',  
      },  
      {  
        image_url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',  
        descryption: 'This is the second gallery itemmm.',   
      },  
      {  
        image_url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',  
        descryption: 'This is the third gallery item.',   
      },  
      {  
        image_url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',  
        descryption: 'This is the fourth gallery item.',   
      },  
    ];  
  
    return (  
      <div className="galleries">  
        <h2>Gallery Collection</h2>  
        <div className="row">  
          {galleryData.map((item, index) => (  
            <div className="col-md-3" key={index}>  
              <Gallary  
                image_url={item.image_url}  
                descryption={item.descryption}    
              />  
            </div>  
          ))}  
        </div>  
      </div>  
    );  
  };  
  
  export default Galleries;  