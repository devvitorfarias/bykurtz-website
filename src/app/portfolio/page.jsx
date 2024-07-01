import Image from "next/image";

const Portfolio = () => {
    return (
        <>
            <div className="w-full  bg-background border-b border-black">
                <div className="px-6">
                    <div>
                        <Image width={300} height={40} src="https://firebasestorage.googleapis.com/v0/b/bykurtz-website.appspot.com/o/motorola-logo.png?alt=media" alt="logo" />
                        <div>
                            <h1 className="text-white font-semibold">Challenge:</h1>
                            <span className="text-white font-medium">
                                Motorola needed a partner to develop personalized solutions focused on
                                eCommerce improvements and staying up-to-date with the latest trends and technologies.
                            </span>
                            <h1 className="text-white font-semibold">Solution: </h1>
                            <span className="text-white font-medium">
                                Bykurtz provided design adjustments, reduced bugs through proactive testing, and
                                integrated product recommendations based on customer behavior
                            </span>
                            <div>
                                <h1 className="text-white font-semibold">Results:</h1>
                                <li className="text-white font-medium">Increased customer engagement and satisfaction.</li>
                                <li className="text-white font-medium">Reduced technical issues and improved site performance</li>
                                <li className="text-white font-medium">Enhanced competitive edge in the eCommerce market</li>
                            </div>
                            <span className="text-white font-medium">"Bykurtz's ability to develop personalized solutions and their commitment to quality made them an invaluable
                                asset to our team."</span>
                        </div>
                    </div>
                    <Image width={300} height={40} src="https://firebasestorage.googleapis.com/v0/b/bykurtz-website.appspot.com/o/logo-shoulder.png?alt=media" alt="logo" />
                    <div>
                        <span>
                            <h1 className="text-white font-semibold">Challenge:</h1>
                            <span className="text-white font-medium">Shoulder aimed to improve their customer experience and keep up with eCommerce
                                market trends by enhancing their digital interfaces and system quality.
                            </span>
                            <h1 className="text-white font-semibold">Solution:</h1>
                            <span className="text-white font-medium">Bykurtz optimized the website’s user experience (UX), improved site performance and
                                speed, and ensured compatibility across various devices and browsers.
                            </span>
                        </span>
                        <div>
                            <h1 className="text-white font-semibold">Results:</h1>
                            <li className="text-white font-medium">50% increase in online sales.</li>
                            <li className="text-white font-medium">20% reduction in technical issues affecting user experience.</li>
                            <li className="text-white font-medium">Significant improvement in customer satisfaction.</li>
                        </div>
                        <span className="text-white font-medium">
                            "The new e-commerce platform developed by Bykurtz revolutionized our online business."
                        </span>
                    </div>
                    <Image width={300} height={40} src="https://firebasestorage.googleapis.com/v0/b/bykurtz-website.appspot.com/o/slogo-samsung.png?alt=media" alt="logo" />
                    <Image width={300} height={40} src="https://firebasestorage.googleapis.com/v0/b/bykurtz-website.appspot.com/o/Carrefour-logo.png?alt=media" alt="logo" />
                    <div>
                        <span>
                            <h1 className="text-white font-semibold">Challenge:</h1>
                            <span className="text-white font-medium">Carrefour needed to improve control over their internal operations and sought a
                                custom software solution to enhance their financial, operational, and tax processes.
                            </span>
                            <h1 className="text-white font-semibold">Solution: </h1>
                            <span className="text-white font-medium">
                                Bykurtz developed a tailored software solution that integrated seamlessly with
                                Carrefour’s existing systems, providing comprehensive control over all internal movements.
                            </span>
                        </span>
                        <div>
                            <h1 className="text-white font-semibold">Results:</h1>
                            <li className="text-white font-medium">20% reduction in operational costs.</li>
                            <li className="text-white font-medium">15% increase in sales efficiency</li>
                            <li className="text-white font-medium">Enhanced control and transparency in operations.</li>
                        </div>
                        <span className="text-white font-medium">
                            "Bykurtz was the best option for us with their experience and technical knowledge, providing us with greater
                            control over all company operations."
                        </span>
                    </div>
                    <Image width={300} height={40} src="https://firebasestorage.googleapis.com/v0/b/bykurtz-website.appspot.com/o/whirlpool-logo.png?alt=media" alt="logo" />
                    <div>
                        <h1 className="text-white font-semibold">Challenge:</h1>
                        <span className="text-white font-medium">Carrefour needed to improve control over their internal operations and sought a
                            custom software solution to enhance their financial, operational, and tax processes.
                        </span>
                        <h1 className="text-white font-semibold">Solution: </h1>
                        <span className="text-white font-medium">Bykurtz developed a tailored software solution that integrated seamlessly with
                            Carrefour’s existing systems, providing comprehensive control over all internal movements.
                        </span>
                        <div>
                            <h1 className="text-white font-semibold">Results:</h1>
                            <li className="text-white font-medium">20% reduction in operational costs.</li>
                            <li className="text-white font-medium">15% increase in sales efficiency</li>
                            <li className="text-white font-medium">Enhanced control and transparency in operations.</li>
                        </div>
                        <span className="text-white font-medium">
                            "Bykurtz was the best option for us with their experience and technical knowledge, providing us with greater
                            control over all company operations."
                        </span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Portfolio;
