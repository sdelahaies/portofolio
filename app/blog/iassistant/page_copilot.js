// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { blogData } from '@/utils/data/blog-data';
import { FaRobot } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Tooltip from 'react-tooltip';

async function page() {
    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
                        Research & Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <Fade bottom>
                <div>
                    <p className='my-2 lg:my-3 cursor-pointer text-lg text-orange-400 sm:text-4xl font-medium hover:text-orange-600'>
                        <FaRobot /> IAssistant: a versatile voice assistant
                    </p>
                </div>
            </Fade>
            <br></br>    
            <div>
                <p data-tip="This is a tooltip">
                    IAssistant is a demonstration of how advanced AI models can be integrated into daily
                </p>
                <Tooltip place="top" type="dark" effect="float"/>
            </div>
        </div>
    );
}

export default page;