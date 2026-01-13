import Journey from '@/components/about/Journey'
import Mission from '@/components/about/Mission'
import Team from '@/components/about/Team'
import Brands from '@/components/about/Brands'
import SeeYourWealth from '@/components/home/SeeYourWealth'
import { Testimonials } from '@/components/home/Testimonials'

const page = () => {
    return (
        <div>
            <Journey />
            <Mission />
            <SeeYourWealth />
            <Team />
            <Testimonials />    
            <Brands />
        </div>
    )
}

export default page