import React from 'react'
import { ButtonConfirm } from '@ui-controls/progress/ButtonConfirm'
import { IconButtonConfirm } from '@ui-controls/progress/IconButtonConfirm'
import { Nav } from '../components/Layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IcDeleteConfirm from '@mui/icons-material/Delete'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcLogout from '@mui/icons-material/Logout'
import IcConfirm from '@mui/icons-material/QuestionMark'

export const DemoConfirm: React.FC<{}> = () => {
    return <>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonConfirm
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, initial icon, confirm icon */}
                <ButtonConfirm
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, confirm icon */}
                <ButtonConfirm
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* initial icon, confirm icon */}
                <ButtonConfirm
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
        </Box>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                >
                    <IcDelete/>
                </IconButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'logout'}
                    tooltipConfirm={'click again to logout'}
                    confirmIcon={<IcConfirm/>}
                >
                    <IcLogout/>
                </IconButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'logout'}
                    tooltipConfirm={'click again to logout'}
                >
                    <IcLogout/>
                </IconButtonConfirm>
            </Box>
        </Box>
    </>
}

export const PageConfirm: React.ComponentType = () => {
    return (
        <>
            <Container maxWidth={'md'} fixed style={{display: 'flex'}}>
                <Nav/>
                <Box mx={2} py={1} style={{flexGrow: 1}}>
                    <Box mb={2}>
                        <Typography variant={'h1'} gutterBottom>
                            UI-Controls: <code>ButtonConfirm</code>, <code>IconButtonConfirm</code>
                        </Typography>
                    </Box>
                    <DemoConfirm/>
                </Box>
            </Container>
        </>
    )
}
