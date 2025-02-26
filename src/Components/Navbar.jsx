'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="relative">
            <div className="w-full flex flex-row justify-between items-center pt-4 h-12 px-4">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-4 cursor-pointer w-48"
                >
                    <div className="w-[35px] h-[35px] rounded-full bg-orange-500" />
                    <p className="text-2xl font-bold">mudit.dev</p>
                </div>

                <div className="hidden md:flex items-center gap-4 w-80">
                    <button onClick={() => navigate("/resume")}>
                        <h1 className="font-bold">Resume</h1>
                    </button>
                    <button onClick={() => navigate("/project")}>
                        <h1 className="font-bold">Project</h1>
                    </button>
                    <button onClick={() => navigate("/contact")}>
                        <h1 className="font-bold">Contact</h1>
                    </button>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-#ddddd4 shadow-lg md:hidden">
                    <div className="flex flex-col p-4 gap-4" style={{backgroundColor: "#fff", width: ""}}>
                        <button
                            onClick={() => {
                                navigate("/resume")
                                setIsOpen(false)
                            }}
                            className="text-right font-bold py-2"
                        >
                            Resume
                        </button>
                        <button
                            onClick={() => {
                                navigate("/project")
                                setIsOpen(false)
                            }}
                            className="text-right font-bold py-2"
                        >
                            Project
                        </button>
                        <button
                            onClick={() => {
                                navigate("/contact")
                                setIsOpen(false)
                            }}
                            className="text-right font-bold py-2"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
