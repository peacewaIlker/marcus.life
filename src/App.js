import React from 'react';
import './App.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Button from "./Button";
import ProfileButton1 from "./ProfileLink1";
import ProfileButton2 from "./ProfileLink2";
import ProfileButton3 from "./ProfileLink3";

// Компонент для прокрутки к секции
function ScrollToSection() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return null;
}




function App() {

    // Обработчик для плавной прокрутки
    // const handleScroll = (event, section) => {
    //     event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    //     const element = document.querySelector(section);
    //     if (element) {
    //         const headerHeight = document.querySelector('.header').offsetHeight; // Получаем высоту заголовка
    //         const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Получаем положение элемента
    //         window.scrollTo({
    //             top: elementPosition - headerHeight, // Корректируем позицию с учетом высоты заголовка
    //             behavior: 'smooth' // Плавная прокрутка
    //         });
    //     }
    // };
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {  // Если страница была восстановлена из кеша
            window.location.reload();  // Обновляем страницу
        }
    });

    window.addEventListener('focus', () => {
        document.body.style.transform = 'translateZ(0)';  // Принудительное обновление
    });

    useEffect(() => {
        const videoElement = document.querySelector('.hero-video');

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && videoElement.paused) {
                videoElement.play();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


    return (
        <Router>
            <div className="App">
                <ScrollToSection/>
                {/* Header */}
                {/*<header className="header">*/}
                {/*    <div className="logo">*/}
                {/*        <img src="logo192.png" alt="Logo"/>*/}
                {/*    </div>*/}
                {/*    <nav>*/}
                {/*        <ul>*/}
                {/*            <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>*/}
                {/*            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>*/}
                {/*            <li><a href="#feedback" onClick={(e) => handleScroll(e, '#feedback')}>Feedback</a></li>*/}
                {/*            <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</header>*/}

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-video">
                        <div className="hero-overlay"></div>
                        <img
                            src={process.env.PUBLIC_URL + '/hero_image.png'}
                            alt="Hero"
                        />
                    </div>

                    <div className="hero-text">
                        <p>Новий спосіб онлайн заробітку</p>
                        <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                            Дізнатися докладніше
                        </button>
                    </div>
                </section>


                {/* About Section */}
                <section id="about" className="about">
                    <h2>ЗАРОБЛЯЙ НЕ ВИХОДЯЧИ З ДОМУ</h2>
                    <p>Інтернет - найкраще місце, щоб почати стабільно заробляти.</p>
                    <p>Хочеш дізнатися як? Гортай нижче 👇</p>
                    </section>

                <section id="beneath_hero" className="container-beneath-about">
                    <div className="beneath-about-video">
                        <video
                            src={process.env.PUBLIC_URL + '/beneath_about_video.mp4'}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-element"
                        ></video>
                    </div>
                </section>

                <section className="marquee-section">
                    <div className="marquee">
                        <div className="marquee-content">
                            <span> ТІЛЬКИ ЛЕГАЛЬНІ МЕТОДИ * СУПРОВІД ЗІ СТАРТУ І ДО ПЕРШОГО УСПІХУ * РЕЗУЛЬТАТ ГАРАНТОВАНИЙ *&nbsp;</span>
                            <span> ТІЛЬКИ ЛЕГАЛЬНІ МЕТОДИ * СУПРОВІД ЗІ СТАРТУ І ДО ПЕРШОГО УСПІХУ * РЕЗУЛЬТАТ ГАРАНТОВАНИЙ *&nbsp;</span>
                        </div>
                    </div>
                </section>

                {/* Feedback Section */}
                <section id="feedback" className="feedback">
                    <h2>Відгуки</h2>
                    <div className="feedback-cards">
                        <ProfileButton1></ProfileButton1>
                        <ProfileButton2></ProfileButton2>
                        <ProfileButton3></ProfileButton3>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contacts-container">
                    <p>Зацікавило? Швидше тисни і підпишись на мій канал, щоб зв'язатися зі мною!</p>
                    <div className="button-block">
                        <Button></Button>
                    </div>

                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; 2024 Marcus Project</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
