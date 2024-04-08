// Add content dynamically to each section
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        {
            id: 'modernizing-military-infrastructure',
            title: 'Modernizing Military Infrastructure',
            content: `
                <p>
                    The modernization of military infrastructure is crucial for maintaining national security and staying ahead in the ever-evolving landscape of defense. It involves upgrading equipment, implementing advanced technologies, and fortifying cyber defense capabilities.
                </p>
                <button>Upgrading Equipment</button>
                <button>Advanced Technologies</button>
                <button>Cyber Defense</button>
            `
        },
        {
            id: 'interoperability-and-collaboration',
            title: 'Interoperability and Collaboration',
            content: `
                <p>
                    Interoperability and collaboration among different branches of the military and with international partners are essential for effective defense operations. This section highlights the importance of military coordination, joint training exercises, and building strong international partnerships.
                </p>
                <button>Military Coordination</button>
                <button>Joint Training</button>
                <button>International Partnerships</button>
            `
        },
        {
            id: 'cybersecurity-and-information-warfare',
            title: 'Cybersecurity and Information Warfare',
            content: `
                <p>
                    In today's digital age, cybersecurity and information warfare defense are paramount. This section emphasizes the importance of safeguarding against cyber threats, developing robust defense strategies, and promoting cybersecurity education and awareness.
                </p>
                <button>Cyber Threats</button>
                <button>Defense Strategies</button>
                <button>Cybersecurity Education</button>
            `
        },
        {
            id: 'news-and-events',
            title: 'News and Events',
            content: `
                <p>
                    Stay updated with the latest developments, news articles, and upcoming events related to defense innovation and security. Subscribe to our newsletter to receive regular updates directly to your inbox.
                </p>
                <button>Subscribe to Newsletter</button>
            `
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            content: `
                <p>
                    Have inquiries, suggestions, or collaboration opportunities? Fill out the form below to get in touch with us.
                </p>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            `
        }
    ];

    const main = document.querySelector('main');

    sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.innerHTML = `
            <h2>${section.title}</h2>
            ${section.content}
        `;
        main.appendChild(sectionElement);
    });
});
