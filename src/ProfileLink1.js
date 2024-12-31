import React, { useState } from 'react';
import './App.css';

const ProfileButton1 = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            // Отправляем запрос на сервер для получения ссылки
            const response = await fetch('https://marcuspro.life/api/get-profile-link-alex');
            const data = await response.json();
            // Перенаправляем пользователя на полученную ссылку
            window.location.href = data.link;
        } catch (error) {
            console.error('Ошибка при получении:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <a onClick={handleButtonClick}><img src={process.env.PUBLIC_URL + '/images/leha.jpg'}
                                                  alt="Service 1"/></a>
            <h3>Олексій</h3>
            <p>Дякую Маркусу за чіткі інструкції та постійну підтримку!<br/>Однозначно рекомендую!</p>

        </div>

    );
};

export default ProfileButton1;