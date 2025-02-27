import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import internal from './../assets/internal.png'
import gym from './../assets/gym.png'
import ecom from './../assets/ecom.png'
import ecomm from './../assets/ecomm.png'
const MyWork = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth <= 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projectsStyle = {
        height: "100vh",
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.5',
    };

    const projectContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '50px',
    };

    const textSectionStyle = {
        width: '50%',
        // display: 'flex',
        // flexDirection: isMobile ? 'column' : 'row'
    };

    const imageSectionStyle = {
        width: '30%',
        textAlign: 'center',
    };

    const imageStyle = {
        maxWidth: '100%',
        borderRadius: '10px',
    };

    return (
        <>
            <Navbar />
            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-16">Projects</h1>

                <div className="space-y-32">
                    {/* Project 01 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Dxyra - A HR Portal</h2>
                            <p className="text-gray-600 leading-relaxed">
                                • Developed the Leave Panel, enabling employees to apply for leave, view team leaves, and filter data by date and
                                employee name. HR/Admin roles could manage team and organizational leaves and apply leave on behalf of any
                                employee.
                            </p>
                            <p className="text-gray-600 leading-relaxed">• Created the Timesheet Panel, allowing employees to log work hours for different projects, track time, and filter by
                                date or employee name. HR/Admin roles had visibility over employee's timesheet, while employees could only
                                access their own data.</p>
                        </div>
                        <div className="relative h-[300px] w-full">
                            <img
                                src={internal}
                                alt="Project 1 showcase"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* <div style={{}}>

                                <button style={{
                                    width: "30rem",
                                    border: "2px solid white",
                                    borderRadius: "5px",
                                    backgroundColor: "rgba(10,0,100,0.5)"
                                }}>Github</button>
                            </div> */}
                        </div>
                    </div>

                    {/* Project 03 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">E-commerce</h2>
                            <p className="text-gray-600 leading-relaxed">
                                • Developed a comprehensive E-comerce website using React JS for the frontend.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                • Wishlist Feature: Developed a wishlist functionality, allowing users to save books for future purchases.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                • Add to Cart: Enabled users to add books to the cart, update quantities, and remove items seamlessly.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                • Order Management: Designed a smooth checkout process, enabling users to place orders effortlessly.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                • If you want to see: <a href="https://my-book-mudit.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bolder", color: "blue" }}>Visit Website</a>
                            </p>
                        </div>
                        <div className="relative h-[300px] w-full">
                            <img
                                src={ecomm}
                                alt="Project 2 showcase"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Gym</h2>
                            <p className="text-gray-600 leading-relaxed">
                                • Developed the UI for the Gym freaks platform using React.js and TypeScript.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                • Developed email js form to get a call for registering.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                • If you want to see: <a href="https://mygymshark-eight.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bolder", color: "blue" }}>Visit Website</a>
                            </p>


                        </div>
                        <div className="relative h-[300px] w-full">
                            <img
                                src={gym}
                                alt="Project 2 showcase"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">PressMart. </h2>
                            <p className="text-gray-600 leading-relaxed">
                                • Developed a fully responsive e-commerce web page using HTML, CSS, and JavaScript, leveraging SCSS for better styling and maintainability. Integrated Swiper.js to create smooth and interactive sliders, enhancing the user experience.
                            </p>

                        </div>
                        <div className="relative h-[300px] w-full">
                            <img
                                src={ecom}
                                alt="Project 2 showcase"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
    // return (
    //     <>
    //         <Navbar />
    //         <div style={projectsStyle}>
    //             <h1 style={{ fontWeight: "bolder", fontSize: "2.5rem" }}>Projects</h1>
    //             <div style={projectContainerStyle}>
    //                 <div style={textSectionStyle}>
    //                     <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Dxyra - A HR Portal </h2>
    //                     <p style={{ width: "30rem", lineHeight: '1.8rem', }}>
    //                         • Developed the Leave Panel, enabling employees to apply for leave, view team leaves, and filter data by date and
    //                         employee name. HR/Admin roles could manage team and organizational leaves and apply leave on behalf of any
    //                         employee.
    //                     </p>
    //                     <p style={{ width: "30rem", lineHeight: '1.8rem', }}>
    //                         • Created the Timesheet Panel, allowing employees to log work hours for different projects, track time, and filter by
    //                         date or employee name. HR/Admin roles had visibility over employee's timesheet, while employees could only
    //                         access their own data.
    //                     </p>
    //                 </div>
    //                 <div style={imageSectionStyle}>
    //                     <img
    //                         style={imageStyle}
    //                         src="https://static.wixstatic.com/media/c837a6_871a4251d9874b0d8acfe66796caaaf8~mv2.jpg/v1/fill/w_491,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brendan-church-9F3sEV1-Iog-unsplash.jpg" // Replace with your image URL
    //                         alt="Project 01"
    //                     />
    //                 </div>
    //             </div>
    //             <div style={projectContainerStyle}>
    //                 <div style={textSectionStyle}>
    //                 <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>Dxyra - A HR Portal </h2>
    //                     <p style={{ width: "30rem", lineHeight: '1.8rem', }}>
    //                         • Developed the Leave Panel, enabling employees to apply for leave, view team leaves, and filter data by date and
    //                         employee name. HR/Admin roles could manage team and organizational leaves and apply leave on behalf of any
    //                         employee.
    //                     </p>
    //                     <p style={{ width: "30rem", lineHeight: '1.8rem', }}>
    //                         • Created the Timesheet Panel, allowing employees to log work hours for different projects, track time, and filter by
    //                         date or employee name. HR/Admin roles had visibility over employee's timesheet, while employees could only
    //                         access their own data.
    //                     </p>
    //                 </div>
    //                 <div style={imageSectionStyle}>
    //                     <img
    //                         style={imageStyle}
    //                         src="https://static.wixstatic.com/media/c837a6_871a4251d9874b0d8acfe66796caaaf8~mv2.jpg/v1/fill/w_491,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brendan-church-9F3sEV1-Iog-unsplash.jpg" // Replace with your image URL
    //                         alt="Project 02"
    //                     />
    //                 </div>
    //             </div>


    //         </div>
    //         <Footer />
    //     </>
    // );
};

export default MyWork;
