import { useEffect, useState } from 'react'
import './App.css'

const categories = [
  {
    title: 'ШАУРМА',
    subtitle: 'НАШИ ФИРМЕННЫЕ ВКУСЫ',
    products: [
  {
  name: 'Классическая',
  description: 'Сочная курица, хрустящие овощи и фирменный соус в тонком лаваше. Классика, которая всегда попадает в точку',
  ingredients: 'Курица, свежие овощи, лаваш, фирменный соус',
  price: 350,
    weight: '500 г',
  image: '/images/shawarma1.png',
  badge: 'ХИТ ПРОДАЖ',
},
      {
        name: 'Сырная',
        ingredients: 'Курица, много сыра, овощи и сырный соус',
        description: 'Нежная курица, тянущийся сыр и сочные овощи создают насыщенный сливочный вкус. Настоящее удовольствие для любителей сыра',
        price: 420,
        weight: '500 г',
        image: '/images/shawarma2.png',
        badge: 'ПОПУЛЯРНОЕ',
      },
      {
        name: 'Острая',
        ingredients: 'Мясо, овощи, пикантный острый соус',
        description: 'Сочная курица, пикантный соус и яркие специи. С каждым кусочком становится всё интереснее',
        price: 390,
        weight: '500 г',
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
        ingredients: 'Золотистая картошка с солью',
        description: 'Золотистая корочка снаружи и мягкая картошка внутри. Идеальный хрустящий перекус',
        price: 150,
        weight: '250 г',
        image: '/images/fries1.jpg',
      },
      {
        name: 'Фри с соусом',
        ingredients: 'Хрустящий картофель с фирменным соусом',
        description: 'Румяный картофель фри и насыщенный соус — простое сочетание, которое хочется повторить',
        price: 190,
        weight: '300 г',
        image: '/images/fries2.jpg',
      },
    ],
  },
  {
    title: 'НАПИТКИ',
    subtitle: 'ОСВЕЖАЮЩЕЕ ДОПОЛНЕНИЕ',
    products: [
      {
        name: 'Кола',
        ingredients: 'Холодный газированный напиток',
        description: 'Знакомый насыщенный вкус и освежающие пузырьки. Отлично дополняет горячую шаурму.',
        price: 120,
        weight: '350 мл',
      image: '/images/cola.jpg',
      },
      {
        name: 'Фанта',
        ingredients: 'Яркий цитрусовый вкус',
        description: 'Яркий цитрусовый вкус, лёгкая кислинка и настоящее настроение лета.',
        price: 120,
          weight: '350 мл',
        image: '/images/fanta.jpg',
      },
      {
        name: 'Вода',
        ingredients: 'Чистая питьевая вода',
        description: 'Чистая и освежающая вода — простой способ утолить жажду.',
        price: 80,
          weight: '500 мл',
        image: '/images/water.jpg',
      },
    ],
  },
]

  function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      )

      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const changeQuantity = (productName, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const [loading, setLoading] = useState(true)
  const [showTopButton, setShowTopButton] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

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
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
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
          <button
  className="header-cart"
  onClick={() => setShowCart(true)}
>
  КОРЗИНА <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
</button>
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
                  <article
  className="product-card"
  key={product.name}
  onClick={() => setSelectedProduct(product)}
>
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

  <button
    className="quick-add-btn"
    onClick={(event) => {
      event.stopPropagation()
      addToCart(product)
    }}
    aria-label={`Добавить ${product.name} в корзину`}
  >
    +
  </button>
</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      {showCart && (
  <div className="cart-modal">
    <div className="cart-content">
      <button
        className="cart-close"
        onClick={() => setShowCart(false)}
      >
        ×
      </button>

      <h2>ТВОЯ КОРЗИНА</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Корзина пока пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₽ за шт.</p>

                  <div className="cart-quantity">
                    <button onClick={() => changeQuantity(item.name, -1)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => changeQuantity(item.name, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <strong>{item.price * item.quantity} ₽</strong>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>ИТОГО:</span>
            <strong>{cartTotal} ₽</strong>
          </div>
        </>
      )}
    </div>
  </div>
)}
      {selectedProduct && (
  <div className="product-modal">
    <button
      className="modal-close"
      onClick={() => setSelectedProduct(null)}
    >
      ×
    </button>

    <div className="modal-content">
      <div className="modal-image">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
      </div>

      <div className="modal-info">
        <span className="eyebrow">SHAURMA HOUSE</span>

        <h2>{selectedProduct.name}</h2>

        <p>{selectedProduct.description}</p>
       <div className="modal-ingredients">
  <span>СОСТАВ</span>
  <p>{selectedProduct.ingredients}</p>
</div>

<div className="modal-weight">
  <span>ВЕС / ОБЪЁМ</span>
  <p>{selectedProduct.weight}</p>
</div>

<strong>{selectedProduct.price} ₽</strong>
<button
  className="add-to-cart-btn"
  onClick={() => addToCart(selectedProduct)}
>
  ДОБАВИТЬ В КОРЗИНУ
</button>
      </div>
    </div>
  </div>
)}
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
