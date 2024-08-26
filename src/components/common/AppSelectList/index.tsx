import React, {useState} from 'react'
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {IAppSelectList} from "@/components/common/AppSelectList/_types/IAppSelectList";
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const AppSelectList: React.FC<IAppSelectList> = ({list, onChange}) => {
    const [selectedItem, setSelectedItem] = useState<number>(0)
    return (
        <Box display={'flex'} flexDirection={'column'} width={'100%'} rowGap={'2rem'}>
            {list?.map(item => {
                return (
                    <Box
                        key={item.id}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        onClick={() => {
                            setSelectedItem(item.id)
                            onChange(item)
                        }
                        }

                    >
                        <Typography>{item.title}</Typography>
                        <Checkbox
                            icon={<CircleIcon
                                style={{color: '#e0e0e0'}}
                            />
                            }
                            checkedIcon={<CheckCircleOutlineRoundedIcon/>}
                            color={'success'}
                            checked={item.id === selectedItem}
                            sx={{borderRadius: '1rem', padding: '0'}}
                        />
                    </Box>
                )
            })}
        </Box>
    )

}

export default AppSelectList
