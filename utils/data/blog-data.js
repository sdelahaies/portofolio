import enpgf from '/public/image/enpgf.jpg';
import spacequest from '/public/image/spacequest.jpg';
import trip from '/public/image/trip.png';
import chatgpt from '/public/image/chatgpt.png';
import chatgpt2 from '/public/image/chatgpt2.png';
import portfolio from '/public/image/portfolio.png';
import GUIassistant from '/public/image/voice.jpg';

export const blogData = [
    {
        id: 1,
        url: "https://sdelahaies.github.io/iassistant.html",
        title: "IAssistant: A Versatile AI Voice Assistant for Developers and Power Users",
        description: "Artificial Intelligence (AI) continues to transform how we interact with technology. Voice assistants, in particular, offer a natural way to engage with complex systems.",
        image: GUIassistant
    },
    {
        id: 2,
        url: "https://sdelahaies.github.io/enpgf-lab.html",
        title: "Online EnPGF training for temporal point processes",
        description: "Online training framework for a pytorch implementation of the Ensemble Poisson Gamma Filter using Apache Kafka.",
        image: enpgf
    },
    {
        id: 3,
        url: "https://sdelahaies.github.io/deepwars.html",
        title: 'Object Localization in Space... kinda',
        description: "Exploration de techniques de deep learning pour la détection d'objets. Implémentation et entrainement de modèle tensorflow, transfert d'apprentissage avec YOLOv5 et DETR.",
        image: spacequest,
    },
    {
        id: 4,
        url: "https://sdelahaies.github.io/travelplanner.html",
        title: "Recommandation d'itinéraire de vacances",
        description: "Création d'une application de recommandation d'itinéraire de vacances: conception, implémentation, déploiement.",
        image: trip,
    },
    {
        id: 5,
        url: "https://sdelahaies.github.io/chatgpt-prompts2.html",
        title: "Is ChatGPT ruining my Data Engineer career before it even started? TAKE 2.",
        description: "How to leverage chatgpt to start with Node.js.",
        image: chatgpt2
    },
    {
        id: 6,
        url: "https://sdelahaies.github.io/chatgpt-prompts.html",
        title: 'Is Chatgpt ruining my Data Engineer career before it even started?',
        description: "How to leverage chatgpt to write python code.",
        image: chatgpt,
    },
    {
        id: 7,
        url: "https://sdelahaies.github.io",
        title: 'Github portfolio',
        description: "version précédente de mon portfolio.",
        image: portfolio,
    }
];

