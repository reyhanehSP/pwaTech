'use client'
import React, {useState} from 'react'
import style from '@/components/login/login.module.css'
import {Button, TextField} from "@mui/material";
import Image from "next/image";
import useLogin from "@/components/login/_hooks/useLogin";

const Login = () => {
    const {
        phoneNumber,
        setPhoneNumber,
        buttonDisabled,
        setButtonDisabled,
        handleSetPhoneNumber,
        handleSubmit,
        enteredPhoneNumber,
        verifyCode,
        setVerifyCode,
        handleVerifyCode
    } = useLogin()

    return (
        <div className={style.container}>
            <Image
                className={style.logo}
                width={200}
                height={200}
                src={'/images/logo.jpg'}
                alt={'Logo'}
            />
            {
                enteredPhoneNumber ?
                    (
                        <div className={style.verifyCodeWrapper}>
                            <p className={style.phoneNumber}>{phoneNumber} 98+</p>
                            <p>ما پیامکی حاوی کد فعالسازی به شماره تلفن ارسال کرده ایم.</p>
                            <TextField
                                sx={{
                                    width: '100%',
                                    ' .MuiInputBase-root': {
                                        borderRadius: '1rem',
                                    }
                                }}
                                value={verifyCode}
                                onChange={(e) => e.target.value.length < 7 && setVerifyCode(e.target.value)}
                                label="کد را وارد کنید"
                                multiline
                                maxRows={4}
                            />+
                            <Button
                                sx={{width: '100%', borderRadius: '1rem', height: '40px'}}
                                variant="contained"
                                onClick={handleVerifyCode}
                                disabled={buttonDisabled}
                            >
                                ورود
                            </Button>
                        </div>
                    )
                    :
                    (
                        <div className={style.wrapper}>
                            <p className={style.title}> ورود به الو بگو</p>
                            <TextField
                                sx={{
                                    width: '100%',
                                    ' .MuiInputBase-root': {
                                        borderRadius: '1rem',
                                    }
                                }}
                                value={phoneNumber}
                                onChange={(e) => handleSetPhoneNumber(e.target.value)}
                                label="شماره موبایل"
                                multiline
                                maxRows={4}
                            />
                            <Button
                                sx={{width: '100%', borderRadius: '1rem', height: '40px'}}
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={buttonDisabled}
                            >
                                بعدی
                            </Button>
                        </div>
                    )
            }
        </div>
    )
}

export default Login
