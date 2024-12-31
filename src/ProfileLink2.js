import React, { useState } from 'react';
import './App.css';

const ProfileButton2 = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            // Отправляем запрос на сервер для получения ссылки
            const response = await fetch('https://marcuspro.life/api/get-profile-link-dara');
            const data = await response.json();
            // Перенаправляем пользователя на полученную ссылку
            window.location.href = data.link;
        } catch (error) {
            console.error('Ошибка при получении ссылки:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <a onClick={handleButtonClick}><img src={process.env.PUBLIC_URL + '/images/posh.jpg'}
                                                 alt="Service 1"/></a>
            <h3>Даріна</h3>
            <p>Уже дуже давно працюю з цією людиною і хочу сказати величезне спасибі за такий цікавий і
                прибутковий спосіб заробітку!!!</p>
        </div>

    );
};

export default ProfileButton2;