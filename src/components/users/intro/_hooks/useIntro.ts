import {useRef, useState} from "react";
import { Swiper as SwiperClass } from 'swiper/types';
import {useRouter} from "next/navigation";

const useIntro = () => {
    const router = useRouter()
    const [activeCurrStepIndex, setActiveCurrStepIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperClass | null>(null);

    return{
        activeCurrStepIndex,
        setActiveCurrStepIndex,
        swiperRef,
        router
    }

}

export default useIntro
