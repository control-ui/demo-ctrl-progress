import React from 'react'
import { ButtonProgress } from '@ui-controls/progress/ButtonProgress'
import { IconButtonProgress } from '@ui-controls/progress/IconButtonProgress'
import { ps, useProgress } from 'react-progress-state'
import { Nav } from '../components/Layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IcLogin from '@mui/icons-material/Login'
import Button from '@mui/material/Button'

export const DemoProgress: React.FC<{}> = () => {
    const [loading1, setLoading1, startLoading1] = useProgress()
    const [loading2, setLoading2, startLoading2] = useProgress()
    const [loading3, setLoading3, startLoading3] = useProgress()
    const [loading4, setLoading4, startLoading4] = useProgress()
    const [show, setShow] = React.useState(true)
    return <>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Button size={'small'} onClick={() => setShow(s => !s)}>
                {show ? 'hide' : 'show'}
            </Button>
        </Box>
        {show ? <>
            <p><code>showInitial=false</code> (default)</p>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                <Box mr={2} mb={2}>
                    <ButtonProgress
                        progress={loading1.progress}
                        onClick={() => {
                            const pid = startLoading1()
                            window.setTimeout(() => {
                                const isPid = setLoading1(ps.done, undefined, pid)
                                if(!isPid) return
                                console.log('done', pid)
                            }, 600)
                        }}
                    >
                        submit w/ success
                    </ButtonProgress>
                </Box>
                <Box mr={2} mb={2}>
                    <ButtonProgress
                        progress={loading2.progress}
                        onClick={() => {
                            const pid = startLoading2()
                            window.setTimeout(() => {
                                const isPid = setLoading2(ps.error, undefined, pid)
                                if(!isPid) return
                                console.log('error', pid)
                            }, 600)
                        }}
                    >
                        submit w/ error
                    </ButtonProgress>
                </Box>
            </Box>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                <Box mr={2} mb={2}>
                    <IconButtonProgress
                        progress={loading3.progress}
                        onClick={() => {
                            const pid = startLoading3()
                            window.setTimeout(() => {
                                const isPid = setLoading3(ps.done, undefined, pid)
                                if(!isPid) return
                                console.log('done', pid)
                            }, 600)
                        }}
                        tooltip={'submit w/ success'}
                    >
                        <IcLogin/>
                    </IconButtonProgress>
                </Box>
                <Box mr={2} mb={2}>
                    <IconButtonProgress
                        progress={loading4.progress}
                        onClick={() => {
                            const pid = startLoading4()
                            window.setTimeout(() => {
                                const isPid = setLoading4(ps.error, undefined, pid)
                                if(!isPid) return
                                console.log('error', pid)
                            }, 600)
                        }}
                        tooltip={'submit w/ error'}
                    >
                        <IcLogin/>
                    </IconButtonProgress>
                </Box>
            </Box>
        </> : null}
        {show ? <>
            <p><code>showInitial=true</code></p>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                <Box mr={2} mb={2}>
                    <ButtonProgress
                        showInitial
                        progress={loading1.progress}
                        onClick={() => {
                            const pid = startLoading1()
                            window.setTimeout(() => {
                                const isPid = setLoading1(ps.done, undefined, pid)
                                if(!isPid) return
                                console.log('done', pid)
                            }, 600)
                        }}
                    >
                        submit w/ success
                    </ButtonProgress>
                </Box>
                <Box mr={2} mb={2}>
                    <ButtonProgress
                        showInitial
                        progress={loading2.progress}
                        onClick={() => {
                            const pid = startLoading2()
                            window.setTimeout(() => {
                                const isPid = setLoading2(ps.error, undefined, pid)
                                if(!isPid) return
                                console.log('error', pid)
                            }, 600)
                        }}
                    >
                        submit w/ error
                    </ButtonProgress>
                </Box>
            </Box>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                <Box mr={2} mb={2}>
                    <IconButtonProgress
                        showInitial
                        progress={loading3.progress}
                        onClick={() => {
                            const pid = startLoading3()
                            window.setTimeout(() => {
                                const isPid = setLoading3(ps.done, undefined, pid)
                                if(!isPid) return
                                console.log('done', pid)
                            }, 600)
                        }}
                        tooltip={'submit w/ success'}
                    >
                        <IcLogin/>
                    </IconButtonProgress>
                </Box>
                <Box mr={2} mb={2}>
                    <IconButtonProgress
                        showInitial
                        progress={loading4.progress}
                        onClick={() => {
                            const pid = startLoading4()
                            window.setTimeout(() => {
                                const isPid = setLoading4(ps.error, undefined, pid)
                                if(!isPid) return
                                console.log('error', pid)
                            }, 600)
                        }}
                        tooltip={'submit w/ error'}
                    >
                        <IcLogin/>
                    </IconButtonProgress>
                </Box>
            </Box>
        </> : null}
    </>
}

export const PageProgress: React.ComponentType = () => {
    return (
        <>
            <Container maxWidth={'md'} fixed style={{display: 'flex'}}>
                <Nav/>
                <Box mx={2} py={1} style={{flexGrow: 1}}>
                    <Box mb={2}>
                        <Typography variant={'h1'} gutterBottom>
                            UI-Controls: <code>ButtonProgress</code>, <code>IconButtonProgress</code>
                        </Typography>
                    </Box>
                    <DemoProgress/>
                </Box>
            </Container>
        </>
    )
}
