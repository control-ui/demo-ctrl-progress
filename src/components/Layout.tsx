import React from 'react'
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import MuiList from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { PageHome } from '../pages/PageHome'
import { PageProgress } from '../pages/PageProgress'
import { PageProgressConfirm } from '../pages/PageProgressConfirm'
import { PageConfirm } from '../pages/PageConfirm'

export const Nav: React.FC<{}> = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return <Box style={{display: 'flex', flexDirection: 'column', flexShrink: 0}}>
        <MuiList>
            <ListItemButton onClick={() => navigate('/confirm')} selected={'/confirm' === location.pathname}>
                <ListItemText primary={'Confirm'}/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/progress')} selected={'/progress' === location.pathname}>
                <ListItemText primary={'Progress'}/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/progress-confirm')} selected={'/progress-confirm' === location.pathname}>
                <ListItemText primary={'Progress + Confirm'}/>
            </ListItemButton>
        </MuiList>
    </Box>
}

export const Layout: React.ComponentType<{}> = () => {
    const scrollWrapper = React.useRef<HTMLDivElement | null>(null)

    return <div
        ref={scrollWrapper}
        style={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100%',
            position: 'relative',
            overflow: 'auto',
            padding: '0 12px',
        }}
    >
        <Routes>
            <Route path={'/'} element={<PageHome/>}/>
            <Route path={'/confirm'} element={<PageConfirm/>}/>
            <Route path={'/progress-confirm'} element={<PageProgressConfirm/>}/>
            <Route path={'/progress'} element={<PageProgress/>}/>
        </Routes>
    </div>
}
