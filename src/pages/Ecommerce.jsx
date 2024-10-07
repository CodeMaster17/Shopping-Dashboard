import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Button } from '../components'
import Sparkline from '../components/Charts/Sparkline'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
const Ecommerce = () => {

    const { currentColor } = useStateContext();

    return (
        <div className='mt-12'>
            <div className="flex flex-wrap justify-center lg:flex-nowrap">
                <div className="lg:w-100 bg-ecomm-custom m-3 h-44 w-full rounded-xl bg-white bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$73,234,342</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
            </div>
            <div className="m-3 flex flex-wrap items-center justify-center gap-1">
                {earningData.map((item) => {
                    return (

                        <div
                            key={item.title}
                            className="rounded-2xl bg-white p-4 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56"
                        >
                            <button type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="opacity-0.9 rounded-full p-4 text-2xl hover:drop-shadow-xl"
                            >

                                {item.icon}
                            </button>

                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='mt-1 text-sm text-gray-400'>
                                {item.title}
                            </p>
                        </div>
                    )
                })}
            </div>


            {/* revenue updates and the expense and budget graph */}
            <div className="flex flex-wrap justify-center gap-10">
                <div className="m-3 flex rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">
                            Revenue Updates
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex-gap-10 mt-10 flex-wrap justify-center">
                        <div className="m-4 border-r-1 pr-10">
                            <p>
                                <span className='text-3xl font-semibold'>
                                    $93,438
                                </span>
                                <span className='cursor-pointer rounded-full bg-green-400 p-1.5 text-white hover:drop-shadow-xl'>
                                    23%
                                </span>
                            </p>
                            <p className='mt-1 text-gray-500'>Budget</p>
                        </div>
                        <div className="m-4 mt-8 border-r-1 pr-10">
                            <p>
                                <span className='text-3xl font-semibold'>
                                    $93,438
                                </span>

                            </p>
                            <p className='mt-1 text-gray-500'>Expense</p>
                        </div>

                        <div className="mt-5">
                            <Sparkline
                                currentColor={currentColor}
                                id="line-sparkLine"
                                type="Line"
                                height="80px"
                                width="250px"
                                data={SparklineAreaData}
                                color={currentColor}
                            />
                        </div>

                        <div className="mt-10">
                            <Button

                                color="white"
                                bgColor={currentColor}
                                text="Download Report"
                                borderRadius="10px"
                            />
                        </div>
                    </div>
                    <div>
                        <Stacked width="320px" height="360px" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Ecommerce
