// @flow strict

import { personalData } from "@/utils/data/personal-data";
// import BlogCard from "../components/homepage/blog/blog-card";
// import BlogCard from "../components/homepage/blog/blog-card-2";
import { blogData } from '@/utils/data/blog-data';


async function page() {
    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
                        Research & Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
    
      </div> */}
            <div>
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-orange-400 sm:text-4xl font-medium hover:text-orange-600'>IAssistant: a versatile voice assistant</p>
            </div>
            <br></br>    
            <div>
                <p>
                    IAssistant is a demonstration of how advanced AI models can be integrated into daily
                    workflows to address real-world challenges.
                    It showcases the flexibility of state-of-the-art tools and how they can be adapted
                    to meet diverse needs—from voice transcriptions to document analysis.
                </p>
                <br></br>    
                <p>
                    <b>Disclaimer:</b>
                    This project is a starter project, currently under construction.
                    It provides basic logic and simple use cases, far from perfect and subject to occasional bugs.
                    Have you ever received an awkward answer from an LLM due to a messy prompt? Imagine when your assistant speaks it out loud!
                    While it’s a fun and half-functional demonstration, it’s still a work in progress—designed to explore possibilities, not polished for production by any means.
                    Use with curiosity and a pinch of patience! 😅
                </p>
                <br></br>    
                <p> The project source code is available on github here: <a href="https://github.com/sdelahaies/IAssistant">IAssistant</a>.</p>

            </div>
            <br></br>    
            <div>
                <section>
                    <h2>AI Assistants in Everyday Life</h2>
                    <br></br>    
                    <p>
                        AI assistants are transforming how we approach daily tasks by enabling natural,
                        intuitive interactions with computers.
                        Imagine a tool that can listen to your requests, analyze data, or even interpret
                        images. That’s what IAssistant exemplifies—a way to bridge complex technology
                        with practical needs.
                    </p>
                    <br></br>    
                    <p>Here are just a few examples of what such an assistant can accomplish:</p>
                    <br></br>    
                    <ul>
                        <li>Summarizing the contents of long PDFs with a single question.</li>
                        <li>Analyzing images or documents copied to your clipboard.</li>
                        <li>Generating visuals from text prompts, refined using AI-powered prompt
                            generation.</li>
                    </ul>
                    <br></br>    
                    <p>
                        By integrating language and vision models, tools like IAssistant simplify
                        problem-solving and streamline productivity.
                    </p>
                </section>

                <section>
                <br></br>    
                    <h2>Listening and Understanding: The Transcriber</h2>
                    <br></br>    
                    <p>
                        At the core of IAssistant’s voice capabilities is its transcriber engine, which
                        converts speech into text.
                        Depending on the task, IAssistant supports two powerful transcription tools:
                    </p>
                    <br></br>    
                    <ul>
                        <li><strong>Transformers Whisper:</strong> A robust choice for multilingual
                            transcription and high accuracy.</li>
                        <li><strong>Faster Whisper:</strong> Optimized for speed and efficiency, perfect
                            for lightweight tasks.</li>
                    </ul>
                    <br></br>    
                    <p>
                        You can customize the transcriber further by choosing different models, such as
                        the compact `tiny.en` for quick English transcriptions on a CPU, or larger
                        multilingual models for more complex tasks on a GPU. This adaptability
                        highlights how easily these tools can be tuned to specific needs.
                    </p>
                </section>
                <br></br>    
                <section>
                    <h2>Enabling Advanced Language Models with Ollama</h2>
                    <br></br>    
                    <p>
                        Running language models locally is another key feature of IAssistant, achieved
                        through the <a href="https://ollama.ai" target="_blank">Ollama</a> server.
                        This framework allows for seamless integration of a wide range of AI models:
                    </p>
                    <br></br>    
                    <ul>
                        <li>Pre-trained and fine-tuned models for specialized tasks like summarization
                            or coding assistance.</li>
                        <li>Vision-language models for image-related queries and analysis.</li>
                        <li>Custom workflows by adapting models to niche use cases.</li>
                    </ul>
                    <br></br>    
                    <p>
                        This capability ensures privacy, flexibility, and control, showing how AI can be
                        leveraged to address specific challenges effectively.
                    </p>
                </section>
                <br></br>    
                <section>
                    <h2>Talking Back: Text-to-Speech with Piper</h2>
                    <br></br>    
                    <p>
                        Communication with IAssistant doesn’t stop at understanding; it also responds in
                        natural, human-like speech using <a
                            href="https://github.com/rhasspy/piper/tree/master"
                            target="_blank">Piper</a>.
                        Piper supports:
                    </p>
                    <br></br>    
                    <ul>
                        <li>A variety of voices and languages to suit different contexts.</li>
                        <li>Optimized performance, even on constrained devices like Raspberry Pi.</li>
                    </ul>
                    <br></br>    
                    <p>
                        The ability to personalize responses adds depth to the interaction and
                        demonstrates the assistant's versatility.
                    </p>
                </section>
                <br></br>    
                <section>
                    <h2>Customization with a GTK Interface</h2>
                    {/* <figure>
                                        <img class="h-100" src="assets/img/iassistant-ui.png">
                                        <figcaption style="text-align: left">Fig 1: IAssistant user interface.
                                        </figcaption>
                                    </figure> */}
                                    <br></br>    
                    <p>
                        To make IAssistant accessible and adaptable, a Python GTK interface replaces
                        traditional command-line operations. This UI provides:
                    </p>
                    <br></br>    
                    <ul>
                        <li>Easy model selection and configuration adjustments (e.g., changing voices or
                            prompts).</li>
                        <li>A streamlined way to tailor settings for specific tasks or preferences.</li>
                        <li>Seamless integration into Linux environments, enhancing user experience.
                        </li>
                    </ul>
                    <br></br>    
                    <p>
                        This interface shows how AI tools can be made more user-friendly, enabling
                        greater adoption and effectiveness.
                    </p>
                </section>
                <br></br>    
                <section>
                    <h2>Looking Ahead: Potential Extensions</h2>
                    <br></br>    
                    <p>
                        While IAssistant is a demo, its modular design opens up exciting possibilities
                        for future applications:
                    </p>
                    <br></br>    
                    <ul>
                        <li><strong>Agent frameworks:</strong> Automate complex, multi-step workflows to
                            save time and reduce errors.</li>
                        <li><strong>Retrieval-Augmented Generation (RAG):</strong> Combine AI with
                            document search to answer questions based on large knowledge bases.</li>
                        <li><strong>Advanced vision tasks:</strong> Expand capabilities to include
                            object detection or intricate image analysis.</li>
                    </ul>
                    <br></br>    
                    <p>
                        These extensions illustrate how AI can evolve to meet an ever-growing range of
                        challenges, making it an indispensable tool for innovation.
                    </p>
                </section>
                <br></br>    
                <h2>Useful Links</h2>
                <br></br>    
                <ul>
                    <li><a href="https://github.com/sdelahaies/IAssistant">IAssistant: a versatile AI voice assistant</a></li>
                    <li><a href="https://github.com/ILikeAI/AlwaysReddy">AlwaysReddy: Terminal-based AI Assistant</a></li>
                    <li><a href="https://ollama.com/">Ollama: Get up and running with large language models</a></li>
                    <li><a href="https://huggingface.co/openai/whisper-large-v3-turbo">OpenAI Whisper Large v3 Turbo</a></li>
                    <li><a href="https://github.com/SYSTRAN/faster-whisper">Faster Whisper</a></li>
                    <li><a href="https://github.com/rhasspy/piper/tree/master">Piper: Neural Text-to-Speech</a></li>
                    <li><a href="https://python-gtk-3-tutorial.readthedocs.io/">The Python GTK+ 3 Tutorial</a></li>
                </ul>
            </div>
        </div>
  );
};

export default page;