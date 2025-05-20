import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Dialog,
  DialogContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const StyledImageList = styled(ImageList)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    columns: 2,
  },
  [theme.breakpoints.up('md')]: {
    columns: 3,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`gallery-tabpanel-${index}`}
      aria-labelledby={`gallery-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  // Sample gallery data - replace with your actual photos
  const galleryData = {
    photographer1: [
      { img: '/images/gallery1.jpg', title: 'Nature Scene 1' },
      { img: '/images/gallery2.jpg', title: 'Portrait 1' },
      { img: '/images/gallery3.jpg', title: 'Event 1' },
      // Add more photos
    ],
    photographer2: [
      { img: '/images/gallery4.jpg', title: 'Nature Scene 2' },
      { img: '/images/gallery5.jpg', title: 'Portrait 2' },
      { img: '/images/gallery6.jpg', title: 'Event 2' },
      // Add more photos
    ],
  };

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Gallery
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          aria-label="gallery tabs"
        >
          <Tab label="Photographer 1" />
          <Tab label="Photographer 2" />
        </Tabs>
      </Box>

      <TabPanel value={selectedTab} index={0}>
        <StyledImageList variant="masonry" cols={3} gap={8}>
          {galleryData.photographer1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(item.img)}
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => handleImageClick(item.img)}
                  >
                    <ZoomInIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <StyledImageList variant="masonry" cols={3} gap={8}>
          {galleryData.photographer2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(item.img)}
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => handleImageClick(item.img)}
                  >
                    <ZoomInIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </TabPanel>

      <Dialog
        open={!!selectedImage}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery; 