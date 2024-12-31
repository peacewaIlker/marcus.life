import React, { useState } from 'react';
import './App.css';

const Button = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            // Отправляем запрос на сервер для получения ссылки
            const response = await fetch('https://marcuspro.life/api/get-link-2mtdi');
            const data = await response.json();
            // Перенаправляем пользователя на полученную ссылку
            window.location.href = data.link;
        } catch (error) {
            console.error('Ошибка получения ссылки', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wrap">
            <button
                onClick={handleButtonClick} disabled={loading}
                className="button"
            >
                {loading ? 'Завантаження...' : 'ХОЧУ ЗАРОБЛЯТИ!'}
            </button>
        </div>

    );
};

export default Button;