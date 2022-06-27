import React from 'react'
import { Box, Divider, FormGroup, Grid, Stack, TextField, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { borderRadius, display } from '@mui/system'
import Layout from '../components/Layout'
import StackLeft from "../components/StackLeft"
import StackRight from "../components/StackRight"
import Img1 from '../images/1.jpg'
import Img2 from '../images/202.jpg'




function Page() {
    return (
        <Stack
            direction='column'
            spacing={2}
            padding={8}>
            <Layout heading="System Specification">
                <Stack direction='row' gap='1'>
                    <Box py={2} ml={4}>
                        <img src={Img1} width={150} height={200} />
                    </Box>
                    <Stack direction="row" gap={8} pt={6}>
                        <Stack direction="column" gap={1}>
                            <StackLeft>Model</StackLeft>
                            <StackLeft>System Rating</StackLeft>
                            <StackLeft>Capacity</StackLeft>
                            <StackLeft>Battery Type</StackLeft>
                            <StackLeft>Battery Time</StackLeft>
                            <StackLeft>Weight</StackLeft>
                        </Stack>
                        <Stack direction="column" gap={1}>
                            <StackRight>PB-BPX1</StackRight>
                            <StackRight>1100 VA</StackRight>
                            <StackRight>1024 Wh</StackRight>
                            <StackRight>Lithium Ion</StackRight>
                            <StackRight>3 Hours @400 W Load</StackRight>
                            <StackRight>20 KG</StackRight>
                        </Stack>
                    </Stack>

                </Stack>


            </Layout>
            <Layout heading='System details'>

                <Stack direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
                    <Box width="50%"><Typography color='#B0B6C1'>Subscription tenure</Typography>
                        <RadioGroup>
                            <Box display='flex' flexDirection='column' marginLeft={10}>
                                <Stack spacing={1}>

                                    <Box sx={{
                                        backgroundColor: 'lightblue',
                                        width: '350px',
                                        height: '40px',
                                        borderRadius: 4,
                                        display: 'flex',
                                    }}>
                                        <Box display='flex' flexDirection='row' marginLeft={1}>
                                            <FormControlLabel control={<Radio />} label="3MONTHS" value="3mon" />
                                            <Box display='flex' flexDirection='row' marginRight={17}>
                                            </Box>
                                        </Box>
                                        <Grid  marginLeft={-15} marginTop={1}>
                                            <img src={Img2} width={40} height={30}/>
                                        </Grid>
                                        <Box display='flex' flexDirection='row' marginLeft={8} marginTop={1}>
                                            <Typography>20%OFF</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        backgroundColor: 'lightblue',
                                        width: '350px',
                                        height: '40px',
                                        borderRadius: 4,
                                        display: 'flex',
                                    }}>
                                        <Box display='flex' flexDirection='row' marginLeft={1}>
                                            <FormControlLabel control={<Radio />} label="6MONTHS" value="6mon" />
                                            <Box display='flex' flexDirection='row' marginRight={17}>
                                            </Box>
                                        </Box>
                                        <Box display='flex' flexDirection='row' marginRight={2} marginTop={1}>
                                            <Typography>60%OFF</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        backgroundColor: 'lightblue',
                                        width: '350px',
                                        height: '40px',
                                        borderRadius: 4
                                    }}
                                        display="flex">
                                        <Box display='flex' flexDirection='row' marginLeft={1}>
                                            <FormControlLabel control={<Radio />} label="9MONTHS" value="9mon" />
                                            <Box display='flex' flexDirection='row' marginRight={17}>
                                            </Box>
                                        </Box>
                                        <Box display='flex' flexDirection='row' marginRight={2} marginTop={1}>
                                            <Typography>60%OFF</Typography>
                                        </Box>
                                    </Box>

                                </Stack>
                            </Box>
                        </RadioGroup>
                    </Box>

                    <FormGroup width="100%">
                        <TextField
                            label="Enter Promo Code"
                            variant="outlined"
                            size="small"
                            width="500px"
                            InputProps={{
                                endAdornment: (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                    >
                                        Apply
                                    </Button>
                                ),
                            }}
                        ></TextField>
                    </FormGroup>

                </Stack>
            </Layout>
            <Layout heading='Monthly rentals'>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Box marginLeft={2}>
                        <Typography variant='h7' color='#B4B7BC'>Summary</Typography>
                    </Box>
                </Box>
                <Stack direction="row" gap={8} pt={1}>
                    <Stack direction="column" gap={1}>
                        <StackLeft>Base Price</StackLeft>
                        <StackLeft>Discount</StackLeft>
                        <StackLeft>Monthly Price</StackLeft>
                        <StackLeft>GST</StackLeft>
                        <StackLeft>Net Payable Amount</StackLeft>

                    </Stack>
                    <Stack direction="column" gap={1}>
                        <StackRight> ₹ 1270  </StackRight>
                        <StackRight><Typography color='green' fontSize={14}>-30%</Typography></StackRight>
                        <StackRight>₹ 889</StackRight>
                        <StackRight>₹ 160</StackRight>
                        <StackRight><Typography fontSize={16}>₹ 1049</Typography></StackRight>

                    </Stack>
                </Stack>

            </Layout>
        </Stack>


    )
}

export default Page
