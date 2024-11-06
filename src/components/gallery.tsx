import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { FaRocketchat } from 'react-icons/fa6';

interface Props {
  image_url: string;
  descryption: string;
  name: string;
}

const Gallary: React.FC<Props> = ({ image_url, descryption, name }) => {
  const [hover, setHover] = useState(false);

  const truncateString = (input: string): string => {
    if (input.length > 270) {
      return input.substring(0, 270) + '...';
    }
    return input;
  };

  return (
<Card
      sx={{ width: 400, height: 450, backgroundColor: '#e0e0e0', borderRadius: '23px', }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
>   
    <Box sx={{ width: 400, height: 450, display: 'flex', flexDirection: 'column', }}>
        {hover ? (
            <Box sx={{ 
                width: 400, // Ensure the width is 400
                height: 350, // Ensure the height is 350
                backgroundImage: `url(${image_url})`,
                backgroundSize: '400px 350px',
                // backgroundSize: 'fill', // Change to contain to prevent cropping
                // backgroundPosition: 'center', // Center the image
                opacity: 1, // Dim effect
                // position: 'absolute', // Position it absolutely
                // top: 0, // Align to the top
                // left: 0, // Align to the left
                // ransition: 'opacity 0.3s ease',
                // zIndex: 2, // Ensure it's below the text
            }}>
                <Typography variant="h6" sx={{ textAlign: 'justify', padding: 3 ,}}>
                {truncateString(descryption)}
                </Typography>
          </Box>
        ) : (
          <CardMedia
            
            component="img"
            image={image_url}
            alt="Gallery Image"
            sx={{
              overflow: 'hidden',
              width: 400 ,
              height: 350,
              objectFit: 'fill',
            }}
          />
        )}

        <Box
            sx={{
                width: 400,
                height: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderTop: '1px solid #424242',
                padding: '0 0', // Optional padding for spacing
            }}
            >
            <Box
                sx ={{
                    width: 200,
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color : "brown",  
                    borderRight: '1px solid #cccccc',
                }} 
            >
                <Typography variant="h6">{name}</Typography>
            </Box>
            <Box
                sx ={{
                    width: 200,
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',  

                }} 
            >
                <FaRocketchat style={{ fontSize: '34px' , color : "brown"}} />
            </Box>
        </Box>

        
    </Box>
</Card>
  );
};

export default Gallary;
