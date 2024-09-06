import React, { useState } from 'react';
import { Box, Typography, TextField, Avatar, Button, Fade } from '@mui/material';

const getInitials = (name) => {
  const initials = name.slice(0, 1).toUpperCase();
  const lastNameInitials = name.split(' ').slice(-1)[0].slice(0, 1).toUpperCase();
  return initials + lastNameInitials;
};

const InterviewTest = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [name, setName] = useState(""); 
  const [submitted, setSubmitted] = useState(false); 
  const [visible, setVisible] = useState(true); 
  const initials = getInitials(name);
  const links = Array.from({ length: 19 }, (_, i) => i + 1);

  const handleAvatarClick = (index) => {
    if (selectedAvatar === index) {
      setSelectedAvatar(null);
    } else {
      setSelectedAvatar(index);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setVisible(false); //like fading out
  };

  return (
    <Fade in={visible} timeout={500}>
      <Box sx={{ borderRadius: '32px', boxShadow: 2, background: '#F8F8F8', p: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{ color: 'black', fontWeight: '500', width: '900px' }}
            variant="h4"
            color="primary"
            gutterBottom
          >
            Grown-ups, step aside! It's time for your kids to create their profile
          </Typography>
        </Box>

        <Box sx={{ m: '20px', mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '50%', borderRadius: '16px' }}>
            <TextField
              required
              autoFocus
              placeholder="Your kids name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputProps={{ style: { textAlign: 'center' }, className: 'custom-placeholder' }}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:focus-within .custom-placeholder::placeholder': { color: 'transparent' }
                }
              }}
            />
          </Box>
        </Box>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(10, 1fr)',
              gap: 2,
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                width: 56,
                height: 56,
                boxShadow: selectedAvatar === 'initials' ? '0 0 0 2px blue' : 'none',
                padding: selectedAvatar === 'initials' ? '2px' : '0',
                backgroundColor: selectedAvatar === 'initials' ? 'white' : 'transparent',
              }}
              onClick={() => handleAvatarClick('initials')}
            >
              <Avatar
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {initials}
              </Avatar>
            </Avatar>
            {links.map((link, index) => (
              <Avatar
                key={link}
                src={`https://ursorassets.s3.eu-west-1.amazonaws.com/profileIcon${link}.png`}
                sx={{
                  width: 56,
                  height: 56,
                  boxShadow: selectedAvatar === index ? '0 0 0 2px blue' : 'none',
                  padding: '2px'
                }}
                onClick={() => handleAvatarClick(index)}
              />
            ))}
          </Box>
        </div>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!name || selectedAvatar === null}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default InterviewTest;