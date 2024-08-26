'use client'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import style from "@/components/users/intro/intro.module.scss";
import useIntro from "@/components/users/intro/_hooks/useIntro";
import AppImage from '@/components/common/AppImage'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import {swiperData} from "@/components/users/intro/intro.static";

const Intro = () => {
    const {activeCurrStepIndex, setActiveCurrStepIndex, swiperRef, router} = useIntro()

    return (
        <div
            className={style.container}
        >
            <button className={style.skipButton} onClick={() => router.push('/users/entry')}>رد شدن</button>
            <Swiper
                style={{
                    direction: 'ltr',
                    paddingTop: "60px",
                    //@ts-ignore
                    "--swiper-pagination-color": "#7569F4",
                    paddingBottom: '3rem'
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onRealIndexChange={(e) => setActiveCurrStepIndex(e.activeIndex)}
                pagination={{clickable: true}}
            >
                {swiperData.map(slide => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className={style.wrapper}>
                                <AppImage
                                    src={slide.svgPath}
                                    width={innerHeight > 820 ? 420 : 350}
                                    height={innerHeight > 820 ? 420 : 280}
                                />
                                <p
                                    className={style.title}
                                >
                                    {slide.title}
                                </p>
                                <p
                                    className={style.description}
                                >
                                    {slide.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className={style.footer}>
                <button
                    onClick={() => {
                        activeCurrStepIndex === 2 ? router.push('/request') : swiperRef.current?.slideNext()
                    }}
                    className={style.nextButton}
                >
                    <AppImage
                        src={'/assets/icons/arrowRight/icon.svg'}
                        width={15}
                        height={15}
                    />
                    <p>بعدی</p>
                </button>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}

                    className={activeCurrStepIndex === 0 ? style.disabledBackButton : style.backButton}>
                    <AppImage
                        src={'/assets/icons/arrowLeft/icon.svg'}
                        width={15}
                        height={15}
                    />
                </button>
            </div>
        </div>
    )
}

export default Intro
