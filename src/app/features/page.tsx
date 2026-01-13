import React from 'react'
import FinanceSolution from '@/components/feature/FinanceSolution'
import Features from '@/components/home/Features'
import MoreFeatures from '@/components/feature/MoreFeatures'
import { Future } from '@/components/feature/Future'

const page = () => {
    return (
        <div>
            <FinanceSolution />
            <Features />
            <MoreFeatures />
            <Future />
        </div>
    )
}

export default page 