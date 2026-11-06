import { useEffect, useState } from 'react'
import './App.css'

const categories = [
  {
    title: 'ШАУРМА',
    subtitle: 'НАШИ ФИРМЕННЫЕ ВКУСЫ',
    products: [
      {
  name: 'Классическая',
  description: 'Сочная курица, свежие овощи, фирменный соус',
  price: 350,
  image: '/images/shawarma1.png',
  badge: 'ХИТ ПРОДАЖ',
},
      {
        name: 'Сырная',
        description: 'Курица, много сыра, овощи и сырный соус',
        price: 420,
        image: '/images/shawarma2.png',
        badge: 'ПОПУЛЯРНОЕ',
      },
      {
        name: 'Острая',
        description: 'Мясо, овощи, пикантный острый соус',
        price: 390,
        image: '/images/shawarma3.png',
      },
    ],
  },
  {
    title: 'КАРТОФЕЛЬ ФРИ',
    subtitle: 'ХРУСТЯЩИЙ И ЗОЛОТИСТЫЙ',
    products: [
      {
        name: 'Картофель фри',
        description: 'Золотистая картошка с солью',
        price: 150,
        image: '/images/fries.jpg',
      },
      {
        name: 'Фри с соусом',
        description: 'Хрустящий картофель с фирменным соусом',
        price: 190,
        image: '/images/fries.jpg',
      },
    ],
  },
  {
    title: 'НАПИТКИ',
    subtitle: 'ОСВЕЖАЮЩЕЕ ДОПОЛНЕНИЕ',
    products: [
      {
        name: 'Кола',
        description: 'Холодный газированный напиток',
        price: 120,
        image: '/images/drinks.jpg',
      },
      {
        name: 'Фанта',
        description: 'Яркий цитрусовый вкус',
        price: 120,
        image: '/images/drinks.jpg',
      },
      {
        name: 'Вода',
        description: 'Чистая питьевая вода',
        price: 80,
        image: '/images/drinks.jpg',
      },
    ],
  },
]

function App() {
  const [loading, setLoading] = useState(true)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="website">
      {loading && (
  <div className="loading-screen">
    <div className="loading-logo">
      SHAURMA<span>HOUSE</span>
    </div>
    <div className="loading-line"></div>
    <p>ГОТОВИМ ЧТО-ТО ВКУСНОЕ...</p>
  </div>
)}
      <header className="header">
        <a href="#" className="logo">
          SHAURMA<span>HOUSE</span>
        </a>

        <nav className="navigation">
          <a href="#contacts">КОНТАКТЫ</a>
          <a href="#shawarma">ШАУРМА</a>
          <a href="#fries">ФРИ</a>
          <a href="#drinks">НАПИТКИ</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">НАСТОЯЩИЙ ВКУС УЛИЦ</span>

            <h1>
              ШАУРМА,
              <br />
              КОТОРАЯ <span>ЗАХОДИТ</span>
            </h1>

            <p>
              Сочное мясо, свежие овощи, фирменный соус
              и хрустящий лаваш. Всё, как ты любишь.
            </p>

            <a href="#shawarma" className="main-button">
              СМОТРЕТЬ МЕНЮ ↓
            </a>

            <div className="hero-info">
              <div>
                <strong>100%</strong>
                <span>Свежие продукты</span>
              </div>
              <div>
                <strong>15 МИН</strong>
                <span>Среднее приготовление</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/images/shawarma1.png"
              alt="Аппетитная шаурма"
            />
            <div className="image-label">СДЕЛАНО С ЛЮБОВЬЮ ❤️</div>
          </div>
        </section>

        <section className="full-menu" id="shawarma">
          <div className="menu-heading">
            <span className="eyebrow">SHAURMA HOUSE</span>
            <h2>НАШЕ МЕНЮ</h2>
            <p>Выбирай свой любимый вкус.</p>
          </div>

          {categories.map((category, index) => (
            <div
              className="category"
              id={['shawarma', 'fries', 'drinks'][index]}
              key={category.title}
            >
              <div className="category-heading">
                <div>
                  <span className="eyebrow">{category.subtitle}</span>
                  <h3>{category.title}</h3>
                </div>
                <span className="category-number">
                  0{index + 1}
                </span>
              </div>

              <div className="product-grid">
                {category.products.map((product) => (
                  <article className="product-card" key={product.name}>
                    <div className="product-image">
  <img src={product.image} alt={product.name} />
  {product.badge && (
    <span className="product-badge">{product.badge}</span>
  )}
</div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <div className="product-bottom">
                        <strong>{product.price} ₽</strong>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
<section className="reviews">
  <span className="eyebrow">МНЕНИЕ ГОСТЕЙ</span>
  <h2>НАШИ ОТЗЫВЫ</h2>
  <p className="reviews-subtitle">
    Нам важно, чтобы каждый кусочек приносил удовольствие.
  </p>

  <div className="reviews-grid">
    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h3>Александр</h3>
      <p>Очень сочная шаурма! Много мяса, свежие овощи и отличный соус.</p>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h3>Дмитрий</h3>
      <p>Большие порции, вкусная картошка и приятные цены. Обязательно вернусь!</p>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h3>Максим</h3>
      <p>Острая шаурма просто огонь! Всё свежее и очень вкусное.</p>
    </article>
  </div>
</section>
     <section className="contacts" id="contacts">
  <span className="eyebrow">SHAURMA HOUSE</span>
  <h2>НАШИ КОНТАКТЫ</h2>
  <p>Ждём тебя за самой вкусной шаурмой!</p>
<div className="working-hours">

  <span>МЫ ОТКРЫТЫ КАЖДЫЙ ДЕНЬ</span>
  <h3>10:00 — 23:00</h3>
  <p>Понедельник — Воскресенье</p>
</div>
  <div className="contact-items">
    <div className="contact-item">
      <span>НАШ АДРЕС</span>
      <h3>Дом Пушки, улица Калатушкина</h3>
    </div>

    <div className="contact-item">
  <span>НАШ ТЕЛЕФОН</span>
  <h3>+7 14886742</h3>
</div>
  </div>
</section>

<footer>
  SHAURMA HOUSE © 2026 — ВКУС, КОТОРЫЙ ОБЪЕДИНЯЕТ
</footer>
{showTopButton && (
  <button
    className="back-to-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Вернуться наверх"
  >
    ↑
  </button>
)}
    </div>
  )
}

export default App
