import React from "react";
import Image from "next/image";




    const Main = () => {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        width={500}
                        hight={300}
                        src=
                            alt={"tech"} />
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">This are my pugs</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
    export default Main
