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
      sx={{ width: 400, height: 450, backgroundColor: '#e0e0e0' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
>
    <Box sx={{ width: 400, height: 450, display: 'flex', flexDirection: 'column' }}>
        {hover ? (
            <Box sx={{ width: 400, height: 350, overflow: 'hidden' }}>
                <Typography variant="h6" sx={{ textAlign: 'justify', padding: 3 }}>
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
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid #424242',
                }}
            >
                <Typography variant="h5" sx ={{overflow: 'hidden'}}>            
                    {name}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: 400,
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid #424242',
                }}
            >
                <FaRocketchat style={{ fontSize: '24px' }} />
            </Box>
        
    </Box>
</Card>
  );
};

export default Gallary;
