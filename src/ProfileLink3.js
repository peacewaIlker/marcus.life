import React, { useState } from 'react';
import './App.css';

const ProfileButton3 = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            // Отправляем запрос на сервер для получения ссылки
            const response = await fetch('https://marcuspro.life/api/get-profile-link-krit');
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
            <a onClick={handleButtonClick}><img src={process.env.PUBLIC_URL + '/images/egor.jpg'}
                                                    alt="Service 1"/></a>
            <h3>Егор</h3>
            <p>Спочатку думав, що черговий розводняк, але Маркус усе пояснив і розклав по поличках.</p>
            <p>Людина надійна, можу порекомендувати тим, хто РЕАЛЬНО хоче працювати в інтернеті.</p>
        </div>

    );
};

export default ProfileButton3;