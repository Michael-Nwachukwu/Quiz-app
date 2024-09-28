import React from 'react'
import { Link } from 'react-router-dom'

const ViewScore = ({score, numberOfQuestions}) => {
    return (
        <section className='grid sm:grid-cols-2 gap-10 items-start w-full'>

            <div className=''>
                <h1 className='font-bolder text-5xl'>
                    {score < 4 ? "Not Bad Not Good 😔" : score < 10 ? "Good 🙂" : "Excellent 😎"}
                    <br />
                <span className="font-extrabold text-stone-700">Your score is</span></h1>
            </div>

            <div className='grid gap-10'>
                <div className="h-96 bg-white py-6 flex flex-col items-center gap-5 w-full justify-center">
                    <p className={score < 4 ? "text-red-500 text-9xl" : "text-green-500 text-9xl"}>
                        {score}
                    </p>
                    <p className="text-lg">Out of {numberOfQuestions}</p>
                </div>

                <Link className='font-bold text-3xl bg-black text-white py-4 px-8 rounded-full text-center' to={'/'}>
                    Go Again
                </Link>
            </div>


        </section>
    )
}

export default ViewScore