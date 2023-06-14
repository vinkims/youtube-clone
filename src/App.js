import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import ChannelDetail from './components/ChannelDetail';
import Feed from './components/Feed';
import Navbar from './components/Nabar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';

const App = () => {
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail /> } />
                <Route path='/channel/:id' element={<ChannelDetail /> } />
                <Route path='/search/:searchTerm' element={<SearchFeed /> } />
            </Routes>
        </Box>
    </BrowserRouter>
}

export default App