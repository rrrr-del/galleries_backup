import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { FaRocketchat } from 'react-icons/fa6';

interface Props {
  image_url: string;
  descryption: string;
}

const Gallary: React.FC<Props> = ({ image_url, descryption }) => {
  const [hover, setHover] = useState(false);

  const truncateString = (input: string): string => {
    if (input.length > 270) {
      return input.substring(0, 270) + '...';
    }
    return input;
  };

  return (
    <Card
      sx={{ width: 400, height: 400, backgroundColor: '#e0e0e0' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <Box sx={{ width: 400, height: 400, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ width: 400, height: 350, display: 'flex' }}>
            <Typography variant="h6" sx={{ textAlign: 'justify', padding: 3 }}>
              {truncateString(descryption)}
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
      ) : (
        <Box sx={{ width: 400, height: 400 }}>
          <CardMedia
            component="img"
            image={image_url}
            alt="Gallery Image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'fill', 
            }}
          />
        </Box>
      )}
    </Card>
  );
};

export default Gallary;
