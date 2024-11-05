import React, { useState } from 'react';  
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';  
import { FaRocketchat } from 'react-icons/fa6';  

interface Props {  
  image_url: string;  
  descryption: string;  
}  

const Gallary: React.FC<Props> = ({ image_url, descryption }) => {  
  const [hover, setHover] = useState(false);  


    const truncateString = (input: string): string => 
    {  
        if (input.length > 270) {  
            return input.substring(0, 270) + "...";  
        }  
        return input;  
    }; 

  return (  
    <Card  
      sx={{ width: 400, height: 400 }}
      onMouseEnter={() => { setHover(true); }}  
      onMouseLeave={() => { setHover(false); }}  
      style={{backgroundColor: "#e0e0e0" }}  
    >  
      {hover ? (  
            <Box  sx={{width: 400, height: 400}} justifyContent="center">  
                <Typography variant="h6" sx={{textAlign: 'justify', padding : 3 ,}}>
                    
                    {truncateString(descryption)}
                </Typography>
                <Box display="flex" flexDirection="column-reverse" justifyContent="space-between" alignItems="center" style={{ borderTop: '1px solid #424242', paddingBottom: '10px' }}>  
                    <Box style={{ flexGrow: 1 }} />  
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
                objectFit: 'cover',
                width: '100%',
                height: '100%' 
            }}  
          />  
        </Box>  
      )}  
    </Card>  
  );  
};  

export default Gallary;