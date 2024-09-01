'use client'
import React from 'react'
import style from "./entry.module.scss";
import {motion} from "framer-motion";
import {InputAdornment, OutlinedInput} from "@mui/material";
import {MuiOtpInput} from "mui-one-time-password-input";
import AppButtonNew from "@/components/common/AppButtonNew";
import useEntry from "@/components/tech/entry/_hooks/useEntry";

const Entry = () => {

    const {
        inputIsFocused,
        setInputIsFocused,
        enteredPhoneNumber,
        phoneNumber,
        currStep,
        setCurrStep,
        otp,
        enteredOtp,
        setEnteredOtp,
        handleChangeOtp,
        handleChangePhoneNumber,
        handlePhoneNumber,
        handleVerifyCode,
        setStatusOtp,
        statusOtp,
        wrapperY,
        handleBlur,
        handleFocus,
        phoneNumberIsValid
    } = useEntry()

    return (
        <div className={style.container}>
            {currStep === 2 &&
                <div className={style.backIcon} onClick={() => setCurrStep(1)}>
                    <svg width="15" height="15" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            }
            {currStep === 1 &&
                <motion.svg
                    initial={inputIsFocused ? {y: -300} : {y: 300}}
                    animate={inputIsFocused ? {y: -300} : {y: 30}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className={style.svgIcons}
                >

                    <svg viewBox="0 0 200 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="67.0488" y="1" width="70.0531" height="70" rx="15" fill="#FDF6E9"/>
                        <rect x="67.0488" y="1" width="70.0531" height="70" rx="15" stroke="white" strokeWidth="2"/>
                        <rect x="110" y="26" width="8" height="2" rx="1" fill="#ECA323"/>
                        <rect x="82" y="36" width="40" height="2" rx="1" fill="#ECA323"/>
                        <rect x="88" y="46" width="6" height="2" rx="1" transform="rotate(90 88 46)" fill="#ECA323"/>
                        <rect x="94" y="46" width="8" height="2" rx="1" transform="rotate(90 94 46)" fill="#ECA323"/>
                        <rect x="100" y="46" width="8" height="2" rx="1" transform="rotate(90 100 46)" fill="#ECA323"/>
                        <rect x="106" y="46" width="8" height="2" rx="1" transform="rotate(90 106 46)" fill="#ECA323"/>
                        <rect x="112" y="46" width="8" height="2" rx="1" transform="rotate(90 112 46)" fill="#ECA323"/>
                        <rect x="118" y="46" width="6" height="2" rx="1" transform="rotate(90 118 46)" fill="#ECA323"/>
                        <path
                            d="M82 38V26C82 23.7909 83.7909 22 86 22H118C120.209 22 122 23.7909 122 26V38C122 40.2091 120.209 42 118 42H86C83.7909 42 82 40.2091 82 38Z"
                            stroke="#ECA323" strokeWidth="2"/>
                        <g clipPath="url(#clip0_511_3499)">
                            <rect width="72.0485" height="72.0045" rx="16"
                                  transform="matrix(0.956347 0.292232 -0.292626 0.956227 131.097 33)" fill="#F1F0FE"/>
                            <g clipPath="url(#clip1_511_3499)">
                                <path
                                    d="M136.833 89.1607L146.191 58.5595C146.837 56.447 149.073 55.2581 151.185 55.9041L170.311 61.7527C172.424 62.3987 173.613 64.635 172.967 66.7475L163.609 97.3487C162.963 99.4613 160.727 100.65 158.614 100.004L139.488 94.1556C137.376 93.5096 136.187 91.2733 136.833 89.1607Z"
                                    stroke="#ECA323" strokeWidth="2"/>
                                <rect x="150.017" y="59.7285" width="8" height="2" rx="0.2"
                                      transform="rotate(17.0034 150.017 59.7285)" fill="#ECA323"/>
                                <path d="M141.513 73.8594L168.289 82.0474" stroke="#ECA323" strokeWidth="2"/>
                                <rect x="163.722" y="76.4688" width="4" height="2" rx="0.2"
                                      transform="rotate(-72.9966 163.722 76.4688)" fill="#ECA323"/>
                                <rect x="160.212" y="87.9434" width="4" height="2" rx="0.2"
                                      transform="rotate(-72.9966 160.212 87.9434)" fill="#ECA323"/>
                            </g>
                        </g>
                        <rect x="0.663721" y="1.24846" width="70.0485" height="70.0045" rx="15"
                              transform="matrix(0.956347 0.292232 -0.292626 0.956227 131.491 32.8607)" stroke="white"
                              strokeWidth="2"/>
                        <g clipPath="url(#clip2_511_3499)">
                            <rect width="72.0478" height="72.0052" rx="16"
                                  transform="matrix(0.949417 -0.314019 0.314437 0.949278 0 70)" fill="#F9E2BB"/>
                            <g clipPath="url(#clip3_511_3499)">
                                <path
                                    d="M35.3259 113.081L25.2706 82.7017C24.5764 80.6044 25.7138 78.3416 27.8111 77.6474L50.5954 70.1059C52.6926 69.4117 54.9555 70.5492 55.6497 72.6464L65.705 103.026C66.3992 105.123 65.2618 107.386 63.1645 108.08L40.3802 115.621C38.2829 116.315 36.0201 115.178 35.3259 113.081Z"
                                    stroke="#ECA323" strokeWidth="2"/>
                                <rect x="26.2129" y="85.5508" width="32.0006" height="2.00004" rx="0.2"
                                      transform="rotate(-18.3142 26.2129 85.5508)" fill="#ECA323"/>
                                <rect x="28.4395" y="79.5469" width="4" height="2" rx="0.2"
                                      transform="rotate(71.6858 28.4395 79.5469)" fill="#ECA323"/>
                                <rect x="32.2363" y="78.2891" width="4" height="2" rx="0.2"
                                      transform="rotate(71.6858 32.2363 78.2891)" fill="#ECA323"/>
                                <rect x="36.0352" y="77.0332" width="4" height="2" rx="0.2"
                                      transform="rotate(71.6858 36.0352 77.0332)" fill="#ECA323"/>
                                <rect x="52.4883" y="72.6406" width="2" height="8" rx="0.2"
                                      transform="rotate(71.6858 52.4883 72.6406)" fill="#ECA323"/>
                                <circle cx="46.7451" cy="96.6617" r="10" transform="rotate(-18.3142 46.7451 96.6617)"
                                        stroke="#ECA323" strokeWidth="2"/>
                                <circle cx="46.7455" cy="96.6623" r="6" transform="rotate(-18.3142 46.7455 96.6623)"
                                        fill="#ECA323" stroke="#ECA323" strokeWidth="2"/>
                            </g>
                        </g>
                        <rect x="1.26385" y="0.635259" width="70.0478" height="70.0052" rx="15"
                              transform="matrix(0.949417 -0.314019 0.314437 0.949278 -0.135819 70.4291)" stroke="white"
                              strokeWidth="2"/>
                        <rect x="0.737741" y="1.20626" width="70.0502" height="70.0029" rx="15"
                              transform="matrix(0.972204 0.234136 -0.234462 0.972125 75.359 78.8609)" fill="#E4E7EC"/>
                        <rect x="0.737741" y="1.20626" width="70.0502" height="70.0029" rx="15"
                              transform="matrix(0.972204 0.234136 -0.234462 0.972125 75.359 78.8609)" stroke="white"
                              strokeWidth="2"/>
                        <g clipPath="url(#clip4_511_3499)">
                            <path
                                d="M119.878 108.331L92.1709 101.653C90.0232 101.135 87.8626 102.457 87.345 104.604L80.7847 131.825C80.2671 133.973 81.5885 136.133 83.7361 136.651L111.443 143.328C113.322 143.781 115.213 142.625 115.665 140.746C116.118 138.867 114.962 136.976 113.083 136.523L99.9587 133.36C97.811 132.843 96.4896 130.682 97.0072 128.534L100.287 114.924C100.805 112.776 102.966 111.455 105.113 111.973L118.237 115.136C120.117 115.589 122.007 114.432 122.46 112.553C122.913 110.674 121.757 108.783 119.878 108.331Z"
                                stroke="#ECA323" strokeWidth="2"/>
                            <ellipse cx="89.4978" cy="129.812" rx="3" ry="3" transform="rotate(13.5503 89.4978 129.812)"
                                     fill="#ECA323" stroke="#ECA323" strokeWidth="2"/>
                            <path
                                d="M109.001 112.911L108.111 116.605C108.085 116.713 108.151 116.821 108.258 116.847L113.702 118.159C113.81 118.185 113.918 118.119 113.944 118.011L114.834 114.317"
                                stroke="#ECA323" strokeWidth="2"/>
                            <path
                                d="M101.164 132.622L103.929 121.15C103.955 121.043 104.063 120.977 104.17 121.003L115.447 123.721C115.555 123.747 115.621 123.855 115.595 123.962L112.83 135.434"
                                stroke="#ECA323" strokeWidth="2"/>
                            <path
                                d="M114.938 126.685L117.661 127.341C117.768 127.366 117.834 127.475 117.808 127.582L116.496 133.026C116.47 133.133 116.362 133.199 116.255 133.174L113.533 132.518"
                                stroke="#ECA323" strokeWidth="2"/>
                            <rect x="97.5693" y="109.126" width="2" height="8" rx="0.2"
                                  transform="rotate(103.55 97.5693 109.126)" fill="#ECA323"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_511_3499">
                                <rect width="72.0485" height="72.0045" rx="16"
                                      transform="matrix(0.956347 0.292232 -0.292626 0.956227 131.097 33)" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_511_3499">
                                <rect width="48.0009" height="48.0009" fill="white"
                                      transform="translate(138.968 47.9844) rotate(17.0034)"/>
                            </clipPath>
                            <clipPath id="clip2_511_3499">
                                <rect width="72.0478" height="72.0052" rx="16"
                                      transform="matrix(0.949417 -0.314019 0.314437 0.949278 0 70)" fill="white"/>
                            </clipPath>
                            <clipPath id="clip3_511_3499">
                                <rect width="48.001" height="48.001" fill="white"
                                      transform="translate(15.1621 77.6211) rotate(-18.3142)"/>
                            </clipPath>
                            <clipPath id="clip4_511_3499">
                                <rect width="48.0002" height="48.0002" fill="white"
                                      transform="translate(83.8545 93.4775) rotate(13.5503)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </motion.svg>
            }

            <motion.div
                className={style.wrapper}
                initial={{y: wrapperY}}
                // animate={inputIsFocused ? {y: 20} : {y: wrapperY}}
                transition={{duration: 0.5, ease: "easeInOut"}}
            >
                <motion.svg
                    className={style.svgBackground}
                    viewBox="0 0 388 833"
                    xmlns="http://www.w3.org/2000/svg"
                    // initial={{ y:150 }}
                    // animate={{ opacity: 1 }}
                    transition={{duration: 2, ease: "easeInOut"}}
                >
                    <path
                        d="M4 155.058C4 133.162 18.7931 114.055 40.1321 109.149C82.4748 99.4136 151.931 85 192 85C232.069 85 301.525 99.4136 343.868 109.149C365.207 114.055 380 133.162 380 155.058V833H4V155.058Z"
                        fill="white"
                    />
                    <path
                        d="M0 110.111C0 88.2158 14.776 69.1141 36.1111 64.194C79.6853 54.1453 152.28 39 194 39C235.72 39 308.315 54.1453 351.889 64.194C373.224 69.1141 388 88.2159 388 110.111V811H0V110.111Z"
                        fill="white"
                        fillOpacity="0.17"
                    />
                    <path
                        d="M0 71.1109C0 49.2158 14.776 30.1141 36.1111 25.194C79.6852 15.1453 152.28 0 194 0C235.72 0 308.315 15.1453 351.889 25.194C373.224 30.1141 388 49.2159 388 71.1109V772H0V71.1109Z"
                        fill="white"
                        fillOpacity="0.17"
                    />
                    <foreignObject x="0" y="0" width="100%" height="100%">
                        <div className={style.contentWrapper}>
                            <button
                                className={style.contentText}>{currStep === 1 ? 'ثبت نام و ورود' : 'احراز هویت'}</button>
                            {currStep === 1 ?
                                <div className={style.phoneNumberWrapper}>
                                    <p className={style.title}>لطفا شماره موبایل خود را وارد نمایید.</p>
                                    <div>
                                        <p>شماره موبایل</p>
                                        <OutlinedInput
                                            inputProps={{maxLength: 11, inputMode: "numeric"}}
                                            sx={{
                                                direction: 'rtl',
                                                width: '90%',
                                                height: '45px',
                                                borderRadius: '0.8rem',
                                                "&.Mui-focused": {
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#ECA323",
                                                        borderWidth: "3px",
                                                    },
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: `3px solid ${!phoneNumberIsValid && 'red'}`,
                                                },
                                            }}
                                            value={phoneNumber}
                                            onChange={handleChangePhoneNumber}
                                            onBlur={handleBlur}
                                            onFocus={handleFocus}
                                            placeholder={'912123456'}
                                            startAdornment={<InputAdornment position="start">+98</InputAdornment>}
                                        />

                                    </div>
                                </div>

                                :
                                <div className={style.verifyCodeWrapper}>
                                    <p className={style.title}>لطفا کد ارسال شده به شماره موبایل {phoneNumber} را وارد
                                        نمایید.
                                        <span className={style.changePhoneNumber} onClick={() => setCurrStep(1)}> تغییر شماره موبایل </span>

                                    </p>
                                    <MuiOtpInput
                                        autoFocus
                                        TextFieldsProps={{
                                            inputProps: {
                                                inputMode: "numeric",
                                                pattern: "[0-9]*",
                                            },
                                        }}
                                        validateChar={(val) => !isNaN(+val)}
                                        className={style.inputs}
                                        value={otp}
                                        onChange={handleChangeOtp}
                                        onComplete={() => {
                                            setStatusOtp('green')
                                            setEnteredOtp(true)
                                        }}
                                        onBlur={() => setInputIsFocused(false)}
                                        onFocus={() => setInputIsFocused(true)}
                                        length={6}
                                        sx={{
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: `2px solid ${statusOtp ? statusOtp : '#D0D5DD'}`,
                                            },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                border: '2px solid #ECA323',
                                            },
                                            "& .MuiOutlinedInput-input": {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                height: '10px',
                                                color: `${statusOtp}`
                                            },
                                        }}
                                    />
                                </div>

                            }
                            <div className={style.footer}>
                                {currStep === 1 ?
                                    <AppButtonNew
                                        onClick={handlePhoneNumber}
                                        disabled={!enteredPhoneNumber}
                                        iconUrl={enteredPhoneNumber ? '/assets/icons/arrowRight/icon.svg' : '/assets/icons/arrowRightDisable/icon.svg'}
                                        text={'بعدی'}
                                    />
                                    :
                                    <AppButtonNew
                                        onClick={handleVerifyCode}
                                        disabled={!enteredOtp}
                                        iconUrl={enteredOtp ? '/assets/icons/arrowRight/icon.svg' : '/assets/icons/arrowRightDisable/icon.svg'}
                                        text={'ورود'}
                                    />
                                }
                            </div>
                        </div>

                    </foreignObject>
                </motion.svg>


            </motion.div>
        </div>
    )
}

export default Entry
